import '../Styles/forgotPassword.css'

const ForgotPassword = () => {
  return (
    <div className='forgotPassContainer'>
        <form className="forgotPassForm" action="#">
            <h1>Forgot Password</h1>
            <input type="email" placeholder="Email" />
            <button className='signin-btn'>SEND</button>
        </form>
    </div>
  )
}

export default ForgotPassword