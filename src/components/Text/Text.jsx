import React from 'react';
import styles from './Text.module.css';

const Text = () => {
    return (
        <div className={styles.container}>
            <p> The data below is based on the list of countries and data obtained from <a href="https://rapidapi.com/api-sports/api/covid-193/">rapidapi.com/api-sports/api/covid-193/</a>  
                . It display statics of coronavirus COVID-19  for 241 regions.
            </p>
        </div> 
    )
}

export default Text;