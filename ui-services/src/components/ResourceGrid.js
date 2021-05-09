import React from 'react';
import { render } from 'react-dom';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import axios from 'axios'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default class ResourceGrid extends React.Component {

    constructor () {
        super();

        this.state = {
            tableData: [{
                id: '',
                resourceType: '',
                district: '',
                state: '',
                contactPerson: '',
                contactNumber: '',
                additionalInfo: ''
            }]
        };
    }

    componentDidMount () {
        axios.get('http://localhost:8080/test2', {
            responseType: 'json'
        }).then(response => {
            this.setState({ tableData: response.data });
        });
    }

    render(){
        const { tableData } = this.state;

        return (
            <div className="ag-theme-alpine" style={{marginLeft: "4%", height: 400, width: 1400}}>
                <AgGridReact
                    rowData={tableData}>
                    <AgGridColumn field="id" sortable={ true } filter={ true }></AgGridColumn>
                    <AgGridColumn field="resourceType" sortable={ true } filter={ true }></AgGridColumn>
                    <AgGridColumn field="district" sortable={ true } filter={ true }></AgGridColumn>
                    <AgGridColumn field="state" sortable={ true } filter={ true }></AgGridColumn>
                    <AgGridColumn field="contactPerson" sortable={ true } filter={ true }></AgGridColumn>
                    <AgGridColumn field="contactNumber" sortable={ true } filter={ true }></AgGridColumn>
                    <AgGridColumn field="additionalInfo" sortable={ true } filter={ true }></AgGridColumn>
                </AgGridReact>
            </div>
        );
    }

};