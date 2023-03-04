import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {addNewUser} from '../../../../modules/actions/customers/customersActions' 
const CardFooter = ({ data , addNewUser}) => {
  const history = useHistory();
  // const { mutate } = useUpdateUser()
  const handleSubmit = () => {
    // console.log(data);
       addNewUser(data)
      //  history.push('/admin/customer-page')
 }
  return (
    <div className="card-footer pb-0">
      <div className="row">
        <div className="col-xl-2"></div>
        <div className="col-xl-7">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-9">
              <span className="btn btn-light-primary font-weight-bold" onClick={handleSubmit}>
                Submit
              </span>
              <span onClick={() => history.goBack()} className="btn btn-clean font-weight-bold">Cancel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, {addNewUser})(CardFooter);
