import React, { Component } from 'react'
import axios from "axios";
import { NavLink } from "react-router-dom";
import Global from './Global';

export default class CargarEquipos extends Component {
    state = {
        equipos: [],
    };

    loadHospitales = () => {
        var request = "/api/Equipos";
        var url = Global.apiApuestas + request;

        axios.get(url).then((response) => {
            this.setState({
                equipos: response.data
            })
        })
    };

    componentDidMount = () => {
        this.loadHospitales();
    };

    render() {
        return this.state.equipos.map((equipo, index) => (
            <li key={index} className="dropdown-item">
                <NavLink to={`equipo/${equipo.idEquipo}`} className="dropdown-item">
                    {equipo.idEquipo} - {equipo.nombre}
                </NavLink>
            </li>
        ));
    }
}
