import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AllCongregations = [
  {
    id: 'wellingtoneast',
    name: 'Wellington East',
    pin: '0001',
    telegram: '/telegram-wellington-east',
  },
  {
    id: 'wellingtoncity',
    name: 'Wellington City',
    pin: '0002',
    telegram: '/telegram-wellington-city',
  },
];

const Wrapper = styled.div({
  padding: '20px',
});

const App = () => {
  const [congregationName, setCongregationName] = useState(null);
  const [pin, setPin] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const domainId = window.location.pathname.substring(1);

  const result = AllCongregations.filter(obj => {
    return obj.id === 'wellingtoncity'
  });

  useEffect(() => {

    setCongregationName(result[0].name);
    setPin(result[0].pin);

    setIsLoading(false);

  }, []);

  return (
    <Wrapper>

      { isLoading ? <div>Loading...</div> :
      <div>
        <p>This is the {congregationName} Congregation.</p>
        <p>The PIN is {pin}</p>
      </div> }

    </Wrapper>
  );
};

export default App;
