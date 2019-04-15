import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const teacherList = (allTeachers) => {
  return allTeachers.map((teacher, index) => {
    return (
      <div>
        <Link to={`teachers/${teacher.id}`}>{teacher.first_name}</Link>
      </div>
    )
  })
}

export default {
  teacherList: teacherList
}