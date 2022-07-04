import React from 'react'
import { Link } from 'react-router-dom'
import '../home/Home.scss'
const Home = () => {
  return (

    < div className="container" >
        <div className="row mainDiv">
          <div className="col-md-6  col-sm-12 ">
            <div className="card cardColor h-Card ">
              <div className="card-body " >
                <h1 className='h1Center ' >
                  <Link to="addNewStudents" className=' link '>Add Students</Link>
                </h1>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12  ">
            <div className="card h-Card">
              <div className="card-body"  >
                <h1 className='h1Center'>
                  <Link to="allStudents" className='link'>All Students</Link>
                </h1>
              </div>
            </div>
        </div>
      </div>
    </div >

  )
}

export default Home
//    mx - auto d - flex justify - content - center align - items - center