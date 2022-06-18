/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartBar, CChartLine, CChartDoughnut, CChartRadar } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = (props) => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]
  const [data, setInfo1] = useState()
  const [info, setInfo] = useState()

  // async function fetchData() {
  //   const fullResponse = await fetch(
  //     'https://sheet.best/api/sheets/03682d10-57f7-4947-a6c9-32ee1cfc4e11',
  //   )
  //   const responseJson = await fullResponse.json()
  //   console.log(responseJson)
  //   setInfo1(responseJson)
  // }
  const [post, getPost] = useState([])
  const API = 'http://localhost:5000/api/v1/tours'
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data.tours)
        getPost(res.data.tours)
      })
  }
  useEffect(() => {
    fetchPost()
  }, [])

  useEffect(() => {
    // fetchData()
    console.log(localStorage.getItem('count'))
    if (localStorage.getItem('count') !== 'undefined') {
      setInfo(JSON.parse(localStorage.getItem('count')))
    }
  }, [])

  useEffect(() => {
    if (props.data !== undefined) {
      console.log(props.data)
      setInfo(props.data)
      localStorage.setItem('count', JSON.stringify(props.data))
    } else {
      console.log(props.data)
      localStorage.setItem('count', JSON.stringify(info))
    }
  }, [info])

  console.log(info)

  return (
    <>
      <WidgetsDropdown data={data} />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                EIPs
              </h4>
              <div className="small text-medium-emphasis">August 2021 - June 2022</div>
            </CCol>
            {/* <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol> */}
          </CRow>
          <CChartBar
            style={{ height: '500px', marginTop: '40px' }}
            data={{
              // labels: [`${standardTrackName}`, `${metaName}`, `${informationalName}`],
              labels: [
                `${info === undefined ? '0' : info[1][1]}`,
                `${info === undefined ? '0' : info[1][2]}`,
                `${info === undefined ? '0' : info[1][3]}`,
              ],
              datasets: [
                {
                  label: 'EIPs',
                  backgroundColor: 'rgba(116, 192, 252, 0.2)',
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  // data: [
                  //   `${info === undefined ? '0' : info[2][1]}`,
                  //   `${info === undefined ? '0' : info[2][2]}`,
                  //   `${info === undefined ? '0' : info[2][3]}`,
                  // ],
                  data: [
                    `${
                      post.length === 0
                        ? 0
                        : post[0].value[0] + post[0].value[1] + post[0].value[2] + post[0].value[3]
                    }`,
                    `${post.length === 0 ? 0 : post[0].Meta}`,
                    `${post.length === 0 ? 0 : post[0].Informational}`,
                  ],
                  fill: true,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 6,
                    stepSize: 100,
                    max: 500,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        {/* <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter> */}
      </CCard>
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
                  labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
                  datasets: [
                    {
                      label: 'Core',
                      backgroundColor: '#f87979',
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
            <CCardHeader>Final</CCardHeader>
            <CCardBody>
              <CChartLine
                data={{
                  labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
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
                      backgroundColor: '#748ffc',
                      borderColor: '#748ffc',
                      pointBackgroundColor: '#748ffc',
                      pointBorderColor: '#fff',
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
                      backgroundColor: '#69db7c',
                      borderColor: '#69db7c',
                      pointBackgroundColor: '#69db7c',
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
                      backgroundColor: '#fab005',
                      borderColor: '#fab005',
                      pointBackgroundColor: '#fab005',
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
            <CCardHeader>Final vs Draft</CCardHeader>
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

      {/* <WidgetsBrand withCharts /> */}

      {/* <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Traffic {' & '} Sales</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">New Clients</div>
                        <div className="fs-5 fw-semibold">9,123</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Recurring Clients</div>
                        <div className="fs-5 fw-semibold">22,643</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Pageviews</div>
                        <div className="fs-5 fw-semibold">78,623</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Organic</div>
                        <div className="fs-5 fw-semibold">49,123</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))}
                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>User</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Country</CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Payment Method</CTableHeaderCell>
                    <CTableHeaderCell>Activity</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last login</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow> */}
    </>
  )
}

export default Dashboard
// import React, { useState, useEffect } from 'react'
// export default function Dashboard() {
//   const [post, getPost] = useState([])
//   const API = 'http://localhost:5000/api/v1/tours'
//   const fetchPost = () => {
//     fetch(API)
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res.data.tours)
//         getPost(res.data.tours)
//       })
//   }
//   useEffect(() => {
//     fetchPost()
//   }, [])

//   console.log(post)
//   return (
//     <>
//       <h2>React Fetch Data with REST API Example</h2>
//       <ul>
//         {post.map((item, i) => {
//           return <li key={i}>{item.name}</li>
//         })}
//       </ul>
//     </>
//   )
// }
