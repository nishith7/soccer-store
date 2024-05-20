import React from 'react'
import NavBar from './Navbar'
import { Typography } from '@mui/material'
// import { useLocation } from 'react-router-dom'

const WishListPage = () => {
    // const location = useLocation()
    // const myData = location
  return (
    <>
    <NavBar/>
    <Typography
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        fontWeight={500}
        color={'#00000'}
        fontSize={'30px'}
        fontFamily={'Lato'}
        paddingTop={3}
      >
        Wishlist
      </Typography>


    </>
  )
}

export default WishListPage