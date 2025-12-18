import { Link } from "react-router"
import Button from "../../shared/ui/button/Button"
import VideoCard from "../../shared/ui/content/VideoCard"
import Account from "../../shared/ui/icons/Account"
import SearchIcon from "../../shared/ui/icons/SearchIcon"
import YouTubeIcon from "../../shared/ui/icons/YouTubeIcon"
import SearchBar from "../../shared/ui/searchbar/SearchBar"


const Header = () => {
    return (
        <>
        <div className="flex justify-between items-center px-4 bg-gray-950 shadow-2xl" >
            <div><Link to="/" className="p-4 flex justify-between items-center gap2 font-bold text-2xl text-amber-50"><YouTubeIcon className="w-20 h-20 "/>HaramTube</Link></div>
            <div className="flex items-center">
                <SearchBar/>
            </div>
            <div><a><Account className="bg-gray-400 rounded-xl w-15 h-15 "/></a></div>
        </div>
       
        </>
    )
}

export default Header