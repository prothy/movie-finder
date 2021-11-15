import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

const SearchResults = ({ resultsState }) => {
    const [ results, ] = resultsState

    const columns = [
        {field: 'id', hide: true},
        {field: 'name', width: 300},
        {field: 'year', width: 150}
    ]

    return (
        <div style={{height: '40rem'}}>
            <DataGrid columns={columns} rows={results} />
        </div>
    )
}

export default SearchResults
