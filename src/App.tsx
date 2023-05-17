import './App.css'
import BMILimitationCard from './components/BMILimitationCard/BMILimitationCard';
import Header from './components/Header';
import ImproveBMICard from './components/ImproveBMICard/ImproveBMICard';

function App() {
  

  return (
    <>
      <Header />
      <div className="improve-bmi__card-list">
        <ImproveBMICard />
        <ImproveBMICard />
        <ImproveBMICard />
        <ImproveBMICard />
        <ImproveBMICard />
      </div>
      <section className="limitations-of-bmi">
        <BMILimitationCard />
        <BMILimitationCard />
        <BMILimitationCard />
        <BMILimitationCard />
        <BMILimitationCard />
      </section>
    </>
  )
}

export default App
