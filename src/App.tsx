import React from 'react';
import styles from './App.module.css'

import Button from './components/Button';

import voteTable from "./images/vote-table.svg";
import petBreeds from "./images/pet-breeds.svg";
import imagesSearch from "./images/images-search.svg";
import girlAndPet from "./images/girl-and-pet.png";

import Card from './components/Card';

import { ReactComponent as Logo } from "./assets/logo.svg";
import SearchDashboard from './components/SearchDashboard';

function App() {
  return (
    <>
      <div className={styles.left}>
        <div>
          <Logo width="100" height="24" />
          <div>
            <div className={styles.title}>
              <h1>Hi intern!</h1>
              <p>Welcome to MI 2022 Front-end test</p>
              <div className={styles.navigation}>
                <h2>Lets start using The Cat API</h2>
                <div className={styles.grid}>
                  <Card img={voteTable} color="violet" />
                  <Card img={petBreeds} color="green" />
                  <Card img={imagesSearch} color="orange" />
                  <Button text="VOTING" />
                  <Button text="BREEDS" />
                  <Button text="GALLERY" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <SearchDashboard />
      </div>
      <img className={styles.girlPet} src={girlAndPet} alt="" />
    </>
  );
}

export default App;
