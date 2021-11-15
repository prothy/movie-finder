import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

const SearchResults = ({ resultsState, selectedState }) => {
    const [ results, ] = resultsState
    const [, setSelected ] = selectedState

    const columns = [
        {field: 'id', hide: true},
        {field: 'name', width: 300},
        {field: 'year', width: 150}
    ]

    return (
        <div>
            <DataGrid 
                columns={columns} 
                rows={results} 
                onRowClick={ev => setSelected(ev.id)} 
            />
        </div>
    )
}

export default SearchResults
