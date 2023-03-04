import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetchCategories } from "../../../actions/category/categoryActions";
import CardBody from "../shared/CardBody";
import { BeatLoader } from "react-spinners";
import TableTopHeader from "../../shared/TableTopHeader";
import { FormattedMessage } from "react-intl";

const CategoryComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchCategories());
  }, [dispatch]);
  const data = useSelector((state) => state.category);
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  }
  if (data.error) {
    return <h1>{data.error}</h1>;
  }
  return (
    <div className="card card-custom">
      <TableTopHeader
        heading={<FormattedMessage id="TABLE.TITLE.CATEGORY.ALL" />}
        title={<FormattedMessage id="TABLE.TITLE.CATEGORY.INCLUDES" />}
      />
      {data && <CardBody allCategories={data.categories} />}
    </div>
  );
};

export default CategoryComponent;
