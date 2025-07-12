import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  MessageSquare,
  Calendar,
  BarChart,
  Settings,
  LogOut,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function DashboardNav() {
  return (
    <div className='w-64 border-r bg-gray-50/50 h-[calc(100vh-4rem)] hidden md:block'>
      <div className='space-y-4 py-4'>
        <div className='px-4 py-2'>
          <h2 className='text-lg font-semibold'>Navigation</h2>
        </div>
        <nav className='space-y-1 px-2'>
          <Link
            to='/dashboard'
            className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100'
          >
            <LayoutDashboard className='h-5 w-5' />
            <span>Dashboard</span>
          </Link>
          <Link
            to='/text-interview'
            className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100'
          >
            <MessageSquare className='h-5 w-5' />
            <span>Text Interviews</span>
          </Link>
          <Link
            to='/schedule'
            className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100'
          >
            <Calendar className='h-5 w-5' />
            <span>Schedule</span>
          </Link>
          <Link
            to='/analytics'
            className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100'
          >
            <BarChart className='h-5 w-5' />
            <span>Analytics</span>
          </Link>
          <Link
            to='/settings'
            className='flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:bg-gray-100'
          >
            <Settings className='h-5 w-5' />
            <span>Settings</span>
          </Link>
        </nav>
      </div>
      <div className='absolute bottom-4 px-6 w-64'>
        <Button
          variant='ghost'
          className='w-full justify-start text-gray-500 hover:text-gray-900'
        >
          <LogOut className='mr-2 h-4 w-4' />
          <span>Log out</span>
        </Button>
      </div>
    </div>
  );
}
