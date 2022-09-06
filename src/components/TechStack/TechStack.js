import React,{useRef} from 'react'
import responsibility from '../images/icons/responsibility.jpg'
import ideas from '../images/icons/ideas.png'

function TechStack(props) {

    const inputRef = useRef(null);
    const handleNavigation = (e) =>{

        console.log(inputRef.current);
      if (document.activeElement === inputRef.current) {
          console.log('element has focus');
        } else {
          console.log('element does NOT have focus');
        }
      }

    //window.addEventListener("scroll", (e) => handleNavigation(e));

	return(
		<section class="teck-stack-wrapper" id="techstack" ref={props.refTechProp}>

			<div class="flex header waypoint animated slide-in-left" data-animation="slide-in-left">Tech Stack</div>
			<div class="flex header-bar  animated slide-in-left" data-animation="slide-in-left" data-delay=".5s"></div>
			<div class="flex" ref={inputRef}>
	          		<p class="content tech-description">From my years of experience, I had an opportunity to work with an awesome team and projects, where I was able to grow the technical skills that I can currently utilize. I got to work with both front-end and back-end technologies.</p>
	        </div>
			<div class="flex container">
				<div class="flex flex-50-gt-sm waypoint bars-wrap animated slide-in-right" data-animation="slide-in-right">
              <div class="bar flex">                
                <div class="flex percentage"><span>90%</span></div>
                <div class="bar fill" >
                </div>                
                <div class="tag bold flex content">PHP/Laravel</div>
              </div>

              <div class="bar flex">
                <div class="flex percentage"><span>80%</span></div>
                <div class="bar fill">
                </div>                
                <div class="tag bold flex content">React/JavaScript</div>
              </div>

              <div class="bar flex">
                <div class="flex percentage"><span>80%</span></div>
                <div class="bar fill">
                </div>                
                <div class="tag bold flex content">Rest API</div>
              </div>

              <div class="bar flex">
                <div class="flex percentage"><span>80%</span></div>
                <div class="bar fill">
                </div>                
                <div class="tag bold flex content">SQL</div>
              </div>

              <div class="bar flex">
                <div class="flex percentage"><span>80%</span></div>
                <div class="bar fill">
                </div>                
                <div class="tag bold flex  content">jQuery</div>
              </div>

              <div class="bar flex">
                <div class="flex percentage"><span>70%</span></div>
                <div class="bar fill">
                </div>                
                <div class="tag bold flex">HTML</div>
              </div>

              <div class="bar flex">                
                <div class="flex percentage"><span>70%</span></div>
                <div class="bar fill">
                </div>
                <div class="tag bold flex content">CSS</div>
              </div>

              <div class="bar flex">
                <div class="flex percentage"><span>60%</span></div>
                <div class="bar fill">
                </div>                
                <div class="tag bold flex">BigCommerce</div>
              </div>

              <div class="bar flex">              
                <div class="flex percentage"><span>60%</span></div>
                <div class="bar fill">
                </div>
                <div class="tag bold flex content">Magento 2</div>
              </div>
            </div>
	        </div>
		</section>
	)
}

export default TechStack;