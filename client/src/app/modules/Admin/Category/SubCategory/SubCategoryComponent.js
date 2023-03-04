import React, { useEffect } from "react";
import TableTopHeader from "../../shared/TableTopHeader";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { hookFetchRelated } from "../../../actions/subcategory/subcategoryActions";
import { BeatLoader } from "react-spinners";
import SubTable from "./SubTable";
function SubCategoryComponent() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFetchRelated(id));
  }, [dispatch, id]);

  const data = useSelector((state) => state.subcategory);
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  } else
    return (
      <div className="card card-custom">
        <TableTopHeader
          heading={"Related Sub Category"}
          title={"Including Some Category Information"}
        />
        {data.subCategories && (
          <SubTable subCategories={data.subCategories} id={id} />
        )}
      </div>
    );
}

export default SubCategoryComponent;
