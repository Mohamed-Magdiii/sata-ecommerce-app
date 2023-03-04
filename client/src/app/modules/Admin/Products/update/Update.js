import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByID } from "../../../actions/products/productsActions";
import ProductForm from "../ProductFormComponent/ProductForm";
const Update = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductByID(match.params.id));
  }, [match, dispatch]);
  const { product } = useSelector((state) => state.products);
  return product ? <ProductForm prodInfo={product} /> : <></>;
};

export default Update;
