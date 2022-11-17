import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SortIcon from '@mui/icons-material/Sort';

export default function Filter() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const options = ["All", "Score", "Tổng kết"]

    const handleClose = () => {
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
                {options.map(item => {
                    return (<MenuItem key={item} sx={{width: '200px'}} onClick={handleClose}>{item}</MenuItem>)
                })}
            </Menu>
        </div>
    );
}