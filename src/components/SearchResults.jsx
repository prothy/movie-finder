import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

const SearchResults = ({ resultsState, selectedState, modalOpenState }) => {
    const [ results, ] = resultsState
    const [, setSelected ] = selectedState
    const [, setModalOpen] = modalOpenState

    const columns = [
        {field: 'id', hide: true},
        {field: 'name', width: 300},
        {field: 'year', width: 150}
    ]

    return (
        <div style={{ height: '40rem' }}>
            <DataGrid 
                columns={columns} 
                rows={results} 
                onRowClick={ev => {
                    setSelected(ev.id)
                    setModalOpen(true)
                }} 
            />
        </div>
    )
}

export default SearchResults
