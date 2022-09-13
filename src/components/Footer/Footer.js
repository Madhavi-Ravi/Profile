import { FaLinkedin } from 'react-icons/fa';
import { FaMailBulk, FaPhoneAlt, FaCodepen } from 'react-icons/fa';

function Footer(){
	return(
		<footer>
        <div className="icon-wrap flex row">
          <a href="https://www.linkedin.com/in/madhavi-ravi/">
          <div className="flex icon" id="icon-2" size={30} >
              <FaLinkedin />
            </div>
          </a>
          <a href="mailto:madhaviravi04@gmail.com">
            <div className="flex icon" id="icon-3" size={30}>
              <FaMailBulk/>
            </div>
          </a>
        </div>
        <div className="info-box">
          <div className="footnote">
            MADHAVI RAVI <span className="highlight">©2022</span>
          </div>
        </div>
      </footer>
	);
}

export default Footer;


          <a href="http://codepen.io/">
            <div className="flex icon" id="icon-5" size={30}>
              <FaCodepen/>
            </div>
          </a>