/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import {
  CTable,
  CTableHeaderCell,
  CTableHead,
  CTableRow,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'

function typeAll(props) {
  const [info, setInfo] = useState()
  //   const [draft, setDraft] = useState()

  useEffect(() => {
    // fetchData()
    console.log(localStorage.getItem('count'))
    if (localStorage.getItem('count') !== 'undefined') {
      setInfo(JSON.parse(localStorage.getItem('count')))
    }
  }, [])

  useEffect(() => {
    console.log(props.data)
    if (props.data !== undefined) {
      setInfo(props.data)
      localStorage.setItem('count', JSON.stringify(props.data))
    } else {
      console.log(info)
      setInfo(info)
      localStorage.setItem('count', JSON.stringify(info))
    }
  }, [info])

  console.log(props.data)
  console.log(info)

  return (
    <>
      <div
        style={{
          fontSize: '30px',
          fontWeight: '400',
          marginBottom: '10px',
        }}
      >
        {info !== undefined ? info[1][1] : 1}
      </div>
      <CTable>
        <CTableHead color="dark">
          <CTableRow>
            <CTableHeaderCell scope="col">Number</CTableHeaderCell>
            <CTableHeaderCell scope="col">Category</CTableHeaderCell>
            <CTableHeaderCell scope="col">Quantity</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>{info !== undefined ? info[1][6] : 1}</CTableDataCell>
            <CTableDataCell>{info !== undefined ? info[2][6] : 1}</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">2</CTableHeaderCell>
            <CTableDataCell>{info !== undefined ? info[1][7] : 1}</CTableDataCell>
            <CTableDataCell>{info !== undefined ? info[2][7] : 1}</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">3</CTableHeaderCell>
            <CTableDataCell>{info !== undefined ? info[1][8] : 1}</CTableDataCell>
            <CTableDataCell>{info !== undefined ? info[2][8] : 1}</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">4</CTableHeaderCell>
            <CTableDataCell>{info !== undefined ? info[1][9] : 1}</CTableDataCell>
            <CTableDataCell>{info !== undefined ? info[2][9] : 1}</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>

      <div
        style={{
          fontSize: '30px',
          fontWeight: '400',
          marginBottom: '10px',
        }}
      >
        {info !== undefined ? info[1][2] : 1}
      </div>
      <CTable>
        <CTableHead color="dark">
          <CTableRow>
            <CTableHeaderCell scope="col">Number</CTableHeaderCell>
            <CTableHeaderCell scope="col">Category</CTableHeaderCell>
            <CTableHeaderCell scope="col">Quantity</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>{info !== undefined ? info[1][2] : 1}</CTableDataCell>
            <CTableDataCell>{info !== undefined ? info[2][2] : 1}</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>

      <div
        style={{
          fontSize: '30px',
          fontWeight: '400',
          marginBottom: '10px',
        }}
      >
        {info !== undefined ? info[1][3] : 1}
      </div>
      <CTable>
        <CTableHead color="dark">
          <CTableRow>
            <CTableHeaderCell scope="col">Number</CTableHeaderCell>
            <CTableHeaderCell scope="col">Category</CTableHeaderCell>
            <CTableHeaderCell scope="col">Quantity</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>{info !== undefined ? info[1][3] : 1}</CTableDataCell>
            <CTableDataCell>{info !== undefined ? info[2][3] : 1}</CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </>
  )
}

export default typeAll
