import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import styled from "@emotion/styled";

const Component =styled(Menu)`
margin-top:5px;
`
const Logout=styled(Typography)`
margin-left:20px;
font-size:14px
`

const Profile = ({ account ,setAccount}) => {
  const [open, setOpen] = useState(false);
  const handelClick = (e) => {
    setOpen(e.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const logoutUser=()=>{
    setAccount('')
  }
  return (
    <>
      <Box onClick={handelClick}>
        <Typography style={{ marginTop: "2px"}}>{account}</Typography>
      </Box>
      
      <Component open={open} onClose={handleClose} anchorEl={open}>
        <MenuItem onClick={()=>{handleClose();logoutUser();}}>
           <PowerSettingsNewIcon color="primary" fontSize="small"/>
        <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </>
  );
};

export default Profile;
