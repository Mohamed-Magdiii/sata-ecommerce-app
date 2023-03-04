import React from "react";
import { Switch, Route } from "react-router-dom";
import BlogListComponent from "./BlogComponent/BlogListComponent";
import BlogForm from "./BlogFormComponent/BlogForm";
import BlogEditForm from "./BlogEditFormComponent/BlogEditForm";

function BlogRoute() {
  return (
    <Switch>
      <Route path="/admin/blogs-page" exact component={BlogListComponent} />
      <Route path="/admin/blogs-page/new" exact component={BlogForm} />
      <Route path="/admin/blogs-page/edit/:id" exact component={BlogEditForm} />
    </Switch>
  );
}

export default BlogRoute;
