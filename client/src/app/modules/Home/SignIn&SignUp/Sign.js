import React from "react";
import Title from "./Title";
const Sign = () => {
  return (
    <div className="app-content">
      <div className="u-s-p-y-60">
        <div className="section__content">
          <div className="container">
            <div className="breadcrumb">
              <div className="breadcrumb__wrap">
                <ul className="breadcrumb__list">
                  <li className="has-separator">
                    <span>Home</span>
                  </li>
                  <li className="is-marked">
                    <span>Identify</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="u-s-p-b-60">
        <div className="section__intro u-s-m-b-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section__text-wrap">
                  <h1 className="section__heading u-c-secondary text-muted">
                    INTRODUCE YOUR SELF 
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Title />
      </div>
    </div>
  );
};

export default Sign;
