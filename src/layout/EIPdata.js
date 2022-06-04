/* eslint-disable prettier/prettier */
import React from 'react'

const EIPDATA = () => {
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    async function fetchData() {
      const fullResponse = await fetch(
        'https://sheet.best/api/sheets/03682d10-57f7-4947-a6c9-32ee1cfc4e11',
      )
      const responseJson = await fullResponse.json()
      console.log(responseJson)
      setData(responseJson)
    }

    fetchData()
  }, [])

  console.log(data)

  return [data]
}

export default EIPDATA
