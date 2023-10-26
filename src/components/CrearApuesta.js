import React, { Component } from 'react'
import Global from './Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class CrearApuesta extends Component {
    state = {
        status: false
    }

    cajaUsuario = React.createRef();
    cajaRealMadrid = React.createRef();
    cajaBarsa = React.createRef();
    cajaFecha = React.createRef();

    crearApuesta = (e) => {
        e.preventDefault();

        var id = 0
        var usu = this.cajaUsuario.current.value;
        var resultado = this.cajaRealMadrid.current.value + " - " + this.cajaBarsa.current.value;
        var fecha = this.cajaFecha.current.value;

        var apuesta = {
            idApuesta: id,
            usuario: usu,
            resultado: resultado,
            fecha: fecha
        }

        var request = "api/apuestas";
        var url = Global.apiApuestas + request;

        console.log(apuesta)

        axios.post(url, apuesta).then(response => {
            this.setState({
                status: true
            })
        })

    }

    render() {
        return (
            <div>
                {
                    this.state.status == true && (
                        <Navigate to="/apuestas" />
                    )
                }
                <h1 className='text-center'>Crear Apuesta</h1>
                <form style={{ width: "500px", margin: "auto" }}>
                    <label>Usuario: </label>
                    <input type='text' ref={this.cajaUsuario} className="form-control" />
                    <label>Real Madrid: </label>
                    <input type='number' ref={this.cajaRealMadrid} className="form-control" />
                    <label>Barcelona FC: </label>
                    <input type='number' ref={this.cajaBarsa} className="form-control" />
                    <label>Fecha: </label>
                    <input type='text' ref={this.cajaFecha} className="form-control" /> <br />
                    {/* <input type='date' ref={this.cajaFecha} className="form-control" /> <br /> */}
                    <div className='text-end'>
                        <button onClick={this.crearApuesta} className='btn btn-outline-success '>Crear</button>
                    </div>

                </form>
            </div>
        )
    }
}
