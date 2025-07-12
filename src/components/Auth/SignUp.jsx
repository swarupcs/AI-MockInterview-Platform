import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';

export function SignUp() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-gray-900'>
            Create your account
          </h2>
          <p className='mt-2 text-sm text-gray-600'>
            Start your interview preparation journey today
          </p>
        </div>

        <Card>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl text-center'>Sign up</CardTitle>
            <CardDescription className='text-center'>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <form className='space-y-4'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='firstName'>First name</Label>
                  <Input
                    id='firstName'
                    name='firstName'
                    type='text'
                    required
                    placeholder='John'
                  />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='lastName'>Last name</Label>
                  <Input
                    id='lastName'
                    name='lastName'
                    type='text'
                    required
                    placeholder='Doe'
                  />
                </div>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='email'>Email address</Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  required
                  placeholder='john@example.com'
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='password'>Password</Label>
                <Input
                  id='password'
                  name='password'
                  type='password'
                  required
                  placeholder='••••••••'
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='confirmPassword'>Confirm password</Label>
                <Input
                  id='confirmPassword'
                  name='confirmPassword'
                  type='password'
                  required
                  placeholder='••••••••'
                />
              </div>

              <div className='flex items-center space-x-2'>
                <Checkbox id='terms' />
                <Label htmlFor='terms' className='text-sm text-gray-600'>
                  I agree to the{' '}
                  <Link href='#' className='text-blue-600 hover:underline'>
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href='#' className='text-blue-600 hover:underline'>
                    Privacy Policy
                  </Link>
                </Label>
              </div>

              <Button
                type='submit'
                className='w-full bg-blue-600 hover:bg-blue-700'
              >
                Create account
              </Button>
            </form>

            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t' />
              </div>
              <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-white px-2 text-gray-500'>
                  Or continue with
                </span>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <Button variant='outline' type='button'>
                <svg className='mr-2 h-4 w-4' viewBox='0 0 24 24'>
                  <path
                    d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                    fill='#4285F4'
                  />
                  <path
                    d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                    fill='#34A853'
                  />
                  <path
                    d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                    fill='#FBBC05'
                  />
                  <path
                    d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                    fill='#EA4335'
                  />
                </svg>
                Google
              </Button>
              <Button variant='outline' type='button'>
                <svg
                  className='mr-2 h-4 w-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                    clipRule='evenodd'
                  />
                </svg>
                GitHub
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className='text-center'>
          <p className='text-sm text-gray-600'>
            Already have an account?{' '}
            <Link
              to='/signin'
              className='text-blue-600 hover:underline font-medium'
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
