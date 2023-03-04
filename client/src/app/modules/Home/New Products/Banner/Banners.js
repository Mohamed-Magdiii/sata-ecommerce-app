import React, { useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { getHome } from "../../../../modules/actions/products/productsActions";
import { connect } from "react-redux";
function Banners({ getHome, products: { home } }) {
  useEffect(() => {
    getHome();
  }, [getHome]);
  console.log(home.homePage.banner)
  return (
    <div className="container">
      <div className="row">
        {home &&
          home.homePage.banner.map((banner) =>
          (
            <div className="col-lg-6" key={banner._id}>
              <Jumbotron style={{ backgroundImage:`url(${process.env.REACT_APP_API_URL}/${banner.image})` }}
              >
                <p>{banner?.title.en}</p>

                <p>
                  <Button variant="primary">Go Shop</Button>
                </p>
              </Jumbotron>
            </div>
          ))}
      </div>
    </div>
  );
}
const mapstateToProps = (state) => ({
  products: state.products,
});
export default connect(mapstateToProps, { getHome })(Banners);
