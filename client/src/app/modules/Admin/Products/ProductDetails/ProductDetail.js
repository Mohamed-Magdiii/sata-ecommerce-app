import React from "react";
import { useGetProductById } from "../shared/axiosFunctions";
import { BeatLoader } from "react-spinners";
import { useHistory } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import DispLang from "../../shared/DispLang";

const ProductDetail = ({ match }) => {
  const { data, isError, error, isLoading } = useGetProductById(
    match.params.id
  );
  const history = useHistory();
  if (isLoading) {
    return <BeatLoader loading={isLoading} />;
  } else if (isError) {
    return <h1>{error.message}</h1>;
  } else {
    return (
      <div className="col-md-12 col-lg-12 col-xxl-12">
        <div className="card card-custom card-stretch gutter-b">
          <div className="card-body p-15 pb-20">
            <div className="row mb-17">
              <div className="col-xxl-5 mb-11 mb-xxl-0">
                <div className="card card-custom card-stretch">
                  <div
                    className="card-body p-0 rounded px-10 py-15 d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: "#ffcc69" }}
                  >
                    <img
                      src={`${process.env.REACT_APP_WEB_LINK}:${process.env.REACT_APP_SERVER_PORT}/${data?.data.product.image}`}
                      className="mw-100 w-200px"
                      style={{ transform: "scale(1.6)" }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-xxl-7 pl-xxl-11">
                <h2
                  className="font-weight-bolder text-dark mb-7"
                  style={{ fontSize: "32px" }}
                >
                  <DispLang title={data?.data.product.title} />
                </h2>
                <div className="font-size-h2 mb-7 text-dark-50">
                  <FormattedMessage id="TABLE.OFFERS.PRICE" />{" "}
                  <span className="text-info font-weight-boldest ml-2">
                    ${data?.data.product.price}
                  </span>
                </div>
                <div className="line-height-xl">
                  <DispLang title={data?.data.product.description} />
                </div>
              </div>
            </div>
            <div className="row mb-6">
              <div className="col-6 col-md-4">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    <FormattedMessage id="TABLE.PRODUCT.BRAND" />
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {data?.data.product.brand.title.en}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    <FormattedMessage id="TABLE.PRODUCT.COLOR" />
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {data?.data.product.color.map((c) => {
                      return c + " ";
                    })}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    <FormattedMessage id="TABLE.PRODUCT.STORE" />
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {data?.data.product.store}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    <FormattedMessage id="TABLE.PRODUCT.SOLD" />
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {data?.data.product.bought}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    <FormattedMessage id="TABLE.PRODUCT.VISITEDBY" />
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {data?.data.product.visitedBy.length}{" "}
                    <FormattedMessage id="TABLE.PRODUCT.VISITEDBY.PERSON" />
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-4">
                <div className="mb-8 d-flex flex-column">
                  <span className="text-dark font-weight-bold mb-4">
                    <FormattedMessage id="TABLE.PRODUCT.SIZE" />
                  </span>
                  <span className="text-muted font-weight-bolder font-size-lg">
                    {data?.data.product.size.map((c) => {
                      return c + " ";
                    })}
                  </span>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <button
                type="button"
                className="btn btn-secondary font-weight-bolder mr-6 px-6 font-size-sm"
                onClick={() => history.goBack()}
              >
                <FormattedMessage id="BUTTON.BACK" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetail;
