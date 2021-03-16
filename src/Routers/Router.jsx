import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Home,
  About,
  Login,
  Board,
  MyPage,
  Details,
  Cart,
  AddBoard,
  NotFound,
} from "./index";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/board" component={Board} />
    <Route exact path="/mypage" component={MyPage} />
    <Route exact path="/skill/:id" component={Details} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/edit/:id" component={AddBoard} />
    <Route exact path="/board/add" component={AddBoard} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;
