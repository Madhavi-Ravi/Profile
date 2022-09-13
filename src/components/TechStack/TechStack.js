import React,{useRef} from 'react'

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
		<section className="teck-stack-wrapper" id="techstack" ref={props.refTechProp}>

			<div className="flex header">Tech Stack</div>
			<div className="flex header-bar"></div>
			<div className="flex" ref={inputRef}>
	          		<p className="content tech-description">From my years of experience, I had an opportunity to work with an awesome team and projects, where I was able to grow the technical skills that I can currently utilize. I got to work with both front-end and back-end technologies.</p>
	        </div>
			<div className="flex container">
				<div className="flex flex-50-gt-sm">
              <div className="bar flex">                
                <div className="flex percentage"><span>90%</span></div>
                <div className="bar fill" >
                </div>                
                <div className="tag bold flex content">PHP/Laravel</div>
              </div>

              <div className="bar flex">
                <div className="flex percentage"><span>80%</span></div>
                <div className="bar fill">
                </div>                
                <div className="tag bold flex content">React/JavaScript</div>
              </div>

              <div className="bar flex">
                <div className="flex percentage"><span>80%</span></div>
                <div className="bar fill">
                </div>                
                <div className="tag bold flex content">Rest API</div>
              </div>

              <div className="bar flex">
                <div className="flex percentage"><span>80%</span></div>
                <div className="bar fill">
                </div>                
                <div className="tag bold flex content">SQL</div>
              </div>

              <div className="bar flex">
                <div className="flex percentage"><span>80%</span></div>
                <div className="bar fill">
                </div>                
                <div className="tag bold flex  content">jQuery</div>
              </div>

              <div className="bar flex">
                <div className="flex percentage"><span>70%</span></div>
                <div className="bar fill">
                </div>                
                <div className="tag bold flex">HTML</div>
              </div>

              <div className="bar flex">                
                <div className="flex percentage"><span>70%</span></div>
                <div className="bar fill">
                </div>
                <div className="tag bold flex content">CSS</div>
              </div>

              <div className="bar flex">
                <div className="flex percentage"><span>60%</span></div>
                <div className="bar fill">
                </div>                
                <div className="tag bold flex">BigCommerce</div>
              </div>

              <div className="bar flex">              
                <div className="flex percentage"><span>60%</span></div>
                <div className="bar fill">
                </div>
                <div className="tag bold flex content">Magento 2</div>
              </div>
            </div>
	        </div>
		</section>
	)
}

export default TechStack;