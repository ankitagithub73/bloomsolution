import "./Hero.css";
import { FaRegCheckCircle } from "react-icons/fa";
function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-8">
              <div className="hero-content">
                <h1>Business Outsourcing Services</h1>

                <p>
                  Effortless Operations, Qualified Experts, and Reliable Remote
                  Talent, All in One Place
                </p>

                <ul className="hero-list">
                  <li>
                    <FaRegCheckCircle className="list-icon" />
                    Build Your Dedicated Team Starting from Just US $7/hour
                  </li>

                  <li>
                    <FaRegCheckCircle className="list-icon" />
                    Experienced professionals who perfectly match your needs
                  </li>

                  <li>
                    <FaRegCheckCircle className="list-icon" />
                    No binding contracts or employee-related liabilities
                  </li>

                  <li>
                   <FaRegCheckCircle className="list-icon" />
                    Work with teams available across global time zones
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
