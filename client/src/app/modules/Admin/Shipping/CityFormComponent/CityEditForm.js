import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCityId } from '../../../actions/shippingRegion/city';
import CityEditComponent from './CityEditComponent';

function CityEditForm({match ,getCityId , country:{city}}) {
   useEffect(()=>{
    getCityId(match.params.id)
   },[getCityId]) 
    // console.log(city);


  return <div>
      {city && (<CityEditComponent city={city} id={match.params.id}/>
      )}
  </div>;

}
const mapStateToProps= state =>({
  country : state.country
})

export default connect(mapStateToProps , {getCityId})(CityEditForm);
