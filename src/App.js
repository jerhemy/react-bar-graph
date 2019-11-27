import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BreakdownGraph} from "./BreakdownGraph";

function App() {
    const monthlyDrugCosts = {
        "monthlyCosts":[
            {
                "cost":1000,
                "costDetails":[
                    {
                        "memberCost":4.00,
                        "planPhase":"DEDUCTIBLE",
                        "fullCost":4.82,
                        "detailLabel":"escitalopram oxalate TAB 10MG"
                    },
                    {
                        "memberCost":7.39,
                        "planPhase":"DEDUCTIBLE",
                        "fullCost":7.39,
                        "detailLabel":"Advair Diskus AER 250/50"
                    },
                    {
                        "memberCost":387.20,
                        "planPhase":"DEDUCTIBLE",
                        "fullCost":387.20,
                        "detailLabel":"Lipitor TAB 10MG"
                    },
                    {
                        "memberCost":564.98,
                        "planPhase":"DEDUCTIBLE",
                        "fullCost":564.98,
                        "detailLabel":"Lunesta TAB 3MG"
                    }
                ]
            },
            {
                "cost":700,
                "costDetails":[
                    {
                        "memberCost":4.00,
                        "planPhase":"DEDUCTIBLE",
                        "fullCost":4.82,
                        "detailLabel":"escitalopram oxalate TAB 10MG"
                    },
                    {
                        "memberCost":7.39,
                        "planPhase":"DEDUCTIBLE",
                        "fullCost":7.39,
                        "detailLabel":"Advair Diskus AER 250/50"
                    },
                    {
                        "memberCost":387.20,
                        "planPhase":"DEDUCTIBLE",
                        "fullCost":387.20,
                        "detailLabel":"Lipitor TAB 10MG"
                    },
                    {
                        "memberCost":564.98,
                        "planPhase":"DEDUCTIBLE",
                        "fullCost":564.98,
                        "detailLabel":"Lunesta TAB 3MG"
                    }
                ]
            },
            {
                "cost":600,
                "costDetails":[
                    {
                        "memberCost":4.00,
                        "planPhase":"DEDUCTIBLE",
                        "fullCost":4.82,
                        "detailLabel":"escitalopram oxalate TAB 10MG"
                    },
                    {
                        "memberCost":7.39,
                        "planPhase":"DEDUCTIBLE",
                        "fullCost":7.39,
                        "detailLabel":"Advair Diskus AER 250/50"
                    },
                    {
                        "memberCost":387.20,
                        "planPhase":"DEDUCTIBLE",
                        "fullCost":387.20,
                        "detailLabel":"Lipitor TAB 10MG"
                    },
                    {
                        "memberCost":564.98,
                        "planPhase":"DEDUCTIBLE",
                        "fullCost":564.98,
                        "detailLabel":"Lunesta TAB 3MG"
                    }
                ]
            },
            {
                "cost":500,
                "costDetails":[
                    {
                        "memberCost":4.00,
                        "planPhase":"INITIAL",
                        "fullCost":4.82,
                        "detailLabel":"escitalopram oxalate TAB 10MG"
                    },
                    {
                        "memberCost":7.39,
                        "planPhase":"INITIAL",
                        "fullCost":7.39,
                        "detailLabel":"Advair Diskus AER 250/50"
                    },
                    {
                        "memberCost":387.20,
                        "planPhase":"INITIAL",
                        "fullCost":387.20,
                        "detailLabel":"Lipitor TAB 10MG"
                    },
                    {
                        "memberCost":564.98,
                        "planPhase":"INITIAL",
                        "fullCost":564.98,
                        "detailLabel":"Lunesta TAB 3MG"
                    }
                ]
            },
            {
                "cost":400,
                "costDetails":[
                    {
                        "memberCost":4.00,
                        "planPhase":"INITIAL",
                        "fullCost":4.82,
                        "detailLabel":"escitalopram oxalate TAB 10MG"
                    },
                    {
                        "memberCost":7.39,
                        "planPhase":"INITIAL",
                        "fullCost":7.39,
                        "detailLabel":"Advair Diskus AER 250/50"
                    },
                    {
                        "memberCost":387.20,
                        "planPhase":"INITIAL",
                        "fullCost":387.20,
                        "detailLabel":"Lipitor TAB 10MG"
                    },
                    {
                        "memberCost":564.98,
                        "planPhase":"INITIAL",
                        "fullCost":564.98,
                        "detailLabel":"Lunesta TAB 3MG"
                    }
                ]
            },
            {
                "cost":300,
                "costDetails":[
                    {
                        "memberCost":4.00,
                        "planPhase":"INITIAL",
                        "fullCost":4.82,
                        "detailLabel":"escitalopram oxalate TAB 10MG"
                    },
                    {
                        "memberCost":7.39,
                        "planPhase":"INITIAL",
                        "fullCost":7.39,
                        "detailLabel":"Advair Diskus AER 250/50"
                    },
                    {
                        "memberCost":387.20,
                        "planPhase":"INITIAL",
                        "fullCost":387.20,
                        "detailLabel":"Lipitor TAB 10MG"
                    },
                    {
                        "memberCost":564.98,
                        "planPhase":"INITIAL",
                        "fullCost":564.98,
                        "detailLabel":"Lunesta TAB 3MG"
                    }
                ]
            },
            {
                "cost":200,
                "costDetails":[
                    {
                        "memberCost":4.00,
                        "planPhase":"INITIAL",
                        "fullCost":4.82,
                        "detailLabel":"escitalopram oxalate TAB 10MG"
                    },
                    {
                        "memberCost":7.39,
                        "planPhase":"INITIAL",
                        "fullCost":7.39,
                        "detailLabel":"Advair Diskus AER 250/50"
                    },
                    {
                        "memberCost":387.20,
                        "planPhase":"INITIAL",
                        "fullCost":387.20,
                        "detailLabel":"Lipitor TAB 10MG"
                    },
                    {
                        "memberCost":564.98,
                        "planPhase":"INITIAL",
                        "fullCost":564.98,
                        "detailLabel":"Lunesta TAB 3MG"
                    }
                ]
            },
            {
                "cost":100,
                "costDetails":[
                    {
                        "memberCost":4.00,
                        "planPhase":"INITIAL",
                        "fullCost":4.82,
                        "detailLabel":"escitalopram oxalate TAB 10MG"
                    },
                    {
                        "memberCost":7.39,
                        "planPhase":"INITIAL",
                        "fullCost":7.39,
                        "detailLabel":"Advair Diskus AER 250/50"
                    },
                    {
                        "memberCost":387.20,
                        "planPhase":"INITIAL",
                        "fullCost":387.20,
                        "detailLabel":"Lipitor TAB 10MG"
                    },
                    {
                        "memberCost":564.98,
                        "planPhase":"INITIAL",
                        "fullCost":564.98,
                        "detailLabel":"Lunesta TAB 3MG"
                    }
                ]
            },
            {
                "cost":80,
                "costDetails":[
                    {
                        "memberCost":4.00,
                        "planPhase":"GAP",
                        "fullCost":4.82,
                        "detailLabel":"escitalopram oxalate TAB 10MG"
                    },
                    {
                        "memberCost":7.39,
                        "planPhase":"GAP",
                        "fullCost":7.39,
                        "detailLabel":"Advair Diskus AER 250/50"
                    },
                    {
                        "memberCost":387.20,
                        "planPhase":"GAP",
                        "fullCost":387.20,
                        "detailLabel":"Lipitor TAB 10MG"
                    },
                    {
                        "memberCost":564.98,
                        "planPhase":"GAP",
                        "fullCost":564.98,
                        "detailLabel":"Lunesta TAB 3MG"
                    }
                ]
            },
            {
                "cost":60,
                "costDetails":[
                    {
                        "memberCost":4.00,
                        "planPhase":"GAP",
                        "fullCost":4.82,
                        "detailLabel":"escitalopram oxalate TAB 10MG"
                    },
                    {
                        "memberCost":7.39,
                        "planPhase":"GAP",
                        "fullCost":7.39,
                        "detailLabel":"Advair Diskus AER 250/50"
                    },
                    {
                        "memberCost":387.20,
                        "planPhase":"GAP",
                        "fullCost":387.20,
                        "detailLabel":"Lipitor TAB 10MG"
                    },
                    {
                        "memberCost":564.98,
                        "planPhase":"GAP",
                        "fullCost":564.98,
                        "detailLabel":"Lunesta TAB 3MG"
                    }
                ]
            },
            {
                "cost":40,
                "costDetails":[
                    {
                        "memberCost":4.00,
                        "planPhase":"CATASTROPHIC",
                        "fullCost":4.82,
                        "detailLabel":"escitalopram oxalate TAB 10MG"
                    },
                    {
                        "memberCost":7.39,
                        "planPhase":"CATASTROPHIC",
                        "fullCost":7.39,
                        "detailLabel":"Advair Diskus AER 250/50"
                    },
                    {
                        "memberCost":387.20,
                        "planPhase":"CATASTROPHIC",
                        "fullCost":387.20,
                        "detailLabel":"Lipitor TAB 10MG"
                    },
                    {
                        "memberCost":564.98,
                        "planPhase":"CATASTROPHIC",
                        "fullCost":564.98,
                        "detailLabel":"Lunesta TAB 3MG"
                    }
                ]
            },
            {
                "cost":0,
                "costDetails":[
                    {
                        "memberCost":4.00,
                        "planPhase":"CATASTROPHIC",
                        "fullCost":4.82,
                        "detailLabel":"escitalopram oxalate TAB 10MG"
                    },
                    {
                        "memberCost":7.39,
                        "planPhase":"CATASTROPHIC",
                        "fullCost":7.39,
                        "detailLabel":"Advair Diskus AER 250/50"
                    },
                    {
                        "memberCost":387.20,
                        "planPhase":"CATASTROPHIC",
                        "fullCost":387.20,
                        "detailLabel":"Lipitor TAB 10MG"
                    },
                    {
                        "memberCost":564.98,
                        "planPhase":"CATASTROPHIC",
                        "fullCost":564.98,
                        "detailLabel":"Lunesta TAB 3MG"
                    }
                ]
            }
        ]
    };

    return (
        <div className="App">
          <BreakdownGraph monthlyCosts={monthlyDrugCosts.monthlyCosts}/>
        </div>
    );
}

export default App;
