import { Link } from "react-router-dom";
import Card from "../Components/Card";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import './Journals.css'

const menuItems = [
    {
        name: 'Cities',
        to: '/portfolio_react/journals/cities'
    },
]

const Journals = ({journalItems}) => {
    // const [journals, setJournals] = useState([]);

    return (
        <>
        <div className="journals">
            <SideBar />
            <NavBar menuItems={ menuItems }/>
            <div className="journals_content">
                {/* <p style={{height:'50px'}}>去远方是为了不再被远方诱惑。</p> */}
                    
                {
                    journalItems.map((item) => (
                        <Link className="journals_content_item">
                            {Card(item.title, item.url, item.desc)}
                        </Link>
                    ))
                }          
            </div>
        </div>
        </>
    );
};

export default Journals;