import BMICalculator from '../BMICalculator'

const Header = () => {
    return <header className='header flow'>
        <img className="logo" src="/assets/images/logo.svg" alt="" />
        <h1>Body&nbsp;Mass Index Calculator</h1>
        <p className='intro-text'>Better understand your weight in relation to your height using our
            body mass index (BMI) calculator. While BMI is not the sole determinant
            of a healthy weight, it offers a valuable starting point to evaluate
            your overall health and well-being.</p>
        <BMICalculator />
    </header>
}

export default Header;
