import SideBar from '../Components/SideBar';
import './About.css'

function About() {
    return (
        <>
            <div className="about">
                <SideBar />
                <div className="about_content">
                    <div class="section-left">
                        <img src={ require('../assets/images/profile/photo.jpg') } style={{ width: 300 }}/>
                        <p>
                            Contact me @reirawongg@gmail.com <br></br>
                            for ML/CV projects :D
                        </p>
                    </div>
                    <div class="section-right">
                        <h2>Education</h2>
                        <div class="row">
                            <h5 class="column name">the University of Edinburgh</h5>
                            <h5 class="column loc">UK</h5>
                            <h5 class="column date">2018.09 - 2019.11</h5>
                        </div>
                        <p>M.S. in Stats with Data Science</p>
                        <div class="row">
                            <h5 class="column name">Waseda University</h5>
                            <h5 class="column loc">Tokyo</h5>
                            <h5 class="column date">2022.04 - 2024.03</h5>
                        </div>
                        <p>M.S. in Computer Science 
                                (Research on Computer Vision: <a href="https://esslab.jp/ja/">ess lab</a>)</p>
                        <div class="segment"></div>
                        <h2>Work Experience</h2>
                        <div class="row">
                            <h5 class="column name"><a href="https://corpy.co.jp/">Corpy & Co.</a></h5>
                            <h5 class="column loc">Tokyo</h5>
                            <h5 class="column date">2023.04 - 2024.03</h5>
                        </div>
                        <p>AI Engineer Intern</p>
                        <div class="row">
                            <h5 class="column name"><a href="https://ridge-i.com/">Ridge-i</a></h5>
                            <h5 class="column loc">Tokyo</h5>
                            <h5 class="column date">2023.04 - Present</h5>
                        </div>
                        <p>Incoming Machine Learning Engineer</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;