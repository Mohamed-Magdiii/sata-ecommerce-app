import React from "react";
import { useParams } from "react-router-dom";
import Title from "./Title";
const CustomerFormComponent = () => {
  const { id } = useParams();
  return (
    <Title id={id} />
  );
};

export default CustomerFormComponent;
