import React, {useState, useCallback} from 'react';
import './SkillPage.css'
import {PythonD, PythonL, CppD, CppL,
        CD, CL, JSD, JSL, P5D, P5L,
        ReactD, ReactL, ArduinoD, ArduinoL,
        HTMLCSSD, HTMLCSSL, RPID, RPIL,
        CryptoD, CryptoL, ExcelD, ExcelL,
        VHDLD, VHDLL, ArrowL, ArrowR,
        ArrowLL, ArrowRL} from './Image';
import {useTransition, animated} from 'react-spring';



const pagesl = [
  ({ style }) => <animated.div className="page" style={{ ...style}}>
    <PythonD/>
    <JSD/>
    <ReactD/>
    <P5D/>
  </animated.div>,
  ({ style }) => <animated.div className="page" style={{ ...style}}>
    <HTMLCSSD/>
    <CD/>
    <CppD/>
    <RPID/>
  </animated.div>,
  ({ style }) => <animated.div className="page" style={{ ...style}}>
    <ArduinoD/>
    <VHDLD/>
    <CryptoD/>
    <ExcelD/>
  </animated.div>,
]

const pagesd = [
  ({ style }) => <animated.div className="page" style={{ ...style}}>
    <PythonL/>
    <JSL/>
    <ReactL/>
    <P5L/>
  </animated.div>,
  ({ style }) => <animated.div className="page" style={{ ...style}}>
    <HTMLCSSL/>
    <CL/>
    <CppL/>
    <RPIL/>
  </animated.div>,
  ({ style }) => <animated.div className="page" style={{ ...style}}>
    <ArduinoL/>
    <VHDLL/>
    <CryptoL/>
    <ExcelL/>
  </animated.div>,
]


export default function SkillPage({theme}){

  let Page
  const [index, set] = useState(0)
  const [dir, set2] = useState(1)
  const transitions = useTransition(index, p => p, {
    from: {opacity:0, transform: 'translate3d(80%,0,0)' },
    enter: {opacity:1, transform: 'translate3d(0%,0,0)' },
    leave: {opacity:0, transform: 'translate3d(-80%,0,0)' },
  })

  const transitions2 = useTransition(index, p => p, {
    from: {opacity:0, transform: 'translate3d(-80%,0,0)' },
    enter: {opacity:1, transform: 'translate3d(0%,0,0)' },
    leave: {opacity:0, transform: 'translate3d(80%,0,0)' },
  })

  const Page1 = pagesl[index]
  const Page2 = pagesd[index]


  return(
    <div className="skills">
      <div className="bttn" onClick={() => {set(state => (state===0?2:(state-1)%3)); set2(state => 0)}}>
        {theme === "light" ? <ArrowL/> : <ArrowLL/>}
      </div>
        {transitions.map(({item, key, props}) => {
          const Page = pagesl[item]
          return <Page key={key} style={props} />})
        }
      <div className="bttn" onClick={() => {set(state => (state + 1) % 3); set2(state => 1)}}>
        {theme === "light" ? <ArrowR/> : <ArrowRL/>}
      </div>
  </div>
  )
}
