import React, { useEffect, useState } from "react";
import { getAllBlogs } from "../../../actions/blogs/blogs";
import { connect } from "react-redux";
import Pagination from "../../Pagination/Pagination";
import BlogComponent from "./BlogComponent";
function BlogList({getAllBlogs , blogs:{blogs}}) {
    useEffect(() => {
     getAllBlogs()
    }, [getAllBlogs]);
const [currentPage , setCurrentPage] = useState(1)
const [blogsPerPage ] = useState(10)
const indexOfLastBlog = currentPage * blogsPerPage
const indexOfFirstPage = indexOfLastBlog - blogsPerPage
const currentBlogs = blogs.slice(indexOfFirstPage , indexOfLastBlog)
const paginate =(pageNumber)=> setCurrentPage(pageNumber)
  return (
    <div className="u-s-p-y-60">
      <div className="container">
        <div className="blog-m">
          <BlogComponent blogs={currentBlogs} />
        </div>
        <Pagination
          totalData={blogs.length}
          dataPerPage={blogsPerPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

BlogList.propTypes = {};
const mapStateToProps = state =>({
blogs:state.blogs
})
export default connect(mapStateToProps , {getAllBlogs})(BlogList);
