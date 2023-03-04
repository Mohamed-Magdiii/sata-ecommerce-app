import React, { useEffect } from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { getBlogByID } from "../../../actions/blogs/blogs";

function BlogDetailsPage({ match, getBlogByID, blogs: { blog } }) {
  useEffect(() => {
    getBlogByID(match.params.id);
    // eslint-disable-next-line 
  }, []);
console.log(blog);
  return (
    <div className="detail-post mt-2">
      <div className="bp-detail">
        <div className="bp-detail__thumbnail">
          <div className="aspect aspect--bg-grey aspect--1366-768">
            <img
              className="aspect__img"
              src={
                blog &&
                `${process.env.REACT_APP_API_URL}/${blog.image}`
              }
              alt=""
            />
          </div>
        </div>
        <div className="bp-detail__info-wrap">
          <div className="bp-detail__stat">
            <span className="bp-detail__stat-wrap">
              <span className="bp-detail__publish-date">
                <span to="blogS-right-sidebar.html">
                  <span>
                    {" "}
                    {blog && (
                      <Moment format="DD/MM/YYYY">
                        {blog && blog.createdAt}
                      </Moment>
                    )}
                  </span>
                </span>
              </span>
            </span>
          </div>

          <span className="bp-detail__h1">
            <h2 className="text-primary">{blog && blog.title.en}</h2>
          </span>

          <p className="bp-detail__p">{blog && blog.description.en}</p>
          {/* <div className="post-center-wrap mb-3">
           <ul className="bp-detail__social-list">
             <li>
               <Link className="s-fb--color" to="#">
                 <i className="fab fa-facebook-f"></i>
               </Link>
             </li>
             <li>
               <Link className="s-tw--color" to="#">
                 <i className="fab fa-twitter"></i>
               </Link>
             </li>
             <li>
               <Link className="s-insta--color" to="#">
                 <i className="fab fa-instagram"></i>
               </Link>
             </li>
             <li>
               <Link className="s-wa--color" to="#">
                 <i className="fab fa-whatsapp"></i>
               </Link>
             </li>
             <li>
               <Link className="s-gplus--color" to="#">
                 <i className="fab fa-google-plus-g"></i>
               </Link>
             </li>
           </ul>
         </div> */}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  blogs: state.blogs,
});
export default connect(mapStateToProps, { getBlogByID })(BlogDetailsPage);
