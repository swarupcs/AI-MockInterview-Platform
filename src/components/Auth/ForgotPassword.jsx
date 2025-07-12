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
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export  function ForgotPassword() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold text-gray-900'>
            Forgot your password?
          </h2>
          <p className='mt-2 text-sm text-gray-600'>
            No worries, we'll send you reset instructions
          </p>
        </div>

        <Card>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl text-center'>
              Reset password
            </CardTitle>
            <CardDescription className='text-center'>
              Enter your email address and we'll send you a link to reset your
              password
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <form className='space-y-4'>
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

              <Button
                type='submit'
                className='w-full bg-blue-600 hover:bg-blue-700'
              >
                Send reset instructions
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className='text-center'>
          <Link
            to='/signin'
            className='inline-flex items-center text-sm text-blue-600 hover:underline font-medium'
          >
            <ArrowLeft className='mr-2 h-4 w-4' />
            Back to sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
