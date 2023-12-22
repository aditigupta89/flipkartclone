import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Box, Typography, Button, Divider, styled } from "@mui/material";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Component = styled(Box)`
  margin-top: 10px;
  background: white;
  overflow:hidden
`;
const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
`;
const Timer = styled(Box)`
  display: flex;
  align-items: center;
  color: #7f7f7f;
`;
const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  margin-right: 75px;
  line-height: 32px;
`;
const ViewButton = styled(Button)`
  margin-left: auto;
  background: #2874f0;
  color: #fff;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 600;
`;
const Image = styled("img")({
  width: "auto",
  height: 150,
});
const Text = styled(Typography)`
  margin-top: 5px;
  font-size: 14px;
`;

const Slide = ({ products, title, timer }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours}:{minutes}:{seconds} Left
      </Box>
    );
  };
  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {timer && (
          <Timer>
            <img src={timerURL} alt="timer" />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Timer>
        )}
        <ViewButton>View All</ViewButton>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        sidesToSlide={1}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
         {Array.isArray(products) && products.length > 0 ? (
    products.map((product) => (
      <Link to={`product/${product.id}`} style={{textDecoration:'none'}} key={product.id}>
      <Box textAlign="center" style={{ padding: "25px 15px" }} >
        <Image src={product.url} alt="products" />
        <Text style={{ color: "green" }}>{product.discount}</Text>
        <Text style={{ fontWeight: 600, color: "#212121" }}>
          {product.title.shortTitle}
        </Text>
        <Text style={{ opacity: 0.6, color: "#212121" }}>
          {product.tagline}
        </Text>
      </Box>
      </Link>
    ))
  ) : (
    <p>No products available</p>
  )}
      </Carousel>
    </Component>
  );
};
export default Slide;
