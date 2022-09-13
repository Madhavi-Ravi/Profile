import React,{useState, useEffect} from 'react';
import ProjectModel from './ProjectModel';

function Projects(props){
  const[showModel, setShowModel] = useState(false);
  const[showMoreDetails, setShowMoreDetails] = useState();

  const showModelHandler = (event) =>{
    console.log(event.target.id);
    setShowModel(true);
    setShowMoreDetails(event.target.id);
  }

  useEffect(() => {
    if (showModel === true) {
      document.body.style.overflow = 'hidden'
    }
    else{      
      document.body.style.overflow = 'visible'
    }
  }, [showModel])

  return(
    
  <section className="flex" id="portfolio" ref={props.refProjectsProp}>
  {showModel === true && showMoreDetails !== 0 &&
    <ProjectModel 
    no={showMoreDetails}
    onConfirm={()=>setShowModel(false)}/>
  }
        <div className="flex header">
          PROJECTS
        </div>
        <div className="flex header-bar"></div>

        <div className="flex filter-wrap">
          <div className="flex">
            <div>Projects & Products</div>            
          </div>
        </div>

        <div id="gallery" className="container flex wrap">
          <div className="mix products">
            <div className="flex">
              <div className="card"></div>
              <div className="text">
                <div className="bold">Retail Application</div>
                <span className="highlight"></span>
              </div>
              <div className="lm-button" id="1" onClick={showModelHandler}>LEARN MORE</div>
            </div>
          </div>

          <div className="mix products">
            <div className="flex">
              <div className="card"></div>
              <div className="text">
                <div className="bold">Productimize</div>
                <span className="highlight"></span>
              </div>
              <div className="lm-button" id="2" onClick={showModelHandler}>LEARN MORE</div>
            </div>
          </div>

          <div className="mix products">
            <div className="flex">
              <div className="card"></div>
              <div className="text">
                <div className="bold">QA Touch</div>
                <span className="highlight"></span>
              </div>
              <div className="lm-button" id="3" onClick={showModelHandler}>LEARN MORE</div>
            </div>
          </div>

          <div className="mix projects">
            <div className="flex">
              <div className="card"></div>
              <div className="text">
                <div className="bold">Jellybeet</div>
                <span className="highlight"></span>
              </div>
              <div className="lm-button" id="4" onClick={showModelHandler}>LEARN MORE</div>
            </div>
          </div>

          <div className="mix projects">
            <div className="flex">
              <div className="card"></div>
              <div className="text">
                <div className="bold">MDS HVAC</div>
                <span className="highlight"></span>
              </div>
              <div className="lm-button" id="5" onClick={showModelHandler}>LEARN MORE</div>
            </div>
          </div>

          <div className="mix projects">
            <div className="flex">
              <div className="card"></div>
              <div className="text">
                <div className="bold">Priceguru</div>
                <span className="highlight"></span>
              </div>
              <div className="lm-button" id="6" onClick={showModelHandler}>LEARN MORE</div>
            </div>
          </div>

        </div>
      </section>
  
   )
}

export default Projects;