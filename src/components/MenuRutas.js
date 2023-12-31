import React, { Component } from "react";
import logo from "./assets/images/champions.png";
import { NavLink } from "react-router-dom";
import CargarEquipos from "./CargarEquipos";

export default class MenuCoches extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">
                            <img src={logo} width="50" height="50"></img>
                        </NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                            {/* <span className=""> <img src="https://cdn0.iconfinder.com/data/icons/gray-business-toolbar/512/hamburger-3-512.png" width="40px"></img></span> */}
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/apuestas">
                                        Apuestas
                                    </NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDarkDropdownMenuLink"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Equipos
                                    </a>
                                    <ul
                                        className="dropdown-menu dropdown-menu"
                                        aria-labelledby="navbarDarkDropdownMenuLink"
                                    >
                                        <CargarEquipos />
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
