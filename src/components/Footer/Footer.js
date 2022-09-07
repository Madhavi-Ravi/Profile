import { FaLinkedin } from 'react-icons/fa';
import { FaMailBulk, FaPhoneAlt, FaCodepen } from 'react-icons/fa';

function Footer(){
	return(
		<footer>
        <div class="icon-wrap flex row">
          <a href="https://www.linkedin.com/in/madhavi-ravi/">
          <div class="flex icon" id="icon-2" size={40} >
              <FaLinkedin />
            </div>
          </a>
          <a href="mailto:madhaviravi04@gmail.com">
            <div class="flex icon" id="icon-3" size={30}>
              <FaMailBulk/>
            </div>
          </a>
          <a href="http://codepen.io/">
            <div class="flex icon" id="icon-5" size={30}>
              <FaCodepen/>
            </div>
          </a>
        </div>
        <div class="info-box">
          <div class="footnote">
            MADHAVI RAVI <span class="highlight">©2022</span>
          </div>
        </div>
      </footer>
	);
}

export default Footer;