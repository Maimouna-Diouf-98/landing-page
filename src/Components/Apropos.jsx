import '../style/Apropos.css'
import logo from '../img/1.jpeg';
import bymos from '../img/bymos.jpeg'
import Flawless from '../img/flawless.jpeg'
import Business from './Business';
function Apropos() {
    return (
      <div className="container pt-md-5 d-flex align-items-center justify-content-center flex-column">
      
       <section className="presentation p-5  shadow  mb-4 bg-body-tertiary rounded">
        <div className="row ">
            <div className="col-md-6 col-lg-6  col-sm-6 ">
                <img src={logo} alt="" className="img-fluid img-propos" />
            </div>
            <div className="col-md-6  col-lg-6  col-sm-6 pt-md-1">
                <h2 className="paragraphe-1 text-uppercase">
                     hi!
                     <br />
                     I'am Orlane Selene Bouanga
                </h2>
                <p className="para-2 pt-2 fs-5">
                   j'ai 23 ans. <br />Je détiens une licence en droit des affaires délivrée par l'Institut Supérieur de Management (ISM), 
                  où je poursuis actuellement mon master  en Management marketing et communication
                  .
                </p>
                <p className="para-2 pt-3 fs-5">
                Je suis une passionné du management et du marketing.
                 mais aussi de tous ce qui touche  la musique gospel .
                 j'ecris des chassons et j'aspire a etre un pasteur. d'ailleur vous pouvez
                  trouver ma chaine youtube dans mes contacts et me soutenir en s'abonnant.
                </p>
                <p className="para-2 pt-3 fs-5">
                  En dehors de la musique et des etudes, j'entreprend et j'ai developpé deux petit business que s'essaye de fleurir. <br /> <br />
                  <span className='flaw'> Flawless style</span>
                  <br /><span className='fs-4'>et</span><br />
                  <span className='bymos'>Bymos Housing </span>
              </p>

            </div>
        </div>
       </section>
       <Business/>
      </div>
      
    );
  }
  
  export default Apropos;
  