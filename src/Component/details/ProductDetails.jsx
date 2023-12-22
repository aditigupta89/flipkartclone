import {
  Typography,
  Box,
  Table,
  TableBody,
  TableRow,
  TableCell,
  styled,
} from "@mui/material";
import React from "react";
import { LocalOffer as Badge } from "@mui/icons-material";

const SmallText = styled(Box)`
  font-size: 14px;
  verticle-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;
const StyleBadge = styled(Badge)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
`;
const ColumnText = styled(TableRow)`
font-size:14px;
verticle-align: baseline;
margin-top:10px;
&>td{
  font-size:14px;
  border:none;
}
`

const ProductDetails = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  return (
    <>
      <Typography>{product?.title?.longTitle}</Typography>
      <Typography
        style={{ fontSize: "14px", marginTop: "5px", color: "#878787" }}
      >
        8 Ratings 7 Reviews
        <Box component="span">
          <img
            src={fassured}
            alt="fassured"
            style={{ width: 77, marginLeft: "20px" }}
          />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product?.price?.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{product?.price?.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#388E3C" }}>
          {product?.price?.discount}off
        </Box>
      </Typography>
      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography>
          <StyleBadge />
          10% off on HDFC Bank Credit Card EM I Transactions, up to ₹1,500 on
          orders of ₹7,500 and aboveT&C
        </Typography>
        <Typography>
          <StyleBadge />
          Extra 1% Off Up to ₹300 on UPI TransactionsT&C
        </Typography>
        <Typography>
          <StyleBadge />
          10% off on Federal Bank Credit Card and Credit EMI Txns, up to ₹2,000
          on orders of ₹5,000 and aboveT&C
        </Typography>
        <Typography>
          <StyleBadge />
          Buy this product and Get Extra ₹100 Off on Select Room HeatersT&C
        </Typography>
      </SmallText>

      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()}| ₹40
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Warrenty</TableCell>
            <TableCell>No Warrenty</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <Box component="span" style={{ color: "#2874f0" }}>
                SuperCommnet
              </Box>
              <Typography>GST invoice available </Typography>
              <Typography>
                View more sellers starting from ₹{product?.price?.cost}{" "}
              </Typography>
            </TableCell>
          </ColumnText>
          <ColumnText >
            <TableCell colSpan={2}>
              <img src={adURL} alt="add" style={{width:390}}/>
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell>{product?.description}</TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetails;
