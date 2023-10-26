import React, { Component } from 'react'
import Global from './Global'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default class DetallesEquipo extends Component {
    state = {
        equipo: []
    }

    findEquipo = () => {
        var request = "api/equipos/" + this.props.idequipo
        var url = Global.apiApuestas + request;

        axios.get(url).then(response => {
            this.setState({
                equipo: response.data
            })
        })
    }

    componentDidMount = () => {
        this.findEquipo();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps !== this.props) {
            this.findEquipo();
        }

    }



    render() {
        return (
            <div className='text-center'>
                <ul className='list-group'>
                    <li className='list-group-item'><h1>{this.state.equipo.nombre}</h1></li>
                    <li className='list-group-item'><img src={this.state.equipo.imagen} style={{ width: "200px" }} /></li>
                    <li className='list-group-item'><h2>Champions: {this.state.equipo.champions}</h2></li>
                    <li className='list-group-item'>{this.state.equipo.descripcion}</li>
                    <li className='list-group-item'>
                        <NavLink className="btn btn-outline-success" to={"/jugadores/" + this.state.equipo.idEquipo}>Jugadores</NavLink> &nbsp;
                        <NavLink className="btn btn-outline-danger" to={"/"}>Volver</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}
