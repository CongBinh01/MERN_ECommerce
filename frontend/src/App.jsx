import React from 'react'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

      <Routes>
          <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App