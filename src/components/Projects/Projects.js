import './Projects.css';
import { VscGithubInverted } from "react-icons/vsc";
import { FcFolder } from "react-icons/fc";
import { SiJavascript, SiReact, SiAngular } from "react-icons/si";


export const Projects = () => {



  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projetos</h2>

    <div className="container">
        <div className="card">
            <div className="face face1">
                <div className="content">
                <SiJavascript  size="54px" color='white'/>
                    <h3>Matrix</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                    <a href="https://github.com/Treguas/Matrix" target="_blank"><VscGithubInverted /> GitHub</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                <SiReact  size="54px" color='white'/>
                    <h3>Portfólio</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="https://github.com/Treguas/portfolioTreguasReact" target="_blank"><VscGithubInverted /> GitHub</a>
                </div>
            </div>
        </div>
        <div className="card">
            <div class="face face1">
                <div className="content">
                <SiAngular  size="54px" color='white'/>
                  <h3>CRUD</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                    <a href="https://github.com/Treguas/CRUD-Angular" target="_blank"><VscGithubInverted /> GitHub</a>
                </div>
            </div>
        </div>
    </div>


    </section>
  )
}
