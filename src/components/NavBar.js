import React from "react";
// Importando imagen de carrito de componente 
import CartWidget from "./CartWidget";

// NAVBAR
function NavBar() {
    return (
        <div style={styles.container}>
            <h2>FARMACIA CENTRO MEDICO</h2>
            <nav style={styles.navStyle}>
                <a style={styles.anclas} href="google.com"> Productos </a>
                <a style={styles.anclas} href="google.com"> Servicios </a>
                <a style={styles.anclas} href="google.com"> Acerca de nosotros </a>
                <a style={styles.anclas} href="google.com"> Contacto </a>
            </nav>
                {/* Implementando el cartwidget */}
                {CartWidget()}
        </div>

    );
}

export default NavBar

// Estilos del Navbar
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navStyle: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    imagen :{
        width: '10%',
    },
    anclas:{
        margin: 10,
    }
}