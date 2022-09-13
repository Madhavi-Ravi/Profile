import React,{useRef, useState, useEffect} from 'react'
import Home from './components/Home/Home'
import Navigation from './components/Navigation/Navigation'
import Aboutme from './components/Aboutme/Aboutme'
import TechStack from './components/TechStack/TechStack'
import Projects from './components/Projects/Projects'
import Blogs from './components/Blogs/Blogs'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
	const intialArray = ['','','','','','' ];
	const[activeArray, setActivearray] = useState(intialArray);
    const homeRef = useRef(null);
    const techRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const blogsRef = useRef(null);
    const contactRef = useRef(null);  

    
    //console.log(window.addEventListener('focusin', handleNavigation));
    const executeHomeScroll = () => {
    	homeRef.current.scrollIntoView(); 
    	//setActivearray(['','','active','','','']);
    } 

    const executeTechScroll = () => {
    	techRef.current.scrollIntoView(); 
    	//setActivearray(['','','active','','','']);
    }

    const executeAboutScroll = () => {
    	aboutRef.current.scrollIntoView();
    	//setActivearray(['','active','','','','']);
    }

    const executeProjectsScroll = () => {
    	projectsRef.current.scrollIntoView();
    	//setActivearray(['','','','active','','']);
    } 

    const executeBlogsScroll = () => {
    	blogsRef.current.scrollIntoView(); 
    	//setActivearray(['','','','','active','']);
    }

    const executeContactScroll = () => {
    	contactRef.current.scrollIntoView();
    	//setActivearray(['','','','','','active']);
    }

    window.onscroll = () => {
            //setActivearray(['','','','','','']);
    };

  return (
    <div className="body-wrappper">
	    <Home refHomeProp={homeRef}></Home>
	    <nav className="flex link-wrap desk">
    	    <div className={`page-link ${activeArray[0]}`} dest="home" onClick={executeHomeScroll}>Home</div>	    
            <div className={`page-link ${activeArray[1]}`} dest="about" onClick={executeAboutScroll}>About</div>
    	    <div className={`page-link ${activeArray[2]}`} dest="techstack" onClick={executeTechScroll}>Tech Stack</div>
    	    <div className={`page-link ${activeArray[3]}`} dest="portfolio" onClick={executeProjectsScroll}>Projects</div>
    	    <div className={`page-link ${activeArray[4]}`} dest="blog" onClick={executeBlogsScroll}>Blog</div>
    	    <div className={`page-link ${activeArray[5]}`} dest="contact" onClick={executeContactScroll}>Contact</div>
	    </nav>
	    <Aboutme refAboutProp={aboutRef}></Aboutme>
    	<TechStack refTechProp={techRef}></TechStack>    	
    	<Projects refProjectsProp={projectsRef}></Projects>  	
    	<Blogs refBlogsProp={blogsRef}></Blogs> 	
    	<Contact refContactProp={contactRef}></Contact>
    	<Footer></Footer>
    </div>

  );
}

export default App;
