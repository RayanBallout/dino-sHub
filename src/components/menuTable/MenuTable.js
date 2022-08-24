import React from 'react'
import './MenuTable.css'

const MenuTable = () => {
  return (
    <div className='container'>
        <div className="table-sections">
            <div className="section1">
                <h3>SANDWICHES</h3>
                <table>
                    <tr>
                        <td>Tawook</td>
                        <td className='float-right'>120000</td>
                    </tr>
                    <tr>
                        <td>Burger</td>
                        <td className='float-right'>110000</td>
                    </tr>
                    <tr>
                        <td>Sojok</td>
                        <td className='float-right'>120000</td>
                    </tr>
                    <tr>
                        <td>Grilled Chicken</td>
                        <td className='float-right'>120000</td>
                    </tr>
                    <tr>
                        <td>Makanek</td>
                        <td className='float-right'>120000</td>
                    </tr>
                    <tr>
                        <td>Fries Plate</td>
                        <td className='float-right'>60000</td>
                    </tr>
                    <tr>
                        <td>Add Cheddar</td>
                        <td className='float-right'>20000</td>
                    </tr>
                </table>
            </div>
            <div className="section2">
                <h3>SNACKS</h3>
                <table>
                    <tr>
                        <td>Chips</td>
                        <td className='float-right'>25000</td>
                    </tr>
                    <tr>
                        <td>Pepsi (Glass)</td>
                        <td className='float-right'>10000</td>
                    </tr>
                    <tr>
                        <td>Mr Juicy</td>
                        <td className='float-right'>10000</td>
                    </tr>
                    <tr>
                        <td>Dark Blue</td>
                        <td className='float-right'>25000</td>
                    </tr>
                    <tr>
                        <td>Hyper Energy Drink</td>
                        <td className='float-right'>25000</td>
                    </tr>
                    <tr>
                        <td>Boom Boom</td>
                        <td className='float-right'>30000</td>
                    </tr>
                    <tr>
                        <td>XXL</td>
                        <td className='float-right'>30000</td>
                    </tr>
                    <tr>
                        <td>Beirut Beer</td>
                        <td className='float-right'>20000</td>
                    </tr>
                    <tr>
                        <td>Keo Beer</td>
                        <td className='float-right'>25000</td>
                    </tr>
                    <tr>
                        <td>Vodka</td>
                        <td className='float-right'>50000</td>
                    </tr>
                </table>
            </div>
        </div>
        <div className="table-sections">
            <div className="section1">
                <h3>GAMES</h3>
                <table>
                    <tr>
                        <td>PlayStation (1 Hour)</td>
                        <td className='float-right'>50000</td>
                    </tr>
                    <tr>
                        <td>PlayStation (1 Game)</td>
                        <td className='float-right'>20000</td>
                    </tr>
                    <tr>
                        <td>BabyFoot (1 Game)</td>
                        <td className='float-right'>20000</td>
                    </tr>
                    <tr>
                        <td>Counter Strike</td>
                        <td className='float-right'>20000</td>
                    </tr>
                    <tr>
                        <td>Punching Bag</td>
                        <td className='float-right'>5000</td>
                    </tr>
                </table>
            </div>
            <div className="section2">
                <h3>OTHER</h3>
                <table>
                    <tr>
                        <td>Arguile</td>
                        <td className='float-right'>90000</td>
                    </tr>
                    <tr>
                        <td>Nescafe</td>
                        <td className='float-right'>20000</td>
                    </tr>
                    <tr>
                        <td>Cappucino</td>
                        <td className='float-right'>20000</td>
                    </tr>
                    <tr>
                        <td>Coffee</td>
                        <td className='float-right'>15000</td>
                    </tr>
                    <tr>
                        <td>Tea</td>
                        <td className='float-right'>15000</td>
                    </tr>
                    <tr>
                        <td>Water</td>
                        <td className='float-right'>10000</td>
                    </tr>
                </table>
            </div>
        </div>
        <div className="menu-footer">
            And a whole lot more inside the Hub!!
        </div>
    </div>
  )
}

export default MenuTable