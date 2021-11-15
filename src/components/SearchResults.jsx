import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import _ from 'lodash'

const SearchResults = ({ detailedResultsState, selectedState, modalOpenState }) => {
    const [ results, ] = detailedResultsState
    const [, setSelected ] = selectedState
    const [, setModalOpen] = modalOpenState

    const [rows, setRows] = useState([])

    const columns = [
        {field: 'id', hide: true},
        {field: 'name', width: 300},
        {field: 'year', width: 150}
    ]

    useEffect(() => {
        setRows(results.map(movie => {
            movie.year = new Date(movie.releaseDate).getFullYear()
            return _.pick(movie, ['id', 'name', 'year'])
        }))
    }, [results])

    return (
        <div style={{ height: '40rem' }}>
            <DataGrid 
                columns={columns} 
                rows={rows} 
                onRowClick={ev => {
                    setSelected(ev.id)
                    setModalOpen(true)
                }} 
            />
        </div>
    )
}

export default SearchResults
