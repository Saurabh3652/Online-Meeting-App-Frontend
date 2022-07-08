import React from 'react'
import Navbar from './Navbar'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import github from '../img/github.png'
import img3 from '../img/img3.png'
import img2 from '../img/img2.png'
import img1 from '../img/img1.png'
import gif from '../img/image-gif.gif'
import './hom.css'

const Home = () => {
  return (
    <>
    <Navbar/>
    <section id="home-page bg-dark" className="d-flex align-item-center bg-dark text-light" >
    <div className="row rows">
        <div className="row-lg-6">
          <div className="row">
            <div className="col-6 mx-0 px-0 d-flex justify-content-center flex-coulam">
            <h2>Airmeet is a app that serves as a platform for helding video conferences , meetings and events.</h2>
            </div>
          </div>
          <div className="row">
          <div className="col-3 ">
            <h2>Attende Meet</h2>
            <button className="btn btn-outline-dark btn-lg button-action btn-success">Attend a Event</button>
          </div>
          <div className="col-3  ">
            <h2>Host Your Meet Here!</h2>
            <button className="btn btn-outline-dark btn-lg button-action btn-success">Host a Event</button>
          </div>
          <div className="col-lg-6 ">
          <img className="img" src={gif}  alt ="Talkshow"/>
          </div>
          </div>
        </div>
        


    </div>
  </section> 

  <section id="second-page">
    <h2 className="headd">Features</h2>
    <div id="features-carousel" className="carousel slide align-item-center " data-bs-ride="carousel" data-bs-touch="false" data-bs-interval="false">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <h4>Chat</h4>
          <img className="app-img" src={img1}  alt ="Chat"/>
        </div>
        <div className="carousel-item">
          <h4>Attendee list</h4>
          <img className="app-img" src={img2}  alt ="Attendees"/>
          
        </div>
        <div className="carousel-item">
          <h4>Host Event</h4>
          <img className="app-img" src={img3}  alt ="Event"/>
          {/* <img className="app-img" src="/SE_Project/images/img3.png" alt="Event"/> */}
          
        </div>
      </div>
      <button className="carousel-control-prev " type="button" data-bs-target="#features-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden dark">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#features-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </section>

  <section id="footer">

    <h4>Creators</h4>
    <div className="icons">
    <img className="logo" src={github}  alt ="git-logo"/>
      {/* <i className="fab fa-github fa-2x"></i> */}
      {'\n'}
      <a className="edit" href="https://github.com/Abhisin90">Abhinav Singh</a>
    </div>

    <div className="icons">
      <img className="logo" src={github}  alt ="git-logo"/>
      {/* <i className="fab fa-github fa-2x"></i> */}
      {'\n'}
      <a className="edit" href="https://github.com/naman-c">Naman Kaushal</a>
    </div>

    <div className="icons">
      {/* <i className="fab fa-github fa-2x"></i> */}
      <img className="logo" src={github}  alt ="git-logo"/>
      {'\n'}
      <a className="edit" href="https://github.com/4devbabu">Rounak Dev</a>
    </div>

    <div className="icons">
      <img className="logo" src={github}  alt ="git-logo"/>
      {/* <i className="fab fa-github fa-2x"></i> */}
      {'\n'}
      <a className="edit" href="https://github.com/Saurabh3652">Saurabh Patel</a>
    </div>

    <div className="icons">
      {/* <FontAwesomeIcon icon={solid('fab fa-github fa-2x')} /> */}
      <img className="logo" src={github}  alt ="git-logo"/>
      {/* <i className="fab fa-github fa-2x"></i> */}
      {'\n'}
      <a className="edit" href="https://github.com/tanmaymc188">Tanmay Solanki</a>
    </div>

  </section>
  </>
  )
}

export default Home