import { Box, LinearProgress } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeDataListStudent } from '../reducer_action/BaseReducerAction'
import SearchBar from './SearchBar'
import TableDetail from './TableDetail'
import UploadFile from './UploadFile'
import UploadFileAll from './UploadFileAll'
import rs2 from './dataList.json'


const Home = () => {
    const is_display_table_detail = useSelector(state => state.base.is_display_table_detail)
    const dispatch = useDispatch()

    const getListStudent = () => {
        const options = {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
        }

        fetch(`http://localhost:8088/sinh-vien/get-all?page=0`, options)
            .then(response => {
                console.log(response)
                return response.json();
            })
            .then(rs2 => {
                if (Boolean(rs2) === true) {
                    let data = rs2.result.compare;
                    dispatch(changeDataListStudent([...data]))
                }
            }).catch(err => {
                console.log(err)
            })
    }

    React.useEffect(() => {
        getListStudent()
    }, [])

    console.log(is_display_table_detail)
    return (
        < Box sx={{ minHeight: '750px', marginTop: '110px', padding: '32px 64px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <SearchBar />
                <UploadFile />
                <UploadFileAll />
            </div>
            {is_display_table_detail && <TableDetail />}
        </Box>

    )
}

export default Home