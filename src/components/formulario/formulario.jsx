import React, { Component } from 'react'
import "./estilo.css";


class Formulario extends Component{
    constructor(props){ /*  recebe as propriedades no construtor */
        super(props); /*  passa para o elemento pai para poder acessar */
        this.titulo = "";
        this.texto   = "";

    }
    _mudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value  
    }
    _mudancaTexto(evento){
        evento.stopPropagation();
        this.texto = evento.target.value
    }
    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto); /* aqui */
    }
    render(){
        return( 
                <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
                    <h1 className="form-cadastro_titulo" >Gerenciador de notas:</h1>
                    <input className="form-cadastro_input" type="text" placeholder="Título" onChange={this._mudancaTitulo.bind(this)} />
                    <textarea className="form-cadastro_input" rows={15} placeholder="Escreva sua nota!" onChange={this._mudancaTexto.bind(this)}/>
                    <button className="form-cadastro_input form-cadastro_submit">Criar nota</button>
                </form>
        );
    }
}
export default Formulario;
