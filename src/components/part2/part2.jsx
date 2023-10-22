import React from 'react'
import SlideShow from './slideShow'
import PlantImg from '../../assets/plant.png'; 

function Part2() {
  return (
    <>
      <div className='title'>
        <h1>What Happend ?</h1>
      </div>
      <div className='part2'>
        
          <div className='part2-left'>
              <SlideShow></SlideShow>

          </div>
          <div className='part2-right'>
            {/* <h3 className='sentence-1'>
              The people of Israel are resilient, but they need our support to overcome the devastation they've endured. Your donation can be the catalyst for renewal and recovery.
            </h3>
            <h3 className='sentence-2'>
              Together, we can be a beacon of hope for the people of Israel. Your donation will ensure that families can rebuild their lives and communities can heal. Your support matters
            </h3> */}
            <h4>
              Militants from Gaza fired thousands of rockets towards Israeli towns on October 7, 
              before breaking through the heavily fortified border fence with Israel and sending militants deep into Israeli territory. 
              There, Hamas gunmen killed more than 1,400 people, including civilians and soldiers, and took more than 200 hostages, according to Israeli authorities, 
              in what has been described as the worst massacre of Jews since the Holocaust.
              <br/>
              <br/>
              The attacks were unprecedented in tactics and scale as Israel has not faced its adversaries in street battles on its own territory since the 1948 Arab-Israeli war.
              It has also never faced a terror attack of this magnitude that has taken the lives of so many civilians.
                While Hamas has kidnapped Israelis before, it has never before taken dozens of hostages at once, including children and the elderly.
            </h4>
            
          </div>
      </div>
    </>
  )
}

export default Part2