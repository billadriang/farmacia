import React,{useState} from 'react'
// LOGICA DE CONTADOR
const ItemCount = ({stock}) => {
    const [cuenta, setCuenta] = useState(2)

    const sumar = () => {
        if (cuenta < stock ){
        setCuenta (cuenta+1)
    }
    else{
        alert('Ya no quedan mas')
    }
    }  
    const restar = () =>{
        if(cuenta > 1){
        setCuenta (cuenta-1)
    }
    }

    const onAdd = () => {
        alert(`Gracias por comprar  ${cuenta} productos`)
    }

    return(
        <>
            <div style={styles.container}>
                <button onClick={() => restar()}>-</button>
                <p>{cuenta}</p>
                <button  onClick={() => sumar()} >+</button>
            </div>
            <button style={styles.boton} onClick={onAdd}>Buy</button>
        </>
    )
}
// ESTILO CONTADOR

const styles = {
    container: {
        width: '5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    boton: {
    backgroundColor: '#c7e8f3',
    borderRadius: 5,
    margin: 10,

    }
}
export default ItemCount