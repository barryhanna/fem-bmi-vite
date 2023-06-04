import React from 'react';
import styles from './BMICalculator.module.css';

const BMICalculator = () => {
    // TODO: Add state and control inputs
    const [metric, setMetric] = React.useState(true);
    const [height, setHeight] = React.useState(160);
    const [weight, setWeight] = React.useState(80);

    const handleUpdate = (e) => {
        const { name, value } = e.target;
        if (name === "height-cm") {
            setHeight(value)
        } else if (name === "weight-kg") {
            setWeight(value);
        }
    }

    // Conditionally render inputs for selected measurement system
    return <form className={styles.bmiCalculator}>
        <h2>Enter your details below</h2>
        <fieldset className={styles.measurementSelectionContainer}>
            <input name="unit" type="radio" id="metric" value="metric" checked />
            <label htmlFor="metric">Metric</label>
            <input name="unit" type="radio" id="imperial" value="imperial" />
            <label htmlFor="imperial">Imperial</label>
        </fieldset>
        {metric && (
            <>
                <fieldset data-unit="cm">
                    <div>Height</div>
                    <input type="number" name="height-cm" id="height" inputMode="numeric" data-unit="cm" value={height} onChange={handleUpdate} />
                </fieldset>
                <fieldset data-unit="kg">
                    <div>Weight</div>
                    <input type="number" name="weight-kg" id="height" inputMode="numeric" data-unit="kg" value={weight} onChange={handleUpdate} />
                </fieldset></>

        )
        }
        {!metric && (
            <>
                <fieldset>
                    <div>Height</div>
                    <input type="number" name="height-ft" id="height" inputMode="numeric" onChange={handleUpdate} />
                    <input type="number" name="height-in" id="height" inputMode="numeric" onChange={handleUpdate} />
                </fieldset>
                <fieldset>
                    <div>Weight</div>
                    <input type="number" name="weight-st" id="height" inputMode="numeric" />
                    <input type="number" name="weight-lbs" id="height" inputMode="numeric" />
                </fieldset>
            </>
        )
        }

        <div className={styles.resultsPanel}>
            <p>Your BMI is...</p>
            <p className="results__result">23.4</p>
            <p>Your BMI suggests you're <span>a healthy weight.</span> our ideal weight is between <span>63.3kgs - 85.2kgs</span></p>
        </div>
    </form>
}

export default BMICalculator;
