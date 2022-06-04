import React, { useEffect, useState } from 'react'
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import EIPDATA from './EIPdata'

const DefaultLayout = () => {
  const [data] = EIPDATA()
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
