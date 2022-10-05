import React from 'react';
import styles from './App.module.css'
import girlAndPet from "./images/girl-and-pet.png";

import Info from './components/Info';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <div className={styles.left}>
        <Info />
      </div>
      <Menu />
      <img className={styles.girlPet} src={girlAndPet} alt="" />
    </>
  );
}

export default App;
