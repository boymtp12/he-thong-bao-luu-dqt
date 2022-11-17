import { Box } from '@mui/material'
import React, { useState } from 'react'
import SearchBar from './SearchBar'
import TableDetail from './TableDetail'
import UploadFile from './UploadFile'

const Home = () => {
    const [isDisplayTable, setIsDisplayTable] = useState(false)
    return (
        < Box sx={{ minHeight: '750px', marginTop: '110px', padding: '32px 64px' }}>
            <div style={{ display: 'flex' }}>
                <SearchBar  setIsDisplayTable={setIsDisplayTable}/>
                <UploadFile />
            </div>
            {isDisplayTable && <TableDetail/>}
        </Box>

    )
}

export default Home