import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import NavBar from './Navbar'
import { useLocation } from 'react-router-dom'
import { Box, Button, Divider, Grid, Typography } from '@mui/material'

const ShoppingCart = () => {
  const location = useLocation()
  const data = location

  console.log(data)
  return (
    <>
      <NavBar />
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
        Shopping Cart
      </Typography>
      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={8}>
          <TableContainer component={Paper} sx={{ marginLeft: 1 }}>
            <Table
              size="medium"
              aria-label="simple table"
              sx={{ minWidth: 650 }}
            >
              <TableHead>
                <TableRow>
                  <TableCell padding="15px">
                    {
                      <Typography
                        fontWeight={400}
                        color={'black'}
                        fontSize={'16px'}
                        fontFamily={'Lato'}
                        textTransform={'none'}
                      >
                        Item
                      </Typography>
                    }
                  </TableCell>
                  <TableCell align="left">
                    {
                      <Typography
                        fontWeight={400}
                        color={'black'}
                        fontSize={'16px'}
                        fontFamily={'Lato'}
                        textTransform={'none'}
                      >
                        Price
                      </Typography>
                    }
                  </TableCell>
                  <TableCell align="left">
                    {
                      <Typography
                        fontWeight={400}
                        color={'black'}
                        fontSize={'16px'}
                        fontFamily={'Lato'}
                        textTransform={'none'}
                      >
                        Qty
                      </Typography>
                    }
                  </TableCell>
                  <TableCell align="left">
                    {
                      <Typography
                        fontWeight={400}
                        color={'black'}
                        fontSize={'16px'}
                        fontFamily={'Lato'}
                        textTransform={'none'}
                      >
                        Discount
                      </Typography>
                    }
                  </TableCell>
                  <TableCell align="left">
                    {
                      <Typography
                        fontWeight={400}
                        color={'black'}
                        fontSize={'16px'}
                        fontFamily={'Lato'}
                        textTransform={'none'}
                      >
                        Subtotal
                      </Typography>
                    }
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {
                      <div style={{ display: 'flex' }}>
                        <img
                          height={'80px'}
                          width={'80px'}
                          src={data.state.imgSrc}
                          alt={data.state.name} // Add alt attribute for accessibility
                          style={{ marginRight: '10px' }} // Adjust margin as needed
                        />
                        <Typography
                          fontWeight={400}
                          color={'black'}
                          fontSize={'15px'}
                          fontFamily={'Lato'}
                          textTransform={'none'}
                          paddingLeft={7.5}
                        >
                          {data.state.name}
                        </Typography>
                      </div>
                    }
                  </TableCell>
                  <TableCell align="left">{`Rs.${data.state.price}.00`}</TableCell>
                  <TableCell>{1}</TableCell>
                  <TableCell align="left">{'Rs.0.00'}</TableCell>
                  <TableCell align="left">{`Rs.${data.state.price}.00`}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}>
          <Box
            padding={'15px'}
            // height={500}
            width={550}
            sx={{ backgroundColor: '#fafafa' }}
          >
            <Typography
              fontWeight={400}
              color={'black'}
              fontSize={'18px'}
              fontFamily={'Lato'}
              textTransform={'none'}
            >
              ORDER SUMMARY
            </Typography>
            <Divider sx={{ paddingTop: 1.8 }} />
            <div style={{ display: 'flex' }}>
              <Typography
                fontWeight={400}
                color={'black'}
                fontSize={'15px'}
                fontFamily={'Lato'}
                textTransform={'none'}
                marginTop={2.5}
              >
                Coupon
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  textAlign: 'left',
                  borderColor: '#bebebe',
                  width: '115px',
                  marginLeft: 'auto',
                  marginTop: 2.5
                }}
              >
                <Typography
                  fontWeight={600}
                  color={'black'}
                  fontSize={'12px'}
                  fontFamily={'Lato'}
                  textTransform={'none'}
                  noWrap={true}
                >
                  ADD COUPON
                </Typography>
              </Button>
            </div>
            <Typography
              fontWeight={400}
              color={'black'}
              fontSize={'18px'}
              fontFamily={'Lato'}
              textTransform={'none'}
              marginTop={2.5}
            >
              PRICE DETAILS
            </Typography>
            <Divider sx={{ paddingTop: 1.8 }} />
            <div style={{ display: 'flex' }}>
              <Typography
                fontWeight={400}
                color={'black'}
                fontSize={'15px'}
                fontFamily={'Lato'}
                textTransform={'none'}
                marginTop={2.5}
              >
                Total MRP
              </Typography>
              <Typography
                fontWeight={400}
                color={'black'}
                fontSize={'15px'}
                fontFamily={'Lato'}
                textTransform={'none'}
                marginTop={2.5}
                marginLeft={'auto'}
              >
                {/* Rs.1500.00 */}
                Rs. {data.state.price}.00
              </Typography>
            </div>
            <div style={{ display: 'flex' }}>
              <Typography
                fontWeight={400}
                color={'black'}
                fontSize={'15px'}
                fontFamily={'Lato'}
                textTransform={'none'}
                marginTop={2.5}
              >
                Total Discount on MRP
              </Typography>
              <Typography
                fontWeight={400}
                color={'black'}
                fontSize={'15px'}
                fontFamily={'Lato'}
                textTransform={'none'}
                marginTop={2.5}
                marginLeft={'auto'}
              >
                - Rs. 0.00
              </Typography>
            </div>
            <div style={{ display: 'flex' }}>
              <Typography
                fontWeight={400}
                color={'black'}
                fontSize={'15px'}
                fontFamily={'Lato'}
                textTransform={'none'}
                marginTop={2.5}
              >
                Discount Coupon
              </Typography>
              <Typography
                fontWeight={400}
                color={'black'}
                fontSize={'15px'}
                fontFamily={'Lato'}
                textTransform={'none'}
                marginTop={2.5}
                marginLeft={'auto'}
              >
                - Rs. 0.00
              </Typography>
            </div>
            <div style={{ display: 'flex' }}>
              <Typography
                fontWeight={400}
                color={'black'}
                fontSize={'15px'}
                fontFamily={'Lato'}
                textTransform={'none'}
                marginTop={2.5}
              >
                Shipping Charge
              </Typography>
              <Typography
                fontWeight={400}
                color={'black'}
                fontSize={'15px'}
                fontFamily={'Lato'}
                textTransform={'none'}
                marginTop={2.5}
                marginLeft={'auto'}
              >
                Rs. 0.00
              </Typography>
            </div>
            <div style={{ display: 'flex' }}>
              <Typography
                fontWeight={400}
                color={'black'}
                fontSize={'15px'}
                fontFamily={'Lato'}
                textTransform={'none'}
                marginTop={2.5}
              >
                Order Total
              </Typography>
              <Typography
                fontWeight={400}
                color={'black'}
                fontSize={'15px'}
                fontFamily={'Lato'}
                textTransform={'none'}
                marginTop={2.5}
                marginLeft={'auto'}
              >
                Rs. {data.state.price}.00
              </Typography>
            </div>
            <Button
              variant="contained"
              color="warning"
              fullWidth
              sx={{
                color: '#fc9956',
                // borderColor: '#c2c2c2',.,
                marginTop: 2.5
              }}
              size="large"
            >
              <Typography
                fontWeight={500}
                color={'white'}
                fontSize={'15px'}
                fontFamily={'Lato'}
              >
                checkout
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default ShoppingCart
