import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { Badge, Box, CardMedia } from '@mui/material'
import { useWishlist } from '../Context/WishListContext'

export default function NavBar() {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const { wishListCount } = useWishlist()
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    navigate('/')
    setAnchorEl(null)
  }
  const refreshPage = () => {
    window.location.reload(false)
  }
  return (
    <AppBar
      sx={{
        backgroundColor: 'white',
        height: 80,
        display: 'flex',
        justifyContent: 'center'
      }}
      position="sticky"
    >
      <Toolbar sx={{ flexDirection: 'row' }}>
        <Button
          onClick={refreshPage}
          sx={{ color: 'white', textTransform: 'none' }}
        >
          <CardMedia
            sx={{ height: 55, width: 280, marginRight: 2, marginLeft: 10 }}
            image="/soccerlogo.png"
          />
        </Button>
        <Button
          onClick={() => navigate('/home')}
          sx={{
            color: 'black',
            textTransform: 'none',
            fontSize: 18,
            marginLeft: 5
          }}
        >
          Home
        </Button>
        <Button
          sx={{
            color: 'black',
            textTransform: 'none',
            fontSize: 18,
            marginLeft: 3
          }}
        >
          Shop
        </Button>
        <Button
          sx={{
            color: 'black',
            textTransform: 'none',
            fontSize: 18,
            marginLeft: 3,
            noWrap: true
          }}
        >
          Contact Us
        </Button>
        <Box width={880} height={5} />
        <Button onClick={()=>navigate('/wishlist')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23.686"
            height="21.282"
            viewBox="0 0 23.686 21.282"
          >
            <path
              id="Wishlist"
              d="M429.974,158.147a6.554,6.554,0,0,0-7.513-1.353,10.42,10.42,0,0,0-1.585.975c-.227.158-.461.322-.7.478l-.044-.041c-.08-.075-.181-.168-.287-.258a7.262,7.262,0,0,0-3.554-1.734,6.587,6.587,0,0,0-3.855.622,6.722,6.722,0,0,0-4.005,6.365,9.832,9.832,0,0,0,2.271,5.963,33.161,33.161,0,0,0,8.994,8.08,1,1,0,0,0,.556.18,1.356,1.356,0,0,0,.735-.27,39.783,39.783,0,0,0,6.037-4.8,17.25,17.25,0,0,0,4.6-6.559A6.969,6.969,0,0,0,429.974,158.147Zm-10.538,1.743c.322.408.567.581.819.581h0c.252,0,.5-.175.823-.585a5.174,5.174,0,0,1,6.694-1.406,5.5,5.5,0,0,1,2.412,6.627A12.661,12.661,0,0,1,427.5,169.5a34.86,34.86,0,0,1-6.978,5.976.546.546,0,0,1-.476.034c-3.175-2.185-6.425-4.7-8.689-8.246a6.771,6.771,0,0,1-1.232-5.081,5.4,5.4,0,0,1,5.631-4.357h.006A5.055,5.055,0,0,1,419.436,159.889Z"
              transform="translate(-408.43 -156.142)"
            ></path>
          </svg>
          <Badge color="error" badgeContent={wishListCount} />
        </Button>
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Bag"
            width="21.646"
            height="21.246"
            viewBox="0 0 21.646 21.246"
          >
            <path
              id="Path_5"
              data-name="Path 5"
              d="M-370,164.155a.813.813,0,0,0-.664-.242H-376v-.037q0-.321,0-.641c0-.482,0-.981,0-1.471a4.611,4.611,0,0,0-.411-2.025,4.654,4.654,0,0,0-5.558-2.575,4.668,4.668,0,0,0-3.353,4.236c-.016.569-.015,1.147-.014,1.706,0,.255,0,.509,0,.764q0,.022,0,.044h-1.342c-1.295,0-2.634,0-3.95,0a.839.839,0,0,0-.849.453l-.02.044v.383l.017.041c.006.014.012.027.019.041l.007.014L-391,167.4c.474,2.582.964,5.251,1.441,7.878a3.411,3.411,0,0,0,3.509,2.954h10.753a3.416,3.416,0,0,0,3.492-2.883c.479-2.591.96-5.226,1.425-7.774q.249-1.364.5-2.727A.807.807,0,0,0-370,164.155Zm-13.854-2.495a3.186,3.186,0,0,1,1.39-2.644,3.186,3.186,0,0,1,2.969-.323,3.156,3.156,0,0,1,2,2.814c.011.58.009,1.172.008,1.744q0,.326,0,.652h-6.362q0-.295,0-.589C-383.854,162.772-383.856,162.211-383.85,161.66Zm12.365,3.757-.037.2c-.061.333-.121.661-.181.988l-.427,2.312c-.357,1.93-.726,3.926-1.086,5.89a2.508,2.508,0,0,1-.5,1.279,1.876,1.876,0,0,1-1.464.658c-3.48,0-7.218.007-10.982,0a1.888,1.888,0,0,1-1.906-1.655c-.461-2.478-.925-5-1.375-7.435l-.413-2.239Z"
              transform="translate(391.5 -156.986)"
            ></path>
          </svg>
          <Badge color="error" badgeContent={0} />
        </Button>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21.675"
            height="21.482"
            viewBox="0 0 21.675 21.482"
          >
            <path
              id="Account"
              d="M19.565,21.282l-.005-.134A8.72,8.72,0,0,0,15.7,13.959a8.4,8.4,0,0,0-4.9-1.534c-.219,0-.445.008-.668.023a8.8,8.8,0,0,0-8.182,8.69l0,.136H0l.008-.147A11.455,11.455,0,0,1,2,14.99a11.651,11.651,0,0,1,4.921-3.817A6.133,6.133,0,0,1,4.517,6.559,6.352,6.352,0,0,1,6.476,1.665,6.414,6.414,0,0,1,10.775,0a6.235,6.235,0,0,1,3.783,11.184,10.781,10.781,0,0,1,5.9,5.443,10.332,10.332,0,0,1,1.013,4.516v.139ZM6.435,6.19A4.255,4.255,0,0,0,7.7,9.234a4.317,4.317,0,0,0,6.109,0A4.254,4.254,0,0,0,15.076,6.2a4.317,4.317,0,0,0-4.3-4.292h-.022A4.317,4.317,0,0,0,6.435,6.19Z"
              transform="translate(0.106 0.1)"
              stroke="#fff"
              stroke-width="0.2"
            ></path>
          </svg>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button'
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
