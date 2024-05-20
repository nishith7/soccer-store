import * as React from 'react'
import axios from 'axios'
import {
  Alert,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Slide,
  Snackbar,
  Typography
} from '@mui/material'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import { useWishlist } from '../Context/WishListContext'

const ProductCard = ({
  myData,
  setShowCategory = () => {},
  handleCategoryChange = () => {}
}) => {
  const navigate = useNavigate()
  const ITEM_HEIGHT = 48
  const ITEM_PADDING_TOP = 8
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  }
  const [selectBrand, setSelectBrand] = useState([])
  const { addToWishlist } = useWishlist()

  const handleChange = (e) => {
    const {
      target: { value }
    } = e
    setSelectBrand(
      //   // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(', ') : value
    )
  }

  const openDetailsPage = (item) => {
    console.log('----->>')
    navigate('/productdetails', { state: item })
  }
  const [open, setOpen] = useState(false)
  const handleSnackBar = () => {
    setOpen(false)
  }
  const [clickedStates, setClickedStates] = useState({})
  const handleButtonClick = (id) => {
    // Toggle the clicked state for the specific button
    setClickedStates(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));

  };

  const brands = ['Adidas', 'Nike', 'Puma']
  const handleFilter = useCallback(() => {
    if (selectBrand.length > 0) {
      axios
        .get(
          `http://localhost:4000/v1/products?category=${myData[0]?.category}&brand=${selectBrand}`
        )
        .then((response) => {
          setShowCategory(response?.data)
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      //     axios
      // .get(`http://localhost:4000/v1/products?category=${myData[0]?.category}`)
      // .then((response) => {
      //   setShowCategory(response?.data);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
      handleCategoryChange(`${myData[0]?.category}`)
    }
  }, [selectBrand, setShowCategory, handleCategoryChange])
  useEffect(() => {
    handleFilter()
  }, [handleFilter])

  return (
    <>
      <Grid container justifyContent="flex-end" spacing={4}>
        <Grid item>
          <FormControl sx={{ width: 120 }}>
            <InputLabel
              sx={{
                textDecorationColor: 'black',
                color: 'black',
                fontWeight: 'bold',
                fontSize: 14,
                textAlign: 'center'
              }}
              id="demo-multiple-checkbox-label"
            >
              FILTERS
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={selectBrand}
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(',')}
              MenuProps={MenuProps}
              sx={{
                height: 32,
                paddingBottom: 6

                // textAlign:"center"
              }}
            >
              {brands.map((brand) => (
                <MenuItem key={brand} value={brand}>
                  <Checkbox checked={selectBrand.includes(brand)} />
                  <ListItemText primary={brand} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={brandName}
      disableCloseOnSelect

      getOptionLabel={(brandName) => brandName.brand}
      // onChange={(e)=>handleCheckbox(e)}
      // value={selectBrand}
      renderOption={(props, brandName, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 4 }}
            checked={selected}
            onChange={()=> handleCheckbox(brandName.brand)}
            // onClick={()=>handleFilter()}
          />

          {brandName.brand}
        </li>
      )}
      style={{ width: 250}}
      renderInput={(params) => (
        <TextField {...params} label="Filter" placeholder="Search for your favourite brands..." />
      )}
    /> */}
          {/* <Button style={{textDecorationColor:"black",color:"black",fontWeight:"bold"}} variant="outlined" endIcon={<FilterListOutlined/>}>Filter</Button> */}
        </Grid>
        <Grid item marginRight={4}>
          <Button
            style={{
              textDecorationColor: 'black',
              color: 'black',
              fontWeight: 'bold'
            }}
            variant="outlined"
            // onClick={handleClick}
          >
            View All
          </Button>
        </Grid>
      </Grid>
      <div style={{ marginTop: 20 }}>
        <Grid container spacing={6} justifyContent={'center'}>
          {myData?.slice(0, 4).map((item) => (
            <Grid item key={item?.id} sx={{ position: 'relative' }}>
              <Button
                onClick={() => {
                  addToWishlist()
                  setOpen(true)
                  handleButtonClick(item?.id)
                }}
                sx={{
                  position: 'absolute',
                  top: 32,
                  right: -22,
                  zIndex: 1,
                  '& svg': {
                    fill: clickedStates[item.id] ? 'red' : 'black' // This targets the SVG directly
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 23.686 21.282"
                >
                  <path
                    id="Wishlist"
                    d="M429.974,158.147a6.554,6.554,0,0,0-7.513-1.353,10.42,10.42,0,0,0-1.585.975c-.227.158-.461.322-.7.478l-.044-.041c-.08-.075-.181-.168-.287-.258a7.262,7.262,0,0,0-3.554-1.734,6.587,6.587,0,0,0-3.855.622,6.722,6.722,0,0,0-4.005,6.365,9.832,9.832,0,0,0,2.271,5.963,33.161,33.161,0,0,0,8.994,8.08,1,1,0,0,0,.556.18,1.356,1.356,0,0,0,.735-.27,39.783,39.783,0,0,0,6.037-4.8,17.25,17.25,0,0,0,4.6-6.559A6.969,6.969,0,0,0,429.974,158.147Zm-10.538,1.743c.322.408.567.581.819.581h0c.252,0,.5-.175.823-.585a5.174,5.174,0,0,1,6.694-1.406,5.5,5.5,0,0,1,2.412,6.627A12.661,12.661,0,0,1,427.5,169.5a34.86,34.86,0,0,1-6.978,5.976.546.546,0,0,1-.476.034c-3.175-2.185-6.425-4.7-8.689-8.246a6.771,6.771,0,0,1-1.232-5.081,5.4,5.4,0,0,1,5.631-4.357h.006A5.055,5.055,0,0,1,419.436,159.889Z"
                    transform="translate(-408.43 -156.142)"
                  ></path>
                </svg>
              </Button>
              <Button onClick={() => openDetailsPage(item)}>
                <Card
                  sx={{
                    width: 340,
                    height: 440,
                    // borderRadius: 2,
                    marginTop: 2,
                    // position: 'absolute',
                    boxShadow: 'none'
                  }}
                >
                  <Paper>
                    <img
                      src={item?.imgSrc}
                      alt="ok"
                      style={{
                        maxWidth: '90%',
                        maxHeight: '100%',
                        aspectRatio: 1
                      }}
                    ></img>
                  </Paper>

                  <CardContent
                    sx={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}
                  >
                    <div>
                      <Typography
                        variant="subtitle2"
                        fontWeight={500}
                        color={'darkslategray'}
                        fontFamily={
                          'Helvetica Now Text Medium, Helvetica, Arial, sans-serif'
                        }
                        textTransform={'none'}
                        textAlign={'left'}
                        marginTop={1}
                      >
                        {item?.type}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        fontWeight={550}
                        color={'#252525'}
                        textTransform={'none'}
                        textOverflow={'clip'}
                        textAlign={'left'}
                      >
                        {item?.name}
                      </Typography>

                      <Typography
                        paddingTop={1}
                        textAlign={'left'}
                        color={'black'}
                        textTransform={'none'}
                      >
                        Rs.{item?.price}.00
                      </Typography>
                      <Typography color={'white'} level="body-xs">
                        {item?.description}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Button>
            </Grid>
          ))}
        </Grid>
        <Snackbar
          open={open}
          onClose={handleSnackBar}
          autoHideDuration={3000}
          TransitionComponent={Slide}
          TransitionProps={{ direction: 'left' }}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert severity={'success'}>
            <Typography variant="body2SemiBold">
              {'Added to Wishlist Succesfully'}
            </Typography>
          </Alert>
        </Snackbar>
      </div>

      {/* {open && selectedItem && (
        <ProductCardDialog
          open={open}
          myData={selectedItem}
          setOpen={setOpen}
        />
      )} */}
      {/* <NavBar wishListCount={wishListCount} /> */}
    </>
  )
}

export default ProductCard

// useEffect((item)=>{
//   openDetailsPage(item);

// },[])
// const toggleDialog = (item) => {
//   setSelectedItem(item);
//   setOpen(true);
// };
// const handleClick = () => {
//   navigate("/allproducts", { state: myData });
// };
