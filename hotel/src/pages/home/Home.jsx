import React from 'react'
import Layout from '../../components/common/layout/Layout'
import Sections from '../../components/sections/Sections'
import ProductSec from '../sections/productSec/ProductSec'

const Home = () => {
  return (
    <div>
      <Layout>
        <Sections/>
        <ProductSec/>
      </Layout>
    </div>
  )
}

export default Home
