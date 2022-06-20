import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
            <ShoppingCartIcon/>
        </div>

    );
}

export default NavBar

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