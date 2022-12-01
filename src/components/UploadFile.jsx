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

    const fileHandler = event => {
        let fileObj = event.target.files[0]
        // setUploading(true);

        // ExcelRenderer(fileObj, async (err, resp) => {
        //     resp.rows.splice(0, 1)
        //     let data = [...resp.rows.filter(item => item.length !== 0)]
        //     console.log(data);
        //     if (err) {
        //         setUploading(false);
        //         console.log(err)
        //     } else {
        //         let arr = []
        //         data.map(item => {
        //             arr.push({
        //                 ma_sv: item[1] ? item[1] : '',
        //                 ten: item[2] ? item[2] : '',
        //                 lop: item[3] ? item[3] : '',
        //                 khoa: item[4] ? item[4] : '',
        //                 ket_qua: item[5] ? item[5] : '',
        //                 ngay_thi: item[6] ? item[6] : '',
        //                 ghi_chu: item[7] ? item[7] : '',
        //                 doi_tuong: item[8] ? item[8] : ''
        //             })
        //         })
        //         console.log(arr);
        //     }
        // })
        dispatch(changeStatusProgress(true))
        const options = {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fileObj)
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
            })
    }
    return (
        <label htmlFor='uploadFile' style={{ marginRight: '10px' }}>
            <span style={{ borderRadius: '5px', background: 'green', padding: '12px', color: '#fff', cursor: 'pointer', fontWeight: 'bold' }}>
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
        </label>

    )
}

export default UploadFile