import styled from "styled-components";

export const HeaderId = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #15161d;
  box-sizing: "border-box";
`;
export const Row = styled.div`
  margin-right: -15px;
  margin-left: -15px;
  &:before {
    display: table;
    content: " ";
  }
  &:after {
    clear: both;
    display: table;
    content: " ";
  }
  box-sizing: "border-box";
`;

export const COLMD3 = styled.div`
  width: 25%;
  float: left;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: "border-box";
`;

export const COLMD3CLEARFIX = styled(COLMD3)`
  &:before {
    display: table;
    content: " ";
  }
  &:after {
    clear: both;
    display: table;
    content: " ";
  }
`;

export const HEADETCTN = styled.div`
  float: right;
  padding: 15px 0px;
`;

export const Qty = styled.div`
  position: absolute;
  right: 15px;
  top: -10px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
  font-size: 10px;
  color: #fff;
  background-color: #307cba;
`;

export const HEADERCTNA = styled.a`
  display: block;
  position: relative;
  width: 90px;
  text-align: center;
  color: #fff;
  font-weight: 500;
  transition: 0.2s color;
  text-decoration: none;
  background-color: transparent;
`;

export const COLMD6 = styled.div`
  width: 50%;
  float: left;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: "border-box";
`;

export const HeaderLogo = styled.div`
  float: left;
  box-sizing: "border-box";
`;

export const Img = styled.img`
  border-radius: 50%;
  display: block;
  border: 0;
  box-sizing: "border-box";
`;

export const HeaderSearchForm = styled.form`
  position: "relative";
  box-sizing: "border-box";
`;

export const InputSelect = styled.select`
  margin-right: -4px;
  border-radius: 40px 0px 0px 40px;
  padding: 0px 15px;
  background: #fff;
  border: 1px solid #e4e7ed;
  height: 40px;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  text-transform: none;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  font: inherit;
  color: inherit;
  box-sizing: "border-box";
`;

export const Input = styled.input`
  width: calc(100% - 260px);
  margin-right: -4px;
  height: 40px;
  padding: 0px 15px;
  border: 1px solid #e4e7ed;
  background-color: #fff;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  box-sizing: "border-box";
`;

export const SearchBtn = styled.button`
  height: 40px;
  width: 100px;
  background: #307cba;
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 0px 40px 40px 0px;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  -webkit-appearance: button;
  cursor: pointer;
  text-transform: none;
  overflow: visible;
  margin: 0;
  font: inherit;
`;

export const HeaderSearch = styled.div`
  padding: 15px 0;
  box-sizing: "border-box";
`;

export const HEADERCTNSPAN = styled.span`
  font-size: 12px;
`;

export const HeaderDropDown = styled.div`
  margin-left: 15px;
  display: inline-block;
  position: relative;
`;

export const HeaderDropDownA = styled.a`
  display: block;
  position: relative;
  width: 90px;
  text-align: center;
  color: #fff;
  font-weight: 500;
  transition: 0.2s color;
  background-color: transparent;
`;

export const CartDropDown = styled.div`
  opacity: 1;
  visibility: visible;
  position: absolute;
  width: 300px;
  background: #fff;
  padding: 15px;
  -webkit-box-shadow: 0px 0px 0px 2px #e4e7ed;
  box-shadow: 0px 0px 0px 2px #e4e7ed;
  z-index: 99;
  right: 0;
`;
export const CartList = styled.div`
  max-height: 180px;
  overflow-y: scroll;
  margin-bottom: 15px;
`;
export const ProductWidget = styled.div`
  padding: 0px;
  box-shadow: none;
  position: relative;
`;
export const ProductImg = styled.div`
  left: 0px;
  top: 0px;
  position: absolute;
  width: 60px;
`;
export const ProductImgImg = styled.img`
  width: 100%;
  vertical-align: middle;
  border: 0;
`;
export const ProductBody = styled.div`
  padding-left: 75px;
  min-height: 60px;
`;
export const ProductName = styled.h3`
  text-transform: uppercase;
  font-size: 12px;
  color: #2b2d42;
  font-weight: 700;
  margin: 0 0 10px;
  font-family: inherit;
`;

export const ProductNameA = styled.a`
  font-weight: 700;
  color: #2b2d42;
  transition: 0.2s color;
  text-decoration: none;
  background-color: transparent;
`;
export const ProductPrice = styled.h4`
  color: #2b2d42;
  font-size: 14px;
  font-weight: 700;
  margin: 0 0 10px;
  font-family: inherit;
  line-height: 1.1;
`;
export const PriceQty = styled.span`
  font-weight: 400;
  margin-right: 10px;
`;

export const CartSummary = styled.div` 
border-top: 1px solid #E4E7ED;
padding-top: 15px;
padding-bottom: 15px;   
`;

export const CartBtn = styled.div` 
margin: 0px -17px -17px;
`;
export const CartBtnA = styled.a` 
margin-right: -4px;
background-color: #1e1f29;
display: inline-block;
width: calc(50% - 0px);
padding: 12px;
color: #FFF;
text-align: center;
font-weight: 700;
transition: 0.2s all;
`;
export const CartBtnA2 = styled.a` 
display: inline-block;
width: calc(50% - 0px);
padding: 12px;
background-color: #307cba;
color: #FFF;
text-align: center;
font-weight: 700;
transition: 0.2s all;
`