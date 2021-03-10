import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

class Home extends Component {
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
      <HomeBest key={data.id}>
        <Link to={`/skill/${data.id}`}>
          <HomeImg src={data.image} alt="" />
          <h2>{data.name}</h2>
          <p>{data.title}</p>
          <p>{data.status}</p>
          <p>{data.call}</p>
        </Link>
      </HomeBest>
    ));
    return (
      <div>
        <article>
          <HomeSlide>
            <img src="https://ifh.cc/g/EyfEPk.jpg" alt="" />
          </HomeSlide>

          <HomeContent>
            <HomeItem>Best item</HomeItem>
            <ul className="best_item">{partnerList}</ul>
          </HomeContent>
        </article>
      </div>
    );
  }
}

export default Home;

const HomeSlide = styled.div``;

const HomeContent = styled.div``;

const HomeItem = styled.h4`
  padding: 100px 0 80px;
  text-align: center;
  font-size: 17px;
  color: #2e2e2e;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 700;
`;

const HomeBest = styled.li`
  width: calc(25% - 10px);
  margin: 5px 5px 50px;
  float: left;
`;

const HomeImg = styled.img`
  height: 400px;
`;
