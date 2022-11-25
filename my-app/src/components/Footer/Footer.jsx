import React from 'react';
import FooterLogo from './FooterLogo';
import FooterMenu from './FooterMenu';
import Copyright from  './Copyright';


const Footer = () => {
	return <div className='footer'>
	<FooterLogo/>
	<FooterMenu/>
	<Copyright/>
</div>
}

export default Footer;