import React from 'react'
import KeyFeature from '../components/KeyFeature'
import Page from '../components/Page'
import Services from '../components/Services'
import { getData } from '../utilities/api'
import { useLoaderData } from 'react-router-dom'

function Home() {
  const loadData = useLoaderData()
  console.log(loadData)
  return (
    <div className='home'>
      <KeyFeature/>
    <Page/>
    <Services/>
    </div>
  )
}

export default Home


export function loader(){
  return getData()

}