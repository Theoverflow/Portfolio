import React,{useState} from 'react';
import './Footer.css'

export default function Footer ({theme}){
  return (
    <div className={`bttm ${theme}`}>
      <div className="footer">
        <div className="nwslttr">
          <h2>Keep in touch</h2>
        <form action="#" className="nfrmtn">
          <label for="f_name">
            <h3>First Name</h3>
          </label>
          <input name="f_nm" aria-required="false" placeholder="John" type="text" value/>
            <label for="mail_add">
              <h3>Mail</h3>
            </label>
            <input name="mail_add" aria-required="true" placeholder="john.doe@gmail.com" type="text" value/>
          <button data-element="submit" type="submit">Follow the Newsletter</button>
        </form>
        </div>
        <div className="ntwrks">

        </div>
      </div>
  </div>
  )
}
