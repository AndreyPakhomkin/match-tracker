import React from 'react';
import Header from './components/Header';
import MatchesList from './pages/MatchesList';
import { Wrap } from './styled/AppStyled';

function App() {

  return (
    <Wrap>
      <Header />
      <MatchesList />
    </Wrap>
  );
}

export default App;
