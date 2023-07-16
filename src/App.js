import './App.css';
import './Style.css';
import React from 'react';
import MultiStep from 'react-multistep';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';

const steps = [
  { name: "Personal", component: <StepOne /> },
  { name: "Info", component: <StepTwo /> }
];
function App() {
  return (
    <div className="App">
     
      <header className="App-header">
      <h2>React Multi Stepper</h2>
        <MultiStep steps={steps} />
      </header>
    </div>
  );
}
export default App;

