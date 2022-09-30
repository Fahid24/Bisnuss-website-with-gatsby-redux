import React from "react"
import CounterView from "../../app/function/counter/CounetrView"
import PostView from "../../app/function/post/postView"
import Layout from "../../Layout/Layout"
import Product from "../Product/Product"



const Home = () => {
  return (
    <>
      <Layout>
        <CounterView />
        <Product/>
        <PostView/>
      </Layout>
    </>
  )
}

export default Home
