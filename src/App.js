import React from "react";
import { Component } from "react";

import { Header,Table,MyChart,Text } from './components';
import styles from './App.module.css';
import { fetchStatistics } from './api';


class App extends Component{
    state = {
        data: []
    }

    async componentDidMount(){
        const fetchedData = await fetchStatistics();
        // console.log(fetchedData)
        this.setState({ data: fetchedData});
    }
    render(){
        const {data} = this.state;
        return(
            <div className={styles.container}>
                <Header />
                <Text />
                <Table data={data}/>
                <MyChart />
            </div> 
        )
    }
}

export default App;