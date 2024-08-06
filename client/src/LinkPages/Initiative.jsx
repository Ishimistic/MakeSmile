import study from "../assets/study.jpg";
import Header from "../components/Header";

function Initiative() {
  return (
    <div className="home-container">
      <Header />
      <div className="heading">Welcome to MakeSmile</div>
        <div className="about-work">
          <div className="welcome-about-us">
            <span>MakeSmile</span> is an initiative by the Drishti Rotaract Club
            of BPIT that connects people with extra toys and books to those in
            need. Our mission is to distribute these resources to children who
            could benefit from them, spreading joy and support within the
            community.
          </div>
          <br />
          <div className="initiativeImg">
            <img src={study} alt="" width="700" height="360" />
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Initiative;
