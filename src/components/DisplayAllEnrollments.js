import React, { Component } from 'react'
import { Table } from 'reactstrap'

const displayAllEnrollments = (allEnrollments) => {
  const tableContents = allEnrollments.map((enrollment, index) => {
    return (
      // <div>
      //   <p>Class ID: {enrollment.class_id} | Student ID: {enrollment.student_id}</p>
      // </div>

      <tr key={index}>
        <th scope="row">{index}</th>
        <td>{enrollment.id}</td>
        <td>{enrollment.class_id}</td>
        <td>{enrollment.student_id}</td>
      </tr>
    )
  })
  return (
    <Table hover>
      <thead>
        <tr>
          <th>Table Index</th>
          <th>Join Index</th>
          <th>Class ID</th>
          <th>Student ID</th>
        </tr>
      </thead>
      <tbody>
      {tableContents}
      </tbody>
    </Table>
  )
}

export default {
  display: displayAllEnrollments}

  // <Table>
  // <thead>
  //   <tr>
  //     <th>#</th>
  //     <th>First Name</th>
  //     <th>Last Name</th>
  //     <th>Username</th>
  //   </tr>
  // </thead>
  // <tbody>
  //   <tr>
  //     <th scope="row">1</th>
  //     <td>Mark</td>
  //     <td>Otto</td>
  //     <td>@mdo</td>
  //   </tr>