'use client'


import Image from 'next/image'

import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react'

import headshot from '@/app/Assets/HeadShot.jpg'
import logo from '@/app/Assets/NameLogoBack.png'


const NavbarComponent = () => {


    return (
    <Navbar fluid className='bg-[#cccccc] shadow-lg bg-opacity-50' >
    <Navbar.Brand >
      <Image src={logo} className="mr-2 w-14 lg:w-16 h-auto" alt="Name Logo"/>
      <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">Michael Heckerman</span>
    </Navbar.Brand>
    <div className="flex md:order-2">
      <Dropdown
        arrowIcon={false}
        inline
        label={
          <Image className='w-14 mr-2 lg:w-16 h-auto rounded-full' src={headshot} alt='Head Shot' />
        }
      >
        <Dropdown.Header>
          <span className="block text-sm">Name</span>
          <span className="block truncate text-sm font-medium">Email</span>
        </Dropdown.Header>
        
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse className='md:ml-[-10%] lg:ml-[-7%]'>
      <Navbar.Link href="Dashboard" className='text-xl'>Home</Navbar.Link>
      <Navbar.Link href="CourseSearch" className='text-xl'>Course Search</Navbar.Link>
      <Navbar.Link href="ChatPage" className='text-xl'>Chat</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>



    )
}

export default NavbarComponent