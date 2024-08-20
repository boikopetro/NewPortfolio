import PageHeaderContent from "../../components/pageHeaderContent/pageHeaderContent";
import {BsInfoCircleFill} from "react-icons/bs"
import {Animate} from "react-simple-animate"
import "./about.scss"
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandJavascript } from "react-icons/tb";



const personalDetails = [
    {
        label: "Name",
        value: "Petro Boiko"
    },
    {
        label: "Address",
        value: "Red Deer, AB, Canada"
    },
    {
        label: "Email",
        value: "boikopetromail@gmail.com"
    },
    {
        label: "Cell phone",
        value: "+18258880462"
    },
]

const jobSummary = "I am a front-end developer with experience in creating SPA. At the present time I have" +
    "participated in the development of several projects. Now I'm improving my skills in this" +
    "direction and expanding them with new technologies. Responsibility and effective" +
    "communication are my strengths."

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText = "About Me"
                icon = {<BsInfoCircleFill size={40}/>}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(-900px)'
                        }}
                        end={{
                            transform: 'translateY(0px)'
                        }}
                    >
                        <h3>Front end developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateY(400px)'
                        }}
                        end={{
                            transform: 'translateX(0px)'
                        }}
                    >
                        <h3 className="personalInfoHeaderText">Personal information</h3>
                        <ul>
                            {personalDetails.map((el ,i)=> (
                                <li key={i}>
                                    <span className="title">{el.label}:</span>
                                    <span className="value">{el.value}</span>
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(600px)'
                        }}
                        end={{
                            transform: 'translateY(0px)'
                        }}
                    >
                        <div className="about__content__servicesWrapper__innerContent">
                            <div>
                                <FaReact size={60} color="var(--yellow-theme-main-color)"/>
                            </div>
                            <div>
                                <SiRedux size={60} color="var(--yellow-theme-main-color)"/>
                            </div>
                            <div>
                                <BiLogoTypescript size={60} color="var(--yellow-theme-main-color)"/>
                            </div>
                            <div>
                                <TbBrandJavascript size={60} color="var(--yellow-theme-main-color)"/>
                            </div>
                        </div>
                    </Animate>
                </div>
            </div>
        </section>
    );
};

export default About;