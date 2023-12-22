import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
import { Box, Grid, styled } from "@mui/material";
import ActionItem from "./ActionItem";
import ProductDetails from "./ProductDetails";

const Component = styled(Box)`
  background: #f2f2f2;
`;
const Container = styled(Grid)`
  background: #ffff;
  display: flex;
`;
const RightContainer = styled(Grid)`
  margin-top: 50px;
  padding-left:25px;
  &>p{
    margin-top:10px;
  }
`;

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, loading, product]);
  console.log(product);
  
  return (
    <>
      <Component>
        {product && Object.keys(product).length && (
          <Container container>
            <Grid item lg={4} md={4} sm={8} xs={12}>
              <ActionItem product={product} />
            </Grid>
            <RightContainer item lg={8} md={8} sm={8} xs={12}>
              
            <ProductDetails product={product}/>
            </RightContainer >
          </Container>
        )}
      </Component>
    </>
  );
};

export default DetailView;