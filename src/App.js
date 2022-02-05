import { useState } from 'react';
import './App.css';
import OperatorBtn from './components/operatorBtn';
import operationApiService from './services/operationApiService';

function App() {
  // calling react Hooks to maintain and update the state of inputs
  const [inputs, setInputs] = useState({
    firstNum: 0,
    secondNum: 0,
  });
  const [operator, setOperator] = useState('');
  //functions to update the value of input fields
  const updateInputValue = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const [result, setResult] = useState(0);

  // callback to handle props being passed from button
  const handleOperatorCallback = (newOperator) => {
    setOperator(newOperator);
    operationApiService
      .calculateExpression({ inputs, operator })
      .then((response) => {
        this.setResult(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="header">Useless Calculator</header>
      <main className="main">
        <div className="calculator">
          <form className="input-form">
            <label className="form-item">
              Enter First number{' '}
              <input
                name="firstNum"
                type="number"
                value={inputs.firstNum}
                onChange={updateInputValue}
              />
            </label>
            <label className="form-item">
              Enter Second number{' '}
              <input
                name="secondNum"
                type="number"
                value={inputs.secondNum}
                onChange={updateInputValue}
              />
            </label>
          </form>
          <div className="operator-container">
            <OperatorBtn
              btnAttributes={{ operatorName: 'Add', operatorSymbol: '+' }}
              handleOperatorCallback={handleOperatorCallback}
            />
            <OperatorBtn
              btnAttributes={{ operatorName: 'Subtract', operatorSymbol: '-' }}
              handleOperatorCallback={handleOperatorCallback}
            />
            <OperatorBtn
              btnAttributes={{ operatorName: 'Multiply', operatorSymbol: '*' }}
              handleOperatorCallback={handleOperatorCallback}
            />
            <OperatorBtn
              btnAttributes={{ operatorName: 'Divide', operatorSymbol: '/' }}
              handleOperatorCallback={handleOperatorCallback}
            />
          </div>
          <div className="output-container">
            <h5>
              The result of your expression: ({inputs.firstNum} {operator}{' '}
              {inputs.secondNum}) is:
            </h5>
            <h3>{result}</h3>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
