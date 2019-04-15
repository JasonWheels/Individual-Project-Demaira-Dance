import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const schoolList = (allSchools) => {
  return allSchools.map((school, index) => {
    return (
      <div key={index}>
        <Link to={`schools/${school.id}`}>{school.name}</Link>
      </div>
    )
  })
}

export default {
  schoolList: schoolList
}