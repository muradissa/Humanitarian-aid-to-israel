import React from 'react'
import PlantImg from '../../assets/plant.png'; 

function Part3() {
  return (
    <>
    <div className='title'>
        <h1>Donate to those affected by the war on Israel</h1>
    </div>
    <div className='part2'>
        <div className='part2-left'>
            <img src={PlantImg} className="plant" alt=""/>
        </div>
        <div className='part2-right'>
          <h3 className='sentence-1'>
            The people of Israel are resilient, but they need our support to overcome the devastation they've endured. Your donation can be the catalyst for renewal and recovery.
          </h3>
          <h3 className='sentence-2'>
            Together, we can be a beacon of hope for the people of Israel. Your donation will ensure that families can rebuild their lives and communities can heal. Your support matters
          </h3>
          <h3 className='sentence-2'>
            By donating today, you can provide essential aid to children, mothers, and fathers who have endured the horrors of war. Your generosity can help rebuild lives and communities.
          </h3>
        </div>
    </div>
    </>
  )
}

export default Part3