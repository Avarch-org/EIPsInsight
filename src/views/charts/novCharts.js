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

const mayCharts = (props) => {
  const [info, setInfo] = useState()

  useEffect(() => {
    setInfo(JSON.parse(localStorage.getItem('count')))
  }, [])

  useEffect(() => {
    console.log('jkfdlj')

    if (props.data !== undefined) {
      setInfo(props.data)
      localStorage.setItem('count', JSON.stringify(props.data))
    } else {
      localStorage.setItem('count', JSON.stringify(info))
    }
  }, [info])

  console.log(info)
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
          <CCardHeader>Draft</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['Aug', 'Sep', 'Oct', 'Nov'],
                datasets: [
                  {
                    label: 'Core',
                    backgroundColor: '#f87979',
                    data: [
                      `${info === undefined ? '0' : info[46][3]}`,
                      `${info === undefined ? '0' : info[47][3]}`,
                      `${info === undefined ? '0' : info[48][3]}`,
                      `${info === undefined ? '0' : info[49][3]}`,
                    ],
                  },
                  {
                    label: 'ERC',
                    backgroundColor: '#ffd43b',
                    data: [
                      `${info === undefined ? '0' : info[46][4]}`,
                      `${info === undefined ? '0' : info[47][4]}`,
                      `${info === undefined ? '0' : info[48][4]}`,
                      `${info === undefined ? '0' : info[49][4]}`,
                    ],
                  },
                  {
                    label: 'Networking',
                    backgroundColor: '#a5d8ff',
                    data: [
                      `${info === undefined ? '0' : info[46][5]}`,
                      `${info === undefined ? '0' : info[47][5]}`,
                      `${info === undefined ? '0' : info[48][5]}`,
                      `${info === undefined ? '0' : info[49][5]}`,
                    ],
                  },
                  {
                    label: 'Interface',
                    backgroundColor: '#8ce99a',
                    data: [
                      `${info === undefined ? '0' : info[46][6]}`,
                      `${info === undefined ? '0' : info[47][6]}`,
                      `${info === undefined ? '0' : info[48][6]}`,
                      `${info === undefined ? '0' : info[49][6]}`,
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
          <CCardHeader>Final</CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['Aug', 'Sep', 'Oct', 'Nov'],
                datasets: [
                  {
                    label: 'Core',
                    backgroundColor: '#ff8787',
                    borderColor: '#ff8787',
                    pointBackgroundColor: '#ff8787',
                    pointBorderColor: '#fff',
                    data: [
                      `${info === undefined ? '0' : info[46][8]}`,
                      `${info === undefined ? '0' : info[47][8]}`,
                      `${info === undefined ? '0' : info[48][8]}`,
                      `${info === undefined ? '0' : info[49][8]}`,
                    ],
                  },
                  {
                    label: 'ERC',
                    backgroundColor: '#748ffc',
                    borderColor: '#748ffc',
                    pointBackgroundColor: '#748ffc',
                    pointBorderColor: '#fff',
                    data: [
                      `${info === undefined ? '0' : info[46][9]}`,
                      `${info === undefined ? '0' : info[47][9]}`,
                      `${info === undefined ? '0' : info[48][9]}`,
                      `${info === undefined ? '0' : info[49][9]}`,
                    ],
                  },
                  {
                    label: 'Networking',
                    backgroundColor: '#69db7c',
                    borderColor: '#69db7c',
                    pointBackgroundColor: '#69db7c',
                    pointBorderColor: '#fff',
                    data: [
                      `${info === undefined ? '0' : info[46][10]}`,
                      `${info === undefined ? '0' : info[47][10]}`,
                      `${info === undefined ? '0' : info[48][10]}`,
                      `${info === undefined ? '0' : info[49][10]}`,
                    ],
                  },
                  {
                    label: 'Interface',
                    backgroundColor: '#fab005',
                    borderColor: '#fab005',
                    pointBackgroundColor: '#fab005',
                    pointBorderColor: '#fff',
                    data: [
                      `${info === undefined ? '0' : info[46][11]}`,
                      `${info === undefined ? '0' : info[47][11]}`,
                      `${info === undefined ? '0' : info[48][11]}`,
                      `${info === undefined ? '0' : info[49][11]}`,
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
          <CCardHeader>Draft EIPs vs Potential Proposal</CCardHeader>
          <CCardBody>
            <CChartDoughnut
              data={{
                labels: ['Aug', 'Sep', 'Oct', 'Nov'],
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
                    ],
                  },
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
                    ],
                  },
                ],
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
          <CCardHeader>Final vs Draft</CCardHeader>
          <CCardBody>
            <CChartRadar
              data={{
                labels: ['Aug', 'Sep', 'Oct', 'Nov'],
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
