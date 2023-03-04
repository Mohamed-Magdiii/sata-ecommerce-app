import React from 'react';
import { Link, useHistory } from "react-router-dom";
import Moment from "react-moment";
function BlogComponent({blogs}) {
    const history = useHistory()
    return (  <div className="section__content" >
    <div className="container">
    <div className="row">
      {blogs &&
        blogs.map((blog , i) =>   (
          <div className="col-lg-4 col-md-6 u-s-m-b-30" key={blog._id} onClick={()=>history.push(`/blogs/blog-detail-page/${blog._id}`)} >
            <div className="bp-mini bp-mini--img u-h-100">
              <div className="bp-mini__thumbnail">
                <Link
                  className="aspect aspect--bg-grey aspect--1366-768 u-d-block"
                  to="blog-detail.html"
                >
                  <img
                    className="aspect__img"
                    src={`${process.env.REACT_APP_API_URL}/${blog.image}`}
                    alt=""
                  />
                </Link>
              </div>
              <div className="bp-mini__content">
                <div className="bp-mini__stat">
                  <span className="bp-mini__stat-wrap">
                    <span className="bp-mini__publish-date">
                      <Link to="#">
                        {" "}
                        <Moment format="DD/MM/YYYY">
                          {blog.createdAt}
                        </Moment>
                      </Link>
                    </span>
                  </span>

                  <span className="bp-mini__stat-wrap">
                    <span className="bp-mini__author">
                      <Link to={`/blogs/blog-detail-page/${blog._id}`} style={{ border: "bold" }}>
                        {blog.title && blog.title.en}
                      </Link>
                    </span>
                  </span>
                </div>
                <span className="bp-mini__h1" />
                <p className="bp-mini__p">{blog.description && blog.description.en.slice(0,150)}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  </div>
</div>)
}


export default BlogComponent;
