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

function aprilLastCall(props) {
  const [info, setInfo] = useState()
  const [lastCall, setLastCall] = useState()

  useEffect(() => {
    setInfo(JSON.parse(localStorage.getItem('count')))
    setLastCall(JSON.parse(localStorage.getItem('aprilLastCall')))
  }, [])

  useEffect(() => {
    if (props.data !== undefined) {
      setInfo(props.data)
      setLastCall(props.data.filter(filterDraft))
      localStorage.setItem('count', JSON.stringify(props.data))
      localStorage.setItem('aprilLastCall', JSON.stringify(props.data.filter(filterDraft)))
    } else {
      localStorage.setItem('count', JSON.stringify(info))
      localStorage.setItem('aprilLastCall', JSON.stringify(info.filter(filterDraft)))
    }
  }, [info])

  console.log(info)
  console.log(lastCall)

  function filterDraft(item, index) {
    if (index >= 130 && item[1] === 'aprilLastCall') {
      return true
    } else {
      return false
    }
  }

  return (
    <>
      <div
        style={{
          fontSize: '30px',
          fontWeight: '400',
          marginBottom: '10px',
        }}
      >
        Last-Call
      </div>
      <CTable>
        <CTableHead color="dark">
          <CTableRow>
            <CTableHeaderCell scope="col">Number</CTableHeaderCell>
            <CTableHeaderCell scope="col">Title</CTableHeaderCell>
            <CTableHeaderCell scope="col">Author</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {lastCall !== undefined ? (
            lastCall.map((item) => (
              <CTableRow>
                <CTableHeaderCell scope="row">
                  {item[2] !== null ? parseInt(item[2]) : 1}
                </CTableHeaderCell>
                <CTableDataCell>{item[3] != null ? item[3] : 1}</CTableDataCell>
                <CTableDataCell>{item[4] !== null ? item[4] : 1}</CTableDataCell>
              </CTableRow>
            ))
          ) : (
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>Mark</CTableDataCell>
              <CTableDataCell>Otto</CTableDataCell>
            </CTableRow>
          )}
          {/* <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>Mark</CTableDataCell>
            <CTableDataCell>Otto</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">2</CTableHeaderCell>
            <CTableDataCell>Jacob</CTableDataCell>
            <CTableDataCell>Thornton</CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">3</CTableHeaderCell>
            <CTableDataCell colSpan="2">Larry the Bird</CTableDataCell>
          </CTableRow> */}
        </CTableBody>
      </CTable>
    </>
  )
}

export default aprilLastCall
