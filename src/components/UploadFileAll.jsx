import React from 'react'
import { Button } from '@mui/material'
import FileUploadIcon from '@mui/icons-material/FileUpload';

const UploadFileAll = () => {
    return ( 
        <Button sx={{margin: '0 16px'}} size="small" variant="contained" startIcon={<FileUploadIcon />}>
            All
        </Button>
    )
}

export default UploadFileAll