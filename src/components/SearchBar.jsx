import React, { useState } from 'react'
import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import { useMediaQuery } from 'react-responsive';

const SearchBar = () => {
    const [maSo, setMaSo] = useState();

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(maSo)
    }
    return (
        <Paper
            component="form"
            onSubmit={(e) => { handleSubmit(e) }}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 42,
                border: '1px solid #e3e3e3',
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 },
                maxWidth: { sm: 'auto', lg: '350px' }
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <PersonIcon sx={{ p: '10px' }} />
                <input
                    className='search-bar'
                    placeholder='Mã số sinh viên *'
                    value={maSo}
                    onChange={e => setMaSo(e.target.value)}
                    style={{ border: 'none', outline: 'none', padding: '4px 8px', fontWeight: 'bold', color: '#696969' }}
                />
            </div>
            <IconButton type="submit" sx={{ p: '10px', color: 'red', fontWeight: 'bold' }}>
                <Search />
            </IconButton>
        </Paper>
    )
}

export default SearchBar