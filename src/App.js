import React, { Component } from 'react';
import Formulario from './components/formulario/formulario'
import ListaDeNotas from './components/listadenotas/listaDeNotas';
import './assets/App.css';
import './assets/index.css';


class App extends Component{
  
 constructor(){
   super();
   this.notas = [];
   this.state = {};
 }

 criarNota(titulo, texto){ /*   foi criado um método (function) e ele foi passado na tag form ali em baixo*/ 
  const novaNota = {titulo,texto};
  this.notas.push(novaNota);
  this.setState({ /*   setState atualiza o estado das nossas notas */ 
    notas:this.notas
  })
  }
  render(){
    return (
              <section className="conteudo">
                  <Formulario criarNota={this.criarNota.bind(this)} /> {/* criarNota passada como uma propriedade do formulario  */}
                  <ListaDeNotas notas={this.notas}/>
              </section>  
    );
  }
  
}

export default App;
