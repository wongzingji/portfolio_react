import SideBar from '../Components/SideBar';
import './Home.css'

function Home() {
    return (
        <>
            <div className="home">
                <SideBar />
                <div className="home_content">
                    <img src={ require('../assets/images/home/photo2.png') }/>
                </div>
            </div>
        </>
    );
}

export default Home;