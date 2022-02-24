import React, { useState, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import './app.css'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


var savedSort;


const App = () => {
    const [rowData] = useState([
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
    ]);

    const [sortable, setSORT] = useState(false)



    console.log(sortable)
    /* if (sortable)
      {const [columnDefs] = useState([
        { field: "make", sortable :true },
        { field: "model", sortable :true },
        { field: "price", sortable :true },
      ]);}
      else {
        const [columnDefs] = useState([
          { field: "make" },
          { field: "model" },
          { field: "price" },
        ]);
      } */

    /* const [columnDefs] = sortable ? (useState([
      { field: "make", sortable : true },
      { field: "model", sortable : true },
      { field: "price", sortable : true },
    ])) : (const [columnDefs] = useState([
      { field: "make" },
      { field: "model" },
      { field: "price" },
    ])) */

    let [columnDefs, setColumnsDefs] = useState([
        { field: "make", sortable: true, sort: 'desc' },
        { field: "model", sortable: true,sort: 'desc' },
        { field: "price", sortable: true, sort: 'desc' },
    ])


    

    const sortHandler = () => {
        setColumnsDefs(() => {
            return [
                { field: "make", sort : 'asc' },
                { field: "model" },
                { field: "price" },
            ]
        })
    }

    const sortHandler2 = () => {
        setColumnsDefs(() => {
            return [
                { field: "make", sortable: true },
                { field: "model", sortable: true },
                { field: "price", sortable: true },
            ]
        })
    }

    return (
        <div>
            <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>



                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                >
                </AgGridReact>
                <div
                    className='container'
                >
                    <button className='btn-1' onClick={sortHandler}> no sort   </button>
                    <button className='btn-1' onClick={sortHandler2}> sort   </button>
                </div>

            </div>
        </div>


    );
};


export default App;
