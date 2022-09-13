import responsibility from '../images/icons/responsibility.jpg'
import ideas from '../images/icons/ideas.png'
import { SiSpeedtest } from 'react-icons/si';
import { VscChecklist } from 'react-icons/vsc';
import { MdLightbulb } from 'react-icons/md';
import { BiRocket } from 'react-icons/bi';

function Aboutme(props) {
	return(
		<section id="about" ref={props.refAboutProp}>

			<div className="flex header">ABOUT</div>
			<div className="flex header-bar"></div>
			<div className="container">
				<div className=" row label-wrap">
	            <div className=" row-gt-sm">
	              <div className="bullet-wrap">
	              	<div className="bullet-wrap-two"></div>
	                <div className="flex hex-wrap">
	                  <div className="hexagon">
	                    <VscChecklist size={70} className="obj_icons"/>
	                  </div>
	                </div>
	                <div className="flex">
	                  <div className="label bold">Responsible</div>
	                  <div className="content description">I like to take Responsiblilty for my work be it, big or small.</div>
	                </div>
	              </div>
	              <div className="bullet-wrap">
	                <div className="bullet-wrap-four"></div>
	                <div className="flex hex-wrap">
	                  <div className="hexagon"> 
	                    <BiRocket size={70} className="obj_icons"/>
	                  </div>
	                </div>
	                <div className="flex">
	                  <div className="label bold">Dynamic</div>
	                  <div className="content description">
	                    Websites don't have to be static, I love making pages come
	                    to life.
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div className=" row-gt-sm">
	              <div className="bullet-wrap">
	                <div className="bullet-wrap-three"></div>
	                <div className="flex hex-wrap" >
	                  <div className="hexagon">	                    
	                    <MdLightbulb size={70} className="obj_icons"/>
	                  </div>
	                </div>
	                <div className="flex">
	                  <div className="label bold">Intuitive</div>
	                  <div className="content description">Strong preference for easy to use, intuitive User Interface.</div>
	                </div>
	              </div>
	              <div className="bullet-wrap">
					<div className="bullet-wrap-one"></div>
	                <div className="flex hex-wrap">
	                  <div className="hexagon">
	                    <SiSpeedtest size={70} className="obj_icons"/>
	                  </div>
	                </div>
	                <div className="flex">
	                  <div className="label bold">Fast</div>
	                  <div className="content description">
	                    Fast load times and lag free interaction, my highest
	                    priority.
	                  </div>
	                </div>
	              </div>
	            </div>
	          </div>
	          <div className="flex row content-wrap">
	          		<h2 className="obj_title">ABOUT ME</h2>
	          		<p className="content obective-content">I'm a Full-Stack Developer, Currently working as a freelancer for developing a billing application for a local retailer. My interest is in developing intuitive user interfaces, Web APIs, and Fast and Scalable backend solutions. I had the privilege of working on building an enterprise-scale product, application software, and a couple of e-commerce website.</p>
	          </div>
			</div>
		</section>
	)
}

export default Aboutme;