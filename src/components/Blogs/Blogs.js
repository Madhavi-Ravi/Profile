function Blogs(props){
  return(
  <section className="flex" id="blog" ref={props.refBlogsProp}>
        <div className="flex header">
          Blogs
        </div>
        <div className="flex header-bar"></div>
        <div id="blogs" className="container flex wrap animated">
          <div className="mix products">          
            <a href="https://productimize.com/blog/how-to-integrate-productimize-with-bigcommerce/" target="_blank">
              <div className="flex">
                <div className="card"></div>
                <div className="blog-title">
                  <div className="bold">Integrating Productimize</div>
                  <span className="highlight"></span>
                </div>
              </div>
            </a>
          </div>

          <div className="mix products">
            <a href="https://productimize.com/blog/providing-sleek-experience-to-printing-and-gift-card-industry/" target="_blank">              <div className="flex">
              <div className="card"></div>
                <div className="blog-title">
                  <div className="bold">Sleek experience with Productimize</div>
                  <span className="highlight"></span>
                </div>
              </div>
            </a>
          </div>

          <div className="mix products">
            <a href="https://productimize.com/portfolio/old-spice/" target="_blank">
             <div className="flex">
                <div className="card"></div>
                <div className="blog-title">
                  <div className="bold">Empowering with Customization</div>
                  <span className="highlight"></span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
  
   )
}

export default Blogs;
