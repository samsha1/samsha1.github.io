import React from 'react';
import  './styles.scss';
class AboutPage extends React.Component{
	render(){
		return(
				<div className="container-fluid about-page">
					<div className="content-grid">
						<h1 className="aboutTitle">ABOUT</h1>
						<div className="about-wrapper">
							<div className="row">
								<div className="col-md-5">
									<div className="my-image img-responsive center-block">
										
									</div>
									<div className="typing-Animation">
										<h2>I can't quit Learning!<span>|</span></h2>
									</div>
								</div>
								<div className="col-md-7">
									<div className="about-content">
										<p> Under Construction!</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			)
	}

}

export default AboutPage;
