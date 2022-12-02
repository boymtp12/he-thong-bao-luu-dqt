import React, { useState } from 'react'
import { Button } from '@mui/material'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { OutTable, ExcelRenderer } from 'react-excel-renderer'
import { toast } from 'react-toastify';
import { changeStatusProgress } from '../reducer_action/BaseReducerAction';
import { useDispatch } from 'react-redux';

const UploadFile = () => {
    const dispatch = useDispatch();
    const [isUploading, setUploading] = useState(false);
    const [file, setFile] = useState();

    const fileHandler = async event => {
        const fileObj = event.target.files[0]
        setUploading(true);
        const formData = new FormData();
        formData.append('File', fileObj);

        console.log(formData)
        dispatch(changeStatusProgress(true))
        const options = {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        fetch(`http://localhost:8088/sinh-vien/compare-file`, options)
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
                setUploading(false);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <label htmlFor='uploadFile' style={{ marginRight: '10px' }}>
            <span style={{ borderRadius: '5px', background: 'green', padding: '9px', color: '#fff', cursor: 'pointer', fontWeight: 'bold' }}>
                Upload file
            </span>
            {/* <span className='btn btn-primary fw-bolder' style={{ fontSize: '14px', background: 'blue', border: '1px solid blue' }}>Upload file</span> */}
            <input
                id='uploadFile'
                key={isUploading}
                type='file'
                onChange={e => fileHandler(e)}
                style={{ display: 'none' }}
            />
            {/* <Button onClick={(e) => handleSubmit(e)}>Submit</Button> */}
        </label>

    )
}

export default UploadFile