import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Tooltip = styled.div`
    display:inline-block;
    position:relative;
    border:1px solid #444;
    text-align:left;
    background-color: #fff;
    
    padding: 3px;
    
    .right {
        min-width:200px; 
        top:50%;
        left:100%;
        margin-left:20px;
        transform:translate(0, -50%);
        padding:10px 20px;
        color:#444444;
        background-color:#FFFFFF;
        font-weight:normal;
        font-size:13px;
        border-radius:8px;
        position:absolute;
        z-index:99999999;
        box-sizing:border-box;
        border:1px solid #444;box-shadow:0 1px 8px rgba(0,0,0,0.5);
        visibility:hidden; opacity:0; transition:opacity 0.8s;
        
        i {
            position:absolute;
            top:50%;
            right:100%;
            margin-top:-12px;
            width:12px;
            height:24px;
            overflow:hidden;
            
            &:after {
                content:'';
                position:absolute;
                width:12px;
                height:12px;
                left:0;
                top:50%;
                transform:translate(50%,-50%) rotate(-45deg);
                background-color:#FFFFFF;
                border:1px solid #444;box-shadow:0 1px 8px rgba(0,0,0,0.5);
            }
        }
    }
    
    &:hover .right {
        visibility:visible; opacity:1;
    }
`;



const GraphContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`;

const GraphColor = {
    'BAR': '#C10E9F',
    'DEDUCTIBLE': '#F6E6D9',
    'INITIAL': '#D9E8F0',
    'GAP': '#F8D9D9',
    'CATASTROPHIC': '#DFEDE3',
    'AXIS': '#444444'
};

const GraphLegend = ({viewPort, isVertical}) => {
    let fontSize = isVertical ? viewPort.vertical.config.fontSize : viewPort.config.fontSize;

    const offsets = {
        x1: 280,
        x2: 430
    }

    const verticalAlign = isVertical || false;
    let firstRow = 20, secondRow = 20;
    if(verticalAlign) {
        firstRow = 0;
        secondRow = 25;
    }

    return (
        <g className="legend">
            <rect style={{fill: GraphColor.DEDUCTIBLE}} x={viewPort.x} y={firstRow} width={20} height={20}></rect>
            <text style={{fontSize}} x={viewPort.x + 25} y={firstRow+15}>Deductible</text>

            <rect style={{fill: GraphColor.INITIAL}} x={viewPort.x+125} y={firstRow} width={20} height={20}></rect>
            <text style={{fontSize}} x={viewPort.x + 150} y={firstRow+15}>Initial Coverage</text>

            <rect style={{fill: GraphColor.GAP}}  x={viewPort.x+offsets.x1}
                  y={secondRow}
                  width={20} height={20} />

            <text style={{fontSize}} x={viewPort.x + 305} y={secondRow+15}>Coverage Gap</text>

            <rect style={{fill: GraphColor.CATASTROPHIC}} x={viewPort.x+offsets.x2} y={secondRow} width={20} height={20}></rect>
            <text style={{fontSize}} x={viewPort.x + 455} y={secondRow+15}>Catastrophic Coverage</text>
        </g>
    )
};

const GraphAxis = ({viewPort, xAxisLabels, yAxisLabels, isVertical, graphConfig, data}) => {
    let fontSize = isVertical ? viewPort.vertical.config.fontSize : viewPort.config.fontSize;

    const SECTION_WIDTH = viewPort.width / xAxisLabels.length;
    const BAR_WIDTH = SECTION_WIDTH / 2;
    const BAR_PADDING = (SECTION_WIDTH - BAR_WIDTH) / 2;

    return (
        <g className="labels x-labels">
            {/* Y Axis Start */}
            <line
                style={{stroke: GraphColor.AXIS, strokeWidth: graphConfig.axisWidth}}
                x1={viewPort.x} y1={viewPort.graphHeight-31}
                x2={viewPort.graphWidth} y2={viewPort.graphHeight-31}
            />
            {/* Y Axis End */}

            {/* Y Axis Labels Start */}
            {yAxisLabels.map((label, idx) => {
                let xAxis = (idx * SECTION_WIDTH) + viewPort.x + BAR_PADDING;
                return (
                    <>
                    <line
                        style={{stroke: GraphColor.AXIS, strokeWidth: graphConfig.axisWidth}}
                        x1={50} y1={label.y}
                        x2={60} y2={label.y}
                    />
                    <text style={{fontSize, color: GraphColor.AXIS}} fontWeight="bold" x={5} y={label.y+5}>${label.value}</text>
                    </>
                )
            })}

            {/* Y Axis Labels End */}

            {/* X Axis*/}
            <line
                style={{stroke: GraphColor.AXIS, strokeWidth: graphConfig.axisWidth}}
                x1={viewPort.x} y1={viewPort.y}
                x2={viewPort.x} y2={viewPort.graphHeight-30}
            />

            {xAxisLabels.map((month, idx) => {
                let xAxis = (idx * SECTION_WIDTH) + viewPort.x + BAR_PADDING;
                return <text style={{fontSize, color: GraphColor.AXIS}} fontWeight="bold" x={xAxis+10} y={viewPort.graphHeight - fontSize + 10}>{month}</text>
            })}
        </g>
    )
};

export const BreakdownGraph = ({monthlyCosts, isVertical, monthOffset}) => {
    const graphOrientation = isVertical || false;
    const graphWidth = graphOrientation ? 200 : 1200;
    const graphHeight = graphOrientation ? 300 : 350;

    const [tooltip, setTooltip] = useState({
        active: false,
        x: 0,
        y: 0,
        costDetails: {
            planPhase: '',
            drugList: []
        }
    });

    let GRAPH_MAX_VALUE = Math.round(Math.max(...monthlyCosts.map((a, idx) => a.cost))/100)*100;
    let GRAPH_MIN_VALUE = Math.round(Math.min(...monthlyCosts.map((a, idx) => a.cost))/100)*100;

    useEffect(() => {

    }, []);


    const BOTTOM_PADDING = 32;
    const fontSize = 16;

    const viewPort = {
        x: 60,
        y: 50,
        width: graphWidth - 60,
        height: graphHeight - 50 - BOTTOM_PADDING,
        config: {
            fontSize: 16
        },
        graphWidth: graphWidth,
        graphHeight: graphHeight,
        sectionWidth: (graphWidth - 60) / monthlyCosts.length
    };

    const getSectionWidth = (viewPort.width / monthlyCosts.length);

    const convertDataToGraph = (value) => {
        let rectHeight = viewPort.height * (Math.ceil(value)/ (GRAPH_MAX_VALUE+100));
        let barYStart = (viewPort.height-rectHeight) + viewPort.y;

        return {
            y: barYStart + 1,
            height: rectHeight,
            value: value
        }
    };

    const getCostRange = (monthlyCosts) => {
        let max = Math.max(...monthlyCosts.map((a, idx) => a.cost));
        let min = Math.min(...monthlyCosts.map((a, idx) => a.cost));

        if(max === min) {
            min = 0;
        }

        let graphMax = Math.round(max/100)*100 + 100;
        let graphMin = Math.round(min/100)*100 + 100;

        let p = [];
        let midPoint = (graphMax - graphMin) / 2;
        let highMid = (graphMax - midPoint);
        let lowMid = (midPoint - graphMin);

        p[0] = convertDataToGraph(graphMax * .90);
        p[1] = convertDataToGraph(graphMax * .70);
        p[2] = convertDataToGraph(graphMax * .50);
        p[3] = convertDataToGraph(graphMax * .30);
        p[4] = convertDataToGraph(graphMin);


        return {
            max: graphMax + 100,
            min: graphMin + 100,
            yAxis: p
        }
    };

    const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const graphConfig = {
        axisWidth: 1,
        textPadding: 42
    };

    const getAxisOffset = (index, offset = 0) => (((index+offset) * viewPort.sectionWidth) + viewPort.x + 2);

    function enter(e, details) {
        let drugList = details.map((drug, idx) => {
            return `${drug.detailLabel}: $${drug.memberCost}`
        });

        let costDetails = {
            planPhase: details[0].planPhase,
            drugList: drugList
        };

        let pageX = e.pageX;
        let pageY = e.pageY;
        setTooltip({...tooltip, x: pageX, y: pageY, active: true, costDetails});
    }

    function move(e) {
        setTooltip({...tooltip, x: e.pageX, y: e.pageY});
    }

    function exit(e) {
        setTooltip({...tooltip, active: false});
    }

    return (
        <GraphContainer>
            <svg width="100%" height="100%" viewBox={`0 0 ${graphWidth} ${graphHeight}`}>

                <GraphLegend viewPort={viewPort} isVertical={false}/>



                <g className="bar-graph-data">
                    {monthlyCosts.map((cost, idx) => {
                        let {y, height} = convertDataToGraph(cost.cost);
                        let x = getAxisOffset(idx);

                        let barGraph = {
                            x: x,
                            y: y,
                            w: getSectionWidth / 2,
                            h: height,
                            value: Math.ceil(cost.cost),
                            textPos: {
                                x: x + graphConfig.textPadding,
                                y: y - 10
                            }
                        };

                        let sectionColor = GraphColor[cost.costDetails[0].planPhase];

                        return (
                            <g onMouseOver={e => enter(e, cost.costDetails)} onMouseOut={e => exit(e)} onMouseMove={e => move(e)}>
                                <rect
                                    style={{fill: sectionColor}}
                                    x={barGraph.x - 1} y={viewPort.y}
                                    width={getSectionWidth}
                                    height={viewPort.height + 1} />

                                <text
                                    style={{fontSize, color: GraphColor.AXIS}}
                                    fontWeight="bold"
                                    textAnchor="middle"
                                    x={barGraph.textPos.x}
                                    y={barGraph.textPos.y}>${barGraph.value}</text>

                                <rect
                                    style={{fill: GraphColor.BAR}}
                                    x={barGraph.x+20} y={barGraph.y}
                                    width={barGraph.w} height={barGraph.h}
                                />
                            </g>
                        )
                    })}
                </g>
                <GraphAxis viewPort={viewPort} xAxisLabels={monthLabels} yAxisLabels={getCostRange(monthlyCosts).yAxis} graphConfig={graphConfig}/>
                <foreignObject x={tooltip.x-100} y={tooltip.y-100} style={{fontSize: 8, "width": '200px', "height":"400px", "position":"absolute","left":`${tooltip.x}px`,"top":`${tooltip.y}px`,"zIndex":100000, "display": tooltip.active ? "block" : "none"}}>
                    <Tooltip xmlns="http://www.w3.org/1999/xhtml">
                        <h1>{tooltip.costDetails.planPhase}</h1>
                        <p>You pay 25% of the full cost for brand name drugs, and 37% of the full cost for generics in the coverage gap.</p>
                        <h1>Cost Breakdown</h1>
                        {tooltip.costDetails.drugList.map((drug, idx) => {
                            return <p>{drug}</p>
                        })}
                    </Tooltip>
                </foreignObject>

            </svg>
        </GraphContainer>
    )
};


