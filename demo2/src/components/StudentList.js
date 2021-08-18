/*
 * @Author: your name
 * @Date: 2021-08-18 21:59:32
 * @LastEditTime: 2021-08-18 22:48:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React_learning_notes\demo2\src\components\StudentList.js
 */
import React from "react";

export default function StudentList(props) {
  return (
    <li>
      <span>姓名：{props.name}</span>
      <span>性别：{props.sex === 0 ? "男" : "女"}</span>
      <span>电话：{props.phone}</span>
      <span>出生年份：{props.birth}</span>
      <span>住址： {props.address}</span>
      <span>邮箱：{props.email}</span>
    </li>
  );
}
