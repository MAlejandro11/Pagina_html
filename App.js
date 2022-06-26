import React from "react";
import {Header} from "./Componentes/header/header.js";
import {Producto} from "./Componentes/productos/productos.js";
import {DataProvider as Routes} from "react-router-dom";
import {BrowserRouter as Routes} from "react-router-dom";
import pages from "/Componentes/Page.js";
import "boxicons";

function App() {

  return(
    <DataProvider>
    <div className ="App">
    <Routes>
    <Header />
    <Carrito />
    <Pages />
    </Routes>
    </div>
    </DataProvider>
    );
}

export default App;