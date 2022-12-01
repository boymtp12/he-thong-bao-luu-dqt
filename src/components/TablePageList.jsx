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
import { changeDataListStudent, changeDataStudent, changeDisplayTableDetail, changeMaSoSv, changeStatusProgress } from '../reducer_action/BaseReducerAction';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};


const TablePageList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const data_list_student = useSelector(state => state.base.data_list_student)
    const ma_so_sv = useSelector(state => state.base.ma_so_sv)
    const data_student = useSelector(state => state.base.data_student)
    const is_display_table_detail = useSelector(state => state.base.is_display_table_detail)

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data_list_student.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

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
        dispatch(changeStatusProgress(true))
        if (mssv) {
            fetch(`http://localhost:8088/sinh-vien/is-compare?mssv=${mssv}&type=0`, options)
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
                .catch(er => {
                    toast.error("Lỗiiiiii")
                })
                .finally(() => {
                    dispatch(changeStatusProgress(false))
                })
        } else {
            toast.warning("Vui lòng nhập mã sinh viên trước khi tìm kiếm")
        }
    }
    // }


    return (
        <Box sx={{ margin: '0 auto' }}>
            <Box sx={{ marginTop: '32px' }}><Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>DANH SÁCH SO SÁNH</Typography>
            </Box>
            <TableContainer component={Paper} sx={{ marginTop: '16px', width: '1200px'}}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table pagination ">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell sx={{ minWidth: '50px' }} align="left">MSSV</StyledTableCell>
                            <StyledTableCell sx={{ minWidth: '200px' }} align="left">Họ tên</StyledTableCell>
                            <StyledTableCell sx={{ minWidth: '100px' }} align="left">Trạng thái</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            (rowsPerPage > 0
                                ? data_list_student.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : data_list_student
                            ).map((item, index) => {
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
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={3}
                                count={data_list_student.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer >
        </Box>
    )
}

export default TablePageList
