import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'
import myconLogo from '../images/mycon-logo.png'

export default function Header () {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='flex items-center space-x-2 whitespace-nowrap text-sm sm:text-xl front-semibold dark:text-white'>
            <img src={myconLogo} alt="Mycon Logo"  height="60px" width="60px" />
            E Commerce
        </Link>
        <form>
            <TextInput 
                type='text'
                placeholder='Search...'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
            />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <AiOutlineSearch />
        </Button>
        <div className='flex gap-2 md:order-2'>
            <button className='w-12 h-10 hidden sm:inline' color='gray' pill>
                <FaMoon />
            </button>
            <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>            
            <Navbar.Toggle />          
        </div>
        <Navbar.Collapse>
                <Navbar.Link active={path === "/"} as={'div'}>
                    <Link to='/'>
                         Home
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/about"} as={'div'}>
                    <Link to='/about'>
                         About
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/products"} as={'div'}>
                    <Link to='/products'>
                         Products
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>
    </Navbar>

  )
}
