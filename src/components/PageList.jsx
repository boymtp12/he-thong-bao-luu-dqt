import React from 'react'
import TablePageList from './TablePageList'
import rs from './dataList.json'
import { toast } from 'react-toastify'

const PageList = () => {
  
  return (
    <div style={{ margin: '50px auto 100px', width: '1000px', padding: '64px 32px', height: '80%' }}>
      <TablePageList />
    </div>
  )
}

export default PageList