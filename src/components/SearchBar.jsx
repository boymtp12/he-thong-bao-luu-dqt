import React, { useEffect, useState } from 'react'
import { Search } from '@mui/icons-material'
import { IconButton, Paper, Stack } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import { useMediaQuery } from 'react-responsive';
import { ToastContainer, toast } from 'react-toastify';

// import rs from './data.json'
import Filter from './Filter';

const SearchBar = (props) => {
    const { setIsDisplayTable,
        danhSachMonHoc,
        setDanhSachMonHoc,
    } = props

    const [maSo, setMaSo] = useState('');

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })



    const handleSubmit = (e) => {
        e.preventDefault();
        const options = {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
        }
        if (maSo) {
            let checkMaSoSv1;
            fetch(`http://localhost:8088/sinh-vien/is-compare?mssv=${maSo}&type=2`, options)
                .then(response => {
                    console.log(response)
                    return response.json();
                })
                .then(rs => {
                    if (Boolean(rs) === true) {
                        let data = rs.result.compare;
                        checkMaSoSv1 = rs.result.mssv
                        if (maSo === checkMaSoSv1) {
                            setDanhSachMonHoc([...data])
                            setIsDisplayTable(true);
                        } else {
                            toast.error("Mã số sinh viên nhập không chính xác")
                        }
                    } else {
                        toast.info("Mã số sinh viên không tồn tại")
                    }

                })
        } else {
            toast.warning("Vui lòng nhập mã sinh viên trước khi tìm kiếm")
        }
    }


    useEffect(() => {
        setIsDisplayTable(false);
    }, [maSo])
    return (
        <Stack direction="row" alignItems="center">
            <Filter setIsDisplayTable={setIsDisplayTable} setDanhSachMonHoc={setDanhSachMonHoc} maSo={maSo}/>
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
        </Stack>
    )
}

export default SearchBar