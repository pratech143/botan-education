import React from 'react'
import {Header,Footer,Home} from "../Index"
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App