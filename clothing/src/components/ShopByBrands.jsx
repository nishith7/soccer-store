import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const ShopByBrands = () => {
  return (
    <>
      <div style={{ width: 1792, height: 276, backgroundColor: '#f5f5f5' }}>
        <Typography
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          fontWeight={700}
          color={'#00000'}
          fontSize={'24px'}
          fontFamily={'Lato'}
          paddingTop={3}
        >
          SHOP BY BRANDS
        </Typography>
        {/* <Button> */}
        <Grid
          display={'flex'}
          marginTop={6}
          container
          gap={20}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Grid item>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="pre-logo-svg"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="100"
              height="100"
              fill="none"
            >
              <path
                fill="#111111"
                fill-rule="evenodd"
                d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Grid>

          <Grid item>
            <svg
              viewBox="100 100 50 32"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="38"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M 150.07 131.439 L 131.925 100 L 122.206 105.606 L 137.112 131.439 L 150.07 131.439 Z M 132.781 131.439 L 120.797 110.692 L 111.078 116.298 L 119.823 131.439 L 132.781 131.439 Z M 109.718 121.401 L 115.509 131.439 L 102.551 131.439 L 100 127.007 L 109.718 121.401 Z"
                fill="black"
              ></path>
            </svg>
          </Grid>
          <Grid item>
            <img src="/assets/puma.svg" height={100} width={100} alt="ok" />
          </Grid>
          <Grid item>
          <img src="/assets/under-armour.svg" height={100} width={100} alt="ok" />
          </Grid>
        </Grid>

        {/* </Button> */}
      </div>
    </>
  )
}

export default ShopByBrands
