import { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./Slide";
import { Box,styled} from "@mui/material";
import MidSlide from '../Home/MidSlide';
import { getProducts as listProducts} from "../../redux/actions/productActions";
import { useDispatch,useSelector } from "react-redux";
import MidSection from "./MidSection";
const Component = styled(Box)`
  padding: 5px;
  background: #f2f2f2;
`;
const Home = () => {
  
 
  const getProducts = useSelector(state => state.getProducts);
  const { products } = getProducts;
  console.log("Products:", products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  
  return (
    <>
      <Navbar />
      <Component>
        <Banner/>
        
        <MidSlide products={products} title="Deal for the Day" timer={true}/>
        <MidSection/>
        <Slide   products={products} title="Discount for you" timer={false}/>
        <Slide   products={products} title="Top Selection" timer={false}/>
        <Slide   products={products} title="Suggesting Items" timer={false}/>
        <Slide   products={products} title="Recomnded Items" timer={false}/>
        <Slide   products={products} title="Top Deals on Accessries" timer={false}/>

      </Component>
    </>
  );
};

export default Home;
