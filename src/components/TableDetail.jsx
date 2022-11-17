import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Stack, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import data from './data.json'

const TableDetail = (props) => {

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

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = data;
    console.log(rows.result.compare)
    return (
        <div style={{ margin: '64px 0' }}>
            {
                rows.result?.compare?.map((row, index1) => (
                    <div>
                        <Box sx={{ marginTop: '32px' }}><Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>HỌC KỲ {row.hk} NĂM {row.year} - {row.year + 1}</Typography></Box>
                        <TableContainer component={Paper} sx={{ marginTop: '16px' }}>
                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell sx={{ minWidth: '50px' }} align="left">STT</StyledTableCell>
                                        <StyledTableCell sx={{ minWidth: '50px' }} align="left">Mã MH</StyledTableCell>
                                        <StyledTableCell sx={{ minWidth: '200px' }} align="left">Tên MH</StyledTableCell>
                                        <StyledTableCell sx={{ minWidth: '50px' }} align="left">Lớp HP</StyledTableCell>
                                        <StyledTableCell sx={{ minWidth: '50px' }} align="left">Số TC</StyledTableCell>
                                        <StyledTableCell sx={{ minWidth: '50px' }} align="left">ĐQT</StyledTableCell>
                                        <StyledTableCell sx={{ minWidth: '50px' }} align="left">ĐKT</StyledTableCell>
                                        <StyledTableCell sx={{ minWidth: '50px' }} align="left">ĐHP&nbsp;(10)</StyledTableCell>
                                        <StyledTableCell sx={{ minWidth: '50px' }} align="left">Điểm HP&nbsp;(4)</StyledTableCell>
                                        <StyledTableCell sx={{ minWidth: '50px' }} align="left">Điểm HP&nbsp;(Chữ)</StyledTableCell>
                                        <StyledTableCell sx={{ minWidth: '50px' }} align="left">Mã MH</StyledTableCell>
                                        <StyledTableCell sx={{ minWidth: '200px' }} align="left">Tên MH</StyledTableCell>
                                        <StyledTableCell sx={{ minWidth: '50px' }} align="left">Lớp HP</StyledTableCell>
                                        <StyledTableCell sx={{ minWidth: '50px' }} align="left">Số TC</StyledTableCell>
                                        <StyledTableCell sx={{ minWidth: '50px' }} align="left">ĐQT</StyledTableCell>
                                        <StyledTableCell sx={{ minWidth: '50px' }} align="left">ĐKT</StyledTableCell>
                                        <StyledTableCell sx={{ minWidth: '50px' }} align="left">Điểm HP&nbsp;(10)</StyledTableCell>
                                        <StyledTableCell sx={{ minWidth: '50px' }} align="left">Điểm HP&nbsp;(4)</StyledTableCell>
                                        <StyledTableCell sx={{ minWidth: '50px' }} align="left">Điểm HP&nbsp;(Chữ)</StyledTableCell>
                                        <StyledTableCell sx={{ minWidth: '50px' }} align="left">Status</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.semester?.map((item, index2) => {
                                        return (
                                            < StyledTableRow key={item?.info_old?.name_subject} >
                                                <StyledTableCell component="th" scope="row">
                                                    {index2 + 1}
                                                </StyledTableCell>
                                                <StyledTableCell align="left">{item?.info_old?.mmh}</StyledTableCell>
                                                <StyledTableCell align="left">{item?.info_old?.name_subject}</StyledTableCell>
                                                <StyledTableCell align="left">{item?.info_old?.group_code}</StyledTableCell>
                                                <StyledTableCell align="left">{item?.info_old?.tc}</StyledTableCell>
                                                <StyledTableCell align="left">{item?.info_old?.qt}</StyledTableCell>
                                                <StyledTableCell align="left">{item?.info_old?.kt}</StyledTableCell>
                                                <StyledTableCell align="left">{item?.info_old?.summary}</StyledTableCell>
                                                <StyledTableCell align="left">{item?.info_old?.score_4}</StyledTableCell>
                                                <StyledTableCell align="left">{item?.info_old?.score_string}</StyledTableCell>
                                                <StyledTableCell align="left">{item?.info_new?.mmh}</StyledTableCell>
                                                <StyledTableCell align="left">{item?.info_new?.name_subject}</StyledTableCell>
                                                <StyledTableCell align="left">{item?.info_new?.group_code}</StyledTableCell>
                                                <StyledTableCell align="left">{item?.info_new?.tc}</StyledTableCell>
                                                <StyledTableCell align="left">{item?.info_new?.qt}</StyledTableCell>
                                                <StyledTableCell align="left">{item?.info_new?.kt}</StyledTableCell>
                                                <StyledTableCell align="left">{item?.info_new?.summary}</StyledTableCell>
                                                <StyledTableCell align="left">{item?.info_new?.score_4}</StyledTableCell>
                                                <StyledTableCell align="left">{item?.info_new?.score_string}</StyledTableCell>
                                                <StyledTableCell align="left">{row.semester_summary.is_compare ? <CheckCircleIcon color='success' /> : < CancelIcon color='error' />}</StyledTableCell>
                                            </StyledTableRow>
                                        )
                                    })}

                                </TableBody>

                            </Table>
                            <Stack sx={{ padding: '8px 16px' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '500px', padding: '4px 0', borderBottom: '1px solid #ccc' }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>Điểm trung bình học kỳ hệ 10/100: </Typography>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItem: 'center' }}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>{row.semester_summary.info_old.summary}</Typography>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '32px' }}>{row.semester_summary.info_old.summary}</Typography>
                                    </div>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '500px', padding: '4px 0', borderBottom: '1px solid #ccc' }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>Điểm trung bình học kỳ hệ 4: </Typography>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItem: 'center' }}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>{row.semester_summary.info_old.score_4}</Typography>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '32px' }}>{row.semester_summary.info_old.score_4}</Typography>
                                    </div>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '500px', padding: '4px 0', borderBottom: '1px solid #ccc' }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>Điểm trung bình tích lũy: </Typography>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItem: 'center' }}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>{row.semester_summary.info_old.summary_all}</Typography>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '32px' }}>{row.semester_summary.info_old.summary_all}</Typography>
                                    </div>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '500px', padding: '4px 0', borderBottom: '1px solid #ccc' }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>Điểm trung bình tích lũy(hệ 4): </Typography>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItem: 'center' }}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>{row.semester_summary.info_old.score_4_all}</Typography>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '32px' }}>{row.semester_summary.info_old.score_4_all}</Typography>
                                    </div>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '500px', padding: '4px 0', borderBottom: '1px solid #ccc' }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>Số tín chỉ đạt: </Typography>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItem: 'center' }}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>{row.semester_summary.info_old.ttck}</Typography>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '32px' }}>{row.semester_summary.info_old.ttck}</Typography>
                                    </div>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '500px', padding: '4px 0', borderBottom: '1px solid #ccc' }}>
                                    <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>Số tín chỉ tích lũy: </Typography>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', alignItem: 'center' }}>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>{row.semester_summary.info_old.ttc}</Typography>
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px', marginLeft: '32px' }}>{row.semester_summary.info_old.ttc}</Typography>
                                    </div>
                                </Box>
                            </Stack>
                        </TableContainer >
                    </div>
                ))
            }
        </div>

    );
}

export default TableDetail