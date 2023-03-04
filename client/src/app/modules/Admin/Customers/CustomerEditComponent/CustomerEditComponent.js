import React from "react";
import { useFetchCustomerById } from "../shared/axiosFunction";
import { useParams } from "react-router-dom";
import Title from "./Title";
const CustomerEditComponent = () => {
  const { id } = useParams();
  const { data } = useFetchCustomerById(id);
  return (
    <Title data={data} id={id} />
  );
};

export default CustomerEditComponent;
