import { Box, InputBase, List, ListItem, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { getProducts } from "../../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SearchContainer = styled(Box)`
  background: #ffff;
  width: 38%;
  margin-left: 10px;
  border-radius: 2px;
  display: flex;
`;
const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;
const SearchIconWrapper = styled(Box)`
  color: blue;
  margin-left: auto;
  padding: 5px;
  display: flex;
  
  `;
const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;
const Search = () => {
  const [text, setText] = useState("");
  const { products } = useSelector((state) => state.getProducts);
  const dispatch=useDispatch()
  const getText = (text) => {
    setText(text);
  };
  useEffect(()=>{
dispatch(getProducts())
  },[dispatch])
  return (
    <>
      <SearchContainer>
        <InputSearchBase
          placeholder="Search for products,brands and more"
          onChange={(e) => getText(e.target.value)}
        />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        {
          text &&
          <ListWrapper>
            {
           Array.isArray(products) && products?.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                <ListItem>
                  <Link to={`/product/${product.id}`} style={{ textDecoration:'none', color:'inherit'}}
                         >
                  
                  {product?.title?.longTitle}
                  </Link>
                </ListItem>
              ))
            }
          </ListWrapper>
        }
      </SearchContainer>
    </>
  );
};

export default Search;
