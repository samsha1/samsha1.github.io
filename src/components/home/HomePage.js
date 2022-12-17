import React from 'react';
import './styles.scss';
import Button from '@material-ui/core/Button';
import SocialIcons from './SocialIcons';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
class HomePage extends React.Component{

	render(){
		return(
				<div className="intro-wrapper">
					<div className="intro-name">Hello, I'm Samrat!</div>
					<div className="tagline">System Designs | Distributed System | MIcroservices | Books | Football</div>
					<SocialIcons/>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://pdfhost.io/v/3YbsMfG5V_oct26resume"
						style={{ textDecoration: 'none' }}
          			>
					<Button variant="contained" size="large" color="primary">Get CV &nbsp; <CloudDownloadOutlinedIcon fontSize='small'/> </Button>
					</a>
				</div>

			)
	}

}


export default HomePage;