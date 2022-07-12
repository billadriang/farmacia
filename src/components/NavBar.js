import React from "react";
// Importando imagen de carrito de componente 
import CartWidget from "./CartWidget";
import { MdOutlineLocalPharmacy } from "react-icons/md";
import {Link, NavLink} from "react-router-dom"


// NAVBAR
function NavBar () {

    const categories = [
        {name: "analgesicos", id:0, route: "categoria/analgesicos"},
        {name: "antibioticos", id:1, route: "categoria/antibioticos"},
        {name: "vitaminas", id:2, route: "categoria/vitaminas"},
        {name: "recetario", id:3, route: "categoria/recetario"},
    ];



    return (
        <div  style={styles.container}>

            <Link to="/"> <MdOutlineLocalPharmacy style={styles.logo} /></Link> <h3>FARMACIA CENTRO MEDICO </h3> 

            <nav style={styles.navStyle}>
                <Link style={styles.anclas} to="/Productos"> Productos </Link>
                <Link style={styles.anclas} to="/Servicios"> Servicios </Link>
                <Link style={styles.anclas} to="/Acerca"> Acerca de nosotros </Link>
                <Link style={styles.anclas} to="/Contacto"> Contacto </Link>

                {categories.map((categoria) => <Link key={categoria.id} to={categoria.route}>{categoria.name}</Link>)}
                
            {/* Implementando el cartwidget */}
            <Link style={styles.boton} to="/carrito" >{CartWidget()}</Link>
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