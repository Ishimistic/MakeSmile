import Header from "../components/Header";
import Impact from "../components/impactData";
import process from "../assets/process.png";
import ImageCarousel from "../components/ImageCarousel";
import Footer from "../components/Footer";


import s1 from "../assets/images-back/s1.png"
import s4 from "../assets/images-back/s4.png";
import s3 from "../assets/images-back/s3.jpg";


function Home() {
  const imagesLandPage = [s1, s3, s4];
  return (
    <>
      <Header />
      <div className="landpage_container-1">
       
        <ImageCarousel images={imagesLandPage} />
      </div>
      <div className="landpage_container-2">Community First, Always</div>
      <div className="landpage_container-impact">
        <Impact />
      </div>
      <div className="landpage_container-3">
        <div className="landpage_container-3-left-txt">
          Gift the joy of learning and play:
          <br /> Donate your <span>toys</span> and <span>books</span> to those
          in need
        </div>

        <div className="donateBtn">
          <button>Donate Toys/Books</button>
        </div>
      </div>
      <div className="landpage_container-4">
        {/* Process is quite simple */}
        <img src={process} alt="Process" width="1100" height="400" />
      </div>

      <Footer />
    </>
  );
}

export default Home;
