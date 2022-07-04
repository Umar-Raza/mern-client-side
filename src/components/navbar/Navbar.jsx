import React from 'react'
import '../../style/Style.scss';
import '../navbar/Navbar.scss'
import { Link } from 'react-router-dom';
import mernImg from '../../assets/images.png';
export const Navbar = () => {

    const searchHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div>

            <nav className="navbar navbar-expand-lg ">
                <div className="container">

                    <Link className="navbar-brand  text-light " to="/">
                        <img src={mernImg} alt="" style={{ width: "100px" }} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item   ">
                                <Link to="/" className='home nav-link text-decoration-none active '>Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="addNewStudents" className='nav-link   text-decoration-none '>Add Students</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to='allStudents' className='nav-link   text-decoration-none'>All Students</Link>
                                {/* <Link to="" className=''>All Students</Link> */}
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info" onClick={searchHandler} type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div >
    )
}
