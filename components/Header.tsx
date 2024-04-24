import { SignIn, SignInButton, SignOutButton, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ThemeToggler } from './Themetoggler'

function Header() {
  return (
    <header className='flex items-center justify-between'>
        <Link href="/" className='flex items-center space-x-2'>
            <div className='bg-[blue] w-fit'>
                <Image
                 src="https://www.shareicon.net/data/128x128/2015/08/23/89651_dropbox_512x512.png"
                 alt="logo"
                 className="invert"
                 height={50}
                 width={50}  
                />
            </div>
            <h1 className='font-bold text-xl'>
                Dropbox
            </h1>
        </Link>
        <div className='flex items-center px-5 space-x-2 cursor-pointer'>
        <ThemeToggler/>
         <UserButton afterSignOutUrl='/'></UserButton> 
            
        <SignedOut>
            <SignInButton afterSignInUrl='/dashboard' mode="modal">
                <p>Sign in</p>
            </SignInButton>
        </SignedOut>
        </div>
    </header>
  )
}

export default Header