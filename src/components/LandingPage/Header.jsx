import React from 'react'

import {
  ArrowRight,
  Video,
  Mic,
  FileText,
  CheckCircle,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export const Header = () => {
  return (
    <>
      <header className='border-b sticky top-0 z-50 bg-white'>
        <div className='container flex h-16 items-center justify-between'>
          <div className='flex items-center gap-2 font-bold text-xl'>
            <Video className='h-6 w-6 text-emerald-600' />
            <span>MockMaster</span>
          </div>
          <nav className='hidden md:flex items-center gap-6'>
            <Link
              href='/features'
              className='text-sm font-medium hover:underline'
            >
              Features
            </Link>
            <Link
              href='/pricing'
              className='text-sm font-medium hover:underline'
            >
              Pricing
            </Link>
            <Link href='/about' className='text-sm font-medium hover:underline'>
              About
            </Link>
            <Link href='/login'>
              <Button variant='outline' size='sm'>
                Log in
              </Button>
            </Link>
            <Link to='/signup'>
              <Button size='sm' className='bg-emerald-600 hover:bg-emerald-700'>
                Sign up
              </Button>
            </Link>
          </nav>
          <Button variant='ghost' size='icon' className='md:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='h-6 w-6'
            >
              <line x1='4' x2='20' y1='12' y2='12' />
              <line x1='4' x2='20' y1='6' y2='6' />
              <line x1='4' x2='20' y1='18' y2='18' />
            </svg>
          </Button>
        </div>
      </header>
    </>
  );
}
