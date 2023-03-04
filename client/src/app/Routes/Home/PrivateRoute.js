import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
const PrivateRoute = ({component: Component ,auth: {isAuthenticated , loading},...rest}) => (
    <Route  {...rest} render={props => !isAuthenticated && !loading ? (<Redirect to ='/login'/>) 
 : (<Component {...props}/>) 
 }/>
 );

const mapStateToProps = state => ({
    auth : state.authentication
})
export default connect(mapStateToProps ,null)(PrivateRoute);
