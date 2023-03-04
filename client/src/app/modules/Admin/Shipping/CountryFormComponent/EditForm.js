import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCountryId } from '../../../actions/shippingRegion/country';
import EditFormComponent from './EditFormComponent';

function EditForm({match ,getCountryId , country:{country}}) {
   useEffect(()=>{
    getCountryId(match.params.id)
   },[getCountryId,match.params.id]) 
  return <div>
      {country && (
        <EditFormComponent country={country} id={match.params.id}/>
      )}
  </div>;
}
const mapStateToProps= state =>({
  country : state.country
})

export default connect(mapStateToProps , {getCountryId})(EditForm);
