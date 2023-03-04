import React from "react";
import { FormattedMessage } from "react-intl";
import { BeatLoader } from "react-spinners";
import TableTopHeader from "../../shared/TableTopHeader";
import { useGetMostWatchedProducts } from "../shared/axiosFunctions";
import Shared from "../shared/shared";

const MostWatchedProducts = () => {
  const { isLoading, error, isError, data } = useGetMostWatchedProducts();
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  } else if (isError) {
    return <h1>{error.message}</h1>;
  } else
    return (
      <div className="card card-custom gutter-b">
        <TableTopHeader
          heading={
            <FormattedMessage id="TABLE.TITLE.PRODUCT.MOST.BOUGHT.ALL" />
          }
          title={<FormattedMessage id="TABLE.TITLE.PRODUCT.INCLUDES" />}
        />
        {data && <Shared data={data?.data.data} />}
      </div>
    );
};

export default MostWatchedProducts;
