import React from 'react';

class App extends React.Component {

  state = {
    nome : ''
  }

  modificaNome = (event) => {
    let nome = event.target.value;
    
    //Atualizando o valor do state dinamicamente pegando o valor digitado no input
    this.setState({
      nome: nome
    })
  }

  render(){
    return(
      <>
      <input type="text" placeholder="Digite aqui" onChange={this.modificaNome}  />
      <h1>Hello {this.state.nome} </h1>
      </>
    )
  }
}


export default App;