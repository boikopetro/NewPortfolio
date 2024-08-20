import './App.scss'
import {Routes, Route, useLocation} from "react-router-dom"
import Particles, { initParticlesEngine } from "@tsparticles/react";
import Home from "./containers/home/home";
import About from "./containers/about/about";
import Contacts from "./containers/contacts/contacts";
import Portfolio from "./containers/portfolio/portfolio";
import Resume from "./containers/resume/resume";
import Skills from "./containers/skills/skills";
import ErrorPage from "./containers/errorPage/errorPage";
import routes from "./common/routes";
import NavBar from "./components/navBar/navBar";
import {useEffect, useMemo, useState} from "react";
import particles from "./utils/particles"
import {loadFull} from "tsparticles";


function App() {
    const [init, setInit] = useState(false);
    const renderParticleInHomePage = useLocation().pathname === "/"

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            await loadFull(engine);
            //await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    /*const particlesLoaded = (container) => {
        console.log(container);
    };*/

    const options = useMemo(
        () => particles,
        [],
    );

  return (
    <div className="App">
        {renderParticleInHomePage && init &&
        <Particles
            id="particles"
            //particlesLoaded={particlesLoaded}
            options={options}
        />
        }

        <NavBar/>
        <div className="App__main-page-content">
            <Routes>
                <Route path={routes.about} element={<About/>}/>
                <Route path={routes.contacts} element={<Contacts/>}/>
                <Route index path={routes.home} element={<Home/>}/>
                <Route path={routes.portfolio} element={<Portfolio/>}/>
                <Route path={routes.resume} element={<Resume/>}/>
                <Route path={routes.skills} element={<Skills/>}/>
                <Route path={routes.error} element={<ErrorPage/>}/>
            </Routes>
        </div>

    </div>
  )
}

export default App
