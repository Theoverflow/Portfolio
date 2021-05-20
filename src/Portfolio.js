import React,{useState} from 'react';
import './Portfolio.css';
import {useTransition, animated} from 'react-spring';
import {BABAD, BABAL, FbBABA, IgBABA,
        MGaTE, LinkedIn, BDE, Mines} from './Helpful/Image'
import SkillPage from './Helpful/SkillPage'
import CardStack from './Helpful/CardStack'
import Cubes from './Helpful/Cubes'
import Footer from './Footer'


export default function Portfolio({theme}){
  const [show, set] = useState(true)



  return(
    <div >
    <main className={`mainP ${theme}`}>
      <h1>Charity Experiences</h1>
      <div className="babaexp">
        <div className="babalogo">
          {theme=== "light"?<BABAD/>:<BABAL/>}
        </div>
        <div className="babactt">
          <h1 className="babacttttl">BABA Association</h1>
          <h2>
            Ici j'ai appris beaucoup de chose comme par exemple comment gérer une baston dans les bus.<br/>
            C'est une expérience très enrichissante au j'ai pu démontrer mes talents pour le management dans mon poste
            actuel de vice-président en manageant une équipe de 20 personnes.<br/> Cette Association unique en France porte beaucoup
            de projet important, aussi bien d'un point de vu festif que sportif, ou encore culturel.
            <br/>Ce que j'ai appris: Managment d'équipe, Communication, Négociation
          </h2>
          <div className="lgntwrk">
            <FbBABA/>
            <IgBABA/>
          </div>
        </div>
      </div>
      <div className="mgateexp">
        <div className="mgatelogo">
          <MGaTE/>
        </div>
        <div className="mgatectt">
          <h1 className="mgatecttttl">M-GaTE Junior Entreprise</h1>
          <h2>
            Ici j'ai appris beaucoup de chose comme par exemple comment gérer une équipe pour faire des tunes.<br/>
          C'est une expérience très enrichissante au j'ai pu démontrer mes talents pour le management et le bistouillouage dans mon poste
           de secrétaire général en manageant une équipe de 200 personnes.<br/> Cette Association unique car spécialisé en microélectronique
            en France porte beaucoup de projet important, aussi bien d'un point de vu festif que sportif, ou encore culturel.
            <br/>Ce que j'ai appris: Managment d'équipe, Communication, Négociation, Rédaction de Compte Rendu
          </h2>
          <div className="lgntwrk">
            <FbBABA/>
            <LinkedIn/>
          </div>
        </div>
      </div>
      <div className="bdeexp">
        <div className="bdelogo">
          <BDE/>
      </div>
        <div className="bdectt">
          <h1 className="bdecttttl">BDE Association</h1>
          <h2>
            Ici j'ai appris beaucoup de chose comme par exemple comment gérer une baston dans les bus.<br/>
            C'est une expérience très enrichissante au j'ai pu démontrer mes talents pour le management dans mon poste
            actuel de vice-président en manageant une équipe de 20 personnes.<br/> Cette Association unique en France porte beaucoup
            de projet important, aussi bien d'un point de vu festif que sportif, ou encore culturel.
            <br/>Ce que j'ai appris: Managment d'équipe, Communication, Négociation
          </h2>
          <div className="lgntwrk">
            <FbBABA/>
            <IgBABA/>
          </div>
        </div>
      </div>
      <h1>Scholar Courses</h1>
      <h2 className="minesttl">Mines St Etienne Engineerging School</h2>
      <div className="minesexp">
        <div className="minestxt1">
          <h2>
            L'école des Mines de Saint-Étienne ISMIN cursus Microélectronique, Informatique et Niouvelles technologie
            est une école dernier cri qui forme des élèves ingénieurs dans le secteur de la tech.
            TMTC la qualité du site, ils forment des machines wllh.
          </h2>
        </div>
        <Mines/>
        <div className="minestxt2">
          <h2>Compétences développées :</h2>
          <ul>
            <li>La bg attitude</li>
            <li>Niquer des mères</li>
            <li>La bg attitude</li>
            <li>Niquer des mères</li>
            <li>La bg attitude</li>
            <li>Niquer des mères</li>
          </ul>
        </div>
      </div>
      <h1>My Skills</h1>
    {/* <SkillPage theme={theme}/> */}
      <h1>My Qualities</h1>
        <h2 className="drgm">Click and Drag Me Out!</h2>
        <CardStack/>
      <h1>What I Like</h1>
        <h2 className="drgm">Turn the cubes around !</h2>
        <Cubes/>
    </main>
  </div>
  )
}
