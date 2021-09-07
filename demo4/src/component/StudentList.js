/*
 * @Author: your name
 * @Date: 2021-09-07 16:42:05
 * @LastEditTime: 2021-09-07 17:11:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React_learning_notes\demo4\src\component\StudentList.js
 */
import Student from "./Student";
import React from "react";

export default function StudentList(props) {
  var stus = props.stus.map((item) => <Student key={item.id} {...item} />);
  return <ul>{stus}</ul>;
}
