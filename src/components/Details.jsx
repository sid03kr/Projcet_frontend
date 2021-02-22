import React, { useState, useEffect } from "react";

import { useCart } from "react-use-cart";
import axios from "axios";
import { useParams } from "react-router-dom";
import formatCurrency from "../util";
import Cart from "./Cart.jsx";

function Details() {
  let { id } = useParams();

  const [itemDetails, setItemDetails] = useState([]);

  const [introduce, setIntroduce] = useState([]);

  const { addItem } = useCart();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/partner/${id}/skillInfo`)
      .then((response) => {
        setItemDetails(
          response.data.data.partner_api_response.item_api_response_list
        );
        console.log(
          response.data.data.partner_api_response.item_api_response_list
        );
        console.log(response.data.data.partner_api_response);
        setIntroduce(response.data.data.partner_api_response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <article>
        <div className="introduce ov_h">
          <img className="skill_img_01 fl_l" src={introduce.image} alt="" />
          <div className="fl_l ml10">
            <div className="name">{introduce.name}</div>
            <div className="type">{introduce.type}</div>
            <div className="txt">
              안녕하세요 신입 개발자 성일도입니다.
              <br />
              나이는 서른한살, 비전공자에 다른일을 해왔던사람이 개발자로 도전을
              시작했습니다.
              <br />
              30살에는 좋아하는일을 하자라는 막연히 도전한 개발
              <br />
              지금하는 코딩이 너무 재미있고, 즐겁습니다.
            </div>
          </div>
        </div>

        <div className="content">
          <h4>Best item</h4>
          <ul className="best_item">
            {itemDetails.map((data) => (
              <li key={data.id}>
                <a href={"#" + data.id}>
                  <img src={data.image} alt={data.title} className="shadow" />
                  <p className="pdt_name">{data.title}</p>
                  <p className="pdt_price">{formatCurrency(data.price)}</p>
                  <button
                    className="btn_bk btn_cart"
                    onClick={() => addItem(data)}
                  >
                    Add to cart
                  </button>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </article>
      <Cart></Cart>
    </div>
  );
}
export default Details;
