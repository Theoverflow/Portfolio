import React,{useState} from 'react';
import {useSprings, useSpring, animated, interpolate} from 'react-spring';
import {useDrag} from 'react-use-gesture';
import {BackCard, ResilienceCard, TeamSpiritCard,
        CommunicationCard, EntrepreneurshipCard} from './Image'
import './CardStack.css'


const from = i =>({x : 1300 *((i%2)*2 - 1), rot : 0, scale : 1.2})
const to = i =>({x: 0, y: i * -5, scale: 1, rot:  -10 + Math.random() * 20, delay: i * 400})
const transf = (r,s) => `perspective(1000px) rotateX(15deg) rotateY(${r}deg) rotateZ(${r}deg) scale(${s})`

export function CardStack() {
  const cards = [
    <ResilienceCard/>,
    <CommunicationCard/>,
    <EntrepreneurshipCard/>,
    <TeamSpiritCard/>
  ]
  const [flip, setflip] = useState(false)
  const { transform} = useSpring({
    transform: `perspective(1000px) rotateY(${flip ? 180 : 0}deg)`,
    config: { mass: 5, tension: 350, friction: 100 }
  })
  const [left] = useState(() => new Set())
  const [props, set] = useSprings(cards.length, i => ({...to(i), from:from(i)}))
  const bind = useDrag(({args: [index], down, direction:[xDir], movement:[mx], delta:[xDelta], velocity}) => {
    const fly = velocity > 0.2
    const dir = xDir > 0 ? 1 : -1
    if(!down && fly) left.add(index)
    set(i => {
      if(index !== i) return
      const isLeaving = left.has(index)
      const x = isLeaving ? (1300) * dir : (down ? mx : 0)
      const rot = isLeaving ? 10 * velocity * dir : 0
      const scale = down ? 1.2 : 1
      setflip(state => isLeaving ? false : true)
      return {x, rot, scale, config : {friction: 50, tension: down ? 800 : isLeaving ? 200 : 500}}
    })
    if (!down && left.size === cards.length) setTimeout(() => left.clear() || set(i => to(i)) || setflip(state => false), 800)
  })


  return(
    <div className="crdstck">
      {props.map(({x, y, rot, scale}, i) => (
        <animated.div key={i} style={{transform : interpolate([x, y], (x,y) => `translate3d(${x}px,${y}px,0)`)}}>
          <animated.div {...bind(i)} onDoubleClick={()=>setflip(state => !state)} style={{transform:interpolate([rot, scale], transf), backgroundImage:`${cards[i]}`}}>
          {flip===false ? (
            <animated.div style={{transform}}>
              <BackCard/>
            </animated.div>) : (
            <animated.div style={{transform: transform.interpolate(t => `${t} rotateY(180deg)`)}}>
              {cards[i]}
            </animated.div>)}
        </animated.div>
      </animated.div>))}
    </div>
  )
}

export default CardStack;
