/*
 * @Author: your name
 * @Date: 2021-09-07 17:26:25
 * @LastEditTime: 2021-09-07 23:12:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React_learning_notes\demo4\src\component\Modal.js
 */
import React from "react";
import "./modal.css";

export default function Modal(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal">
      <p>加载中...</p>
    </div>
  );
}
