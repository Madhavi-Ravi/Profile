
import mypic from './image/mypic.jpg'

function Home(props){

	return(
        <section id="home" className="flex" ref={props.refHomeProp}>
		   <div className="home-wrapper">
             	<div className="title flex">Hi, I am <span>Madhavi Ravi</span></div>
                <div className="flex profile-img">
                        <img src={mypic} alt="picture"/>
                </div>
            	<div className="flex text">
                    <span>Full-Stack Developer.</span>
                </div>         
            </div>
        </section>
	);
}

export default Home;