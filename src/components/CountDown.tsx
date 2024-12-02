"use client"
import React from 'react'
import Countdown from 'react-countdown'

const CountDown = () => {
    const endDate = new Date("2025-12-27")
  return (
     <Countdown date={endDate} className='text-5xl font-bold text-yellow-300'/>
    
  )
}

export default CountDown
