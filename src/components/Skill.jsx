import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

class DashboardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
    };
  }

  componentDidMount() {
    this.getApi();
  }

  getApi = () => {
    axios
      .get("http://localhost:8080/api/item/search")
      .then((res) => {
        this.setState({
          item: res.data.data,
        });
      })
      .catch((res) => console.log(res));
  };

  render() {
    const { item } = this.state;
    const itemList = item.map((data) => (
      <div className="card" key={data.id}>
        <Link to={`/skill/${data.id}`}>
          <img src={data.image} alt="" />
        </Link>
        <div className="box">
          <h2>title={data.title}
            <Link to={`/skill/${data.id}`}>{data.title}</Link>
          </h2>
          <p>{data.content}</p>
          <button>Add to cart</button>
        </div>
      </div>
    ));
    return (
      <div>
        <article>
          <div className="skill">
            <h4>Item List</h4>
            <ul>{itemList}</ul>
          </div>
        </article>
      </div>
    );
  }
}

export default DashboardComponent;
