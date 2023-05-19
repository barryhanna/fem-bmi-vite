import React from 'react';

const BMICalculator = () => {
    // TODO: Add state and control inputs
    const [metric, setMetric] = React.useState(true);
    // Conditionally render inputs for selected measurement system
    return <form>
        <h2>Enter your details below</h2>
        <fieldset>
            <label htmlFor="metric">Metric</label>
            <input name="measurement" type="radio" id="metric" value="metric" checked />
            <label htmlFor="imperial">Imperial</label>
            <input name="measurement" type="radio" id="imperial" value="imperial"/>
        </fieldset>
       {metric && (
        <>
            <fieldset>
                <p>Height</p>
                <input type="number" name="height-cm" id="height" inputMode="numeric"/>
            </fieldset>
            <fieldset>
                <p>Weight</p>
                <input type="number" name="weight-kg" id="height" inputMode="numeric"/>
            </fieldset></>

            )
        }
       {!metric && (
        <>
            <fieldset>
                <p>Height</p>
                <input type="number" name="height-ft" id="height" inputMode="numeric"/>
                <input type="number" name="height-in" id="height" inputMode="numeric"/>
            </fieldset>
            <fieldset>
                <p>Weight</p>
                <input type="number" name="weight-st" id="height" inputMode="numeric"/>
                <input type="number" name="weight-lbs" id="height" inputMode="numeric"/>
            </fieldset>
            </>
            )
        }
        
        <div className="results__panel">
            <p>Your BMI is...</p>
            <p className="results__result">23.4</p>
            <p>Your BMI suggests you're <span>a healthy weight.</span> our ideal weight is between <span>63.3kgs - 85.2kgs</span></p>
        </div>
    </form>
}

export default BMICalculator;