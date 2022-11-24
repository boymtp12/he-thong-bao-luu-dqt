import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const DetailSummary = (props) => {
    const { dataInfoStudent } = props
    const dataOverview = dataInfoStudent.overview;
    return (
        <Box sx={{ padding: '16px 8px', border: '1px solid #ccc', width: 'auto', margin: '0 8px' }}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '16px', padding: '0px 8px 8px 8px', borderBottom: '1px solid #ccc' }}>
                TÓM TẮT
            </Typography>
            <Stack sx={{ padding: '8px 0' }} direction='row' >
                <Box sx={{ padding: '8px 16px' }}>
                    <Typography sx={{ paddingTop: '8px' }}>Môn học: <span style={{fontWeight: 'bold', margin: '0 8px'}}>{dataOverview?.total_subjects}</span></Typography>
                    <Typography sx={{ paddingTop: '8px' }}>Học kỳ: <span style={{fontWeight: 'bold', margin: '0 8px'}}>{dataOverview?.difference_subjects}</span></Typography>
                    <Typography sx={{ paddingTop: '8px' }}>Khác: <span style={{fontWeight: 'bold', margin: '0 8px'}}>{dataOverview?.total_hk}</span></Typography>
                    <Typography sx={{ paddingTop: '8px' }}>Khác: <span style={{fontWeight: 'bold', margin: '0 8px'}}>{dataOverview?.difference_hk}</span></Typography>
                </Box>
            </Stack>
        </Box>
    )
}

export default DetailSummary