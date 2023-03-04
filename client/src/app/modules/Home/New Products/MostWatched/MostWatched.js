import React from "react";
import { useGetNewProduct } from "../shared/axiosFunctions";
// import { useGetMostWatched } from "../shared/axiosFunctions";
// import { useGetNewProduct } from "../shared/axiosFunctions";
import NewProducts from "../shared/NewProducts";
const MostWatched = () => {
  const { data } = useGetNewProduct();
  if (data !== null || data !== undefined) {
    const filterProduct = data && data?.data.filter((p) => p.onsale === true);
    return (
      <div>
        {data && <NewProducts data={filterProduct} title={"On Sale"} />}
      </div>
    );
  } else {
    return <div>No Items</div>;
  }
};

export default MostWatched;
