import React from 'react'
import "../footer/Footer.scss";
export const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };


    return (//text-sm-center text-xs-center  text-md-center
        <div className="container-fluid">
            <div className="row">
                <div className=" col-md-12 p-0 m-0 fw-bold ">
                    <footer className="fContainer">
                        <div className="footer-copyright text-center ">
                            <span className='me-1  '>&copy; {getCurrentYear()}  All right reseverd :</span>
                            <a href="mailto:chintoraza279@gmail.com" className='text-light fs-5'>Muhammad Umar</a>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}
