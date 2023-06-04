import React from 'react';
import styles from './BMICalculator.module.css';

const BMICalculator = () => {
    // TODO: Add function to convert from metric → imperial
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

    const handleChangeUnit = (e) => {
        const { value: unit } = e.target;
        if (unit === "metric") {
            setMetric(true);
        } else {
            setMetric(false);
        }
    }

    // Conditionally render inputs for selected measurement system
    return <form className={styles.bmiCalculator}>
        <h2>Enter your details below</h2>
        <fieldset className={styles.measurementSelectionContainer}>
            <input name="unit" type="radio" id="metric" value="metric" onClick={handleChangeUnit} checked={metric} />
            <label htmlFor="metric">Metric</label>
            <input name="unit" type="radio" id="imperial" value="imperial" onClick={handleChangeUnit} checked={!metric} />
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
                    <input type="number" name="weight-kg" id="weight" inputMode="numeric" data-unit="kg" value={weight} onChange={handleUpdate} />
                </fieldset></>

        )
        }
        {!metric && (
            <>
                <fieldset>
                    <div>Height</div>
                    <input type="number" name="height-ft" id="height-ft" inputMode="numeric" onChange={handleUpdate} />
                    <input type="number" name="height-in" id="height-in" inputMode="numeric" onChange={handleUpdate} />
                </fieldset>
                <fieldset>
                    <div>Weight</div>
                    <input type="number" name="weight-st" id="weight-st" inputMode="numeric" />
                    <input type="number" name="weight-lbs" id="weight-lbs" inputMode="numeric" />
                </fieldset>
            </>
        )
        }

        <div className={styles.resultsPanel}>
            <p>Your BMI is...</p>
            <p className={styles.result}>23.4</p>
            <p>Your BMI suggests you're <span>a healthy weight.</span> our ideal weight is between <span className={styles.bmiRange}>63.3kgs - 85.2kgs</span></p>
        </div>
    </form>
}

export default BMICalculator;
