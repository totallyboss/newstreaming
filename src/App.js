import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './index.css';

const AllCongregations = [
  {
    id: 'wellingtoneast',
    name: 'Wellington East',
    password: '1024',
    telegram: '/telegram-wellington-east',
    live: '/live',
    midweek: '/midweek',
    weekend: '/weekend',
  },
  {
    id: 'wellingtoncity',
    name: 'Wellington City',
    password: '0002',
    telegram: '/telegram-wellington-city',
  },
  {
    id: 'titahibay',
    name: 'Titahi Bay',
    password: '0003',
    telegram: '/telegram-titahi-bay',
  },
];

const LoginForm = styled.div({
  width: '100%',
});

const Wrapper = styled.div({
  padding: '20px',
});

const FieldWrapper = styled.label({
  marginBottom: '20px',
  display: 'block',
});

const FieldLabel = styled.span({
  display: 'block',
  textTransform: 'uppercase',
  fontFamily: "'Noto Serif', serif",
  fontSize: '14px',
  marginBottom: '10px',
});

const TextInput = styled.input.attrs({type: 'text'})({
  border: 'none',
  borderBottom: 'solid 1px #C0C0C0',
  outline: 0,
  fontSize: '1rem',
  color: '#553894',
  paddingBottom: '10px',
  width: '100%',

  ':focus': {
    borderBottom: 'solid 1px #553894',
  }
});

const Button = styled.button({
  display: 'inline-block',
  cursor: 'pointer',
  border: 'none',
  background: '#7756BF',
  textAlign: 'center',
  color: '#FFF',
  padding: '15px',
  width: '100%',
  borderRadius: '4px',
  outline: 0,
  transition: '0.25s',

  ':hover': {
    background: '#553894',
  }
});

const NumberButton = styled.span({
  width: '40px',
  height: '30px',
  display: 'inline-block',
  margin: '1px',
  border: '1px solid #c0c0c0',
  borderRadius: '4px',
  textAlign: 'center',
  paddingTop: '10px',
  position: 'relative',
});

const Radio = styled.input.attrs({type: 'radio'})({
  width: 0,
  height: 0,
  opacity: 0,
  position: 'absolute',
});

const printNumbers = () => {
  let numbers = [];

  for (let i = 1; i < 10; i++) {
    numbers.push(
      <label key={i}>
        <NumberButton>{i}</NumberButton>
        <Radio type="radio" name="watchers" value={i}/>
      </label>
    );
  };

  return numbers;
};



const App = () => {
  const [congregationName, setCongregationName] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSignedOut, setIsSignedOut] = useState(true);


  useEffect(() => {
    const domainId = window.location.pathname.substring(1);
    const congregation = AllCongregations.filter(object => object.id === domainId);

    setCongregationName(congregation[0].name);
    setPassword(congregation[0].password);

    setIsLoading(false);

  }, []);

  const handleSubmitClick = () => {
    console.log('Submit');

    setIsSignedOut(false);
  };

  return (
    <Wrapper>

      { isLoading ? <div>Loading...</div> :

        isSignedOut ?
          <LoginForm>
            <FieldWrapper>
              <FieldLabel>Full name</FieldLabel>
              <TextInput />
            </FieldWrapper>

            <FieldWrapper>
              <FieldLabel>Password</FieldLabel>
              <TextInput />
            </FieldWrapper>

            <Button onClick={handleSubmitClick}>Submit</Button>
          </LoginForm> :

          <div>
            <div>
              <button>Live</button>
              <button>Midweek</button>
              <button>Weekend</button>
            </div>

            <div>
              <p>How many people are watching?</p>

              { printNumbers() }
            </div>

            <div>
              <h1>{congregationName} Congregation</h1>
              <p>The PIN is {password}</p>
            </div>
          </div>

        }

    </Wrapper>
  );
};

export default App;
