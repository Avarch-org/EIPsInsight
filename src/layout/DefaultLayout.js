import React, { useEffect, useState } from 'react'
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  const [data, setInfo] = useState()

  async function fetchData() {
    const fullResponse = await fetch(
      'https://sheet.best/api/sheets/03682d10-57f7-4947-a6c9-32ee1cfc4e11',
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
