import { Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Categories() {

 
  const [showCategory, setShowCategory] = useState([]);
 
  const handleCategoryChange=useCallback((category)=>{
      axios.get(`http://localhost:4000/v1/products?category=${category}`).then(response=>{
        setShowCategory(response?.data);
      }
      ).catch(error=>{
        console.log(error);
      });
    },[])
  useEffect(()=>{
handleCategoryChange('studs');
  },[handleCategoryChange])
 
  return (
    <>
      <Typography
        marginTop={8}
        // variant="h4"
        fontFamily={"Lato"}
        fontSize={"24px"}
        fontWeight={700}
        // lineHeight={"33.6px"}
        display={"flex"}
        justifyContent={"center"}
      >
        FEATURED COLLECTIONS
      </Typography>
      <Grid marginTop={6} container spacing={2} justifyContent={"center"}>
        <Grid item></Grid>
        <Grid item>
          <Button
            disableElevation
            size="large"
            onClick={()=>handleCategoryChange('studs')}
            sx={{
              color: "black",
              fontSize: 16,
              border: 2,
              fontWeight: 550,

              "&:hover": {
                backgroundColor: "rgba(125, 125, 125, 0.8)",
              },
              "&:focus":{
                backgroundColor: "rgba(125, 125, 125, 0.8)"
              }
            }}
          >
            Boots
            {/* shoes */}
          </Button>
        </Grid>
        <Grid item>
          <Button
            disableElevation
            size="large"
            onClick={()=>handleCategoryChange('training')}
            sx={{
              color: "black",
              fontSize: 16,
              border: 2,
              fontWeight: 550,
              "&:hover": {
                backgroundColor: "rgba(125, 125, 125, 0.8)",
              },
              "&:focus":{
                backgroundColor: "rgba(125, 125, 125, 0.8)"
              }
            }}
          >
            
            Training Kit
          </Button>
        </Grid>
        <Grid item>
          <Button
            disableElevation
            size="large"
            onClick={()=>handleCategoryChange('jersey')}
            sx={{
              color: "black",
              fontSize: 16,
              border: 2,
              fontWeight: 550,
              "&:hover": {
                backgroundColor: "rgba(125, 125, 125, 0.8)",
              },
              "&:focus":{
                backgroundColor: "rgba(125, 125, 125, 0.8)"
              }
            }}
          >
            Jersey
          </Button>
        </Grid>
        
        <Grid item>
          <Button
            disableElevation
            size="large"
            onClick={()=>handleCategoryChange('merchandise')}
            sx={{
              color: "black",
              fontSize: 16,
              border: 2,
              fontWeight: 550,
              "&:hover": {
                backgroundColor: "rgba(125, 125, 125, 0.8)",
              },
              "&:focus":{
                backgroundColor: "rgba(125, 125, 125, 0.8)"
              }
            }}
          >
          Merchandise
          </Button>
        </Grid>
      </Grid>
      <ProductCard myData={showCategory} setShowCategory={setShowCategory} handleCategoryChange={handleCategoryChange}/>
     
    </>
  );
}
