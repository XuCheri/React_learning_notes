/*
 * @Author: your name
 * @Date: 2021-09-06 21:42:39
 * @LastEditTime: 2021-09-07 23:14:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React_learning_notes\demo4\src\component\PagerContainer.js
 */
import Pager2 from "./Pager2";
import React, { Component } from "react";
import StudentList from "./StudentList";
import Modal from "./Modal";
var url =
  "https://api.duyiedu.com/api/student/findAll?appkey=demo13_1545210570249";

export default class PagerContainer extends Component {
  constructor(props) {
    super(props);
    this.getData();
    this.state = {
      current: 1,
      total: 0,
      limit: 10,
      panelNumber: 5,
      students: [],
      isLoading: false,
    };
  }

  async getData() {
    this.setState({ isLoading: true });
    const students = await fetch(url)
      .then((resp) => resp.json())
      .then((resp) => resp.data);
    this.setState({
      total: students.length,
      students: students,
      isLoading: false,
    });
    return students;
  }
  handlePageChange = (newPage) => {
    this.setState({ current: newPage });
    this.getData();
  };
  render() {
    return (
      <div className="container">
        <StudentList stus={this.state.students} />
        <div className="Pager">
          <Pager2 {...this.state} onPageChange={this.handlePageChange} />
        </div>
        <Modal show={this.state.isLoading} />
      </div>
    );
  }
}
