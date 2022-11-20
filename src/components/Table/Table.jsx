import React from 'react';
import MaterialTable from 'material-table';

import styles from './Table.module.css';
import { Grid } from '@material-ui/core';

const Table = ({data}) => {
    
    const columns = [
        {title: '#', render:(rowData)=>rowData.tableData.id+1, defaultSort: "asc"},
        {
            title: "Continent",
            field: "continent",
            cellStyle: {
                fontWeight: "bold",
            },
            emptyValue:()=><p>__</p>
        },
        {
            title: "Country",
            field: "country",
            emptyValue:()=><p>__</p>
        },
        {
            title: "New Cases", 
            field: "cases.new",
            emptyValue:()=><p>__</p>
        },
        {
            title: "Active Cases", 
            field: "cases.active",
            emptyValue:()=><p>__</p>
        },
        {
            title: "Critical Cases", 
            field: "cases.critical",
            emptyValue:()=><p>__</p>
        },
        {
            title: "Recovered Cases", 
            field: "cases.recovered",
            render:(row)=>
            <Grid container alignItems='center'>
                <Grid item sm={4} class>
                    <h1 style={{
                        display:'inline-block',
                        height: 10,
                        width: 10,
                        borderRadius: '50%',
                        backgroundColor: 'limegreen'
                    }}></h1>
                </Grid>
                <Grid>
                    {row.cases.total}
                </Grid>
            </Grid>,
            emptyValue:()=><p>__</p>
        },
        {
            title: "Cases/1M_pop", 
            field: "cases.1M_pop",
            emptyValue:()=><p>__</p>
        },
        {
            title: "Total Cases", 
            field: "cases.total",
            render:(row)=>
            <Grid container alignItems='center'>
                <Grid item sm={4} class>
                    <h1 style={{
                        display:'inline-block',
                        height: 10,
                        width: 10,
                        borderRadius: '50%',
                        backgroundColor: '#2980ba'
                    }}></h1>
                </Grid>
                <Grid>
                    {row.cases.total}
                </Grid>
            </Grid>,
            emptyValue:()=><p>__</p>
        },
        {
            title: "New Deaths",
            field: "deaths.new",
            emptyValue:()=><p>__</p>
        },
        {
            title: "Deaths/1M_pop",
            field: "deaths.1M_pop",
            emptyValue:()=><p>__</p>
        },
        {
            title: "Total Deaths",
            field: "deaths.total",
            render:(row)=>
            <Grid container alignItems='center'>
                <Grid item sm={4} class>
                    <h1 style={{
                        display:'inline-block',
                        height: 10,
                        width: 10,
                        borderRadius: '50%',
                        backgroundColor: 'red'
                    }}></h1>
                </Grid>
                <Grid>
                    {row.cases.total}
                </Grid>
            </Grid>,
            emptyValue:()=><p>__</p>
        },
        {
            title: "Tests/1M_pop",
            field: "tests.1M_pop",
            emptyValue:()=><p>__</p>
        },
        {
            title: "Total Tests",
            field: "tests.total",
            render:(row)=>
            <Grid container alignItems='center'>
                <Grid item sm={4} class>
                    <h1 style={{
                        display:'inline-block',
                        height: 10,
                        width: 10,
                        borderRadius: '50%',
                        backgroundColor: '#cc3'
                    }}></h1>
                </Grid>
                <Grid>
                    {row.cases.total}
                </Grid>
            </Grid>,
            emptyValue:()=><p>__</p>
        },
        {
            title: "Day",
            field: "day",
            type: "date",
            emptyValue:()=><p>__</p>
        },
        // {
        //     title: "Time",
        //     field: "time",
        //     emptyValue:()=><p>__</p>
        // },
        {
            title: "Population",
            field: "population",
            emptyValue:()=><p>__</p>
        }
    ];
    
    return (
        <div className={styles.container}>
            <MaterialTable
                title="Corona Virus Report"
                data={data}
                columns={columns}
                options={{
                    columnsButton: true,
                    exportButton: true,
                    exportAllData: true,
                    searchFieldAlignment:"left",
                    searchFieldVariant:'outlined',
                    rowStyle:(data,index)=>index%2===0?{background:"#f5f5f5"}:null,
                    headerStyle:{
                        background:"#2980ba",
                        color:"white",
                        fontWeight:"bold"
                    }
                }}
            />
        </div>
    );
}

export default Table;