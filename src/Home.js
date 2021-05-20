import React from 'react';
import './Home.css';
import {BlackHole, Galaxy, SolarSystem, Planet1,
   Cone, Helmet, Planet2, Planet3, Planet4, RetroSun, RetroSun2} from './Helpful/Image'
import { useSpring, animated} from 'react-spring'
import Footer from './Footer'

// import {BrowserRouter as Router, Switch,
//   Route, Link, useRouteMatch, useParams} from 'react-router-dom';


function Home({theme}) {
  const {rad} = useSpring({
      to: async (next, cancel) => {
        while(1){
          await next({rad : 2 * Math.PI});
          await next({rad : 0});
        }
      },
      from: {rad : 0 },
      config: { duration: 5000 },
      reset: true,
  })


  return(
    <div>
    <main className={`mainH ${theme}`}>
      <div className="intro">
        <div className="name1">
          <h1 className="name1h">Hi Im Théo Marini</h1>
        </div>
        <div className="pict1">
          {theme ==="light"?<Galaxy/>:<BlackHole/>}
        </div>
        <div className="pict2">
          {theme ==="light"?<SolarSystem/>:<Galaxy/>}
        </div>
        <div className="name2">
          <h1>I am a Dynamic Student Engineer and a Tech Fan</h1>
        </div>
        <div className="scrollD">
          <h1>Scroll down to discover my Projects !</h1>
        </div>
      </div>

    <div className="project">
      <animated.div className="pctr3" style={{willChange: 'transform', transform: rad.interpolate(r =>`translate3d(0, ${17 *Math.sin(r + (2 * Math.PI) / 5)}px, 0)`)}}>
          <Planet4/>
      </animated.div>
      <div className="txt1">
        <h1>You will find my latest projects behind the planets</h1>
        <h1>Enjoy ! <span role="img">🙌</span></h1>
      </div>
      <animated.div className="pctr4" style={{willChange: 'transform', transform: rad.interpolate(r =>`translate3d(0, ${17 *Math.sin(0.5 + r + (2 * Math.PI) / 5)}px, 0)`)}}>
          <Planet3/>
      </animated.div>
      <animated.div className="pctr5" style={{willChange: 'transform', transform: rad.interpolate(r =>`translate3d(0, ${17 *Math.sin(2 + r + (2 * Math.PI) / 5)}px, 0)`)}}>
          <Planet2/>
      </animated.div>
      <animated.div className="pctr6" style={{willChange: 'transform', transform: rad.interpolate(r =>`translate3d(0, ${17 *Math.sin(3 + r + (2 * Math.PI) / 5)}px, 0)`)}}>
          <Planet1/>
      </animated.div>
    </div>

    <div className="game">
      <div className="txt2">
        <h1>W.I.P.</h1>
        <h1 className="txt2h1">Be Patient Game Soon Available</h1>
      </div>
      <div className="pctr7">
        <Cone/>
      </div>
      <div className="pctr8">
        <Helmet/>
      </div>
      <div className="pctr9">
        <Cone/>
      </div>
    </div>

    <div className="contact" style={{color:"white"}}>
      <div className="pctr10">
        {theme ==="light"?<RetroSun2/>:<RetroSun/>}
      </div>
      <div className="pgFB">
      </div>
      <div className="pgLI">
      </div>
      <div className="pgTwitter">
      </div>
      <div className="autrentwrk">
      </div>
      Icons made by &nbsp;
        <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">
          Smashicons
        </a>
          &nbsp; from &nbsp;
         <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
    </div>
  </main>
  <Footer theme={theme}/>
</div>

)
}

export default Home;

// <footer>
//   Icons made by{" "}
//   <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">
//     Smashicons
//   </a>
//     {" "}from{" "}
//    <a href="https://www.flaticon.com/" title="Flaticon">
//     www.flaticon.com
//   </a>
// </footer>
