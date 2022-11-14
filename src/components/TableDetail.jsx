import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableDetail = () => {


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

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    return (
        <TableContainer component={Paper} sx={{ marginTop: '32px' }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">STT</StyledTableCell>
                        <StyledTableCell align="left">Mã MH</StyledTableCell>
                        <StyledTableCell align="left">Tên MH</StyledTableCell>
                        <StyledTableCell align="left">Lớp HP</StyledTableCell>
                        <StyledTableCell align="left">Số TC</StyledTableCell>
                        <StyledTableCell align="left">ĐQT</StyledTableCell>
                        <StyledTableCell align="left">ĐKT</StyledTableCell>
                        <StyledTableCell align="left">ĐHP&nbsp;(10)</StyledTableCell>
                        <StyledTableCell align="left">Số TCTL</StyledTableCell>
                        <StyledTableCell align="left">ĐTBTL</StyledTableCell>
                        <StyledTableCell align="left">Mã MH</StyledTableCell>
                        <StyledTableCell align="left">Tên MH</StyledTableCell>
                        <StyledTableCell align="left">Lớp HP</StyledTableCell>
                        <StyledTableCell align="left">Số TC</StyledTableCell>
                        <StyledTableCell align="left">ĐQT</StyledTableCell>
                        <StyledTableCell align="left">ĐKT</StyledTableCell>
                        <StyledTableCell align="left">Điểm HP&nbsp;(10)</StyledTableCell>
                        <StyledTableCell align="left">Điểm HP&nbsp;(4)</StyledTableCell>
                        <StyledTableCell align="left">Điểm HP&nbsp;(Chữ)</StyledTableCell>
                        <StyledTableCell align="left">Status</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.calories}</StyledTableCell>
                            <StyledTableCell align="left">{row.fat}</StyledTableCell>
                            <StyledTableCell align="left">{row.carbs}</StyledTableCell>
                            <StyledTableCell align="left">{row.protein}</StyledTableCell>
                            <StyledTableCell align="left">{row.protein}</StyledTableCell>
                            <StyledTableCell align="left">{row.protein}</StyledTableCell>
                            <StyledTableCell align="left">{row.protein}</StyledTableCell>
                            <StyledTableCell align="left">{row.protein}</StyledTableCell>
                            <StyledTableCell align="left">{row.protein}</StyledTableCell>
                            <StyledTableCell align="left">{row.protein}</StyledTableCell>
                            <StyledTableCell align="left">{row.protein}</StyledTableCell>
                            <StyledTableCell align="left">{row.protein}</StyledTableCell>
                            <StyledTableCell align="left">{row.protein}</StyledTableCell>
                            <StyledTableCell align="left">{row.protein}</StyledTableCell>
                            <StyledTableCell align="left">{row.protein}</StyledTableCell>
                            <StyledTableCell align="left">{row.protein}</StyledTableCell>
                            <StyledTableCell align="left">{row.protein}</StyledTableCell>
                            <StyledTableCell align="left">{row.protein}</StyledTableCell>
                            <StyledTableCell align="left">{row.protein}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableDetail