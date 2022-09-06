function Blogs(props){
  return(
  <section class="flex" id="blog" ref={props.refBlogsProp}>
        <div class="flex header waypoint animated slide-in-right" data-animation="slide-in-right">
          Blogs
        </div>
        <div class="flex header-bar waypoint animated slide-in-right" data-animation="slide-in-right" data-delay=".3s"></div>
        <div id="blogs" class="container flex wrap animated">
          <div class="mix products" data-my-order="1" data-bound="">          
            <a href="https://productimize.com/blog/how-to-integrate-productimize-with-bigcommerce/">
              <div class="flex">
                <div class="card"></div>
                <div class="blog-title">
                  <div class="bold">Integrating Productimize</div>
                  <span class="highlight"></span>
                </div>
              </div>
            </a>
          </div>

          <div class="mix products" data-my-order="1" data-bound="">
            <a href="https://productimize.com/blog/providing-sleek-experience-to-printing-and-gift-card-industry/">              <div class="flex">
              <div class="card"></div>
                <div class="blog-title">
                  <div class="bold">Sleek experience with Productimize</div>
                  <span class="highlight"></span>
                </div>
              </div>
            </a>
          </div>

          <div class="mix products" data-my-order="1" data-bound="">
            <a href="https://productimize.com/portfolio/old-spice/">
             <div class="flex">
                <div class="card"></div>
                <div class="blog-title">
                  <div class="bold">Empowering with Customization</div>
                  <span class="highlight"></span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
  
   )
}

export default Blogs;
