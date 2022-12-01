import React, { useState } from 'react'
import { Button } from '@mui/material'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { changeStatusProgress } from '../reducer_action/BaseReducerAction';

const UploadFileAll = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        // setUploading(true);

        dispatch(changeStatusProgress(true))

        const options = {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
        }
        fetch(`http://localhost:8088/sinh-vien/compare-all`, options)
            .then(response => {
                console.log(response)
                return response.json();
            })
            .then(rs => {
                toast.success("Upload file thành công!")
            })
            .catch(err => {
                toast.error("Upload file không thành công")
            })
            .finally(() => {
                dispatch(changeStatusProgress(false))
            })
    }
    return (
        <span style={{ borderRadius: '5px', background: 'green', padding: '12px', color: '#fff', cursor: 'pointer', fontWeight: 'bold' }} onClick={e => handleSubmit(e)}>
            All
        </span>


    )
}

export default UploadFileAll