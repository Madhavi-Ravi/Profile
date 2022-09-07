import responsibility from '../images/icons/responsibility.jpg'
import ideas from '../images/icons/ideas.png'
import { SiSpeedtest } from 'react-icons/si';
import { VscChecklist } from 'react-icons/vsc';
import { MdLightbulb } from 'react-icons/md';
import { BiRocket } from 'react-icons/bi';

function Aboutme(props) {
	return(
		<section id="about" ref={props.refAboutProp}>

			<div class="flex header">ABOUT</div>
			<div class="flex header-bar"></div>
			<div class="container">
				<div class=" row label-wrap">
	            <div class=" row-gt-sm">
	              <div class="bullet-wrap">
					<div class="bullet-wrap-one"></div>
	                <div class="flex hex-wrap">
	                  <div class="hexagon">
	                    <SiSpeedtest size={70} class="obj_icons"/>
	                  </div>
	                </div>
	                <div class="flex">
	                  <div class="label bold">Fast</div>
	                  <div class="content description">
	                    Fast load times and lag free interaction, my highest
	                    priority.
	                  </div>
	                </div>
	              </div>

	              <div class="bullet-wrap">
	              	<div class="bullet-wrap-two"></div>
	                <div class="flex hex-wrap">
	                  <div class="hexagon">
	                    <VscChecklist size={70} class="obj_icons"/>
	                  </div>
	                </div>
	                <div class="flex">
	                  <div class="label bold">Responsible</div>
	                  <div class="content description">I like to take Responsiblilty for my work be it, big or small.</div>
	                </div>
	              </div>
	            </div>
	            <div class=" row-gt-sm">
	              <div class="bullet-wrap">
	                <div class="bullet-wrap-three"></div>
	                <div class="flex hex-wrap" >
	                  <div class="hexagon">	                    
	                    <MdLightbulb size={70} class="obj_icons"/>
	                  </div>
	                </div>
	                <div class="flex">
	                  <div class="label bold">Intuitive</div>
	                  <div class="content description">Strong preference for easy to use, intuitive User Interface.</div>
	                </div>
	              </div>

	              <div class="bullet-wrap">
	                <div class="bullet-wrap-four"></div>
	                <div class="flex hex-wrap">
	                  <div class="hexagon"> 
	                    <BiRocket size={70} class="obj_icons"/>
	                  </div>
	                </div>
	                <div class="flex">
	                  <div class="label bold">Dynamic</div>
	                  <div class="content description">
	                    Websites don't have to be static, I love making pages come
	                    to life.
	                  </div>
	                </div>
	              </div>
	            </div>
	          </div>
	          <div class="flex row content-wrap">
	          		<h2 class="obj_title">OBJECTIVE</h2>
	          		<p class="content obective-content">I'm a Full-Stack Developer, Currently working as a freelancer for developing a billing application for a local retailer. My interest is in developing intuitive user interfaces, Web APIs, and Fast and Scalable backend solutions. I had the privilege of working on building an enterprise-scale product, application software, and a couple of e-commerce website.</p>
	          </div>
			</div>
		</section>
	)
}

export default Aboutme;