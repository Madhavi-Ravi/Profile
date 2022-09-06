
import ReactDOM from 'react-dom'
import React from 'react';
import { useState } from 'react';
import jellybeat_1 from './images/jellybeat/HomePage_1.png';
import jellybeat_2 from './images/jellybeat/HomePage_2.png';
import jellybeat_5 from './images/jellybeat/Checkout.png';
import jellybeat_3 from './images/jellybeat/Product_Listing_Page.png';
import jellybeat_4 from './images/jellybeat/Product_View_Page.png';
import qatouch from './images/qatouch/qatouch.png';
import mds from './images/MDS/homepage.png';
import productimize from './images/productimize/Productimize.png';
import priceguru_hp from './images/priceguru/Magento_Banner.jpg';
import reactapplication from './images/reactapplication/homepage.png';
import { VscClose } from 'react-icons/vsc';

const ProjectModel = (props) => {
var jellyImageArray = [jellybeat_3];
var mdsImageArray = [mds];
var qatouchImageArray = [qatouch];
var productimizeImageArray = [productimize];
var priceguruImageArray = [priceguru_hp];
var retailImageArray = [reactapplication];

var project={
	p1:{
		id:1,
		title: 'Retail application',
		tech: 'React, Laravel, Rest API, SQL', 
		description: 'Retail billing web application for a local business, application that provides an interface for fast billing and tallying sales.',
		link: '',
		imagecount: 3,
		imagelinks:retailImageArray,
	},
	p2:{
		id:1,
		title: 'Productimize',
		tech: 'React, Javascript ,PHP, Laravel, Bigcommerce, Rest API, SQL',
		description: 'Productimize is a custom configurator made easy! It is the go-to solution for any retailer and eCommerce business owner looking to offer custom products and want to do it fast. Bring in n number of possibilities to your store with customization and play with a lot of graphics, fabrics, colors, and a lot more!',
		link: 'https://productimize.com/',
		imagecount: 3,
		imagelinks:productimizeImageArray,
	},
	p3:{
		id:3,
		title: 'QA Touch(Test Management Tool)',
		tech: 'jQuery, Laravel, SQL' ,
		description: 'QA Touch is a Test Management platform that enables you to handle all your testing processes to deliver high-quality software. Provides the fastest way to map requirements, create test cases, manage test runs, and generate personalized reports.',
		link: 'https://www.qatouch.com/',
		imagecount: 3,
		imagelinks:qatouchImageArray,
	},
	p4:{
		id:4,
		title: 'Jellybeet(B2C Ecommerce Website) ',
		tech: 'Bigcommerce, Javascript, PHP',
		description: 'Jellybeat is a B2C E-Commerce site for our community of pop culture loving, trend setting, kawaii enthusiast.',
		link: 'https://jellybeet.com/',
		imagecount: 3,
		imagelinks:jellyImageArray,
	},
	p5:{
		id:5,
		title: 'MDS HAVC(B2B Ecommerce Website)',
		tech: 'Magento2, Javascript, PHP',
		description: 'B2B website migrated from Magento 1x using Magento2x, which quotes custom fabricated duct board, residential and commercial heating, ventilation, and air conditioning supply/parts houses.',
		link: 'https://mdshvac.com/gripple-2-loop-hanger-10-10-bag/',
		imagecount: 3,
		imagelinks:mdsImageArray,
	},
	p6:{
		id:6,
		title: 'Priceguru(B2B Ecommerce Website)',
		tech: 'Magento2, Javascript, PHP',
		description: 'B2C website bulit using Magento2, In which customers can contribute to the events happening for wellness of the people and community.',
		link: '',
		imagecount: 3,
		imagelinks:priceguruImageArray,
	},
}
var key = "p"+props.no;
console.log(key, project[key]);
  return (
    <React.Fragment>
      <div class="backdrop" onConfrim={props.onConfrim} />
      
        <ModalOverlay 
          title={project[key]['title']}
          tech={project[key]['tech']}
          description={project[key]['description']}
          images={project[key]['imagelinks']}
          link={project[key]['link']}
          imagescount={project[key]['imagescount']}
          onConfirm={props.onConfirm}/>

        
     
    </React.Fragment>
  )
};

const ModalOverlay = (props) => { 
console.log(props.images);
  return (
    <div class="modal">
        <div class="carousel-wrap" >
            <div class="window">
              <div id="carousel"  class="">
              {props.images.map((ImageArray) => (
	                    <img class="slide" src={ImageArray} alt="responsibility"/>
              ))}
              <i class="mdi mdi-chevron-left" id="prev"></i>
              <i class="mdi mdi-chevron-right" id="next"></i>
            </div>
          </div>
         </div>
      <div class="info-box">
        <div class="title bold">{props.title}</div>
          <div class="tag">{props.tech}</div>
            <div class="detail">{props.description}</div>
            <a href={props.link} target="_blank"><div class="button visible">
                <i class="mdi mdi-open-in-new"></i>VIEW SITE
          </div></a>

        <button class="close" id="trigger_close" onClick={props.onConfirm}><VscClose size={30} class="close"/></button>
      </div>      	
    </div>
  );
};

const Backdrop = (props) =>{
  return (<div class="backdrop" onConfrim={props.onClick} />);
};


export default ProjectModel;
