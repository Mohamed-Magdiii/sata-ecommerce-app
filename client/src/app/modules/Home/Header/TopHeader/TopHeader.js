import React, { Fragment } from "react";
import {
  StyledTopHeader,
  Container,
  PullLeft,
  PullRight,
  PullLeftLi,
  PullLeftLiA,
} from "./TopHeader.Styles";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import { logout } from "../../../actions/auth/auth";

const TopHeader = ({ auth: { user ,isAuthenticated , loading},logout,settings:{setting} }) => {
  const history = useHistory();
  const authLinks = (
    <PullLeftLi>
            <Nav className="me-auto">
              {/* <Nav.Link></Nav.Link> */}
              <NavDropdown id="collasible-nav-dropdown" title={`Welcome  ${user && user.fullname}`}>
                  <NavDropdown.Item onClick={() => history.push("/my-profile")}>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={()=>{logout(); history.push('/')}}>
                    Logout
                  </NavDropdown.Item>
                  {/* {user !== null && (user.role === "admin" || user.role === "worker" || user.role === "vendor") && (
                    <NavDropdown.Item onClick={() => history.push(`admin/dashboard`)}>
                    Dashboard
                  </NavDropdown.Item>
                  ) } */}
              </NavDropdown>
            </Nav>
          </PullLeftLi>
  );
  

  const geustLinks = (
    <PullLeft>
    <PullLeftLi>
      <PullLeftLiA onClick={()=>history.push('/register')}>
        Register
      </PullLeftLiA>
    </PullLeftLi>
    <PullLeftLi>
      <PullLeftLiA onClick={()=>history.push('/login')}>
        Login
      </PullLeftLiA>
    </PullLeftLi>
  </PullLeft>
  );
  return (
    <StyledTopHeader>
      <Container>
        <PullLeft>
          <PullLeftLi>
            <PullLeftLiA>
              <i
                className="fa fa-phone"
                style={{
                  fontSize: "0.9rem",
                  marginRight: "5px",
                  color: "#307cba",
                }}
              ></i>
              {setting && setting.mobile}
            </PullLeftLiA>
          </PullLeftLi>
          {/* <PullLeftLi>
            <PullLeftLiA>
              <i
                className="fa fa-envelope"
                style={{
                  fontSize: "0.9rem",
                  marginRight: "5px",
                  color: "#307cba",
                }}
              ></i>
              {user && user.email}
            </PullLeftLiA>
          </PullLeftLi> */}
          <PullLeftLi>
            {/* <PullLeftLiA>
              <i
                className="fa fa-map-marker"
                style={{
                  fontSize: "0.9rem",
                  marginRight: "5px",
                  color: "#307cba",
                }}
              ></i>
              1234 Cairo Egypt
            </PullLeftLiA> */}
          </PullLeftLi>
        </PullLeft>
        <PullRight>
          {/* <PullLeftLi>
            <PullLeftLiA>
              <i
                className="fa fa-dollar"
                style={{
                  fontSize: "0.9rem",
                  marginRight: "5px",
                  color: "#307cba",
                }}
              ></i>
              LE
            </PullLeftLiA>
          </PullLeftLi> */}
       {!loading && (<Fragment>{isAuthenticated ? authLinks : geustLinks}</Fragment>)}
        </PullRight>
      </Container>
    </StyledTopHeader>
  );
};
const mapStateToProps = (state) => ({
  auth: state.authentication,
  settings:state.settings
});

export default connect(mapStateToProps, {logout})(TopHeader);