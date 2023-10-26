import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default class Jugador extends Component {
    state = {
        jugador:[]
    }

    loadJugador = () => {
        var request = "api/Jugadores/"+this.props.idjugador;
        var url = Global.apiApuestas + request;

        axios.get(url).then(response => {
            this.setState({
                jugador: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadJugador();
    }


    render() {
        return (
            <div className='text-center'>
                <ul className='list-group'>
                    <li className='list-group-item'><h1>{this.state.jugador.nombre}</h1></li>
                    <li className='list-group-item'><img src={this.state.jugador.imagen} width={"150px"}/></li>
                    <li className='list-group-item'><h2>{this.state.jugador.posicion}</h2></li>
                    <li className='list-group-item'><h3>Fecha de Nacimiento:{this.state.jugador.fechaNacimiento}</h3></li>
                    <li className='list-group-item'><h3>Pais:{this.state.jugador.pais}</h3></li>
                    <li><NavLink className="btn btn-outline-danger" to={"/jugadores/"+this.state.jugador.idEquipo}>Volver</NavLink></li>
                </ul>
            </div>
        )
    }
}
