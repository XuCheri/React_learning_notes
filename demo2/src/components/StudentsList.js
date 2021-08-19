/*
 * @Author: your name
 * @Date: 2021-08-18 22:25:42
 * @LastEditTime: 2021-08-19 13:44:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \React_learning_notes\demo2\src\components\StudentsList.js
 */
import React, { Component } from 'react'
import StudentList from './StudentList'

export default class StudentsList extends Component {
    render() {
        const students = this.props.stus.map(item=><StudentList key={item.id} {...item} />);
        return (
            <ul>
                {students}
            </ul>
        )
    }
}
