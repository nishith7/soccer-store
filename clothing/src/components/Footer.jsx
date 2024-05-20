import * as React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box } from '@mui/material'
import '@fontsource/lato'

const footerStyle = {
  bottom: 0,
  width: 'auto'
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        p: 3,
        ...footerStyle
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid item xs={12} sm={4}>
            <Typography
              fontSize={20}
              fontWeight={800}
              fontFamily={'"Lato'}
              variant="h6"
              color="#252525"
              gutterBottom
            >
              About Us
            </Typography>
            <Typography fontSize={16} fontFamily={'"Lato'} color="#252525">
              SoccerStore specializes in high-quality boots and jerseys for
              clubs and country. Our experienced team and advanced technology
              ensure successful projects in various environments. We are
              committed to quality, style, and professionalism.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              fontSize={20}
              fontWeight={800}
              fontFamily={'"Lato'}
              variant="h6"
              color="#252525"
              gutterBottom
            >
              Contact Us
            </Typography>
            <Typography fontSize={16} fontFamily={'"Lato'} color="#252525">
              4, Lunzua Road, Off Addis Ababa Drive, Rhodspark, Lusaka, Zambia
            </Typography>
            <br></br>
            <Typography fontSize={16} fontFamily={'"Lato'} color="#252525">
              Email: info@soccerstore.com
            </Typography>
            <br></br>
            <Typography fontSize={16} fontFamily={'"Lato'} color="#252525">
              Phone: +91 9638383663
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              fontSize={20}
              fontWeight={800}
              fontFamily={'"Lato'}
              variant="h6"
              color="#252525"
              gutterBottom
            >
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="#252525">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="#252525"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="#252525">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography
            fontSize={20}
            fontWeight={700}
            fontFamily={'"Lato'}
            variant="body2"
            color="#252525"
            align="center"
          >
            {'Copyright © '}
            <Link color="#252525" href="https://your-website.com/">
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
