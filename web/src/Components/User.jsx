import '../Styles/user.css'
import EmailIcon from '@mui/icons-material/Email';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ProductCards from './ProductCards';
import { Icon } from '@chakra-ui/react';

const User = () => {
  return (
    <div className='userContainer'>
        <div className="userTop">
            <div className="userImg">
                <img src="/assets/user.jpg" alt="user-profile" />
            </div>
            <div className="userDetails">
                <div className="userName">John Doe</div>
                <div className="userEmail">
                    <Icon as='EmailIcon' className='mailIcon' />
                    user@gmail.com
                </div>
                <div className="userTime">
                    <Icon as='ScheduleIcon' className='timeIcon' />
                    Member Since 14 April 2023
                </div>
            </div>
        </div>
        <div className="userBottom">
            <div className="userItems">
                <div className="userItemsHeader">Posted Ads</div>
                <ProductCards />
            </div>
        </div>
    </div>
  )
}

export default User