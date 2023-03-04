import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getAllBlogs,
  deleteBlog,
  updateBlog,
} from "../../../../modules/actions/blogs/blogs";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import Pagination from "../../../Home/Pagination/Pagination";

const BlogListComponent = ({
  getAllBlogs,
  deleteBlog,
  blogs: { blogs, loading },
}) => {
  useEffect(() => {
    getAllBlogs();
  }, [getAllBlogs]);
  const [currentPage , setCurrentPage] = useState(1)
const [blogsPerPage ] = useState(5)
const indexOfLastBlog = currentPage * blogsPerPage
const indexOfFirstPage = indexOfLastBlog - blogsPerPage
const currentBlogs = blogs.slice(indexOfFirstPage , indexOfLastBlog)
const paginate =(pageNumber)=> setCurrentPage(pageNumber)
  return (
    <div>
      <table className="table table-hover align-middle gs-0 gy-4">
        <thead>
          <tr className="text-center border-3 fw-bolder text-muted bg-light">
            <th className="ps-4 min-w-100px"><FormattedMessage id="BLOG.IMAGE"/></th>
            <th className="ps-4 min-w-100px"> <FormattedMessage id="SETTINGS.TITLE" /> <FormattedMessage id="SETTINGS.ENGLISH" /></th>
            <th className="ps-4 min-w-100px"><FormattedMessage id="SETTINGS.TITLE" /> <FormattedMessage id="SETTINGS.ARABIC" /></th>
            <th className="ps-4 min-w-100px"> <FormattedMessage id="SETTINGS.DESCRIPTION" />{" "}
            <FormattedMessage id="SETTINGS.ENGLISH" /></th>
            <th className="ps-4 min-w-100px"><FormattedMessage id="SETTINGS.DESCRIPTION" /> <FormattedMessage id="SETTINGS.ARABIC" /></th>
            <th className="ps-4 min-w-100px"><FormattedMessage id="BLOG.ACITONS" /></th>
          </tr>
        </thead>
        <tbody>
          {currentBlogs &&
            currentBlogs.map((blg) => (
              <tr className="text-center border-3 m-auto" key={blg._id}>
                <td className="border text-center">
                  <div className="d-flex flex-column offset-4">
                    <img
                      src={`${process.env.REACT_APP_API_URL}/${blg.image}`}
                      className="rounded-circle w-50px"
                      alt=""
                    />
                  </div>
                </td>
                <td className="border text-center">
                  <div className="d-flex flex-column">{blg.title && blg.title.en}</div>
                </td>
                <td className="border text-center">
                  <div className="d-flex flex-column">{blg.title && blg.title.ar}</div>
                </td>
                <td className="border text-center">
                  <div className="d-flex flex-column">{blg.description && blg.description.en.slice(1,200)}</div>
                </td>
                <td className="border text-center">
                  <div className="d-flex flex-column">{blg.description && blg.description.ar.slice(1,200)}</div>
                </td>

                <td className="border text-center">
                  <span>
                    {" "}
                    <i
                      key={blg._id}
                      className="far fa-trash-alt ml-auto text-danger"
                      onClick={(e) => deleteBlog(blg._id)}
                    />
                  </span>
                  <span>
                    <Link to={`/admin/blogs-page/edit/${blg._id}`}>
                      <i
                        key={blg._id}
                        className="fas fa-edit ml-auto text-primary"
                      />
                    </Link>
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination
          totalData={blogs.length}
          dataPerPage={blogsPerPage}
          paginate={paginate}
        />
    </div>
  );
};

BlogListComponent.propTypes = {
  getAllBlogs: PropTypes.func.isRequired,
  updateBlog: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  blogs: state.blogs,
});
export default connect(mapStateToProps, {
  getAllBlogs,
  deleteBlog,
  updateBlog,
})(BlogListComponent);
