import React from "react";
import { FormattedMessage } from "react-intl";
import { BeatLoader } from "react-spinners";
import TableTopHeader from "../../shared/TableTopHeader";
import { useGetMostBought } from "../shared/axiosFunctions";
import Shared from "../shared/shared";
function MostBought() {
  const { data, isLoading, isError, error } = useGetMostBought(3);
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
        {data && <Shared data={data?.data} />}
      </div>
    );
}

export default MostBought;
