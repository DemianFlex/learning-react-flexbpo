import { Link } from "react-router-dom"

const NavigationMenu = ({ setShowMenu }) => {
    return (
        <div>
            <div className="font-bold py-3">
                FlexBPO
            </div>
            <ul>
                <li>
                    <Link
                        to="/"
                        className='text-blue-500 py-3 border-t border-b block'
                        onClick={() => setShowMenu(false)}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/counter"
                        className='text-blue-500 py-3 border-b block'
                        onClick={() => setShowMenu(false)}
                    >
                        Counter
                    </Link>
                </li>
                <li>
                    <Link
                        to="/products"
                        className='text-blue-500 py-3 border-b block'
                        onClick={() => setShowMenu(false)}
                    >
                        Products
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className='text-blue-500 py-3 border-b block'
                        onClick={() => setShowMenu(false)}
                    >
                        About
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu