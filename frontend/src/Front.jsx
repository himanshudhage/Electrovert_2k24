import React from 'react'
import Heading from './Heading'
import About from './Components/About/About'
import Counter from './Components/Counter/Counter'
import Events from './Components/EventsName/Events'
import Footer from './Components/Footer/Footer'
import EventSchedule from './Components/EventSchedule/EventSchedule'
const Front = () => {
  return (
    <>
    <Heading/>
    <About/>
    <Counter/>
    <Events/>
    <EventSchedule/>
    <Footer/>
 
    </>
  )
}

export default Front
