import BMILimitationCard from './components/BMILimitationCard/BMILimitationCard';
import Header from './components/Header';
import ImproveBMICard from './components/ImproveBMICard/ImproveBMICard';

function App() {
  

  return (
    <>
      <Header />
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
      <section className="limitations-of-bmi">
        <BMILimitationCard />
        
      </section>
    </>
  )
}

export default App
