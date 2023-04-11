import '../Styles/signIn.css'

const SignIn = () => {
    return (
        <div class="signupContainer" id="container">
            <div class="form-container sign-in-container">
                <form action="#">
                    <h1 className='form-logo'><span>Thrift</span>Bazaar</h1>
                    <h1>Sign in</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    {/* <a href="#">Forgot your password?</a> */}
                    <button class='signin-btn'>SIGN IN</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button class="signup-btn" id="signUp">SIGN UP</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn