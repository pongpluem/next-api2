
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


export default function BasicDemo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("http://localhost:3000/api/mockproduct")
        .then((response) => response.json())
        .then((data) => {            
            console.log(data)          
            setProducts(data)           
        });

        console.log()

    }, []);

    return (
        <div className="card">
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}