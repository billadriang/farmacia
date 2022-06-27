import React from "react";
// Importando imagen de carrito de componente 
import CartWidget from "./CartWidget";
import { MdOutlineLocalPharmacy } from "react-icons/md";


// NAVBAR
function NavBar() {
    return (
        <div  style={styles.container}>
            <h1><MdOutlineLocalPharmacy style={styles.logo}/>FARMACIA CENTRO MEDICO</h1>
            
            <nav style={styles.navStyle}>
                <a style={styles.anclas} href="google.com"> Productos </a>
                <a style={styles.anclas} href="google.com"> Servicios </a>
                <a style={styles.anclas} href="google.com"> Acerca de nosotros </a>
                <a style={styles.anclas} href="google.com"> Contacto </a>

            {/* Implementando el cartwidget */}
            <button style={styles.boton} >{CartWidget()}</button>
            </nav>

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
        backgroundColor: '#c7e8f3',
        color: '#4F646F',

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
    },
    logo:{
        fontSize: 75
    },
        boton: {
        backgroundColor: '#c7e8f3',
        borderRadius: 5,
        margin: 10,
    
        }
}