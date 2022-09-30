import React from "react"
import CounterView from "../../app/function/counter/CounetrView"
import Layout from "../../Layout/Layout"
import Product from "../Product/Product"




const Home = () => {
  return (
    <>
      <Layout>
        <CounterView />
        <Product/>
      </Layout>
    </>
  )
}

export default Home
