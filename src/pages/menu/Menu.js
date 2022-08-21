import React from 'react'
import MenuHeader from '../../components/menuHeader/MenuHeader'
import MenuTable from '../../components/menuTable/MenuTable'
import { Helmet } from 'react-helmet'

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Menu</title>
      </Helmet>
      <MenuHeader />
      <MenuTable />
    </>
  )
}

export default Menu