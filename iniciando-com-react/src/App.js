import React from 'react';

class App extends React.Component {

  state = {
    nome : 'Eduardo'
  }

  render(){
    return(
      <>
      <h1>Hello {this.state.nome} </h1>
      </>
    )
  }
}


export default App;