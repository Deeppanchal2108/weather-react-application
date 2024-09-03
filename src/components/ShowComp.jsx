import React from 'react'
import BasicComp from './BasicComp'
import ImageRender from './ImageRender'
import WeatherData from './WeatherData'
function ShowComp() {
  return (
    <div className='lg:w-[1100px] lg:h-[700px]'>
          <div className='flex flex-wrap lg:gap-3 lg:p-5'>
              <BasicComp  />
              <ImageRender  />
              <WeatherData />
      </div>
    </div>
  )
}

export default ShowComp
