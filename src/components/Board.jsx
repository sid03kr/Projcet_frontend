import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import AddBoard from "./AddBoard";

class ListBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [],
      showPopup: false,
    };
  }

  componentDidMount() {
    this.getApi();
  }

  getApi = () => {
    axios
      .get("http://localhost:8080/api/board/search")
      .then((res) => {
        this.setState({
          boards: res.data.data,
        });
      })
      .catch((res) => console.log(res));
  };

  deleteBoard = (boardId) => {
    axios
      .delete("http://localhost:8080/api/board/" + boardId)
      .then((respose) => {
        if (respose.data != null) {
          alert("삭제되었습니다.");
          this.setState({
            boards: this.state.boards.filter((board) => board.id !== boardId),
          });
        }
      });
  };

  // togglePopup() {
  //   this.setState({
  //     showPopup: !this.state.showPopup,
  //   });
  // }

  render() {
    const { boards } = this.state;

    const boardList = boards.map((data) => (
      <li key={data.id}>
        <div className="td">
          <div className="idx">{data.id}</div>
          <div className="tit">{data.title}</div>
          <div className="name">{data.created_by}</div>
          <div className="date">{data.created_at}</div>
          <div>
            <div>
              <Link to={"edit/" + data.id} className="edit">
                Edit
              </Link>

              <button onClick={this.deleteBoard.bind(this, data.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="td cont">{data.contents}.</div>
      </li>
    ));
    return (
      <div>
        <article>
          <div className="content">
            <h4>Best item</h4>
            <ul className="table">
              <li className="table_head">
                <div className="td">
                  <div className="idx">Index</div>
                  <div className="tit">제목</div>
                  <div className="name">작성자</div>
                  <div className="date">날짜</div>
                  <div className="action">수정</div>
                </div>
              </li>
              {boardList}
            </ul>
            <Link to={"board/add"} className="btn_bk fl_r mt10">
              추가
            </Link>
          </div>
        </article>
        {this.state.showPopup ? (
          <AddBoard text="Close Me" closePopup={this.togglePopup.bind(this)} />
        ) : null}
      </div>
    );
  }
}

export default ListBoard;
