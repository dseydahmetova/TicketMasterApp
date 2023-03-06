import SignUpForm from '../components/SignUpForm'

function SignPage() {
    return (
        <div className='Signform'>
            <div className='signLeftContent'>
                <img className="signImg" src={require('../components/signImg.JPG')} alt='event img' />
                <div className='imgText'>
                    <h1>Welcome Back</h1>
                    <p>Discover millions of events, get alerts about your favorite artists, teams, plays and more — plus always- secure, effortless ticketing.
                    </p>
                </div>
            </div>
            <div className="form-body">
                <h2>Sign In</h2>
                <p>New to EventMaster? </p>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Sign Up</button>
                <div className="email">
                    <label className="form__label" htmlFor="e-mail">Email </label>
                    <input type="email" id="e-mail" className="form__input" placeholder="Email" />
                </div>
                <div className="password">
                    <label className="form__label" htmlFor="pass">Password </label>
                    <input className="form__input" type="password" id="pass" placeholder="Password" />
                </div>
                <div className="signBtn">
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <SignUpForm />
                </div>
            </div>
        </div>
    )
}

export default SignPage
