
import { MdShoppingCart } from "react-icons/md";
import { CiShop } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { MenuWithIcon } from '../common/MenuWithIcon'
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5"
import { FaBox } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { LiaGiftSolid } from "react-icons/lia";
import { IoCardSharp } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { CiHeadphones } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import { IoDownloadOutline } from "react-icons/io5";
const loginMenuDetails = {
  heading: { icon: <IoPersonCircleOutline size={30} />, name: <span className="p-3 ">Login</span> },
  menuItems: [{ icon: <IoPersonCircleOutline size={30} />, itemName: 'Login' },
  { icon: <IoPersonCircleOutline size={30} />, itemName: 'My Profile' },
  { icon: <FaBox />, itemName: 'Orders' },
  { icon: <FaRegHeart />, itemName: 'Wishlist' },
  { icon: <LiaGiftSolid />, itemName: 'Rewards' },
  { icon: <IoCardSharp />, itemName: 'Gift Cards' },
  ]
}
const cornerDotsDetails = {
  heading: { icon: <span className="p-1 flex justify-center items-center"><BsThreeDotsVertical />,</span> },
  menuItems: [{ icon: <FiBell />, itemName: 'Notifications' },
  { icon: <CiHeadphones />, itemName: '24x7 Customer Care' },
  { icon: <CiLocationArrow1 />, itemName: 'Advertisement' },
  { icon: <IoDownloadOutline />, itemName: 'Download App' },
  ]
}
const Navbar: React.FC = () => {
  return (
    <div className="drawer bg-white shadow-md shadow-gray-200">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content flex flex-col ">
        {/* Navbar */}
        <div className="navbar  flex justify-evenly text-xl">
          <div className="flex-none sm:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <h3 className="mx-2  px-2 text-2xl font-bold italic text-blue-600 ">Flipkart</h3>
          <div className="w-[40%] flex max-sm:hidden justify-center items-center">
            <span className="-mr-7 z-10"><FaSearch /></span>
            <input type="text" className='bg-alice-Blue  text-xl outline-none rounded-md w-full pl-10   py-2' placeholder='Search for products,brands and more' />
          </div>
          <div className="flex  items-center gap-6">
            <div>
              <MenuWithIcon position={'dropdown-bottom dropdown-end'} {...loginMenuDetails} />
            </div>
            <div className="flex gap-1 items-center max-sm:hidden">
              <span><MdShoppingCart size={28} /></span>
              <span className=" max-lg:hidden">Cart</span>
            </div>
            <div className="flex gap-1 items-center max-sm:hidden ">
              <span><CiShop size={28} /> </span>
              <span className="whitespace-nowrap max-lg:hidden">Become a seller</span>
            </div>
            <div className="max-sm:hidden">
              <MenuWithIcon position={'dropdown-bottom dropdown-end'} {...cornerDotsDetails} />
            </div>
          </div>

        </div>
        <div className="mx-2    flex sm:hidden justify-center items-center ">
          <span className="-mr-7 z-10"><FaSearch /></span>
          <input type="text" className='bg-alice-Blue w-full  text-xl outline-none rounded-md  pl-10   py-2' placeholder='Search for products,brands and more' />
        </div>
      </div>
      <div className="drawer-side z-30 ">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>

  )
}

export default Navbar
