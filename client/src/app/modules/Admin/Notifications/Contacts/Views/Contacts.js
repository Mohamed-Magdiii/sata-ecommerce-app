import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hookFetchAll } from "../../../../actions/contact/contactActions";
import TableTopHeader from "../../../shared/TableTopHeader";
import { BeatLoader } from "react-spinners";
import Table from "./Table";

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hookFetchAll());
  }, [dispatch]);
  const data = useSelector((state) => state.contact);
  console.log(data);
  if (data.loading) {
    return <BeatLoader loading={data.loading} />;
  } else if (data.error) {
    return <h1>{data.error}</h1>;
  }
  return (
    <div className="card card-custom">
      <TableTopHeader
        heading={"All contacts"}
        title={"Including Name, Email, Subject, ...etc"}
      />
      <Table contacts={data.contacts} />
    </div>
  );
};

export default Contacts;
