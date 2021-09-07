/*
 * @Author: your name
 * @Date: 2021-09-04 21:54:25
 * @LastEditTime: 2021-09-06 15:16:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React_learning_notes\demo4\src\component\Pager.js
 */
import React, { Component } from "react";
import "./Pager.css";

export default class Pager extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const PageNumber = Math.ceil(this.props.total / this.props.limit);
    return (
      <>
        <span className={this.props.current === 1 ? "item disabled" : "item"}>
          首页
        </span>
        <span className={this.props.current === 1 ? "item disabled" : "item"}>
          上一页
        </span>
        <span
          className={
            this.props.current === PageNumber ? "item disabled" : "item"
          }
        >
          尾页
        </span>
        <span
          className={
            this.props.current === PageNumber ? "item disabled" : "item"
          }
        >
          下一页
        </span>
        <span className="current">{this.props.current}</span>/
        <span>{PageNumber}</span>
      </>
    );
  }
}
