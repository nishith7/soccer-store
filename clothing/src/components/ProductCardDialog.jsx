import { Close } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Dialog,
  DialogActions,
  IconButton,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
// import shoeData from "../data/shoeData";

const ProductCardDialog = ({ open, myData, setOpen }) => {
  console.log(myData);
  return (
    <Dialog
      sx={{
        // padding:4,
        maxWidth: "auto",
        maxHeight: "auto",
        // display:"flex",
        // justifyContent:"center",
        // justifyItems:"center",
      }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <DialogActions>
        <IconButton edge="start" color="inherit" aria-label="close">
          <Close />
        </IconButton>
      </DialogActions>
      {/* {/* <Card */}
      {/* sx={{

          height: "60%",
          borderRadius: 2,
          marginTop: 2,
        }} */}
      {/* > */}
      {/* <Paper>  */}
      <img
        src={myData?.imgSrc}
        // alt="Current Image"
        alt=""
        //     style={{
        // //       display:"flex",
        // // justifyContent:"center",
        // // justifyItems:"center",
        // // padding:2,
        //       height:"40%",
        //       width:"auto",
        //       maxHeight:"40%",
        //       maxWidth:"100%",
        //     }}
      ></img>
      {/* </Paper> */}

      <CardContent sx={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
        <div>
          <Typography
            variant="overline"
            fontWeight={500}
            color={"darkslategray"}
            textTransform={"none"}
            textAlign={"left"}
            marginTop={2}
          >
            {myData?.type}
          </Typography>
          <Typography
            variant="subtitle1"
            fontWeight={550}
            color={"black"}
            textTransform={"none"}
            textOverflow={"clip"}
            textAlign={"left"}
          >
            {myData?.name}
          </Typography>

          {/* <Typography
            paddingTop={1}
            //   fontWeight={"600"}
            //   fontSize={"15px"}
            textAlign={"left"}
            //   color={"rgb(37, 37, 37)"}
            //   fontFamily={"lato-regular"}
            textTransform={"none"}
          >
            Rs.{myData?.price}.00
          </Typography> */}
          <Typography
            paddingTop={1}
            textAlign={"left"}
            color={"black"}
            textTransform={"none"}
          >
            {/* <ListItem color="black"> */}
            <ul>
              <li>{myData.description}</li>
            </ul>
            {/* </ListItem> */}
          </Typography>
        </div>
      </CardContent>
      {/* </Card> */}
    </Dialog>
  );
};

export default ProductCardDialog;
