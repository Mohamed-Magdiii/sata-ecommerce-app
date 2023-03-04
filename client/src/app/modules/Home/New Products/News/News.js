import React from "react";
import NewProducts from "../shared/NewProducts";
import { useGetNewProduct } from "../shared/axiosFunctions";
const News = () => {
  const { data } = useGetNewProduct();
  return (
    <div>
      {data && <NewProducts data={data?.data} title={"New Products "} />}
    </div>
  );
};

export default News;
