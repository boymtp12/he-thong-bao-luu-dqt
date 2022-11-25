import React, { useState } from 'react'
import { Button } from '@mui/material'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { OutTable, ExcelRenderer } from 'react-excel-renderer'
import { toast } from 'react-toastify';

const UploadFile = () => {
    const [isUploading, setUploading] = useState(false);

    const fileHandler = event => {
        let fileObj = event.target.files[0]
        setUploading(true);

        ExcelRenderer(fileObj, async (err, resp) => {
            let data_key = [...resp.rows.filter(item => item.length !== 0)]
            console.log(data_key)
            if (err) {
                setUploading(false);
                console.log(err)
            } else {
                let arr = []
                console.log(arr)
            }
        })
    }
    return (
        <label htmlFor='uploadFile' style={{ marginRight: '10px' }}>
            <span>
                <Button size="small" variant="contained" sx={{ height: '100%' }} startIcon={<FileUploadIcon />}>
                    Upload file
                </Button>
            </span>
            {/* <span className='btn btn-primary fw-bolder' style={{ fontSize: '14px', background: 'blue', border: '1px solid blue' }}>Upload file</span> */}
            <input
                id='uploadFile'
                key={isUploading}
                type='file'
                onChange={e => fileHandler(e)}
                style={{ display: 'none' }}
            />
        </label>

    )
}

export default UploadFile