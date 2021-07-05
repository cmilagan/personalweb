import "./projects.scss"

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <h1>PROJECTS</h1>
            <ul>
                <li className="active">StimPact</li>
                <li>Flockr</li>
                <li>Portfolio</li>
                <li>LoopMania</li>
                <li>MFB-Design</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://memegenerator.net/img/instances/68736462.jpg" alt="" />
                    <h3>Awesome website</h3>
                </div>
            </div>
        </div>
    )
}
