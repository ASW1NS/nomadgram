import React from 'react'
import Sidenav from '../Components/Sidenav'
import { Box } from '@mui/material'
import Navbar from '../Components/Navbar'

const Viewedit = () => {
  return (
    <>


<Navbar/>
<Box height={30} />

   <Box sx={{ display: 'flex' }}>

<Sidenav/>


<Box component="main" sx={{ flexGrow: 1, p: 3 }}>

<h1>viewedit</h1>
</Box>
  </Box>
  </>
  )
}

export default Viewedit
