/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

function WidgetsDropdown(props) {
  const [info, setInfo] = useState()

  useEffect(() => {
    setInfo(JSON.parse(localStorage.getItem('count')))
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
    <div>
      <div>
        <CRow>
          <CCol sm={6} lg={3}>
            <CWidgetStatsA
              className="mb-4"
              color="primary"
              value={
                <>
                  {info === undefined ? '0' : info[2][6]}{' '}
                  <span className="fs-6 fw-normal">
                    (-12.4% <CIcon icon={cilArrowBottom} />)
                  </span>
                </>
              }
              title={`${info === undefined ? '0' : info[1][6]}`}
              // action={
              //   <CDropdown alignment="end">
              //     <CDropdownToggle color="transparent" caret={false} className="p-0">
              //       <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              //     </CDropdownToggle>
              //     <CDropdownMenu>
              //       <CDropdownItem>Action</CDropdownItem>
              //       <CDropdownItem>Another action</CDropdownItem>
              //       <CDropdownItem>Something else here...</CDropdownItem>
              //       <CDropdownItem disabled>Disabled action</CDropdownItem>
              //     </CDropdownMenu>
              //   </CDropdown>
              // }
              chart={
                <CChartLine
                  className="mt-3 mx-3"
                  style={{ height: '70px' }}
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
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255,255,255,.55)',
                        pointBackgroundColor: getStyle('--cui-primary'),
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
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        grid: {
                          display: false,
                          drawBorder: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      y: {
                        min: -3,
                        max: 9,
                        display: false,
                        grid: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                    },
                    elements: {
                      line: {
                        borderWidth: 1,
                        tension: 0.4,
                      },
                      point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4,
                      },
                    },
                  }}
                />
              }
            />
          </CCol>
          <CCol sm={6} lg={3}>
            <CWidgetStatsA
              className="mb-4"
              color="info"
              value={
                <>
                  {`${info === undefined ? '0' : info[2][7]}`}{' '}
                  <span className="fs-6 fw-normal">
                    (40.9% <CIcon icon={cilArrowTop} />)
                  </span>
                </>
              }
              title={`${info === undefined ? '0' : info[1][7]}`}
              // action={
              //   <CDropdown alignment="end">
              //     <CDropdownToggle color="transparent" caret={false} className="p-0">
              //       <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              //     </CDropdownToggle>
              //     <CDropdownMenu>
              //       <CDropdownItem>Action</CDropdownItem>
              //       <CDropdownItem>Another action</CDropdownItem>
              //       <CDropdownItem>Something else here...</CDropdownItem>
              //       <CDropdownItem disabled>Disabled action</CDropdownItem>
              //     </CDropdownMenu>
              //   </CDropdown>
              // }
              chart={
                <CChartLine
                  className="mt-3 mx-3"
                  style={{ height: '70px' }}
                  data={{
                    labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
                    datasets: [
                      {
                        label: 'Networking',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255,255,255,.55)',
                        pointBackgroundColor: getStyle('--cui-info'),
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
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        grid: {
                          display: false,
                          drawBorder: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      y: {
                        min: -1,
                        max: 3,
                        display: false,
                        grid: {
                          display: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                    },
                    elements: {
                      line: {
                        borderWidth: 1,
                      },
                      point: {
                        radius: 4,
                        hitRadius: 10,
                        hoverRadius: 4,
                      },
                    },
                  }}
                />
              }
            />
          </CCol>
          <CCol sm={6} lg={3}>
            <CWidgetStatsA
              className="mb-4"
              color="warning"
              value={
                <>
                  {`${info === undefined ? '0' : info[2][8]}`}{' '}
                  <span className="fs-6 fw-normal">
                    (84.7% <CIcon icon={cilArrowTop} />)
                  </span>
                </>
              }
              title={`${info === undefined ? '0' : info[1][8]}`}
              // action={
              //   <CDropdown alignment="end">
              //     <CDropdownToggle color="transparent" caret={false} className="p-0">
              //       <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              //     </CDropdownToggle>
              //     <CDropdownMenu>
              //       <CDropdownItem>Action</CDropdownItem>
              //       <CDropdownItem>Another action</CDropdownItem>
              //       <CDropdownItem>Something else here...</CDropdownItem>
              //       <CDropdownItem disabled>Disabled action</CDropdownItem>
              //     </CDropdownMenu>
              //   </CDropdown>
              // }
              chart={
                <CChartLine
                  className="mt-3"
                  style={{ height: '70px' }}
                  data={{
                    labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
                    datasets: [
                      {
                        label: 'Interface',
                        backgroundColor: 'rgba(255,255,255,.2)',
                        borderColor: 'rgba(255,255,255,.55)',
                        data: [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
                        fill: true,
                      },
                    ],
                  }}
                  options={{
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        display: false,
                      },
                      y: {
                        display: false,
                      },
                    },
                    elements: {
                      line: {
                        borderWidth: 2,
                        tension: 0.4,
                      },
                      point: {
                        radius: 0,
                        hitRadius: 10,
                        hoverRadius: 4,
                      },
                    },
                  }}
                />
              }
            />
          </CCol>
          <CCol sm={6} lg={3}>
            <CWidgetStatsA
              className="mb-4"
              color="danger"
              value={
                <>
                  {`${info === undefined ? '0' : info[2][9]}`}{' '}
                  <span className="fs-6 fw-normal">
                    (-23.6% <CIcon icon={cilArrowBottom} />)
                  </span>
                </>
              }
              title={`${info === undefined ? '0' : info[1][9]}`}
              // action={
              //   <CDropdown alignment="end">
              //     <CDropdownToggle color="transparent" caret={false} className="p-0">
              //       <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              //     </CDropdownToggle>
              //     <CDropdownMenu>
              //       <CDropdownItem>Action</CDropdownItem>
              //       <CDropdownItem>Another action</CDropdownItem>
              //       <CDropdownItem>Something else here...</CDropdownItem>
              //       <CDropdownItem disabled>Disabled action</CDropdownItem>
              //     </CDropdownMenu>
              //   </CDropdown>
              // }
              chart={
                <CChartBar
                  className="mt-3 mx-3"
                  style={{ height: '70px' }}
                  data={{
                    labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
                    datasets: [
                      {
                        label: 'ERC',
                        backgroundColor: 'rgba(255,255,255,.2)',
                        borderColor: 'rgba(255,255,255,.55)',
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
                        barPercentage: 0.6,
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
                          display: false,
                          drawTicks: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                      y: {
                        grid: {
                          display: false,
                          drawBorder: false,
                          drawTicks: false,
                        },
                        ticks: {
                          display: false,
                        },
                      },
                    },
                  }}
                />
              }
            />
          </CCol>
        </CRow>
      </div>
    </div>
  )
}

export default WidgetsDropdown
