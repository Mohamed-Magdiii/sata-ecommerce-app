import React from "react";
import { Switch, Route } from "react-router-dom";
import Comments from "./components/Comments";

const CommentsRoutes = () => {
  return (
    <Switch>
      <Route path="/admin/comments" exact component={Comments} />
    </Switch>
  );
};
export default CommentsRoutes;
