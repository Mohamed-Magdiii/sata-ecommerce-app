import React, { useEffect, useRef, useState } from "react";
import { Container } from "./TopHeader/TopHeader.Styles";
import { PullLeftLiA } from "./TopHeader/TopHeader.Styles";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";
import {
  HeaderDropDown,
  HeaderId,
  COLMD3,
  COLMD3CLEARFIX,
  Input,
  COLMD6,
  InputSelect,
  CartDropDown,
  CartList,
  HEADERCTNA,
  HEADERCTNSPAN,
  HEADETCTN,
  HeaderLogo,
  HeaderSearch,
  Img,
  PriceQty,
  ProductBody,
  ProductImg,
  ProductImgImg,
  ProductName,
  ProductNameA,
  ProductPrice,
  ProductWidget,
  Qty,
  Row,
  SearchBtn,
  // CartSummary,
  CartBtn,
  CartBtnA,
  CartBtnA2,
} from "./Header.Styles";
import { connect } from "react-redux";
import { getWishlist } from "../../../modules/actions/wishlist/wishlist";
import { useHistory } from "react-router-dom";
import {
  getProductsFromCart,
  deleteProductFromCart,
  getCategory,
} from "../../../modules/actions/products/productsActions";
import { searchByProductOrCategory } from "../../../modules/actions/products/productsActions";
// import { getAllCategory } from "../../../modules/actions/category/categoryActions";

const Header = ({
  getWishlist,
  wishlist: { wishlists },
  getCategory,
  products: { categories },
  searchByProductOrCategory,
  getProductsFromCart,
  products: { cart },
}) => {
  useEffect(() => {
    getWishlist();
    getProductsFromCart();
    getCategory();
  }, [getWishlist, getProductsFromCart, getCategory]);

  const cartRef = useRef(null);
  const [isOpened, setIsOpened] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const history = useHistory();
  const handleClick = () => {
    history.push(
      `/Products/search/home?product=${searchName}&category=${searchCategory}`
    );
    const queryPrams = window.location.search.split("?")[1];
    searchByProductOrCategory(queryPrams);
  };
  return (
    <HeaderId>
      <Container>
        <Row>
          <COLMD3>
            <HeaderLogo>
              <PullLeftLiA>
                <Img
                  src={`${toAbsoluteUrl("/media/logos/product-grey-2.jpg")}`}
                  width={50}
                  height={50}
                />
              </PullLeftLiA>
            </HeaderLogo>
          </COLMD3>
          <COLMD6>
            <HeaderSearch>
              <InputSelect onChange={(e) => setSearchCategory(e.target.value)}>
                <option value="">All Categories</option>
                {categories &&
                  categories.map((cat) => (
                    <option value={cat._id} key={cat._id}>
                      {cat.title.en}
                    </option>
                  ))}
              </InputSelect>
              <Input
                placeholder="Search "
                onChange={(e) => setSearchName(e.target.value)}
              />
              <SearchBtn onClick={handleClick}>Search</SearchBtn>
            </HeaderSearch>
          </COLMD6>
          <COLMD3CLEARFIX>
            <HEADETCTN>
              <div style={{ display: "inline-block" }}>
                <HEADERCTNA onClick={() => history.push("/wishlist")}>
                  <i
                    className="fa fa-heart"
                    style={{ fontSize: "18px", display: "block" }}
                  ></i>
                  <HEADERCTNSPAN>Your Whishlist</HEADERCTNSPAN>
                  <Qty>{wishlists !== null ? wishlists.length : 0}</Qty>
                </HEADERCTNA>
              </div>
              <HeaderDropDown>
                <HEADERCTNA
                  onClick={() => {
                    cartRef.current.style.display = !isOpened
                      ? "block"
                      : "none";
                    setIsOpened(!isOpened);
                  }}
                >
                  <i
                    className="fa fa-shopping-cart"
                    style={{ fontSize: "18px", display: "block" }}
                  ></i>
                  <HEADERCTNSPAN>Your Cart</HEADERCTNSPAN>

                  <Qty>{cart !== null ? cart.items.length : 0}</Qty>
                </HEADERCTNA>
                <CartDropDown
                  ref={cartRef}
                  className={`${!isOpened ? "d-none" : "d-block"} `}
                >
                  {cart === null || cart.items.length === 0 ? (
                    <h2>Your Cart Is Empty</h2>
                  ) : (
                    <CartList>
                      {cart.items.map(
                        (c) =>
                          c.productId && (
                            <ProductWidget key={c._id}>
                              <ProductImg>
                                <ProductImgImg
                                  src={`${process.env.REACT_APP_API_URL}/${c.productId.image}`}
                                />
                              </ProductImg>

                              <ProductBody>
                                <ProductName>
                                  {cart.productId && (
                                    <ProductNameA>
                                      {c.productId.title.en}
                                    </ProductNameA>
                                  )}
                                </ProductName>
                                <ProductPrice>
                                  {" "}
                                  <PriceQty>{c.quantity}x</PriceQty>{" "}
                                  {c.productId.price}
                                </ProductPrice>
                              </ProductBody>
                            </ProductWidget>
                          )
                      )}
                    </CartList>
                  )}

                  {/* <CartSummary>
                    <small style={{fontSize: '85%'}}>3 Item(s) selected</small>
                    <h5></h5>
                  </CartSummary> */}
                  <CartBtn>
                    <CartBtnA
                      onClick={() => {
                        history.push("/cart");
                        getProductsFromCart();
                      }}
                    >
                      View Cart
                    </CartBtnA>

                    <CartBtnA2 onClick={() => history.push("/cart")}>
                      Checkout
                    </CartBtnA2>
                  </CartBtn>
                </CartDropDown>
              </HeaderDropDown>
            </HEADETCTN>
          </COLMD3CLEARFIX>
        </Row>
      </Container>
    </HeaderId>
  );
};
const mapStateToProps = (state) => ({
  wishlist: state.wishlist,
  products: state.products,
});
export default connect(mapStateToProps, {
  getWishlist,
  getCategory,
  getProductsFromCart,
  searchByProductOrCategory,
  deleteProductFromCart,
})(Header);
