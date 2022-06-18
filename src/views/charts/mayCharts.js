/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useState } from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { DocsCallout } from 'src/components'
import { Link } from 'react-router-dom'
import './mayCharts.styles.css'

const mayCharts = (props) => {
  const [info, setInfo] = useState()

  useEffect(() => {
    setInfo(localStorage.getItem('count'))
  }, [])

  useEffect(() => {
    if (props.data !== undefined) {
      setInfo(props.data)
      localStorage.setItem('count', JSON.stringify(props.data))
    } else {
      localStorage.setItem('count', JSON.stringify(info))
    }
  }, [info])

  console.log(info)

  return (
    <CRow>
      {/* <CCol xs={12}>
        <DocsCallout
          name="Chart"
          href="components/chart"
          content="React wrapper component for Chart.js 3.0, the most popular charting library."
        />
      </CCol> */}
      <CCol xs={6}>
        <CCard className="mb-4">
          <Link to="/mayDraftTable" style={{ textDecoration: 'none', color: 'inherit' }}>
            <CCardHeader className="cardHeader">Draft</CCardHeader>
          </Link>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [
                  {
                    label: 'Core',
                    backgroundColor: '#f87979',
                    borderRadius: 10,
                    data: [
                      `${info === undefined ? '0' : info[46][3]}`,
                      `${info === undefined ? '0' : info[47][3]}`,
                      `${info === undefined ? '0' : info[48][3]}`,
                      `${info === undefined ? '0' : info[49][3]}`,
                      `${info === undefined ? '0' : info[50][3]}`,
                      `${info === undefined ? '0' : info[51][3]}`,
                      `${info === undefined ? '0' : info[52][3]}`,
                      `${info === undefined ? '0' : info[53][3]}`,
                      `${info === undefined ? '0' : info[54][3]}`,
                      `${info === undefined ? '0' : info[55][3]}`,
                    ],
                  },
                  {
                    label: 'ERC',
                    backgroundColor: '#ffd43b',
                    borderRadius: 10,
                    data: [
                      `${info === undefined ? '0' : info[46][4]}`,
                      `${info === undefined ? '0' : info[47][4]}`,
                      `${info === undefined ? '0' : info[48][4]}`,
                      `${info === undefined ? '0' : info[49][4]}`,
                      `${info === undefined ? '0' : info[50][4]}`,
                      `${info === undefined ? '0' : info[51][4]}`,
                      `${info === undefined ? '0' : info[52][4]}`,
                      `${info === undefined ? '0' : info[53][4]}`,
                      `${info === undefined ? '0' : info[54][4]}`,
                      `${info === undefined ? '0' : info[55][4]}`,
                    ],
                  },
                  {
                    label: 'Networking',
                    backgroundColor: '#a5d8ff',
                    borderRadius: 10,
                    data: [
                      `${info === undefined ? '0' : info[46][5]}`,
                      `${info === undefined ? '0' : info[47][5]}`,
                      `${info === undefined ? '0' : info[48][5]}`,
                      `${info === undefined ? '0' : info[49][5]}`,
                      `${info === undefined ? '0' : info[50][5]}`,
                      `${info === undefined ? '0' : info[51][5]}`,
                      `${info === undefined ? '0' : info[52][5]}`,
                      `${info === undefined ? '0' : info[53][5]}`,
                      `${info === undefined ? '0' : info[54][5]}`,
                      `${info === undefined ? '0' : info[55][5]}`,
                    ],
                  },
                  {
                    label: 'Interface',
                    backgroundColor: '#8ce99a',
                    borderRadius: 10,
                    data: [
                      `${info === undefined ? '0' : info[46][6]}`,
                      `${info === undefined ? '0' : info[47][6]}`,
                      `${info === undefined ? '0' : info[48][6]}`,
                      `${info === undefined ? '0' : info[49][6]}`,
                      `${info === undefined ? '0' : info[50][6]}`,
                      `${info === undefined ? '0' : info[51][6]}`,
                      `${info === undefined ? '0' : info[52][6]}`,
                      `${info === undefined ? '0' : info[53][6]}`,
                      `${info === undefined ? '0' : info[54][6]}`,
                      `${info === undefined ? '0' : info[55][6]}`,
                    ],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <Link to="/mayFinalTable" style={{ textDecoration: 'none', color: 'inherit' }}>
            <CCardHeader className="cardHeader">Final</CCardHeader>
          </Link>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [
                  {
                    label: 'Core',
                    backgroundColor: '#f87979',
                    borderColor: '#f87979',
                    pointBackgroundColor: '#f87979',
                    pointBorderColor: '#fff',
                    data: [
                      `${info === undefined ? '0' : info[46][8]}`,
                      `${info === undefined ? '0' : info[47][8]}`,
                      `${info === undefined ? '0' : info[48][8]}`,
                      `${info === undefined ? '0' : info[49][8]}`,
                      `${info === undefined ? '0' : info[50][8]}`,
                      `${info === undefined ? '0' : info[51][8]}`,
                      `${info === undefined ? '0' : info[52][8]}`,
                      `${info === undefined ? '0' : info[53][8]}`,
                      `${info === undefined ? '0' : info[54][8]}`,
                      `${info === undefined ? '0' : info[55][8]}`,
                    ],
                  },
                  {
                    label: 'ERC',
                    backgroundColor: '#ffd43b',
                    borderColor: '#ffd43b',
                    pointBackgroundColor: '#ffd43b',
                    pointBorderColor: '#ffd43b',
                    data: [
                      `${info === undefined ? '0' : info[46][9]}`,
                      `${info === undefined ? '0' : info[47][9]}`,
                      `${info === undefined ? '0' : info[48][9]}`,
                      `${info === undefined ? '0' : info[49][9]}`,
                      `${info === undefined ? '0' : info[50][9]}`,
                      `${info === undefined ? '0' : info[51][9]}`,
                      `${info === undefined ? '0' : info[52][9]}`,
                      `${info === undefined ? '0' : info[53][9]}`,
                      `${info === undefined ? '0' : info[54][9]}`,
                      `${info === undefined ? '0' : info[55][9]}`,
                    ],
                  },
                  {
                    label: 'Networking',
                    backgroundColor: '#a5d8ff',
                    borderColor: '#a5d8ff',
                    pointBackgroundColor: '#a5d8ff',
                    pointBorderColor: '#fff',
                    data: [
                      `${info === undefined ? '0' : info[46][10]}`,
                      `${info === undefined ? '0' : info[47][10]}`,
                      `${info === undefined ? '0' : info[48][10]}`,
                      `${info === undefined ? '0' : info[49][10]}`,
                      `${info === undefined ? '0' : info[50][10]}`,
                      `${info === undefined ? '0' : info[51][10]}`,
                      `${info === undefined ? '0' : info[52][10]}`,
                      `${info === undefined ? '0' : info[53][10]}`,
                      `${info === undefined ? '0' : info[54][10]}`,
                      `${info === undefined ? '0' : info[55][10]}`,
                    ],
                  },
                  {
                    label: 'Interface',
                    backgroundColor: '#8ce99a',
                    borderColor: '#8ce99a',
                    pointBackgroundColor: '#8ce99a',
                    pointBorderColor: '#fff',
                    data: [
                      `${info === undefined ? '0' : info[46][11]}`,
                      `${info === undefined ? '0' : info[47][11]}`,
                      `${info === undefined ? '0' : info[48][11]}`,
                      `${info === undefined ? '0' : info[49][11]}`,
                      `${info === undefined ? '0' : info[50][11]}`,
                      `${info === undefined ? '0' : info[51][11]}`,
                      `${info === undefined ? '0' : info[52][11]}`,
                      `${info === undefined ? '0' : info[53][11]}`,
                      `${info === undefined ? '0' : info[54][11]}`,
                      `${info === undefined ? '0' : info[55][11]}`,
                    ],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <Link to="/mayReviewTable" style={{ textDecoration: 'none', color: 'inherit' }}>
            <CCardHeader className="cardHeader">Review</CCardHeader>
          </Link>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [
                  {
                    label: 'Core',
                    backgroundColor: '#f87979',
                    data: [
                      `${info === undefined ? '0' : info[123][2]}`,
                      `${info === undefined ? '0' : info[116][2]}`,
                      `${info === undefined ? '0' : info[109][2]}`,
                      `${info === undefined ? '0' : info[102][2]}`,
                      `${info === undefined ? '0' : info[95][2]}`,
                      `${info === undefined ? '0' : info[88][2]}`,
                      `${info === undefined ? '0' : info[81][2]}`,
                      `${info === undefined ? '0' : info[74][2]}`,
                      `${info === undefined ? '0' : info[67][2]}`,
                      `${info === undefined ? '0' : info[60][2]}`,
                    ],
                  },
                  {
                    label: 'ERC',
                    backgroundColor: '#ffd43b',
                    data: [
                      `${info === undefined ? '0' : info[124][2]}`,
                      `${info === undefined ? '0' : info[117][2]}`,
                      `${info === undefined ? '0' : info[110][2]}`,
                      `${info === undefined ? '0' : info[103][2]}`,
                      `${info === undefined ? '0' : info[96][2]}`,
                      `${info === undefined ? '0' : info[89][2]}`,
                      `${info === undefined ? '0' : info[82][2]}`,
                      `${info === undefined ? '0' : info[75][2]}`,
                      `${info === undefined ? '0' : info[68][2]}`,
                      `${info === undefined ? '0' : info[61][2]}`,
                    ],
                  },
                  {
                    label: 'Networking',
                    backgroundColor: '#a5d8ff',
                    data: [
                      `${info === undefined ? '0' : info[125][2]}`,
                      `${info === undefined ? '0' : info[118][2]}`,
                      `${info === undefined ? '0' : info[111][2]}`,
                      `${info === undefined ? '0' : info[104][2]}`,
                      `${info === undefined ? '0' : info[97][2]}`,
                      `${info === undefined ? '0' : info[90][2]}`,
                      `${info === undefined ? '0' : info[83][2]}`,
                      `${info === undefined ? '0' : info[77][2]}`,
                      `${info === undefined ? '0' : info[69][2]}`,
                      `${info === undefined ? '0' : info[62][2]}`,
                    ],
                  },
                  {
                    label: 'Interface',
                    backgroundColor: '#8ce99a',
                    data: [
                      `${info === undefined ? '0' : info[126][2]}`,
                      `${info === undefined ? '0' : info[119][2]}`,
                      `${info === undefined ? '0' : info[112][2]}`,
                      `${info === undefined ? '0' : info[105][2]}`,
                      `${info === undefined ? '0' : info[98][2]}`,
                      `${info === undefined ? '0' : info[91][2]}`,
                      `${info === undefined ? '0' : info[84][2]}`,
                      `${info === undefined ? '0' : info[78][2]}`,
                      `${info === undefined ? '0' : info[70][2]}`,
                      `${info === undefined ? '0' : info[63][2]}`,
                    ],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <Link to="/mayLastCallTable" style={{ textDecoration: 'none', color: 'inherit' }}>
            <CCardHeader className="cardHeader">Last Call</CCardHeader>
          </Link>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [
                  {
                    label: 'Core',
                    backgroundColor: '#f87979',
                    borderColor: '#f87979',
                    pointBackgroundColor: '#f87979',
                    pointBorderColor: '#fff',
                    data: [
                      `${info === undefined ? '0' : info[123][3]}`,
                      `${info === undefined ? '0' : info[116][3]}`,
                      `${info === undefined ? '0' : info[109][3]}`,
                      `${info === undefined ? '0' : info[102][3]}`,
                      `${info === undefined ? '0' : info[95][3]}`,
                      `${info === undefined ? '0' : info[88][3]}`,
                      `${info === undefined ? '0' : info[81][3]}`,
                      `${info === undefined ? '0' : info[74][3]}`,
                      `${info === undefined ? '0' : info[67][3]}`,
                      `${info === undefined ? '0' : info[60][3]}`,
                    ],
                  },
                  {
                    label: 'ERC',
                    backgroundColor: '#ffd43b',
                    borderColor: '#ffd43b',
                    pointBackgroundColor: '#ffd43b',
                    pointBorderColor: '#fff',
                    data: [
                      `${info === undefined ? '0' : info[124][3]}`,
                      `${info === undefined ? '0' : info[117][3]}`,
                      `${info === undefined ? '0' : info[110][3]}`,
                      `${info === undefined ? '0' : info[103][3]}`,
                      `${info === undefined ? '0' : info[96][3]}`,
                      `${info === undefined ? '0' : info[89][3]}`,
                      `${info === undefined ? '0' : info[82][3]}`,
                      `${info === undefined ? '0' : info[75][3]}`,
                      `${info === undefined ? '0' : info[68][3]}`,
                      `${info === undefined ? '0' : info[61][3]}`,
                    ],
                  },
                  {
                    label: 'Networking',
                    backgroundColor: '#a5d8ff',
                    borderColor: '#a5d8ff',
                    pointBackgroundColor: '#a5d8ff',
                    pointBorderColor: '#fff',
                    data: [
                      `${info === undefined ? '0' : info[125][3]}`,
                      `${info === undefined ? '0' : info[118][3]}`,
                      `${info === undefined ? '0' : info[111][3]}`,
                      `${info === undefined ? '0' : info[104][3]}`,
                      `${info === undefined ? '0' : info[97][3]}`,
                      `${info === undefined ? '0' : info[90][3]}`,
                      `${info === undefined ? '0' : info[83][3]}`,
                      `${info === undefined ? '0' : info[77][3]}`,
                      `${info === undefined ? '0' : info[69][3]}`,
                      `${info === undefined ? '0' : info[62][3]}`,
                    ],
                  },
                  {
                    label: 'Interface',
                    backgroundColor: '#8ce99a',
                    borderColor: '#8ce99a',
                    pointBackgroundColor: '#8ce99a',
                    pointBorderColor: '#fff',
                    data: [
                      `${info === undefined ? '0' : info[126][3]}`,
                      `${info === undefined ? '0' : info[119][3]}`,
                      `${info === undefined ? '0' : info[112][3]}`,
                      `${info === undefined ? '0' : info[105][3]}`,
                      `${info === undefined ? '0' : info[98][3]}`,
                      `${info === undefined ? '0' : info[91][3]}`,
                      `${info === undefined ? '0' : info[84][3]}`,
                      `${info === undefined ? '0' : info[78][3]}`,
                      `${info === undefined ? '0' : info[70][3]}`,
                      `${info === undefined ? '0' : info[63][3]}`,
                    ],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <Link to="/mayStagnantTable" style={{ textDecoration: 'none', color: 'inherit' }}>
            <CCardHeader className="cardHeader">Stagnant</CCardHeader>
          </Link>
          <CCardBody>
            <CChartRadar
              data={{
                labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [
                  {
                    label: 'Core',
                    backgroundColor: 'rgba(255, 245, 245, 0.2)',
                    borderColor: '#ff8787',
                    pointBackgroundColor: '#f03e3e',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                    data: [
                      `${info === undefined ? '0' : info[123][4]}`,
                      `${info === undefined ? '0' : info[116][4]}`,
                      `${info === undefined ? '0' : info[109][4]}`,
                      `${info === undefined ? '0' : info[102][4]}`,
                      `${info === undefined ? '0' : info[95][4]}`,
                      `${info === undefined ? '0' : info[88][4]}`,
                      `${info === undefined ? '0' : info[81][4]}`,
                      `${info === undefined ? '0' : info[74][4]}`,
                      `${info === undefined ? '0' : info[67][4]}`,
                      `${info === undefined ? '0' : info[60][4]}`,
                    ],
                  },
                  {
                    label: 'ERC',
                    backgroundColor: 'rgba(255, 224, 102, 0.2)',
                    borderColor: '#ffe066',
                    pointBackgroundColor: '#fab005',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151, 187, 205, 1)',
                    data: [
                      `${info === undefined ? '0' : info[124][4]}`,
                      `${info === undefined ? '0' : info[117][4]}`,
                      `${info === undefined ? '0' : info[110][4]}`,
                      `${info === undefined ? '0' : info[103][4]}`,
                      `${info === undefined ? '0' : info[96][4]}`,
                      `${info === undefined ? '0' : info[89][4]}`,
                      `${info === undefined ? '0' : info[82][4]}`,
                      `${info === undefined ? '0' : info[75][4]}`,
                      `${info === undefined ? '0' : info[68][4]}`,
                      `${info === undefined ? '0' : info[61][4]}`,
                    ],
                  },
                  {
                    label: 'Interface',
                    backgroundColor: 'rgba(231, 245, 255, 1)',
                    borderColor: '#339af0',
                    pointBackgroundColor: '#339af0',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151, 187, 205, 1)',
                    data: [
                      `${info === undefined ? '0' : info[125][4]}`,
                      `${info === undefined ? '0' : info[118][4]}`,
                      `${info === undefined ? '0' : info[111][4]}`,
                      `${info === undefined ? '0' : info[104][4]}`,
                      `${info === undefined ? '0' : info[97][4]}`,
                      `${info === undefined ? '0' : info[90][4]}`,
                      `${info === undefined ? '0' : info[83][4]}`,
                      `${info === undefined ? '0' : info[77][4]}`,
                      `${info === undefined ? '0' : info[69][4]}`,
                      `${info === undefined ? '0' : info[62][4]}`,
                    ],
                  },
                  {
                    label: 'Networking',
                    backgroundColor: 'rgba(235, 251, 238, 1)',
                    borderColor: '#40c057',
                    pointBackgroundColor: '#40c057',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151, 187, 205, 1)',
                    data: [
                      `${info === undefined ? '0' : info[126][4]}`,
                      `${info === undefined ? '0' : info[119][4]}`,
                      `${info === undefined ? '0' : info[112][4]}`,
                      `${info === undefined ? '0' : info[105][4]}`,
                      `${info === undefined ? '0' : info[98][4]}`,
                      `${info === undefined ? '0' : info[91][4]}`,
                      `${info === undefined ? '0' : info[84][4]}`,
                      `${info === undefined ? '0' : info[78][4]}`,
                      `${info === undefined ? '0' : info[70][4]}`,
                      `${info === undefined ? '0' : info[63][4]}`,
                    ],
                  },
                ],
              }}
              options={{
                aspectRatio: 2,

                tooltips: {
                  enabled: true,
                },
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <Link to="/mayWithdrawnTable" style={{ textDecoration: 'none', color: 'inherit' }}>
            <CCardHeader className="cardHeader">Withdrawn</CCardHeader>
          </Link>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [
                  {
                    label: 'Core',
                    backgroundColor: '#f87979',
                    data: [
                      `${info === undefined ? '0' : info[123][5]}`,
                      `${info === undefined ? '0' : info[116][5]}`,
                      `${info === undefined ? '0' : info[109][5]}`,
                      `${info === undefined ? '0' : info[102][5]}`,
                      `${info === undefined ? '0' : info[95][5]}`,
                      `${info === undefined ? '0' : info[88][5]}`,
                      `${info === undefined ? '0' : info[81][5]}`,
                      `${info === undefined ? '0' : info[74][5]}`,
                      `${info === undefined ? '0' : info[67][5]}`,
                      `${info === undefined ? '0' : info[60][5]}`,
                    ],
                  },
                  {
                    label: 'ERC',
                    backgroundColor: '#ffd43b',
                    data: [
                      `${info === undefined ? '0' : info[124][5]}`,
                      `${info === undefined ? '0' : info[117][5]}`,
                      `${info === undefined ? '0' : info[110][5]}`,
                      `${info === undefined ? '0' : info[103][5]}`,
                      `${info === undefined ? '0' : info[96][5]}`,
                      `${info === undefined ? '0' : info[89][5]}`,
                      `${info === undefined ? '0' : info[82][5]}`,
                      `${info === undefined ? '0' : info[75][5]}`,
                      `${info === undefined ? '0' : info[68][5]}`,
                      `${info === undefined ? '0' : info[61][5]}`,
                    ],
                  },
                  {
                    label: 'Networking',
                    backgroundColor: '#a5d8ff',
                    data: [
                      `${info === undefined ? '0' : info[125][5]}`,
                      `${info === undefined ? '0' : info[118][5]}`,
                      `${info === undefined ? '0' : info[111][5]}`,
                      `${info === undefined ? '0' : info[104][5]}`,
                      `${info === undefined ? '0' : info[97][5]}`,
                      `${info === undefined ? '0' : info[90][5]}`,
                      `${info === undefined ? '0' : info[83][5]}`,
                      `${info === undefined ? '0' : info[77][5]}`,
                      `${info === undefined ? '0' : info[69][5]}`,
                      `${info === undefined ? '0' : info[62][5]}`,
                    ],
                  },
                  {
                    label: 'Interface',
                    backgroundColor: '#8ce99a',
                    data: [
                      `${info === undefined ? '0' : info[126][5]}`,
                      `${info === undefined ? '0' : info[119][5]}`,
                      `${info === undefined ? '0' : info[112][5]}`,
                      `${info === undefined ? '0' : info[105][5]}`,
                      `${info === undefined ? '0' : info[98][5]}`,
                      `${info === undefined ? '0' : info[91][5]}`,
                      `${info === undefined ? '0' : info[84][5]}`,
                      `${info === undefined ? '0' : info[78][5]}`,
                      `${info === undefined ? '0' : info[70][5]}`,
                      `${info === undefined ? '0' : info[63][5]}`,
                    ],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader className="cardHeader">Draft EIPs vs Potential Proposal</CCardHeader>
          <CCardBody>
            <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>
              Draft EIPs
            </div>
            <CChartDoughnut
              data={{
                labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [
                  {
                    label: 'Draft EIPs',
                    backgroundColor: [
                      '#3bc9db',
                      '#fa5252',
                      '#e64980',
                      '#be4bdb',
                      '#7950f2',
                      '#4c6ef5',
                      '#15aabf',
                      '#12b886',
                      '#40c057',
                      '#fab005',
                      '#fd7e14',
                    ],
                    data: [
                      `${info === undefined ? '0' : info[46][2]}`,
                      `${info === undefined ? '0' : info[47][2]}`,
                      `${info === undefined ? '0' : info[48][2]}`,
                      `${info === undefined ? '0' : info[49][2]}`,
                      `${info === undefined ? '0' : info[50][2]}`,
                      `${info === undefined ? '0' : info[51][2]}`,
                      `${info === undefined ? '0' : info[52][2]}`,
                      `${info === undefined ? '0' : info[53][2]}`,
                      `${info === undefined ? '0' : info[54][2]}`,
                      `${info === undefined ? '0' : info[55][2]}`,
                    ],
                  },
                ],
              }}
              options={{
                aspectRatio: 2,
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: (context) => {
                        return `Draft: ${context.parsed}`
                      },
                    },
                  },
                },

                tooltips: {
                  enabled: true,
                },
              }}
            />
            <div
              style={{
                marginBottom: '10px',
                marginTop: '10px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Potential Proposal
            </div>
            <CChartDoughnut
              data={{
                labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [
                  {
                    label: 'Potential Proposal',
                    backgroundColor: [
                      '#3bc9db',
                      '#fa5252',
                      '#e64980',
                      '#be4bdb',
                      '#7950f2',
                      '#4c6ef5',
                      '#15aabf',
                      '#12b886',
                      '#40c057',
                      '#fab005',
                      '#fd7e14',
                    ],
                    data: [
                      `${info === undefined ? '0' : info[46][12]}`,
                      `${info === undefined ? '0' : info[47][12]}`,
                      `${info === undefined ? '0' : info[48][12]}`,
                      `${info === undefined ? '0' : info[49][12]}`,
                      `${info === undefined ? '0' : info[50][12]}`,
                      `${info === undefined ? '0' : info[51][12]}`,
                      `${info === undefined ? '0' : info[52][12]}`,
                      `${info === undefined ? '0' : info[53][12]}`,
                      `${info === undefined ? '0' : info[54][12]}`,
                      `${info === undefined ? '0' : info[55][12]}`,
                    ],
                  },
                ],
              }}
              options={{
                aspectRatio: 2,
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: (context) => {
                        return `Potential Proposal: ${context.parsed}`
                      },
                    },
                  },
                  legend: {
                    display: false,
                  },
                },

                tooltips: {
                  enabled: true,
                },
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      {/* <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Pie Chart</CCardHeader>
          <CCardBody>
            <CChartPie
              data={{
                labels: ['Red', 'Green', 'Yellow'],
                datasets: [
                  {
                    data: [300, 50, 100],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Polar Area Chart</CCardHeader>
          <CCardBody>
            <CChartPolarArea
              data={{
                labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
                datasets: [
                  {
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol> */}
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader className="cardHeader">Final vs Draft</CCardHeader>
          <CCardBody>
            <CChartRadar
              data={{
                labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [
                  {
                    label: 'Draft',
                    backgroundColor: 'rgba(255, 245, 245, 0.2)',
                    borderColor: '#ff8787',
                    pointBackgroundColor: '#f03e3e',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                    data: [
                      `${info === undefined ? '0' : info[46][2]}`,
                      `${info === undefined ? '0' : info[47][2]}`,
                      `${info === undefined ? '0' : info[48][2]}`,
                      `${info === undefined ? '0' : info[49][2]}`,
                      `${info === undefined ? '0' : info[50][2]}`,
                      `${info === undefined ? '0' : info[51][2]}`,
                      `${info === undefined ? '0' : info[52][2]}`,
                      `${info === undefined ? '0' : info[53][2]}`,
                      `${info === undefined ? '0' : info[54][2]}`,
                      `${info === undefined ? '0' : info[55][2]}`,
                    ],
                  },
                  {
                    label: 'Final',
                    backgroundColor: 'rgba(255, 224, 102, 0.2)',
                    borderColor: '#ffe066',
                    pointBackgroundColor: '#fab005',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151, 187, 205, 1)',
                    data: [
                      `${info === undefined ? '0' : info[46][7]}`,
                      `${info === undefined ? '0' : info[47][7]}`,
                      `${info === undefined ? '0' : info[48][7]}`,
                      `${info === undefined ? '0' : info[49][7]}`,
                      `${info === undefined ? '0' : info[50][7]}`,
                      `${info === undefined ? '0' : info[51][7]}`,
                      `${info === undefined ? '0' : info[52][7]}`,
                      `${info === undefined ? '0' : info[53][7]}`,
                      `${info === undefined ? '0' : info[54][7]}`,
                      `${info === undefined ? '0' : info[55][7]}`,
                    ],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default mayCharts
