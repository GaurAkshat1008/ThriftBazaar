import '../Styles/changePassword.css'

const ChangePassword = () => {
  return (
    <div className='changePassContainer'>
        <form className="changePassForm" action="#">
            <h1>Change Password</h1>
            <input type="email" placeholder="Email" />
            <button className='signin-btn'>SEND</button>
        </form>
    </div>
  )
}

export default ChangePassword