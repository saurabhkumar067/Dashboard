import React from 'react'
import Navbar from './navbarSection/Navbar'
import { Outlet } from 'react-router-dom'
import AccountBalance from './amountAndDetails/AccountBalance'

function AppLayout() {
  return (
    <section>
        <div className='grid justify-between grid-cols-[20%_50%_25%] gap-8 w-full'>
            <Navbar/>
            <Outlet/>
            <AccountBalance/>
        </div>
    </section>
  )
}

export default AppLayout