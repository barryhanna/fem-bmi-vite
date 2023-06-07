import React from 'react';
import styles from './BMICalculator.module.css';

const BMICalculator = () => {
    // TODO: Add function to convert from metric → imperial
    const [metric, setMetric] = React.useState(true);
    const [height, setHeight] = React.useState(160);
    const [weight, setWeight] = React.useState(80);
    const IDEAL_WEIGHT_LOWER_BOUNDARY = 63.3

    const getBMI = () => {
        const heightInMetres = height / 100;
        return Math.round(weight / (heightInMetres * heightInMetres));
    }

    const getBMIInterpretation = () => {
        const bmi = getBMI();

        if (bmi < 18.5) { return `underweight`; }
        else if (bmi >= 18.5 && bmi <= 24.9) { return `a healthy weight`; }
        else if (bmi > 24.9 && bmi <= 29.9) { return `overweight` }
        else if (bmi > 29.9) { return `obese` }
        else { return `no data available` }
    }

    const getIdealWeightRange = (height) => {
        // if(height)
        // TODO:
        // return obj with upper and lower boundary for given
        // height
    }


    const weightMetricToImperial = (kg: number) => {
        // 1kg = 2.204623 lbs
        // 1 stone = 14lbs
        const totalPounds = kg * 2.204623;
        const stone = Math.floor(totalPounds / 14);
        const lbs = Math.round(totalPounds % stone);
        console.log({ stone, lbs })
        return { stone, lbs };
    }

    const heightMetricToImperial = (cm: number) => {
        // 1cm = 0.3937008in
        // 1ft = 12in
        const totalInches = cm * 0.3937008;
        const feet = Math.floor(totalInches / 12);
        const inches = Math.round(totalInches % feet);
        console.log({ feet, inches })
        return { feet, inches }
    }

    const handleUpdate = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "height-cm":
                setHeight(value)
                break;
            case "weight-kg":
                setWeight(value);
                break;
            case "height-ft":
                // calculate metric
                console.log(`Changed ${name}`);
                break;
            case "height-in":
                // calculate metric
                console.log(`Changed ${name}`);
                break;
            case "weight-st":
                // calculate metric
                console.log(`Changed ${name}`);
                break;
            case "weight-lbs":
                // calculate metric
                console.log(`Changed ${name}`);
                break;
            default:

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
                <div>Height</div>
                <fieldset data-unit="cm">
                    <input type="number" name="height-cm" id="height" inputMode="numeric" data-unit="cm" value={height} onChange={handleUpdate} />
                </fieldset>
                <div>Weight</div>
                <fieldset data-unit="kg">
                    <input type="number" name="weight-kg" id="weight" inputMode="numeric" data-unit="kg" value={weight} onChange={handleUpdate} />
                </fieldset></>
        )
        }
        {!metric && (
            <>
                <div>Height</div>
                <fieldset>
                    <div className='bmi-calculator--input-group-container'>
                        <fieldset data-unit="ft"><input type="number" name="height-ft" id="height-ft" inputMode="numeric" onChange={handleUpdate} data-unit="ft" value={heightMetricToImperial(height).feet} /></fieldset>
                        <fieldset data-unit="in"><input type="number" name="height-in" id="height-in" inputMode="numeric" onChange={handleUpdate} data-unit="in" value={heightMetricToImperial(height).inches} /></fieldset>
                    </div>
                </fieldset>
                <div>Weight</div>
                <fieldset>
                    <div className='bmi-calculator--input-group-container'>
                        <fieldset data-unit="st"><input type="number" name="weight-st" id="weight-st" inputMode="numeric" data-unit="st" onChange={handleUpdate} value={weightMetricToImperial(weight).stone} /></fieldset>
                        <fieldset data-unit="lbs"><input type="number" name="weight-lbs" id="weight-lbs" inputMode="numeric" data-unit="lbs" onChange={handleUpdate} value={weightMetricToImperial(weight).lbs} /></fieldset>
                    </div>
                </fieldset>
            </>
        )
        }

        <div className={styles.resultsPanel}>
            <p>Your BMI is...</p>
            <p className={styles.result}>{getBMI()}</p>
            <p>Your BMI suggests you're <span>{getBMIInterpretation()}.</span> Your ideal weight is between <span className={styles.bmiRange}>63.3kgs - 85.2kgs</span></p>
        </div>
    </form>
}

export default BMICalculator;
