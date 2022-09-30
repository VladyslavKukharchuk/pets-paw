import React from 'react';

import styles from './Info.module.css'

import { ReactComponent as Logo } from "../assets/logo.svg";
import Card from './Card';

import Button from './Button';

import voteTable from "../images/vote-table.svg";
import petBreeds from "../images/pet-breeds.svg";
import imagesSearch from "../images/images-search.svg";

function Info() {
    return (
        <div className='info'>
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
    );
}

export default Info;