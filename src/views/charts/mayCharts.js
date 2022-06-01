import React from 'react'
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

const mayCharts = () => {
  const random = () => Math.round(Math.random() * 100)

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
                labels: [
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                ],
                datasets: [
                  {
                    label: 'Core',
                    backgroundColor: '#f87979',
                    data: [1, 6, 2, 1, 3, 0, 3, 7, 0, 4, 0],
                  },
                  {
                    label: 'ERC',
                    backgroundColor: '#ffd43b',
                    data: [1, 2, 3, 1, 5, 4, 1, 3, 7, 8, 0],
                  },
                  {
                    label: 'Networking',
                    backgroundColor: '#a5d8ff',
                    data: [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
                  },
                  {
                    label: 'Interface',
                    backgroundColor: '#8ce99a',
                    data: [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
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
                labels: [
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                ],
                datasets: [
                  {
                    label: 'Core',
                    backgroundColor: '#ff8787',
                    borderColor: '#ff8787',
                    pointBackgroundColor: '#ff8787',
                    pointBorderColor: '#fff',
                    data: [6, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
                  },
                  {
                    label: 'ERC',
                    backgroundColor: '#748ffc',
                    borderColor: '#748ffc',
                    pointBackgroundColor: '#748ffc',
                    pointBorderColor: '#fff',
                    data: [0, 0, 0, 0, 0, 1, 2, 1, 1, 1, 0],
                  },
                  {
                    label: 'Networking',
                    backgroundColor: '#69db7c',
                    borderColor: '#69db7c',
                    pointBackgroundColor: '#69db7c',
                    pointBorderColor: '#fff',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                  },
                  {
                    label: 'Interface',
                    backgroundColor: '#fab005',
                    borderColor: '#fab005',
                    pointBackgroundColor: '#fab005',
                    pointBorderColor: '#fff',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
                labels: [
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                ],
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
                    data: [2, 9, 5, 3, 8, 4, 4, 11, 7, 17, 0],
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
                    data: [0, 0, 0, 0, 0, 0, 0, 13, 16, 8, 0],
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
                labels: [
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                ],
                datasets: [
                  {
                    label: 'Draft',
                    backgroundColor: 'rgba(255, 245, 245, 0.2)',
                    borderColor: '#ff8787',
                    pointBackgroundColor: '#f03e3e',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220, 220, 220, 1)',
                    data: [2, 9, 5, 3, 8, 4, 4, 11, 7, 17, 0],
                  },
                  {
                    label: 'Final',
                    backgroundColor: 'rgba(255, 224, 102, 0.2)',
                    borderColor: '#ffe066',
                    pointBackgroundColor: '#fab005',
                    pointBorderColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151, 187, 205, 1)',
                    data: [6, 0, 0, 0, 1, 1, 3, 1, 1, 2, 0],
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
