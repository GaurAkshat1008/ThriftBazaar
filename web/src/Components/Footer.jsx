import '../Styles/footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Icon } from '@chakra-ui/react';

const Footer = () => {
    return (
        <div className='footer'>
            <footer className='footerWrapper'>
                <div className='logo'><span>Thrift</span>Bazaar</div>
                <div className="footer-icon">
                    <Icon as={TwitterIcon} className="footer-icon"/>
                    <Icon as={FacebookIcon} className="footer-icon"/>
                    <Icon as={InstagramIcon} className="footer-icon"/>
                    <Icon as={MailOutlineIcon} className="footer-icon"/>
                </div>                
            </footer>
        </div>
    )
}

export default Footer