import React from "react"
import Home from "../componants/Home/Home"
import { Provider } from "react-redux"
import store from "../app/store/store"

export default function App() {

  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  )
}
