import React from 'react';
import logo from '../Images/logo.png';
import './Template.css';
import award from '../Images/1.png';
import photo from '../Images/2.png';
import pipeimg from '../Images/3.png';
import phone from '../Images/phone-call.png';
import facebooks from '../Images/facebook-logo.png'
import browse from '../Images/globe.png'
const Template = () => {
  return (
    <div className='Container'>
    <div>
    <img src={logo} alt="Logo"  className='logo' />
    <div className='middle-container'>
<img src={award} className="award-img" />
<div className='info-continaer'>
<h1 className='headline'> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time</h1>
<ul>
<li>
C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
</li>
<li>
C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. 
</li>
</ul>
<img  src={photo} className="photo" />
<h1 className='headline2'>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</h1>
</div></div>
    <h1 className='h12'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</h1>
   <img src={pipeimg} className="pipeimg" />
  <p  className='pvalues'>
  Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>   
  
  <hr/>
  <h4 style={{textAlign:"center"}}>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
  <p  className='intro'>CHEMICALS & PROCESS POWER WATER |  OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE |</p>
  <p className='intro' style={{textAlign:"center"}}> PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL</p>
    

  <div  className='footer'>
  <div className='phone-div'>
  <img src={phone} style={{background:"white" , border:"1px solid white" ,borderRadius:"50%"}} /> <p>Toll Free 1800 200 1234</p>
  </div>
  <div className='phone-div'>
  <img src={facebooks} style={{background:"white" , border:"1px solid white" ,borderRadius:"50%"}} /> <p>www.facebook.com/cripumps</p>
  </div>
  <div className='phone-div'>
  <img src={browse} style={{background:"white" , border:"1px solid white" ,borderRadius:"50%"}} /> <p>crigroups.com</p>
  </div>
  </div>
    </div>
    </div>
  )
}

export default Template