import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Global from './Global'
import axios from 'axios'

export default class Apuestas extends Component {
    state = {
        apuestas: []
    }

    loadApuestas = () => {
        var request = "api/apuestas"
        var url = Global.apiApuestas + request

        axios.get(url).then(response => {
            this.setState({
                apuestas: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadApuestas();
    }

    render() {
        return (
            <div className='text-center' style={{width:"70%", margin:"auto"}}>
                <h1 style={{ color: "red" }}>Real Madrid - Barcelona FC</h1><br />
                <NavLink to="/nuevaApuesta" className="btn btn-outline-danger">Nueva Apuesta</NavLink><br />
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Usuario</th>
                            <th>Resultado</th>
                            <th>Visitante</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.apuestas.map((apuesta, index)=> {
                                return(
                                    <tr key={index} value={apuesta.idApuesta}>
                                        <td>{apuesta.usuario}</td>
                                        <td>{apuesta.resultado}</td>
                                        <td>{apuesta.fecha}</td>
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
