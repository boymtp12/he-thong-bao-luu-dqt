import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SortIcon from '@mui/icons-material/Sort';
import { toast } from 'react-toastify';

export default function Filter(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { setIsDisplayTable, setDanhSachMonHoc, maSo } = props;
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const options = ["All", "Score", "Tổng kết"]

    const handleClose = (e) => {
        let checkMaSoSv1;
        let value_filter = e.target.value
        const options = {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
        }
        console.log(maSo)
        console.log(value_filter)
        if (maSo) {
            fetch(`http://localhost:8088/sinh-vien/is-compare?mssv=${maSo}&type=${value_filter}`, options)
                .then(response => {
                    console.log(response)
                    return response.json();
                })
                .then(rs => {
                    if (Boolean(rs) === true) {
                        let data = rs.result.compare;
                        checkMaSoSv1 = rs.result.mssv
                        if (maSo === checkMaSoSv1) {
                            setDanhSachMonHoc([...data])
                            setIsDisplayTable(true);
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
        setAnchorEl(null);
    };

    return (
        <div style={{ marginRight: '16px' }}>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={e => handleClick(e)}
                variant='outlined'
            >
                <SortIcon />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}

            >
                {options.map((item, index) => {
                    let type_filter = `type-filter-${index}`
                    return (<MenuItem onClick={e => handleClose(e)} key={item} sx={{ width: '200px' }} className={type_filter} value={index}>{item}</MenuItem>)
                })}
            </Menu>
        </div>
    );
}