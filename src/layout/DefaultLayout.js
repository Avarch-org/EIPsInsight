import React, { useEffect, useState } from 'react'
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  const [data, setInfo] = useState()

  async function fetchData() {
    const fullResponse = await fetch(
      'https://sheet.best/api/sheets/83d87976-3d1e-445e-9e40-3c12017eade1',
    )
    const responseJson = await fullResponse.json()
    console.log(responseJson)
    setInfo(responseJson)
  }
  useEffect(() => {
    fetchData()
    console.log(data)
  }, [])

  console.log(data)

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent data={data} />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
