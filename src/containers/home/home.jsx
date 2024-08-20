import "./home.scss"
import {useNavigate} from "react-router-dom";
import {Animate} from "react-simple-animate"


const Home = () => {
    const navigate = useNavigate()
    const handleNavigateToContactMe = () => {
        navigate('/contacts')
    }
    return (
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <div>Hello, I'm Petro Boiko</div>
                    <div>Front end developer</div>
                </h1>
            </div>
            <Animate
            play
            duration={1.5}
            delay={1}
            start={{
                transform: 'translateY(550px)'
            }}
            end={{
                transform: 'translateY(0px)'
            }}
            >
                <div className="home__contact-me">
                    <button onClick={handleNavigateToContactMe}>Hire Me</button>
                </div>
            </Animate>
        </section>
    );
};

export default Home;