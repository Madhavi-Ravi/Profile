
import mypic from './image/mypic.jpg'

function Home(props){

	return(
        <section id="home" class="flex" ref={props.refHomeProp}>
		   <div class="home-wrapper">
             	<div class="title flex">Hi, I am <span>Madhavi Ravi</span></div>
                <div class="flex profile-img">
                        <img src={mypic} alt="picture"/>
                </div>
            	<div class="flex text">
                    <span>Full-Stack Developer.</span>
                </div>         
            </div>
        </section>
	);
}

export default Home;