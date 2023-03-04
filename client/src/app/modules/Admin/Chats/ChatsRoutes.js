import React from "react";
import AllChats from "./AllChats/AllChats";
import { Switch, Route } from "react-router-dom";
// import SpecialChat from "./SpecialChat/SpecialChat";
const ChatsRoutes = () => {
  return (
    <Switch>
      <Route path="/admin/chats" exact component={AllChats} />
      {/* <Route path="/admin/chats/:id" exact component={SpecialChat} /> */}
    </Switch>
  );
};

export default ChatsRoutes;
