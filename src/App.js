import { Container, Content, Painel } from './styles';
import { useState } from 'react';

import Input from './components/Input';
import Button from './components/Button';
import ButtonCommand from './components/ButtonCommand';
import ButtonLarge from './components/ButtonLarge';
import { LinkSTYLED } from './components/Link/styles';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  // CLEAR ( C )
  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  // DELETE
  const handleDelete = () => {
    if (currentNumber.length === 1) {
      setCurrentNumber('0');
    } else {
      setCurrentNumber(currentNumber.slice(0, -1));
    }
  };
    
  // ADICIONAR NÚMERO NO TELEVISOR
  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  // SOMA ( + )
  const handleSumNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  // SUBTRAÇÃO ( - )
  const handleMinusNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  // MULTIPLICAÇÃO ( * )
  const handleMultiplicationNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('*')
    }else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  // DIVISÃO ( / )
  const handleDivisionNumbers = () => {
    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
    }else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  // IGUAL ( = )
  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case '*':
            handleMultiplicationNumbers();
            break;
          case '/':
            handleDivisionNumbers();
            break;
          default: 
            break;
        }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Painel>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <ButtonCommand label="C" onClick={handleOnClear}/>

          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <ButtonCommand label="+" onClick={handleSumNumbers}/>

          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <ButtonCommand label="-" onClick={handleMinusNumbers}/>

          <Button label="." onClick={() => handleAddNumber('.')}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <ButtonCommand label="/" onClick={handleDivisionNumbers}/>
          <ButtonCommand label="x" onClick={handleMultiplicationNumbers}/>

          <ButtonLarge label="Delete" onClick={handleDelete}/>
          <ButtonLarge label="=" onClick={handleEquals}/>
        </Painel>
      </Content>
      <h3>Feito por <LinkSTYLED href='https://github.com/Chrb09'>Carlos</LinkSTYLED> e <LinkSTYLED href='https://github.com/Amanda093'>Amanda</LinkSTYLED></h3>
    </Container>
  );
}

export default App;