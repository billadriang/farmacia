import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

const App = () => {
  return(
    <>
    <NavBar/>,
    <ItemListContainer/>
    </>
  );
}
export default App