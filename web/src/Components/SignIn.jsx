import '../Styles/signIn.css'

const SignIn = () => {
    return (
        <div className="signupContainer signIn" id="container">
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1 className='form-logo'><span>Thrift</span>Bazaar</h1>
                    <h1>Sign in</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    {/* <a href="#">Forgot your password?</a> */}
                    <button className='signin-btn'>SIGN IN</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Create a new account</p>
                        <a href="../signup">
                            <button  className="signup-btn" id="signUp">SIGN UP</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn