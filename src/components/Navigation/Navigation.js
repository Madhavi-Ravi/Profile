function Navigation() {
	// body...
	return(
		<nav class="flex link-wrap desk">
          <div class="page-link active" dest="home">Home</div>
          <div class="page-link" dest="about">About</div>
          <div class="page-link" dest="techstack">Tech Stack</div>
          <div class="page-link" dest="portfolio">portfolio</div>
          <div class="page-link" dest="blog">blog</div>
          <div class="page-link" dest="contact">contact</div>
        <i class="mdi mdi-menu"></i>
      </nav>

		)
}

export default Navigation;