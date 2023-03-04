import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { connect } from "react-redux";
import { updateBlog, getBlogByID } from "../../../../modules/actions/blogs/blogs";
import { FormattedMessage } from "react-intl";
import FormikInputs from "./FormikInputs";
import { initialValues, validationSchema } from "./FormikKeys";

const BlogEditForm = ({ updateBlog,history, match, getBlogByID, blogs:{blog}}) => {
  // const [title_en, setTitleEn] = useState("");
  // const [title_ar, setTitleAr] = useState("");
  // const [description_, setDescription] = useState("");
  // const [image, setImage] = useState("");
//   useEffect(()=>{
//     axios.get(
//       `${process.env.REACT_APP_API_URL}/api/blogs/${match.params.id}`,
//       { headers: { "x-auth-token": localStorage.getItem("authToken") } }
//     ).then((response) =>{
//       setTitle(response.data.title)
//       setDescription(response.data.description)
//       setBlogImage(response.data.image)
//     }).catch((error) => console.log(error.response))
//     // eslint-disable-next-line
// },[])
const onSubmit = (values)=>{
  updateBlog(values,match.params.id)
  // setTimeout(()=>{
  //   history.push('/blogs-page')
  // },400)
}
useEffect(()=>{
 getBlogByID(match.params.id)
},[getBlogByID ,match.params.id])
if (blog === null) {
  return <h1>Data is loading...</h1>
}else {
const savedData = {
  id: blog ? blog._id : "",
  image: blog ? blog.image : "",
  title_en: blog ? (blog ? blog.title.en : "") : "",
  title_ar: blog ? (blog ? blog.title.ar : "") : "",
  description_en: blog ? (blog ? blog.description.en : "") : "",
  description_ar: blog ? (blog? blog.description.ar : "") : "",

};
return (
  <div className="flex-row-fluid ml-lg-8">
  <div className="card card-custom">
    <div className="card-header py-3">
      <div className="card-title align-items-start flex-column">
        <h3 className="card-label font-weight-bolder text-dark">
          <FormattedMessage id="TABLE.TITLE.BRAND.INFO" />
        </h3>
        <span className="text-muted font-weight-bold font-size-sm mt-1">
          <FormattedMessage id="TABLE.TITLE.BRAND.ADD" />
        </span>
      </div>
    </div>
    <Formik
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      initialValues={savedData || initialValues}
    >
      {(formik) => {
        return <FormikInputs formik={formik} blog={blog} />;
      }}
    </Formik>
  </div>
</div>
  );
}
};

BlogEditForm.propTypes = {
  updateBlog: PropTypes.func.isRequired,
  getBlogByID: PropTypes.func.isRequired,
};
const mapStateToProps = (state) =>({
blogs:state.blogs
});

export default connect(mapStateToProps, { getBlogByID, updateBlog })(BlogEditForm);
