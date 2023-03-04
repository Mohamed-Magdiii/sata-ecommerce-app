import React from "react";
import { Link } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";
import { FcOk } from "react-icons/fc";
import Rater from "react-rater";
import { deleteProductById } from "../shared/axiosFunctions";
import { useHistory } from "react-router-dom";

const DisplayAllProducts = ({ data, refetch }) => {
  const history = useHistory();
  const displaySize = (arr) => {
    return (
      <select>
        {arr.map((size, i) => {
          return (
            <option key={i} value={size}>
              {size}
            </option>
          );
        })}
      </select>
    );
  };
  return (
    <>
      {data?.data.map((product) => (
        <tr className="text-center border-3 m-auto" key={product._id}>
          <td className="border text-center">
            <span>{product.title_en}</span>
          </td>
          <td className="border text-center">
            <span>{product.user.fullname}</span>
          </td>
          <td className="border text-center">
            <img
              src={`${process.env.REACT_APP_API_URL}/${product.image}`}
              className="rounded-circle w-30px"
              alt=""
            />
          </td>
          <td className="border text-center">
            <div className="d-flex flex-column">{product.categoryId.title}</div>
          </td>
          <td className="border text-center">
            <div className="d-flex flex-column">
              {product.subCategory.title}
            </div>
          </td>
          <td className="border text-center">
            <div className="d-flex flex-column">{product.brand.title}</div>
          </td>
          <td className="border text-center">
            <div className="d-flex flex-column">
              <Rater
                color="#FEd847"
                total={5}
                rating={product.stars}
                interactive={false}
              />
            </div>
          </td>
          <td className="border text-center">
            <div className="d-flex flex-column">{product.description}</div>
          </td>
          <td className="border text-center">
            <div className="d-flex flex-column">{product.price}</div>
          </td>
          <td className="border text-center">
            <div className="d-flex flex-column">
              {!product.size ? "--" : displaySize(product.size)}
            </div>
          </td>
          <td className="border text-center">
            <div className="d-flex flex-column">
              <select>
                {product.color.map((c, i) => {
                  return (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  );
                })}
              </select>
            </div>
          </td>
          <td className="border text-center">
            <div className="d-flex flex-column">
              {!product.store ? "-" : product.store}
            </div>
          </td>
          <td className="border text-center">
            <div className="d-flex flex-column">
              {product.status ? (
                <FcOk className="w-100" />
              ) : (
                <VscChromeClose
                  className="rounded-circle text-danger w-100"
                  style={{ fontSize: "16px" }}
                />
              )}
            </div>
          </td>
          <td className="border text-center">
            <span>
              {" "}
              <i
                key={product._id}
                className="far fa-trash-alt ml-auto text-danger cursor-pointer"
                onClick={() => {
                  deleteProductById(product._id)
                    .then(() => {
                      refetch();
                    })
                    .catch(() => {
                      history.push("/error/error-v1");
                    });
                }}
              />
            </span>
            <span>
              <Link to={`/products-page/edit/${product._id}`}>
                <i
                  key={product._id}
                  className="fas fa-edit ml-auto text-primary cursor-pointer"
                />
              </Link>
            </span>
          </td>
        </tr>
      ))}
    </>
  );
};

export default DisplayAllProducts;
