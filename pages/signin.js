import MyLayout from '../components/MyLayout';

const SignIn = () => {
    return (
        <MyLayout>
            <div>
                <p>Sign in</p>
                <button>
                    <a href='https://www.strava.com/oauth/authorize?client_id=40487&response_type=code&redirect_uri=http://localhost:3000&approval_prompt=force'>
                    Sign in with Strava
                    </a>
                </button>
            </div>
        </MyLayout>
    )
}

export default SignIn;