import React from 'react'
import NavBar from './Navbar'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Box,
  Button,
  ButtonBase,
  Divider,
  Fab,
  Grid,
  TextField,
  Typography
} from '@mui/material'
import '@fontsource/lato'
import '@fontsource/jost'

const ProductDetailsPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const data = location.state
  const sizes = [6, 7, 8, 9, 10, 11]

  const changeRoute = (item) => {
    navigate('/cart', { state: item })
  }
  return (
    <>
      <NavBar />
      <Grid container marginTop={12} marginLeft={32}>
        <img src={data?.imgSrc} height={'592px'} width={'592px'} alt="random" />
        <Divider
          variant="fullWidth"
          orientation="vertical"
          flexItem
          sx={{ marginLeft: 16 }}
        />
        <Grid item>
          <Typography
            fontWeight={500}
            color={'black'}
            fontSize={'20px'}
            fontFamily={'Lato'}
            textTransform={'none'}
            marginLeft={16}
          >
            {/* Crocs */}
            {data?.type}
          </Typography>
          <Typography
            fontWeight={500}
            fontSize={'20px'}
            fontFamily={'Lato'}
            textTransform={'none'}
            marginLeft={16}
          >
            {/* Men Black Casual Slippers */}
            {data?.name}
          </Typography>
          <Typography
            // variant="subtitle2"
            fontWeight={400}
            color={'grey'}
            fontSize={'16px'}
            fontFamily={'Lato'}
            textTransform={'none'}
            marginLeft={16}
            marginTop={1}
          >
            {/* Crocs */}
            SKU: 118-207712-001-10
          </Typography>

          <Typography
            paddingTop={2}
            fontWeight={'bold'}
            color={'black'}
            textTransform={'none'}
            fontSize={'22px'}
            fontFamily={'Lato'}
            marginLeft={16}
          >
            MRP:Rs.{data?.price}.00
          </Typography>
          <Typography
            // variant="subtitle2"
            fontWeight={900}
            color={'#03a685'}
            fontSize={'14px'}
            fontFamily={'Lato'}
            textTransform={'none'}
            marginLeft={16}
            marginTop={1}
          >
            {/* Crocs */}
            Inclusive of all taxes
          </Typography>

          <ButtonBase disableRipple={true}>
            <Typography
              fontWeight={'bold'}
              color={'#444'}
              fontSize={'15px'}
              fontFamily={'Lato'}
              marginLeft={16}
              paddingTop={4}
              lineHeight={1}
            >
              SELECT SIZE (US)
            </Typography>
          </ButtonBase>
          <ButtonBase disableRipple={true}>
            <Typography
              position={'absolute'}
              fontWeight={'bold'}
              color={'#ee1010'}
              fontSize={'13px'}
              fontFamily={'Lato'}
              marginLeft={40}
              paddingTop={4}
              noWrap={true}
            >
              SIZE GUIDE
            </Typography>
          </ButtonBase>

          <Grid container spacing={2} paddingTop={2} marginLeft={13}>
            <Grid item>
              {sizes.map((size) => (
                <Fab
                  key={size}
                  sx={{
                    backgroundColor: 'white',
                    fontSize: '15px',
                    marginLeft: '6px'
                  }}
                  disableRipple={true}
                  disableFocusRipple={true}
                  disableTouchRipple={true}
                  size="medium"
                >
                  {size}
                </Fab>
              ))}
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item>
              <Typography
                fontWeight={600}
                color={'#444'}
                fontSize={'15px'}
                text
                fontFamily={'Lato'}
                marginLeft={16}
                paddingTop={3}
              >
                QUANTITY:
              </Typography>
            </Grid>
            <Grid item>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: 20
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    backgroundColor: 'white',
                    borderRadius: 1,
                    borderColor: '#fc9956',
                    border: '1px solid orange',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Typography
                    fontWeight={600}
                    color={'#444'}
                    fontSize={'15px'}
                    fontFamily={'Lato'}
                  >
                    1
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={2} paddingTop={3} marginLeft={13}>
            <Grid item>
              <Button
                variant="outlined"
                sx={{ borderColor: '#c2c2c2', width: '156px' }}
                size="large"
                onClick={() => changeRoute(data)}
              >
                <Typography
                  fontWeight={500}
                  color={'black'}
                  fontSize={'15px'}
                  fontFamily={'Lato'}
                  textTransform={'none'}
                >
                  ADD TO CART
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="warning"
                sx={{
                  color: '#fc9956',
                  borderColor: '#c2c2c2',
                  width: '227px'
                }}
                size="large"
              >
                <Typography
                  fontWeight={500}
                  color={'white'}
                  fontSize={'15px'}
                  fontFamily={'Lato'}
                  textTransform={'none'}
                >
                  BUY NOW
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Typography
            fontWeight={500}
            color={'#444'}
            fontSize={'16px'}
            fontFamily={'Lato'}
            textTransform={'none'}
            marginLeft={15}
            paddingTop={4}
            letterSpacing={-1}
          >
            DELIVERY OPTIONS
          </Typography>

          <TextField
            variant="outlined"
            sx={{
              fontFamily: 'Jost',
              marginLeft: 15,
              marginTop: 1,
              backgroundColor: '#e3e1e1',
              borderRadius: '5px'
            }}
            fullWidth
            label="CHECK PINCODE"
          ></TextField>
          <img
            src="/assets/fourlogos.png"
            style={{
              marginLeft: 130,
              marginTop: 15,
              width: 24,
              position: 'absolute'
            }}
          />
          <Typography
            position={'absolute'}
            fontWeight={100}
            color={'#444'}
            fontSize={'16px'}
            fontFamily={'Jost'}
            textTransform={'none'}
            marginLeft={20.5}
            paddingTop={1.8}
          >
            100% Original
          </Typography>
          <Typography
            position={'relative'}
            fontWeight={100}
            color={'#444'}
            fontSize={'16px'}
            fontFamily={'Jost'}
            textTransform={'none'}
            marginLeft={20.5}
            paddingTop={6.5}
          >
            Free Delivery on items above Rs. 799
          </Typography>
          <img
            src="/assets/return.png"
            style={{
              marginLeft: 130,
              marginTop: 15,
              width: 24,
              position: 'absolute'
            }}
          />
          <Typography
            color={'#444'}
            fontSize={'16px'}
            fontFamily={'Jost'}
            textTransform={'none'}
            marginLeft={20.5}
            paddingTop={2}
          >
            Easy 15 days returns and exchanges
          </Typography>
        </Grid>
      </Grid>

      <div>
        <Typography
          marginTop={8}
          fontFamily={'Lato'}
          fontSize={'30px'}
          fontWeight={700}
          display={'flex'}
          justifyContent={'center'}
        >
          Customer Reviews
        </Typography>


      </div>
    </>
  )
}

export default ProductDetailsPage
