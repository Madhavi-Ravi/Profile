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
    if (showModel == true) {
      document.body.style.overflow = 'hidden'
    }
    else{      
      document.body.style.overflow = 'visible'
    }
  }, [showModel])

  return(
    
  <section class="flex" id="portfolio" ref={props.refProjectsProp}>
  {showModel == true && showMoreDetails != 0 &&
    <ProjectModel 
    no={showMoreDetails}
    onConfirm={()=>setShowModel(false)}/>
  }
        <div class="flex header">
          PROJECTS
        </div>
        <div class="flex header-bar"></div>

        <div class="flex filter-wrap">
          <div class="flex">
            <div>Projects & Products</div>            
          </div>
        </div>

        <div id="gallery" class="container flex wrap">
          <div class="mix products">
            <div class="flex">
              <div class="card"></div>
              <div class="text">
                <div class="bold">Retail Application</div>
                <span class="highlight"></span>
              </div>
              <div class="lm-button" id="1" onClick={showModelHandler}>LEARN MORE</div>
            </div>
          </div>

          <div class="mix products">
            <div class="flex">
              <div class="card"></div>
              <div class="text">
                <div class="bold">Productimize</div>
                <span class="highlight"></span>
              </div>
              <div class="lm-button" id="2" onClick={showModelHandler}>LEARN MORE</div>
            </div>
          </div>

          <div class="mix products">
            <div class="flex">
              <div class="card"></div>
              <div class="text">
                <div class="bold">QA Touch</div>
                <span class="highlight"></span>
              </div>
              <div class="lm-button" id="3" onClick={showModelHandler}>LEARN MORE</div>
            </div>
          </div>

          <div class="mix projects">
            <div class="flex">
              <div class="card"></div>
              <div class="text">
                <div class="bold">Jellybeet</div>
                <span class="highlight"></span>
              </div>
              <div class="lm-button" id="4" onClick={showModelHandler}>LEARN MORE</div>
            </div>
          </div>

          <div class="mix projects">
            <div class="flex">
              <div class="card"></div>
              <div class="text">
                <div class="bold">MDS HVAC</div>
                <span class="highlight"></span>
              </div>
              <div class="lm-button" id="5" onClick={showModelHandler}>LEARN MORE</div>
            </div>
          </div>

          <div class="mix projects">
            <div class="flex">
              <div class="card"></div>
              <div class="text">
                <div class="bold">Priceguru</div>
                <span class="highlight"></span>
              </div>
              <div class="lm-button" id="6" onClick={showModelHandler}>LEARN MORE</div>
            </div>
          </div>

        </div>
      </section>
  
   )
}

export default Projects;