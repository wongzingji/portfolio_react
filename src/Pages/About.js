import SideBar from '../Components/SideBar';
import './About.css'

function About() {
    return (
        <>
            <div className="about">
                <SideBar />
                <div className="about_content">
                    <div class="column-left">
                        <img src={ require('../assets/images/home/photo.jpg') }/>
                        <p>
                            Contact me @reirawongg@gmail.com <br></br>
                            for ML/CV projects :D
                        </p>
                    </div>
                    <div class="column-right">
                        <h3>Education</h3>
                        <div>
                            <dl>
                            <dt>
                                <span class="name">the University of Edinburgh</span>
                                <span class="date">2018.09 - 2019.11</span>
                            </dt>
                            <dd>
                                <span>M.S. of Stats with Data Science</span>
                            </dd>
                            <dt>
                                <span class="name">Waseda University</span>
                                <span class="date">2022.04 - 2024.03</span>
                            </dt>
                            <dd>M.S. of Computer Science 
                                (Research on Computer Vision: <a href="https://esslab.jp/ja/">ess lab</a>)
                            </dd>
                            </dl>
                        </div>
                        <h3>Work Experience</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;