import bymos from '../img/bymos.jpeg'
import Flawless from '../img/flawless.jpeg'
import '../style/Apropos.css'
function Business() {
    return (
      <div className="container-fluid busnes-container mb-4  d-flex align-items-center justify-content-center">
       <section className="">
        
        <div className="row ">
            <h1 className="bussnes-title text-center fs-1  ">
            Mes business
        </h1>
            <div className="col-md-6 col-lg-6  col-sm-6  ">
            <div class="card shadow p-5 mb-4 bg-body-tertiary rounded" >
              <img src={bymos} alt="" className="img-card img-fluid" />
             <div class="card-body">
               <h5 class="card-title">Bymos Housing</h5>
               <p class="card-text">Bymos Housing permet de partager une décoration intérieure moderne made in africa</p>
               <a href="https://www.instagram.com/bymos_housing/?hl=en" target='_blank' class="btn btn-primary link-propos">JOINDRE NOTRE COMPTE INSTA</a>
           </div>
            </div>
            </div>
            <div className="col-md-6  col-lg-6  col-sm-6  ">
            <div class="card shadow p-5 mb-4 bg-body-tertiary rounded" >
              <img src={Flawless} alt="" className="img-card img-fluid" />
             <div class="card-body">
               <h5 class="card-title">FLAWLESS STYLE</h5>
               <p class="card-text">c'est un endroit où toutes les femmes pourront se sentir à l'aise avec leur style</p>
               <a href="https://www.instagram.com/women_flawless_/?hl=en" target='_blank' class="btn btn-primary link-propos">JOINDRE NOTRE COMPTE INSTA</a>
           </div>
            </div>

            </div>
        </div>
       </section>
     
      </div>
      
    );
  }
  
  export default Business;