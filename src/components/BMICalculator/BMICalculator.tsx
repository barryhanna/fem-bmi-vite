const BMICalculator = () => {
    // TODO: Add state and control inputs
    // Conditionally render inputs for selected measurement system
    return <form>
        <h2>Enter your details below</h2>
        <fieldset>
            <label htmlFor="metric">Metric</label>
            <input name="measurement" type="radio" id="metric" value="metric" checked />
            <label htmlFor="imperial">Imperial</label>
            <input name="measurement" type="radio" id="imperial" value="imperial"/>
        </fieldset>
        <fieldset>
            <p>Height</p>
            <input type="number" name="" id="height" inputMode="numeric"/>
        </fieldset>
        <fieldset>
            <p>Weight</p>
            <input type="number" name="" id="height" inputMode="numeric"/>
        </fieldset>
        
        <div className="results__panel">
            <p>Your BMI is...</p>
            <p className="results__result">23.4</p>
            <p>Your BMI suggests you're <span>a healthy weight.</span> our ideal weight is between <span>63.3kgs - 85.2kgs</span></p>
        </div>
    </form>
}

export default BMICalculator;