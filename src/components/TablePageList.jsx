import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Stack, Typography } from '@mui/material';

import rs from './data.json'
import { useDispatch, useSelector } from 'react-redux';
import { changeDataListStudent, changeDataStudent, changeDisplayTableDetail, changeMaSoSv } from '../reducer_action/BaseReducerAction';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';



const TablePageList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const data_list_student = useSelector(state => state.base.data_list_student)
    const ma_so_sv = useSelector(state => state.base.ma_so_sv)
    const data_student = useSelector(state => state.base.data_student)
    const is_display_table_detail = useSelector(state => state.base.is_display_table_detail)

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const handleFindStudentByMssv = (mssv) => {
        let checkMaSoSv1;
        const options = {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
        }
        if (mssv) {
            fetch(`localhost:8088/sinh-vien/get-all?page=0`, options)
                .then(response => {
                    console.log(response)
                    return response.json();
                })
                .then(rs => {
                    if (Boolean(rs) === true) {
                        let data = rs.result;
                        checkMaSoSv1 = rs.result.mssv
                        console.log(checkMaSoSv1)
                        dispatch(changeMaSoSv(mssv))
                        if (mssv === checkMaSoSv1) {
                            navigate('/')
                            dispatch(changeDataStudent({ ...data }));
                            dispatch(changeDisplayTableDetail(true));
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


    return (
        <Box sx={{ margin: '0 auto' }}>
            <Box sx={{ marginTop: '32px' }}><Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>DANH SÁCH SO SÁNH</Typography></Box>
            <TableContainer component={Paper} sx={{ marginTop: '16px', width: '1200px' }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell sx={{ minWidth: '50px' }} align="left">MSSV</StyledTableCell>
                            <StyledTableCell sx={{ minWidth: '200px' }} align="left">Họ tên</StyledTableCell>
                            <StyledTableCell sx={{ minWidth: '100px' }} align="left">Trạng thái</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data_list_student.map((item, index) => {
                                return (
                                    < StyledTableRow key={index} sx={{ cursor: 'pointer' }} onClick={() => handleFindStudentByMssv("59463")} >
                                        <StyledTableCell component="th" scope="row">
                                            {item.mssv}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{item.name}</StyledTableCell>
                                        <StyledTableCell align="left">{item.is_compare ? <CheckCircleIcon color='success' /> : <CancelIcon color='error' />}</StyledTableCell>
                                    </StyledTableRow>
                                )
                            })
                        }

                    </TableBody>

                </Table>
            </TableContainer >
        </Box>
    )
}

export default TablePageList