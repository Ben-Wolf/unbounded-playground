import * as React from 'react';
import { Grommet } from 'grommet';
import { useState } from 'react';
import { createTimeout } from '../utils/timeoutHandler';
import { MainApp } from './MainApp';
import '../styles/App.scss';

const theme = {
  global: {
    font: {
      fontFamily: 'Roboto Slab',
      size: '18px',
      height: '20px',
    },
  },
  
};

const AppContainer: React.FC = () => {
  const [ timeoutId, setTimeoutId ] = useState<number | null>(null);
  const [ transitioned, setTransisitioned ] = useState(true);

  const onHover = () => timeoutId === null ? setTimeoutId(createTimeout(3000, setTransisitioned, [true])) : null;

  const onHoverOut = () => {
    clearTimeout(timeoutId);
    setTimeoutId(null);
  }

  const opening = () => (
    <header className="intro-header">
      Unbounded Playground
    </header>
  );

  return (
    <Grommet theme={theme}>
      <div onMouseEnter={onHover} onMouseLeave={onHoverOut}>
        {transitioned ? <MainApp /> : opening()}
      </div>
    </Grommet>
  );
}

export default AppContainer;
