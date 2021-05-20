import React, {useState} from 'react';
import './Cubes.css'
import { Carousel } from "react-motion-components";

const caroussel1 = ["green", "red", "blue", "yellow"]
const caroussel2 = ["green", "red", "blue", "yellow"]
const caroussel3 = ["green", "red", "blue", "yellow"]

export default function Cubes(){

  const [index1, set1] = useState(0)
  const [index2, set2] = useState(0)
  const [index3, set3] = useState(0)

  const defaultStyle = {
    width: 300,
    height: 300,
    margin: "100px auto",
  }

  const itemStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    margin: "0 auto"
  }

  return(
    <div className="passions">
      <div className="crssl1" style={{...defaultStyle}}>
      <Carousel
        {...defaultStyle}
        direction="horizontal"
        effect="3d"
        index={index1}
        onChange={index => set1(state => index)}
      >
     {Array.from({ length: 4 }, (x, i) => {
      return (
        <div
          key={i}
          style={{
          ...defaultStyle,
          ...itemStyle,
          background: `${caroussel1[i]}`
          }}>
       </div>);
        })}
      </Carousel>
      </div>

      <div className="crssl2" style={{...defaultStyle}}>
      <Carousel
        {...defaultStyle}
        direction="horizontal"
        effect="3d"
        index={index2}
        onChange={index => set2(state => index)}
      >
        {Array.from({ length: 4 }, (x, i) => {
          return (
            <div
              key={i}
              style={{
                ...defaultStyle,
                ...itemStyle,
                background: `${caroussel2[i]}`
              }}
            >
            </div>
          );
        })}
      </Carousel>
      </div>

      <div className="crssl3" style={{...defaultStyle}}>
      <Carousel
        {...defaultStyle}
        direction="horizontal"
        effect="3d"
        index={index3}
        onChange={index => set3(state => index)}
      >
        {Array.from({ length: 4 }, (x, i) => {
          return (
            <div
              key={i}
              style={{
                ...defaultStyle,
                ...itemStyle,
                background: `${caroussel3[i]}`
              }}
            >
            </div>
          );
        })}
      </Carousel>
      </div>
    </div>
  )
}
