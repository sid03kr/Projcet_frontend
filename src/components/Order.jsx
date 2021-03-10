import React, { Component } from "react";
import axios from "axios";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.boardChange = this.boardChange.bind(this);
    this.submitBoard = this.submitBoard.bind(this);
  }

  initialState = {
    id: "",
    title: "",
    contents: "",
    created_by: "",
    created_at: "",
  };

  //   componentDidMount() {
  //     const boardId = +this.props.match.params.id;
  //     if (boardId) {
  //       this.findBoardById(boardId);
  //     }
  //   }

  //   findBoardById = (boardId) => {
  //     axios
  //       .get("http://localhost:8080/api/board/" + boardId)
  //       .then((response) => {
  //         if (response.data.data != null) {
  //           this.setState({
  //             id: response.data.data.id,
  //             title: response.data.data.title,
  //             contents: response.data.data.contents,
  //             created_by: response.data.data.created_by,
  //           });
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error -" + error);
  //       });
  //   };

  boardChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  BoardList = () => {
    return this.props.history.push("/board");
  };

  submitBoard = (e) => {
    e.preventDefault();
    console.log(this.state);

    axios
      .post("http://localhost:8080/api/board", { data: this.state })
      .then((res) => {
        console.log(res);
        if (res.data.data != null) {
          this.setState({ show: true });
        } else {
          this.setState({ show: false });
        }
      });
    this.setState(this.initialState);
  };

  updateBoard = (e) => {
    e.preventDefault();
    console.log(this.state);

    axios
      .put("http://localhost:8080/api/board", { data: this.state })
      .then((res) => {
        console.log(res);
        if (res.data.data != null) {
          this.setState(this.initialState);
          alert("글이 정상 등록되었습니다.");
        }
      })
      .catch(function (error) {
        if (error.response) {
          // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // 요청이 이루어 졌으나 응답을 받지 못했습니다.
          // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
          // Node.js의 http.ClientRequest 인스턴스입니다.
          console.log(error.request);
        } else {
          // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
  };

  render() {
    // const { title, contents } = this.state;

    return (
      //   <div className="pop pop_add_boad">
      //     <div className="bg">
      //       <div className="pop_wrap">
      //         <div className="pop_top">추가할 내용을 입력하세요</div>
      //         <form
      //           className="pop_body"
      //           onSubmit={this.state.id ? this.updateBoard : this.submitBoard}
      //           id="boardFormId"
      //         >
      //           <label>
      //             <h4>제목</h4>
      //           </label>
      //           <input
      //             type="text"
      //             name="title"
      //             value={title}
      //             onChange={this.boardChange}
      //             placeholder="제목을 입력하세요"
      //           />
      //           <h4>내용</h4>
      //           <input
      //             type="text"
      //             name="contents"
      //             value={contents}
      //             onChange={this.boardChange}
      //             placeholder="본문내용을 입력하세요"
      //           />

      //           <div className="pop_bottom txt_r">
      //             <button
      //               className="btn_wh "
      //               // onClick={this.props.closePopup}
      //               onClick={this.BoardList.bind()}
      //             >
      //               Board List
      //             </button>
      //             <button className="btn_bk " type="submit">
      //               {this.state.id ? "수정" : "저장"}
      //             </button>
      //           </div>
      //         </form>
      //       </div>
      //     </div>
      //   </div>
      <div>안녕</div>
    );
  }
}

export default Order;
