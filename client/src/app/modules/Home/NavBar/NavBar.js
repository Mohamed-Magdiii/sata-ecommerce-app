import React, { useEffect } from "react";
import { Container } from "../Header/TopHeader/TopHeader.Styles";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getAllProductBySubCategoryByCategory } from "../../actions/category/categoryActions";
import { getHome } from "../../actions/products/productsActions";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
const NavBar = ({
  products: { home },
  getAllProductBySubCategoryByCategory,
  getHome,
  authentication: { isAuthenticated, loading },
}) => {
  useEffect(() => {
    getHome();
  }, [getHome]);
  const history = useHistory();
    return (
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => history.push("/")}>Home</Nav.Link>
              {home &&
                home.homePage.showInMenu.map((s, i) => (
                  <NavDropdown
                    key={s._id}
                    title={s.title ? s.title.en : ""}
                    id="collasible-nav-dropdown"
                  >
                    {s.subCategories.map((sub) => (
                      <NavDropdown.Item
                        key={sub._id}
                          onClick={() => {
                            history.push(`/Products/${sub._id}`);
                            getAllProductBySubCategoryByCategory(sub._id);
                          }}
                        >
                          {sub.title ? sub.title.en : ""}
                        </NavDropdown.Item>
                      
                    ))}
                  </NavDropdown>
                ))}
              <Nav.Link onClick={() => history.push("/about")}>About</Nav.Link>
              <Nav.Link onClick={() => history.push("/contact")}>
                Contact
              </Nav.Link>
              <Nav.Link onClick={() => history.push("/blogs")}>
                Blogs
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};
const mapStateToProps = (state) => ({
  products: state.products,
  authentication: state.authentication,
});
export default connect(mapStateToProps, {
  getAllProductBySubCategoryByCategory,
  getHome,
})(NavBar);
