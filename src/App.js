import React from 'react';
import Provider from './context/Provider';
import Routes from './pages';
import GlobalStyle from './styles';

function App() {
  return (
    <Provider>
      <Routes />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
