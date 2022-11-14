import { Box } from '@mui/material'
import React from 'react'
import SearchBar from './SearchBar'
import TableDetail from './TableDetail'
import UploadFile from './UploadFile'

const Home = () => {

    return (
        < Box sx={{ minHeight: '1000px', marginTop: '110px', padding: '32px 64px' }}>
            <div style={{ display: 'flex' }}>
                <SearchBar />
                <UploadFile />
            </div>
            <TableDetail />
        </Box>

    )
}

export default Home