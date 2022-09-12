import React from "react";
import "./App.css";
import NucampLogo from "./app/assets/img/logo.png";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import ServicesList from "./features/services/ServicesList.js";

function App() {
    return (
        <div className="App">
            <Navbar dark color="primary" sticky="top" expand="md">
                <Container>
                    <NavbarBrand href="/">
                        <img src={NucampLogo} alt="nucamp logo" width="100" />
                    </NavbarBrand>
                </Container>
            </Navbar>
            <ServicesList />
        </div>
    );
}

export default App;
