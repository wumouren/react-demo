import React, { Component } from 'react';
import Head from './component/Head/Head';
import Body from './component/Body/Body';
import Button from './component/Button/Button';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <Body />
        <Button />
      </div>
    );
  }
}

export default App;