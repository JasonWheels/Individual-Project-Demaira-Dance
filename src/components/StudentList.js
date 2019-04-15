import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const studentList = (allstudents) => {
  return allstudents.map((student, index) => {
    return (
      <div key={index}>
        <Link to={`students/${student.id}`}>{student.student_first_name} {student.student_last_name}</Link>
      </div>
    )
  })
}

export default {
  studentList: studentList
}

{/* <Redirect from="/accounts" to="/users" /> */}