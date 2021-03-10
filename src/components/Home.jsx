import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partner: [],
    };
  }

  componentDidMount() {
    this.getApi();
  }

  getApi = () => {
    axios
      .get("http://localhost:8080/api/partner/search")
      .then((res) => {
        this.setState({
          partner: res.data.data,
        });
      })
      .catch((res) => console.log(res));
  };

  render() {
    const { partner } = this.state;
    const partnerList = partner.map((data) => (
      <li key={data.id}>
        <Link to={`/skill/${data.id}`}>
          <img src={data.image} alt="" />
          <h2>{data.name}</h2>
          <p>{data.title}</p>
          <p>{data.status}</p>
          <p>{data.call}</p>
        </Link>
      </li>
    ));
    return (
      <div>
        <article>
          <div className="slide">
            <img src="https://ifh.cc/g/EyfEPk.jpg" alt="" />
          </div>

          <div className="content">
            <h4>Best item</h4>
            <ul className="best_item">{partnerList}</ul>
          </div>
        </article>
      </div>
    );
  }
}
