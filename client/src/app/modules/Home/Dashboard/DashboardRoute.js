import React, { useEffect } from "react";
import CarouselComponent from "../Carousel/CarouselComponent";
import Collections from "../Collections/Collections";
import HotDeal from "../HotDeal/HotDeal";
import { useGetHome } from "./shared/axiosFunctions";
import { BeatLoader } from "react-spinners";
import News from "../New Products/News/News";
import MostWatched from "../New Products/MostWatched/MostWatched";
import Blogs from "../Blogs/Blog";
import Banners from "../New Products/Banner/Banners";
import Brands from "../New Products/Brands/Brands";
import { getHome } from "../../actions/products/productsActions";
import { connect } from "react-redux";

const DashboardRoute = ({products:{home}}) => {
  useEffect(()=>{
    getHome()
         // eslint-disable-next-line
  },[getHome])
  const { isLoading, isError, error } = useGetHome();
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  }
  return (
    <>
      {home  && (
        <div>
          <CarouselComponent  sliders={home.homePage.sliders}/>
          <Collections categories={home.homePage.limitCategories} />
          <News />
          <HotDeal />
          <MostWatched />
          <Banners/>
          <Brands />
          <Blogs />
        </div>
      )}
    </>
  );
};
const mapStateToProps = state =>({
  products:state.products
})
export default connect(mapStateToProps , {getHome})(DashboardRoute);
