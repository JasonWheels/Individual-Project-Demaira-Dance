import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const classList = (allClasses) => {
  return allClasses.map((danceClass, index) => {
    const linkText = `${danceClass.dance_type} ${danceClass.level}`
    return (
      <div key={index}>
        <Link to={`classes/${danceClass.id}`}>{linkText}</Link>
        {/* <p>{danceClass.dance_type}: {danceClass.level}</p> */}
      </div>
    )
  })
}

export default {
 classList: classList
}

// const teacherList = (allTeachers) => {
//   return allTeachers.map((teacher, index) => {
//     return (
//       <div>
//         <Link to={`teachers/${teacher.id}`}>{teacher.first_name}</Link>
//       </div>