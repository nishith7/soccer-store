import { Typography } from '@mui/material'
import ProductCard from './ProductCard'

export default function DealOftheDay() {
  const customStyle = {
    marginTop: 100
    // justifyItem: "center",
  }

  const myData = [
    {
      id: 0,
      name: 'Addidas Predator',
      imgSrc: 'assets/boots/predator.jpg',
      price: 200,
      description: 'Good material, minimal design.'
    },
    {
      id: 1,
      name: 'Addidas Predator',
      imgSrc: 'assets/boots/predator.jpg',
      price: 200,
      description: 'Good material, minimal design.'
    },
    {
      id: 2,
      name: 'Addidas Predator',
      imgSrc: 'assets/boots/predator.jpg',
      price: 200,
      description: 'Good material, minimal design.'
    },
    {
      id: 3,
      name: 'Addidas Predator',
      imgSrc: 'assets/boots/predator.jpg',
      price: 200,
      description: 'Good material, minimal design.'
    }
  ]

  return (
    <>
      <div style={customStyle}>
        <Typography
          //  variant="h4"
          fontFamily={'Lato'}
          fontSize={'24px'}
          fontWeight={700}
          //  lineHeight={"33.6px"}
          display={'flex'}
          justifyContent={'center'}
        >
          OUR BESTSELLERS
        </Typography>
      </div>
      <ProductCard myData={myData} />
    </>
  )

  //   </Box>;
}
