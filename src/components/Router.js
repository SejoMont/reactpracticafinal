import React, { Component } from "react";
import { Routes, Route, BrowserRouter, useParams } from "react-router-dom";
import MenuRutas from "./MenuRutas";
import Home from "./Home";
import DetallesEquipo from "./DetallesEquipo";
import Jugadores from "./Jugadores";
import Jugador from "./Jugador";
import Apuestas from "./Apuestas";
import CrearApuesta from "./CrearApuesta";

export default class Router extends Component {
    render() {
        function DetallesEquipoElement() {
            var { idequipo } = useParams();

            return <DetallesEquipo idequipo={idequipo} />;
        }

        function JugadoresElement() {
            var { idequipo } = useParams();

            return <Jugadores idequipo={idequipo} />;
        }

        function JugadorElement() {
            var { idjugador } = useParams();

            return <Jugador idjugador={idjugador} />;
        }

        return (
            <BrowserRouter>
                <MenuRutas />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/equipo/:idequipo" element={<DetallesEquipoElement />}></Route>
                    <Route path="/jugadores/:idequipo" element={<JugadoresElement />}></Route>
                    <Route path="/jugador/:idjugador" element={<JugadorElement />}></Route>
                    <Route path="/apuestas" element={<Apuestas />}></Route>
                    <Route path="/nuevaApuesta" element={<CrearApuesta />}></Route>
                    {/* <Route path="*" element={</>}></Route> */}
                </Routes>
            </BrowserRouter>
        );
    }
}