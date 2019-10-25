import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './styles.css';

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

const Wrapper = styled.div({
  padding: '20px',
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

  useEffect(() => {
    const domainId = window.location.pathname.substring(1);
    const congregation = AllCongregations.filter(object => object.id === domainId);

    setCongregationName(congregation[0].name);
    setPassword(congregation[0].password);
    setIsLoading(false);

  }, []);

  return (
    <Wrapper>
      <div>
        <form>
          <label>
            Full name:
            <input type="text" />
          </label>

          <label>
            Password:
            <input type="text" />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>

      <div>
        <button>Live</button>
        <button>Midweek</button>
        <button>Weekend</button>
      </div>

      <div>
        <p>How many people are watching?</p>

        { printNumbers() }
      </div>

      { isLoading ? <div>Loading...</div> :
        <div>
          <h1>{congregationName} Congregation</h1>
          <p>The PIN is {password}</p>
        </div> }

    </Wrapper>
  );
};

export default App;
