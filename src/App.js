import React, {Component} from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {Parallax, ParallaxLayer} from 'react-spring/addons'
import Navbar from './Navbar'


export default class App extends Component{
  constructor(props){
    super(props),
    state={
    }
  }

  scroll = to => this.refs.parallax.scrollTo(to)

    render(){
      return(
        <Parallax pages={4} ref="parallax" scrolling={false}>
          <div className="App">
            <Navbar/>
          </div>
        </Parallax>
      )
    }
  }
}
