import "../style/Home.css"
function Home() {
    return (
      <div className="home ">
        <div className=" container home-container text-center d-flex align-items-center justify-content-center text-white flex-column">
            <h1 className=" fs-1 title fw-bold text-uppercase">
            Bienvenue dans mon univers !
                         
            </h1>

            <h3 className="h3-home py-5 fs-1 title fw-bold text-uppercase">
                Je suis Orlane Selena Bouanga <br />
            </h3>
            {/* <h4 className="para-home fs-4">
                  Je suis un passionné du management et du marketing mais aussi de l'entreprenariat. <br />
                Sur ce blog, je partage avec vous un peu de mon univers, <br /> mes passions
                 et mes expériences
            </h4> */}
           
        </div>
       
      </div>
    );
  }
  
  export default Home;