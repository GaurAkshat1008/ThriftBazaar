import '../Styles/footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
    return (
        <div className='footer'>
            <footer className='footerWrapper'>
                <div className='logo'><span>Thrift</span>Bazaar</div>
                <div className="footer-icon">
                <TwitterIcon className="footer-icon"/>
                <FacebookIcon className="footer-icon"/>
                <InstagramIcon className="footer-icon"/>
                <MailOutlineIcon className="footer-icon"/>
                </div>
                
                {/* <p className="copyright"> Made by <span>Aditya Jadhav</span></p> */}
            </footer>
        </div>
    )
}

export default Footer