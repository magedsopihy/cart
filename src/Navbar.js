import React from 'react'
import { HiShoppingBag } from 'react-icons/hi'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { amount } = useGlobalContext()
  return (
    <nav>
      <div className='nav-center'>
        <h3>useReducer</h3>
        <div className='nav-container'>
          <HiShoppingBag />
          <div className='amount-contianer'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
