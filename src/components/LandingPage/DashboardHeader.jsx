import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Bell, Video } from 'lucide-react';

export function DashboardHeader() {
  return (
    <header className='border-b'>
      <div className='flex h-16 items-center px-4'>
        <Link
          href='/dashboard'
          className='flex items-center gap-2 font-bold text-xl'
        >
          <Video className='h-6 w-6 text-emerald-600' />
          <span>MockMaster</span>
        </Link>
        <div className='ml-auto flex items-center space-x-4'>
          <Button variant='ghost' size='icon'>
            <Bell className='h-5 w-5' />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
                <Avatar className='h-8 w-8'>
                  <AvatarImage
                    src='/placeholder.svg?height=32&width=32'
                    alt='User'
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end' forceMount>
              <DropdownMenuLabel className='font-normal'>
                <div className='flex flex-col space-y-1'>
                  <p className='text-sm font-medium leading-none'>John Doe</p>
                  <p className='text-xs leading-none text-gray-500'>
                    john.doe@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href='/profile' className='w-full'>
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href='/settings' className='w-full'>
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href='/billing' className='w-full'>
                  Billing
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href='/logout' className='w-full'>
                  Log out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
