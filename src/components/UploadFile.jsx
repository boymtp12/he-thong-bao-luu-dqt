import React from 'react'
import { Button } from '@mui/material'
import FileUploadIcon from '@mui/icons-material/FileUpload';

const UploadFile = () => {
    return ( 
        <Button size="small" variant="contained" startIcon={<FileUploadIcon />}>
            Upload file
        </Button>
    )
}

export default UploadFile