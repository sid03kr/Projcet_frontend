import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Home,
  About,
  Login,
  Board,
  MyBoard,
  MyPage,
  Details,
  Cart,
  AddBoard,
  NotFound,
} from "./index";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/login" component={Login} />
    <Route path="/board" component={Board} />
    <Route path="/myboard" component={MyBoard} />
    <Route path="/mypage" component={MyPage} />
    <Route path="/skill/:id" component={Details} />
    <Route path="/cart" component={Cart} />
    <Route path="/edit/:id" component={AddBoard} />
    <Route path="/board/haribo" component={AddBoard} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;
