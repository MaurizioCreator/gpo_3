import React from 'react';
import '../Styles/Start.scss';
import background from '../Assets/background.svg';
import Btn from "../Components/UI/Btn/Btn";

const Start = () => {
    return (
        <div className="container">
            <div className="greetings">
                <div className="text">
                    <h1>Welcome to Galera!</h1>
                    <p className="block_1">
                        Мы очень классные! Хочешь работать,
                        тогда ищи работу у нас!
                    </p>
                    <p className="block_2">
                        Мы лучшие на рынке и мы
                        не берём фичи с HeadHunter’a.
                    </p>
                </div>
            </div>
            <div className="auth" style={{backgroundImage: `url(${background})`}}>
                <form action="" className='select_form'>
                    <Btn className={"form__btn"}>
                        Create Account
                    </Btn>
                    <span className="al">Already have an account ?</span>
                    <Btn>
                        Sign in
                    </Btn>
                </form>
            </div>
        </div>
    );
};

export default Start;