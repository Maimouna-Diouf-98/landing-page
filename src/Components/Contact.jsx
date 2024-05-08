import '../style/Contact.css'
import orlan from '../img/orlan.jpeg'
import facebook from '../img/facebook.png'
import youtube from '../img/youtube.png'
import linkedin from '../img/logo-linkedin.png'
import phone from '../img/appel.png'
import insta from '../img/instagram.png'
import adress from '../img/espace-reserve.png'
import email from '../img/email.png'
function Contact() {
    return (
      <div className="container p-3">
            <div className="secondaire  shadow  mb-4 rounded">

              <div className="row p-5">
                <div className="col-md-6 col-sm-6 col-lg-6">
                  <img src={orlan} alt="" className=" absolute-img img-fluid " />     
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6  ">
                 <h2 className=' fs-5  fw-bold text-white fs-1 py-4 text-uppercase'>Contactez Moi</h2>
                    <div className="row ">
                       <div className="col-md-12 d-flex text-center gap-3 pb-4">
                         <img src={phone} alt="" className='img-fluid p-1 img-phone' />
                         <span className="text-uppercase fs-3 fw-light  text-white">phone: +221 77 251 09 33</span>
                         
                       </div>
                        <hr className='hr ms-3'/>
                        <div className="col-md-12 d-flex text-center gap-3 pb-4">
                         <img src={adress} alt="" className='img-fluid p-1 img-phone' />
                         <span className="text-uppercase fs-3 fw-light  text-white">Adresse: Cité keur gorgui</span>
                         
                       </div>
                        <hr className='hr ms-3'/>
                        <div className="col-md-12  pb-4">
                          <div className="d-flex text-center gap-3">
                          <img src={email} alt="" className='img-fluid p-1 img-phone' />
                          <span className="text-uppercase fs-3 fw-light  text-white">Email: </span>
                          </div>
                        
                         
                        <span className='fw-light pt-5 fs-5 text-white'>bouangamounangaorlaneselena@gmail.com</span>
                        
                       </div>
                        <hr className='hr ms-3'/>
                        <div className="col-md-12 d-flex text-center gap-3 pb-4">
                        <span className="text-uppercase fs-4 fw-light  text-white">reseaux sociaux: </span>
                        <a href={''}  target='_blank'><img src={facebook} alt="" 
                     className="img-fluid img-contact" /></a>
                      <a href={'https://www.youtube.com/@OrlaneSelena'}  target='_blank'><img src={youtube} alt=""
                        className="img-fluid img-contact" /></a>
                          <a href={'https://www.linkedin.com/in/orlane-selena-bouanga-mounanga-22a236202/'}  target='_blank'><img src={linkedin} alt="" 
                           className="img-fluid img-contact" /></a>
                             <a href={'https://www.instagram.com/orlane_selena/?hl=en'}  target='_blank'><img src={insta} alt="" 
                              className="img-fluid img-contact" /></a> 
                       </div>
                        <hr className='hr ms-3'/>
                    </div>
                   
                 </div>
                </div>
              </div>
            
     
      </div>
      
    );
  }
  
  export default Contact;