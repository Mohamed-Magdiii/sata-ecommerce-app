import React, { useEffect } from "react";
import { BeatLoader } from "react-spinners";
import { useSelector, useDispatch } from "react-redux";
import {
  FetchProducts,
  FetchVendorProducts,
} from "../../../actions/products/productsActions";
import TableTopHeader from "../../shared/TableTopHeader";
import { FormattedMessage } from "react-intl";
import Shared from "../shared/shared";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user.roles[0] === 1) {
      dispatch(FetchProducts());
    } else {
      dispatch(FetchVendorProducts());
    }
  }, [user, dispatch]);
  const data = useSelector((state) => state.products);
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else {
    return (
      <div className="card card-custom gutter-b">
        <TableTopHeader
          heading={<FormattedMessage id="TABLE.TITLE.PRODUCT.ALL" />}
          title={<FormattedMessage id="TABLE.TITLE.PRODUCT.INCLUDES" />}
        />
        {data && <Shared data={data.products} />}
      </div>
    );
  }
};

export default ProductsPage;
