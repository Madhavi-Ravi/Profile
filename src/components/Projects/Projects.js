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
        <div class="flex header waypoint animated slide-in-right" data-animation="slide-in-right">
          PROJECTS
        </div>
        <div class="flex header-bar waypoint animated slide-in-right" data-animation="slide-in-right" data-delay=".3s"></div>

        <div class="flex filter-wrap">
          <div class="flex row">
            <div>Projects & Products</div>
            
          </div>
        </div>

        <div id="gallery" class="container flex wrap animated">
          <div class="mix products" data-my-order="1" data-bound="">
            <div class="flex">
              <div class="card"></div>
              <div class="text">
                <div class="bold">Retail Application</div>
                <span class="highlight"></span>
              </div>
              <div class="lm-button" id="1" onClick={showModelHandler}>LEARN MORE</div>
            </div>
          </div>

          <div class="mix products" data-my-order="1" data-bound="">
            <div class="flex">
              <div class="card"></div>
              <div class="text">
                <div class="bold">Productimize</div>
                <span class="highlight"></span>
              </div>
              <div class="lm-button" id="2" onClick={showModelHandler}>LEARN MORE</div>
            </div>
          </div>

          <div class="mix products" data-my-order="1" data-bound="">
            <div class="flex">
              <div class="card"></div>
              <div class="text">
                <div class="bold">QA Touch</div>
                <span class="highlight"></span>
              </div>
              <div class="lm-button" id="3" onClick={showModelHandler}>LEARN MORE</div>
            </div>
          </div>

          <div class="mix projects" data-my-order="1" data-bound="">
            <div class="flex">
              <div class="card"></div>
              <div class="text">
                <div class="bold">Jellybeet</div>
                <span class="highlight"></span>
              </div>
              <div class="lm-button" id="4" onClick={showModelHandler}>LEARN MORE</div>
            </div>
          </div>

          <div class="mix projects" data-my-order="1" data-bound="">
            <div class="flex">
              <div class="card"></div>
              <div class="text">
                <div class="bold">MDS HVAC</div>
                <span class="highlight"></span>
              </div>
              <div class="lm-button" id="5" onClick={showModelHandler}>LEARN MORE</div>
            </div>
          </div>

          <div class="mix projects" data-my-order="1" data-bound="">
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


          <div class="float-bar">
            <div class="flex row" >
              <div class="filter active" data-filter="all">ALL</div>
              <div class="filter" data-filter=".rails">RUBY/RAILS</div>
              <div class="filter" data-filter=".react">REACT-JS</div>
              <div class="filter" data-filter=".js">JAVASCRIPT</div>
            </div>
          </div>