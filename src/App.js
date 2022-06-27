import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

const App = () => {
  return(
    <>
    <NavBar/>
    <ItemListContainer 
    saludo = 'Saludo a traves de props'
    nombre='Bill'
    apellido='Gaize'
    edad= {25}
    />
    </>
  );
}
export default App