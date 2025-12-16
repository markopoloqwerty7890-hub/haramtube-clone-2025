import Button from "../../shared/ui/button/Button"
import Account from "../../shared/ui/icons/Account"
import SearchIcon from "../../shared/ui/icons/SearchIcon"
import YouTubeIcon from "../../shared/ui/icons/YouTubeIcon"

const Header = () => {
    return (
        <div className="flex justify-between items-center px-4">
            <div><a className="p-4 flex justify-between items-center gap2 font-bold text-2xl"><YouTubeIcon className="w-20 h-20 hover:bg-red-600 "/>YouTube</a></div>
            <div className="flex items-center">
                <input 
                placeholder="Search"
                className="outline-none w-150 h-18 shadow-xl/30 rounded-l-lg bg-neutral-500  "  />
                <Button className="rounded-l-none shadow-xl/30 hover:bg-neutral-400 hover:shadow-indigo-500/50 ">
                    <SearchIcon/>
                </Button>
            </div>
            <div><a><Account/></a></div>
        </div>
    )
}

export default Header