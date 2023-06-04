import BMILimitationCard from './components/BMILimitationCard/BMILimitationCard';
import Header from './components/Header';
import ImproveBMICard from './components/ImproveBMICard/ImproveBMICard';

function App() {


  return (
    <>
      <Header />
      <section className="improve-bmi">
        <img src="/assets/images/image-man-eating.webp" alt="A man smiling whilst eating sushi with chopsticks" />
        <div className="improve-bmi__card-list">
          <ImproveBMICard icon="eating">
            <h2>Healthy eating</h2>
            <p>Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.</p>
          </ImproveBMICard>
          <ImproveBMICard icon="exercise">
            <h2>Regular exercise</h2>
            <p>Exercise improves fitness, aids weight control, elevates mood, and reduces disease
              risk, fostering wellness and longevity.</p>
          </ImproveBMICard>
          <ImproveBMICard icon="sleep">
            <h2>Adequate sleep</h2>
            <p>Sleep enhances mental clarity, emotional stability, and physical wellness, promoting
              overall restoration and rejuvenation.</p>
          </ImproveBMICard>

        </div>
      </section>
      <section className="limitations-of-bmi">
        <BMILimitationCard icon="gender" title="Gender">
          <p>The development and body fat composition of girls and boys vary with age. Consequently,
            a child's age and gender are considered when evaluating their BMI.</p>
        </BMILimitationCard>
        <BMILimitationCard icon="age" title="Age">
          <p>In aging individuals, increased body fat and muscle loss may cause BMI to underestimate
            body fat content.</p>
        </BMILimitationCard>
        <BMILimitationCard icon="muscle" title="Muscle">
          <p>BMI may misclassify muscular individuals as overweight or obese, as it doesn't
            differentiate muscle from fat.</p>
        </BMILimitationCard>
        <BMILimitationCard icon="pregnancy" title="Pregnancy">
          <p>Expectant mothers experience weight gain due to their growing baby. Maintaining a
            healthy pre-pregnancy BMI is advisable to minimise health risks for both mother
            and child.</p>
        </BMILimitationCard>
        <BMILimitationCard icon="race" title="Race">
          <p>Certain health concerns may affect individuals of some Black and Asian origins at
            lower BMIs than others. To learn more, it is advised to discuss this with your
            GP or practice nurse.</p>
        </BMILimitationCard>

      </section>
    </>
  )
}

export default App
