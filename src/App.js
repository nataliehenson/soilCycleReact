import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServicesList from "./features/services/ServicesList.js";

function App() {
    return (
        <div className="App">
            <Header />
            <ServicesList />
            <Footer />
        </div>
    );
}

export default App;
