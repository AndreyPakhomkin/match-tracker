import React from 'react';
import Header from './Header';
import { Wrap, MatchList } from './styled/AppStyled';

function App() {
  return (
    <Wrap>
      <Header />
      <MatchList />
    </Wrap>
  );
}

export default App;
