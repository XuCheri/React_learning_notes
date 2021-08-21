/*
 * @Author: your name
 * @Date: 2021-08-21 14:21:34
 * @LastEditTime: 2021-08-21 14:48:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React_learning_notes\demo3\src\components\Ball.js
 */
import React, { Component } from "react";

export default class Ball extends Component {
  constructor(props) {
    super(props);

    this.state = {
      left: props.left || 100,
      top: props.top || 100,
      xSpeed: props.xSpeed || 100,
      ySpeed: props.ySpeed || 100,
      bg: props.bg || "#f40",
    };

    const duration = 16;
    setInterval(() => {
      const xdis = (this.state.xSpeed * duration) / 1000;
      const ydis = (this.state.ySpeed * duration) / 1000;
      let newLeft = this.state.left + xdis;
      let newTop = this.state.top + ydis;
      if (newLeft <= 0) {
        newLeft = 0;
        this.setState({
          xSpeed: -this.state.xSpeed,
        });
      } else if (newLeft >= document.documentElement.clientWidth - 100) {
        newLeft = document.documentElement.clientWidth - 100;
        this.setState({
          xSpeed: -this.state.xSpeed,
        });
      }
      if (newTop <= 0) {
        newTop = 0;
        this.setState({
          ySpeed: -this.state.ySpeed,
        });
      } else if (newTop >= document.documentElement.clientHeight - 100) {
        newTop = document.documentElement.clientHeight - 100;
        this.setState({
          ySpeed: -this.state.ySpeed,
        });
      }
      this.setState({
          left: newLeft,
          top: newTop,
      })
    }, duration);
  }

  render() {
    return (
      <div
        className="ball"
        style={{
          background: this.state.bg,
          left: this.state.left,
          top: this.state.top,
        }}
      ></div>
    );
  }
}
