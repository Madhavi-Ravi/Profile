function Navigation() {
	// body...
	return(
		<nav className="flex link-wrap desk">
          <div className="page-link active" dest="home">Home</div>
          <div className="page-link" dest="about">About</div>
          <div className="page-link" dest="techstack">Tech Stack</div>
          <div className="page-link" dest="portfolio">portfolio</div>
          <div className="page-link" dest="blog">blog</div>
          <div className="page-link" dest="contact">contact</div>
        <i className="mdi mdi-menu"></i>
      </nav>

		)
}

export default Navigation;