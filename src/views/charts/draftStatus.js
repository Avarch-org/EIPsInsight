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
} from '@coreui/react'
import { CChartBar, CChartLine, CChartDoughnut, CChartRadar } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'

function draftStatusChart(props) {
  const [info, setInfo] = useState()
  //   const [draft, setDraft] = useState()
  const [draftCore, setDraftCore] = useState()
  const [draftNetworking, setDraftNetworking] = useState()
  const [draftERC, setDraftERC] = useState()
  const [draftInterface, setDraftInterface] = useState()

  const [finalCore, setFinalCore] = useState()
  const [finalNetworking, setFinalNetworking] = useState()
  const [finalERC, setFinalERC] = useState()
  const [finalInterface, setFinalInterface] = useState()

  const [reviewCore, setReviewCore] = useState()
  const [reviewNetworking, setReviewNetworking] = useState()
  const [reviewERC, setReviewERC] = useState()
  const [reviewInterface, setReviewInterface] = useState()

  const [lastCallCore, setLastCallCore] = useState()
  const [lastCallNetworking, setLastCallNetworking] = useState()
  const [lastCallERC, setLastCallERC] = useState()
  const [lastCallInterface, setLastCallInterface] = useState()

  const [stagnantCore, setStagnantCore] = useState()
  const [stagnantNetworking, setStagnantNetworking] = useState()
  const [stagnantERC, setStagnantERC] = useState()
  const [stagnantInterface, setStagnantInterface] = useState()

  const [withdrawnCore, setWithdrawnCore] = useState()
  const [withdrawnNetworking, setWithdrawnNetworking] = useState()
  const [withdrawnERC, setWithdrawnERC] = useState()
  const [withdrawnInterface, setWithdrawnInterface] = useState()

  useEffect(() => {
    setInfo(JSON.parse(localStorage.getItem('count')))
    // setDraft(JSON.parse(localStorage.getItem('mayDraft')))
    setDraftCore(JSON.parse(localStorage.getItem('draftCore')))
    setDraftERC(JSON.parse(localStorage.getItem('draftERC')))
    setDraftNetworking(JSON.parse(localStorage.getItem('draftNetworking')))
    setDraftInterface(JSON.parse(localStorage.getItem('draftInterface')))

    setFinalCore(JSON.parse(localStorage.getItem('finalCore')))
    setFinalERC(JSON.parse(localStorage.getItem('finalERC')))
    setFinalNetworking(JSON.parse(localStorage.getItem('finalNetworking')))
    setFinalInterface(JSON.parse(localStorage.getItem('finalInterface')))

    setReviewCore(JSON.parse(localStorage.getItem('reviewCore')))
    setReviewERC(JSON.parse(localStorage.getItem('reviewERC')))
    setReviewNetworking(JSON.parse(localStorage.getItem('reviewNetworking')))
    setReviewInterface(JSON.parse(localStorage.getItem('reviewInterface')))

    setLastCallCore(JSON.parse(localStorage.getItem('lastCallCore')))
    setLastCallERC(JSON.parse(localStorage.getItem('lastCallERC')))
    setLastCallNetworking(JSON.parse(localStorage.getItem('lastCallNetworking')))
    setLastCallInterface(JSON.parse(localStorage.getItem('lastCallInterface')))

    setStagnantCore(JSON.parse(localStorage.getItem('stagnantCore')))
    setStagnantERC(JSON.parse(localStorage.getItem('stagnantERC')))
    setStagnantNetworking(JSON.parse(localStorage.getItem('stagnantNetworking')))
    setStagnantInterface(JSON.parse(localStorage.getItem('stagnantInterface')))

    setWithdrawnCore(JSON.parse(localStorage.getItem('withdrawnCore')))
    setWithdrawnERC(JSON.parse(localStorage.getItem('withdrawnERC')))
    setWithdrawnNetworking(JSON.parse(localStorage.getItem('withdrawnNetworking')))
    setWithdrawnInterface(JSON.parse(localStorage.getItem('withdrawnInterface')))
  }, [])

  useEffect(() => {
    if (props.data !== undefined) {
      setInfo(props.data)
      //   setDraft(props.data.filter(filterDraft))
      setDraftCore(calculateDraft(props.data, 0))
      setDraftERC(calculateDraft(props.data, 1))
      setDraftNetworking(calculateDraft(props.data, 2))
      setDraftInterface(calculateDraft(props.data, 3))

      setFinalCore(calculateFinal(props.data, 0))
      setFinalERC(calculateFinal(props.data, 1))
      setFinalNetworking(calculateFinal(props.data, 2))
      setFinalInterface(calculateFinal(props.data, 3))

      setReviewCore(calculateReview(props.data, 0))
      setReviewERC(calculateReview(props.data, 1))
      setReviewNetworking(calculateReview(props.data, 2))
      setReviewInterface(calculateReview(props.data, 3))

      setLastCallCore(calculateLastCall(props.data, 0))
      setLastCallERC(calculateLastCall(props.data, 1))
      setLastCallNetworking(calculateLastCall(props.data, 2))
      setLastCallInterface(calculateLastCall(props.data, 3))

      setStagnantCore(calculateStagnant(props.data, 0))
      setStagnantERC(calculateStagnant(props.data, 1))
      setStagnantNetworking(calculateStagnant(props.data, 2))
      setStagnantInterface(calculateStagnant(props.data, 3))

      setWithdrawnCore(calculateWithdrawn(props.data, 0))
      setWithdrawnERC(calculateWithdrawn(props.data, 1))
      setWithdrawnNetworking(calculateWithdrawn(props.data, 2))
      setWithdrawnInterface(calculateWithdrawn(props.data, 3))

      localStorage.setItem('count', JSON.stringify(props.data))
      localStorage.setItem('draftCore', JSON.stringify(calculateDraft(props.data, 0)))
      localStorage.setItem('draftERC', JSON.stringify(calculateDraft(props.data, 1)))
      localStorage.setItem('draftNetworking', JSON.stringify(calculateDraft(props.data, 2)))
      localStorage.setItem('draftInterface', JSON.stringify(calculateDraft(props.data, 3)))

      localStorage.setItem('finalCore', JSON.stringify(calculateFinal(props.data, 0)))
      localStorage.setItem('finalERC', JSON.stringify(calculateFinal(props.data, 1)))
      localStorage.setItem('finalNetworking', JSON.stringify(calculateFinal(props.data, 2)))
      localStorage.setItem('finalInterface', JSON.stringify(calculateFinal(props.data, 3)))

      localStorage.setItem('reviewCore', JSON.stringify(calculateReview(props.data, 0)))
      localStorage.setItem('reviewERC', JSON.stringify(calculateReview(props.data, 1)))
      localStorage.setItem('reviewNetworking', JSON.stringify(calculateReview(props.data, 2)))
      localStorage.setItem('reviewInterface', JSON.stringify(calculateReview(props.data, 3)))

      localStorage.setItem('lastCallCore', JSON.stringify(calculateLastCall(props.data, 0)))
      localStorage.setItem('lastCallERC', JSON.stringify(calculateLastCall(props.data, 1)))
      localStorage.setItem('lastCallNetworking', JSON.stringify(calculateLastCall(props.data, 2)))
      localStorage.setItem('lastCallInterface', JSON.stringify(calculateLastCall(props.data, 3)))

      localStorage.setItem('stagnantCore', JSON.stringify(calculateStagnant(props.data, 0)))
      localStorage.setItem('stagnantERC', JSON.stringify(calculateStagnant(props.data, 1)))
      localStorage.setItem('stagnantNetworking', JSON.stringify(calculateStagnant(props.data, 2)))
      localStorage.setItem('stagnantInterface', JSON.stringify(calculateStagnant(props.data, 3)))

      localStorage.setItem('withdrawnCore', JSON.stringify(calculateWithdrawn(props.data, 0)))
      localStorage.setItem('withdrawnERC', JSON.stringify(calculateWithdrawn(props.data, 1)))
      localStorage.setItem('withdrawnNetworking', JSON.stringify(calculateWithdrawn(props.data, 2)))
      localStorage.setItem('withdrawnInterface', JSON.stringify(calculateWithdrawn(props.data, 3)))
    } else {
      localStorage.setItem('count', JSON.stringify(info))
      localStorage.setItem('draftCore', JSON.stringify(calculateDraft(info, 0)))
      localStorage.setItem('draftERC', JSON.stringify(calculateDraft(info, 1)))
      localStorage.setItem('draftNetworking', JSON.stringify(calculateDraft(info, 2)))
      localStorage.setItem('draftInterface', JSON.stringify(calculateDraft(info, 3)))

      localStorage.setItem('finalCore', JSON.stringify(calculateFinal(info, 0)))
      localStorage.setItem('finalERC', JSON.stringify(calculateFinal(info, 1)))
      localStorage.setItem('finalNetworking', JSON.stringify(calculateFinal(info, 2)))
      localStorage.setItem('finalInterface', JSON.stringify(calculateFinal(info, 3)))

      localStorage.setItem('reviewCore', JSON.stringify(calculateReview(info, 0)))
      localStorage.setItem('reviewERC', JSON.stringify(calculateReview(info, 1)))
      localStorage.setItem('reviewNetworking', JSON.stringify(calculateReview(info, 2)))
      localStorage.setItem('reviewInterface', JSON.stringify(calculateReview(info, 3)))

      localStorage.setItem('lastCallCore', JSON.stringify(calculateLastCall(info, 0)))
      localStorage.setItem('lastCallERC', JSON.stringify(calculateLastCall(info, 1)))
      localStorage.setItem('lastCallNetworking', JSON.stringify(calculateLastCall(info, 2)))
      localStorage.setItem('lastCallInterface', JSON.stringify(calculateLastCall(info, 3)))

      localStorage.setItem('stagnantCore', JSON.stringify(calculateStagnant(info, 0)))
      localStorage.setItem('stagnantERC', JSON.stringify(calculateStagnant(info, 1)))
      localStorage.setItem('stagnantNetworking', JSON.stringify(calculateStagnant(info, 2)))
      localStorage.setItem('stagnantInterface', JSON.stringify(calculateStagnant(info, 3)))

      localStorage.setItem('withdrawnCore', JSON.stringify(calculateWithdrawn(info, 0)))
      localStorage.setItem('withdrawnERC', JSON.stringify(calculateWithdrawn(info, 1)))
      localStorage.setItem('withdrawnNetworking', JSON.stringify(calculateWithdrawn(info, 2)))
      localStorage.setItem('withdrawnInterface', JSON.stringify(calculateWithdrawn(info, 3)))
    }
  }, [info])

  console.log(info)
  console.log(draftCore)

  function filterDraft(item, index) {
    if (index >= 130 && item[1] === 'mayDraft') {
      return true
    } else {
      return false
    }
  }

  function calculateDraft(data, ind) {
    let ans = 0
    for (let i = 0; i < data.length; i++) {
      if (i >= 46 && i <= 56) {
        ans += parseInt(data[i][3 + ind])
      }
    }
    console.log(ans)
    return ans
  }

  function calculateFinal(data, ind) {
    let ans = 0
    for (let i = 0; i < data.length; i++) {
      if (i >= 46 && i <= 56) {
        ans += parseInt(data[i][8 + ind])
      }
    }
    console.log(ans)
    return ans
  }

  function calculateReview(data, ind) {
    let j = ind + 60
    let ans = 0
    while (j <= 126) {
      ans += parseInt(data[j][2])
      j += 7
    }

    return parseInt(ans)
  }
  function calculateLastCall(data, ind) {
    let j = ind + 60
    let ans = 0
    while (j <= 126) {
      ans += parseInt(data[j][3])
      j += 7
    }

    return parseInt(ans)
  }
  function calculateStagnant(data, ind) {
    let j = ind + 60
    let ans = 0
    while (j <= 126) {
      ans += parseInt(data[j][4])
      j += 7
    }

    return parseInt(ans)
  }
  function calculateWithdrawn(data, ind) {
    let j = ind + 60
    let ans = 0
    while (j <= 126) {
      ans += parseInt(data[j][5])
      j += 7
    }

    return parseInt(ans)
  }

  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Draft status
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
                  data: [
                    `${
                      parseInt(draftCore) +
                      parseInt(draftNetworking) +
                      parseInt(draftInterface) +
                      parseInt(draftERC)
                    }`,
                    0,
                    0,
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
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Standard Track
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
              labels: ['Core', 'ERC', 'Networking', 'Interface'],
              datasets: [
                {
                  label: 'Standard Track',
                  backgroundColor: ['#3bc9db', '#fa5252', '#fcc419', '#37b24d'],
                  data: [`${draftCore}`, `${draftERC}`, `${draftNetworking}`, `${draftInterface}`],
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
            }}
            labels="months"
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
    </>
  )
}

export default draftStatusChart
