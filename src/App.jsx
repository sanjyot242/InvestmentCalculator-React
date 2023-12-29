import Header from './components/Header';
import UserInput from './components/UserInput';
import { useState } from 'react';
import Result from './components/Result';
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 900,
    expectedReturn: 5.5,
    duration: 10,
  });

  function onChangeValues(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeVal={onChangeValues} />
      {!inputIsValid && <p className='center'>Please Enter a valid Duration</p>}
      {inputIsValid && <Result userInput={userInput} />}
    </>
  );
}

export default App;
