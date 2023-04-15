import '../Styles/signIn.css';

const SignUp = () => {
    return (
        <div class="signupContainer" id="container">
            <div class="form-container sign-in-container">
                <form action="#">
                    <h1 className='form-logo'><span>Thrift</span>Bazaar</h1>
                    <h1>Sign Up</h1>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    {/* <a href="#">Forgot your password?</a> */}
                    <button class='signin-btn'>SIGN UP</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-right">
                        <h1>Welcome Back!</h1>
                        <p>Sign In to your account</p>
                        <button href="../signin" class="signup-btn" id="signUp">SIGN IN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
