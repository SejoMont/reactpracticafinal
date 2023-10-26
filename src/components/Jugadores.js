import React, { Component } from 'react';
import axios from 'axios';
import Global from './Global';
import { NavLink } from 'react-router-dom';

export default class Jugadores extends Component {
    state = {
        jugadores: []
    }

    loadJugadores = () => {
        var request = "api/jugadores/jugadoresequipos/" + this.props.idequipo;
        var url = Global.apiApuestas + request;



        axios.get(url).then(response => {
            this.setState({
                jugadores: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadJugadores();
    }

    // componentDidUpdate = (oldProps) => {
    //     if (oldProps !== this.props) {
    //         this.loadJugadores();
    //     }
    // }

    render() {
        return (
            <div className=''>
                <NavLink to={"/equipo/" + this.props.idequipo} className="btn btn-outline-info">Volver al equipo</NavLink>
                <table className='table table-striped text-center'>
                    <thead>
                        <tr>
                            <th>nombre</th>
                            <th>imagen</th>
                            <th>detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.jugadores.map((jugador, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{jugador.nombre}</td>
                                        <td><img style={{ width: "125px" }} src={jugador.imagen} /></td>
                                        <td><NavLink className="btn btn-outline-success" to={"/jugador/" + jugador.idJugador}>Detalles</NavLink></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
