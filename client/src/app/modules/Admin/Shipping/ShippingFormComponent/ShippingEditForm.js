import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getShippingById } from '../../../actions/shippingRegion/shipping';
import ShippingEditComponent from './ShippingEditComponent';

function CityEditForm({history , match ,getShippingById , country:{region}}) {
   useEffect(()=>{
    getShippingById(match.params.id)
   },[getShippingById]) 
  return <div>
      {region && (<ShippingEditComponent region={region} id={match.params.id} history={history}/>
      )}
  </div>;

}
const mapStateToProps= state =>({
  country : state.country
})

export default connect(mapStateToProps , {getShippingById})(CityEditForm);
