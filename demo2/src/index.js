/*
 * @Author: your name
 * @Date: 2021-08-18 17:12:21
 * @LastEditTime: 2021-08-18 22:52:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React_learning_notes\demo2\src\index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import StudentsList from "./components/StudentsList";
// var url =
//   "https://api.duyiedu.com/api/student/findAll?appkey=demo13_1545210570249";
// async function getData() {
//   const students = await fetch(url2)
//     .then((resp) => resp.json())
//     .then((resp) => {
//       console.log(resp.data);
//     });
//   return students;
// }
// const students = getData();
const students = {
  status: "success",
  data: [
    {
      id: 1,
      name: "郑浩然",
      birth: 2001,
      sex: 1,
      sNo: "11009",
      email: "577798856@qq.com",
      phone: "18807289450",
      address: "湖北省十堰市东岳山庄",
      appkey: "demo13_1545210570249",
      ctime: 1547190636,
      utime: 1547190636,
    },
    {
      id: 2,
      name: "郑浩然",
      birth: 2001,
      sex: 1,
      sNo: "11009",
      email: "577798856@qq.com",
      phone: "18807289450",
      address: "湖北省十堰市东岳山庄",
      appkey: "demo13_1545210570249",
      ctime: 1547190636,
      utime: 1547190636,
    },
    {
      id: 3,
      name: "郑浩然",
      birth: 2001,
      sex: 1,
      sNo: "11009",
      email: "577798856@qq.com",
      phone: "18807289450",
      address: "湖北省十堰市东岳山庄",
      appkey: "demo13_1545210570249",
      ctime: 1547190636,
      utime: 1547190636,
    },
    {
      id: 4,
      name: "郑浩然",
      birth: 2001,
      sex: 1,
      sNo: "11009",
      email: "577798856@qq.com",
      phone: "18807289450",
      address: "湖北省十堰市东岳山庄",
      appkey: "demo13_1545210570249",
      ctime: 1547190636,
      utime: 1547190636,
    },
    {
      id: 5,
      name: "郑浩然",
      birth: 2001,
      sex: 1,
      sNo: "11009",
      email: "577798856@qq.com",
      phone: "18807289450",
      address: "湖北省十堰市东岳山庄",
      appkey: "demo13_1545210570249",
      ctime: 1547190636,
      utime: 1547190636,
    },
  ],
};
ReactDOM.render(
  <StudentsList {...students} />,
  document.getElementById("root")
);
