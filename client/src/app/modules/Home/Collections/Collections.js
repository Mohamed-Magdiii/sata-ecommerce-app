import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllProductBySubCategoryByCategory } from "../../actions/category/categoryActions";
import "./collections.css";
const Collections = ({ categories }) => {
  const history = useHistory();
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          {
            categories.map(category => (
              <div key={category._id} className="col-md-4 col-xs-6">
                <div className="shop">
                  <div className="shop-img">
                    <img
                       src={`${process.env.REACT_APP_API_URL}/${category.image}`}
                      alt=""
                    />
                  </div>
                  <div className="shop-body">
                    <h3>
                      {category.title && category.title.en}
                      <br />
                      Collection
                    </h3>
                    <span className="cta-btn" onClick={()=>{ 
                      history.push(`/Products/${category._id}`);
                          getAllProductBySubCategoryByCategory(category._id);}}>
                      Shop now <i className="fa fa-arrow-circle-right"></i>
                    </span>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default connect(null , {getAllProductBySubCategoryByCategory})(Collections);
