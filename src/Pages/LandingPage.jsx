import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Video,
  Mic,
  FileText,
  CheckCircle,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { TestimonialCard } from '@/components/LandingPage/TestimonialCard';
import { PricingCard } from '@/components/LandingPage/PricingCard';
import { FaqAccordion } from '@/components/LandingPage/FaqAccordian';

export function LandingPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='border-b sticky top-0 z-50 bg-white'>
        <div className='container mx-auto flex h-16 items-center justify-between'>
          <div className='flex items-center gap-2 font-bold text-xl'>
            <Video className='h-6 w-6 text-emerald-600' />
            <span>MockMaster</span>
          </div>
          <nav className='hidden md:flex items-center gap-6'>
            <Link
              to='/features'
              className='text-sm font-medium hover:underline'
            >
              Features
            </Link>
            <Link to='/pricing' className='text-sm font-medium hover:underline'>
              Pricing
            </Link>
            <Link to='/about' className='text-sm font-medium hover:underline'>
              About
            </Link>
            <Link to='/signin'>
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

      <main className='flex-1'>
        {/* Hero Section */}
        <section className='py-20 md:py-28 bg-gradient-to-b from-white to-emerald-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 items-center'>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-emerald-100 text-emerald-900'>
                  <span>New: AI Video Interviews</span>
                </div>
                <div className='space-y-2'>
                  <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'>
                    Master Your Interviews with AI-Powered Practice
                  </h1>
                  <p className='text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[600px]'>
                    Practice interviews with our AI-powered platform. Get
                    real-time feedback, improve your skills, and land your dream
                    job with text, voice, and video interview modes.
                  </p>
                </div>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Link to='/dashboard'>
                    <Button className='bg-emerald-600 hover:bg-emerald-700'>
                      Get Started
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Button>
                  </Link>
                  <Link to='/demo'>
                    <Button variant='outline'>Watch Demo</Button>
                  </Link>
                </div>
                <div className='flex items-center space-x-4 text-sm'>
                  <div className='flex items-center'>
                    <CheckCircle className='mr-1 h-3 w-3 text-emerald-600' />
                    <span>No credit card required</span>
                  </div>
                  <div className='flex items-center'>
                    <CheckCircle className='mr-1 h-3 w-3 text-emerald-600' />
                    <span>Free trial available</span>
                  </div>
                </div>
              </div>
              <div className='mx-auto lg:mx-0 relative'>
                <div className='relative h-[400px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-emerald-50 to-teal-100 p-2 shadow-lg'>
                  <image
                    src='/placeholder.svg?height=400&width=600'
                    alt='AI Interview Platform'
                    width={600}
                    height={400}
                    className='rounded-lg object-cover'
                  />
                  <div className='absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-sm'>
                    <div className='flex items-center space-x-2'>
                      <div className='h-8 w-8 rounded-full bg-emerald-600 flex items-center justify-center text-white'>
                        <Video className='h-4 w-4' />
                      </div>
                      <div>
                        <p className='text-sm font-medium'>
                          AI Interview in progress
                        </p>
                        <p className='text-xs text-gray-500'>
                          System Design • Senior SDE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-10'>
              <h2 className='text-3xl font-bold mb-2'>
                Interview in Three Different Modes
              </h2>
              <p className='text-gray-500 max-w-[800px] mx-auto'>
                Choose the interview mode that best suits your preparation needs
                and comfort level
              </p>
            </div>
            <div className='grid gap-8 sm:grid-cols-1 lg:grid-cols-3'>
              <div className='flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow'>
                <div className='h-14 w-14 rounded-full bg-emerald-100 flex items-center justify-center mb-4'>
                  <FileText className='h-7 w-7 text-emerald-600' />
                </div>
                <h3 className='text-xl font-medium mb-2'>
                  Text-Based Interviews
                </h3>
                <p className='text-gray-500 mb-4'>
                  Perfect for beginners. Practice with AI interviewers through a
                  familiar chat interface. Type your responses and receive
                  instant feedback.
                </p>
                <ul className='text-sm text-left space-y-2 mb-6 w-full'>
                  <li className='flex items-start'>
                    <CheckCircle className='mr-2 h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0' />
                    <span>
                      Structured interview questions tailored to your role
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='mr-2 h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0' />
                    <span>Real-time feedback on your written responses</span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='mr-2 h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0' />
                    <span>Practice technical and behavioral questions</span>
                  </li>
                </ul>
                <Link to='/demo/text' className='mt-auto'>
                  <Button variant='outline' className='w-full'>
                    Try Text Interview
                  </Button>
                </Link>
              </div>

              <div className='flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow'>
                <div className='h-14 w-14 rounded-full bg-emerald-100 flex items-center justify-center mb-4'>
                  <Mic className='h-7 w-7 text-emerald-600' />
                </div>
                <h3 className='text-xl font-medium mb-2'>
                  Voice-Based Interviews
                </h3>
                <p className='text-gray-500 mb-4'>
                  Step up your practice. Speak your answers naturally and hear
                  AI interviewer responses. Great for improving verbal
                  communication.
                </p>
                <ul className='text-sm text-left space-y-2 mb-6 w-full'>
                  <li className='flex items-start'>
                    <CheckCircle className='mr-2 h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0' />
                    <span>
                      Natural voice conversations with AI interviewers
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='mr-2 h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0' />
                    <span>Analysis of tone, pace, and verbal clarity</span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='mr-2 h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0' />
                    <span>Transcripts and feedback on your responses</span>
                  </li>
                </ul>
                <Link to='/demo/voice' className='mt-auto'>
                  <Button variant='outline' className='w-full'>
                    Try Voice Interview
                  </Button>
                </Link>
              </div>

              <div className='flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md border border-emerald-100 hover:shadow-lg transition-shadow relative'>
                <div className='absolute top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full'>
                  PREMIUM
                </div>
                <div className='h-14 w-14 rounded-full bg-emerald-100 flex items-center justify-center mb-4'>
                  <Video className='h-7 w-7 text-emerald-600' />
                </div>
                <h3 className='text-xl font-medium mb-2'>
                  Video-Based Interviews
                </h3>
                <p className='text-gray-500 mb-4'>
                  The most realistic experience. Face-to-face interviews with AI
                  avatars. Perfect for mastering body language and presentation.
                </p>
                <ul className='text-sm text-left space-y-2 mb-6 w-full'>
                  <li className='flex items-start'>
                    <CheckCircle className='mr-2 h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0' />
                    <span>Realistic video interviews with AI avatars</span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='mr-2 h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0' />
                    <span>Body language and facial expression analysis</span>
                  </li>
                  <li className='flex items-start'>
                    <CheckCircle className='mr-2 h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0' />
                    <span>Complete interview recording and review</span>
                  </li>
                </ul>
                <Link to='/demo/video' className='mt-auto'>
                  <Button className='w-full bg-emerald-600 hover:bg-emerald-700'>
                    Try Video Interview
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-10'>
              <h2 className='text-3xl font-bold mb-2'>How It Works</h2>
              <p className='text-gray-500 max-w-[800px] mx-auto'>
                Our platform makes interview preparation simple, effective, and
                tailored to your needs
              </p>
            </div>

            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
              <div className='relative'>
                <div className='absolute top-0 left-6 bottom-0 border-l-2 border-dashed border-gray-200 hidden md:block'></div>
                <div className='relative z-10 flex flex-col items-center text-center'>
                  <div className='h-12 w-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-4'>
                    1
                  </div>
                  <h3 className='text-lg font-medium mb-2'>
                    Create Your Profile
                  </h3>
                  <p className='text-gray-500'>
                    Sign up and tell us about your target roles, skills, and
                    interview preferences
                  </p>
                </div>
              </div>

              <div className='relative'>
                <div className='absolute top-0 left-6 bottom-0 border-l-2 border-dashed border-gray-200 hidden md:block'></div>
                <div className='relative z-10 flex flex-col items-center text-center'>
                  <div className='h-12 w-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-4'>
                    2
                  </div>
                  <h3 className='text-lg font-medium mb-2'>
                    Choose Interview Type
                  </h3>
                  <p className='text-gray-500'>
                    Select from text, voice, or video interviews based on your
                    comfort level and goals
                  </p>
                </div>
              </div>

              <div className='relative'>
                <div className='absolute top-0 left-6 bottom-0 border-l-2 border-dashed border-gray-200 hidden md:block'></div>
                <div className='relative z-10 flex flex-col items-center text-center'>
                  <div className='h-12 w-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-4'>
                    3
                  </div>
                  <h3 className='text-lg font-medium mb-2'>Practice with AI</h3>
                  <p className='text-gray-500'>
                    Engage with our AI interviewers who adapt to your responses
                    and skill level
                  </p>
                </div>
              </div>

              <div className='relative'>
                <div className='relative z-10 flex flex-col items-center text-center'>
                  <div className='h-12 w-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mb-4'>
                    4
                  </div>
                  <h3 className='text-lg font-medium mb-2'>
                    Get Detailed Feedback
                  </h3>
                  <p className='text-gray-500'>
                    Receive personalized analysis and actionable tips to improve
                    your interview skills
                  </p>
                </div>
              </div>
            </div>

            <div className='mt-12 text-center'>
              <Link to='/how-it-works'>
                <Button variant='outline' className='group'>
                  Learn more about our process
                  <ChevronRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-10'>
              <h2 className='text-3xl font-bold mb-2'>What Our Users Say</h2>
              <p className='text-gray-500 max-w-[800px] mx-auto'>
                Thousands of job seekers have improved their interview skills
                with MockMaster
              </p>
            </div>

            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              <TestimonialCard
                name='Sarah Johnson'
                role='Software Engineer at Google'
                image='/placeholder.svg?height=80&width=80'
                rating={5}
                quote='The video interview practice was incredibly realistic. I felt much more confident in my actual interviews after practicing with MockMaster.'
              />

              <TestimonialCard
                name='Michael Chen'
                role='Product Manager at Meta'
                image='/placeholder.svg?height=80&width=80'
                rating={5}
                quote='The AI feedback on my communication style was eye-opening. I improved significantly and landed my dream job after just two weeks of practice.'
              />

              <TestimonialCard
                name='Priya Patel'
                role='Data Scientist at Amazon'
                image='/placeholder.svg?height=80&width=80'
                rating={4}
                quote='The technical interview simulations were spot-on. The AI asked me questions that were very similar to what I faced in my actual interviews.'
              />
            </div>

            <div className='mt-12 text-center'>
              <div className='inline-flex items-center justify-center space-x-2 bg-gray-50 rounded-full px-4 py-2'>
                <div className='flex -space-x-2'>
                  <div className='h-8 w-8 rounded-full bg-gray-200'></div>
                  <div className='h-8 w-8 rounded-full bg-gray-300'></div>
                  <div className='h-8 w-8 rounded-full bg-gray-400'></div>
                </div>
                <span className='text-sm font-medium'>
                  Trusted by{' '}
                  <span className='text-emerald-600 font-bold'>10,000+</span>{' '}
                  job seekers
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className='py-16 bg-gray-50'>
          <div className='container mx-auto px-4 md:px-6'>
            <div className='text-center mb-10'>
              <h2 className='text-3xl font-bold mb-2'>
                Simple, Transparent Pricing
              </h2>
              <p className='text-gray-500 max-w-[800px] mx-auto'>
                Choose the plan that fits your interview preparation needs
              </p>
            </div>

            <div className='grid gap-8 md:grid-cols-3'>
              <PricingCard
                title='Basic'
                price='Free'
                description='Perfect for beginners'
                features={[
                  'Text-based interviews',
                  '5 practice interviews per month',
                  'Basic feedback and analysis',
                  'Limited question library',
                ]}
                buttonText='Get Started'
                buttonVariant='outline'
                popular={false}
              />

              <PricingCard
                title='Pro'
                price='$19'
                period='per month'
                description='Most popular for job seekers'
                features={[
                  'Text and voice interviews',
                  'Unlimited practice interviews',
                  'Detailed feedback and analysis',
                  'Full question library',
                  'Interview recordings',
                  'Progress tracking',
                ]}
                buttonText='Start Free Trial'
                buttonVariant='default'
                popular={true}
              />

              <PricingCard
                title='Premium'
                price='$39'
                period='per month'
                description='For serious candidates'
                features={[
                  'Text, voice, and video interviews',
                  'Unlimited practice interviews',
                  'Advanced AI feedback',
                  'Body language analysis',
                  'Custom interview scenarios',
                  'Priority support',
                  'Resume review',
                ]}
                buttonText='Start Free Trial'
                buttonVariant='outline'
                popular={false}
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className='py-16 bg-white'>
          <div className='container mx-auto px-4 md:px-6 max-w-4xl'>
            <div className='text-center mb-10'>
              <h2 className='text-3xl font-bold mb-2'>
                Frequently Asked Questions
              </h2>
              <p className='text-gray-500'>
                Everything you need to know about MockMaster
              </p>
            </div>

            <FaqAccordion />

            <div className='mt-12 text-center'>
              <p className='text-gray-500 mb-4'>Still have questions?</p>
              <Link to='/contact'>
                <Button variant='outline'>Contact Support</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-16 bg-emerald-600 text-white'>
          <div className='container mx-auto px-4 md:px-6 text-center'>
            <h2 className='text-3xl font-bold mb-4'>
              Ready to Ace Your Next Interview?
            </h2>
            <p className='text-emerald-100 mb-8 max-w-[600px] mx-auto'>
              Join thousands of successful job seekers who have improved their
              interview skills with MockMaster.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link to='/signup'>
                <Button className='bg-white text-emerald-600 hover:bg-emerald-50'>
                  Get Started for Free
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Button>
              </Link>
              <Link to='/demo'>
                <Button className='bg-white text-emerald-600 hover:bg-emerald-50'>
                  Watch Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className='border-t py-8 bg-gray-50'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <div>
              <div className='flex items-center gap-2 font-bold text-xl mb-4'>
                <Video className='h-6 w-6 text-emerald-600' />
                <span>MockMaster</span>
              </div>
              <p className='text-sm text-gray-500 mb-4'>
                AI-powered interview practice platform to help you land your
                dream job.
              </p>
              <div className='flex space-x-4'>
                <a href='#' className='text-gray-400 hover:text-gray-500'>
                  <span className='sr-only'>Twitter</span>
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
                    className='h-5 w-5'
                  >
                    <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
                  </svg>
                </a>
                <a href='#' className='text-gray-400 hover:text-gray-500'>
                  <span className='sr-only'>LinkedIn</span>
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
                    className='h-5 w-5'
                  >
                    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                    <rect width='4' height='12' x='2' y='9' />
                    <circle cx='4' cy='4' r='2' />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className='text-sm font-medium mb-4'>Product</h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link
                    to='/features'
                    className='text-gray-500 hover:text-gray-900'
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to='/pricing'
                    className='text-gray-500 hover:text-gray-900'
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to='/testimonials'
                    className='text-gray-500 hover:text-gray-900'
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to='/faq' className='text-gray-500 hover:text-gray-900'>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-sm font-medium mb-4'>Company</h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link
                    to='/about'
                    className='text-gray-500 hover:text-gray-900'
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to='/blog'
                    className='text-gray-500 hover:text-gray-900'
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to='/careers'
                    className='text-gray-500 hover:text-gray-900'
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to='/contact'
                    className='text-gray-500 hover:text-gray-900'
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-sm font-medium mb-4'>Legal</h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <Link
                    to='/terms'
                    className='text-gray-500 hover:text-gray-900'
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    to='/privacy'
                    className='text-gray-500 hover:text-gray-900'
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    to='/cookies'
                    className='text-gray-500 hover:text-gray-900'
                  >
                    Cookies
                  </Link>
                </li>
                <li>
                  <Link
                    to='/licenses'
                    className='text-gray-500 hover:text-gray-900'
                  >
                    Licenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center'>
            <p className='text-xs text-gray-500'>
              © 2025 MockMaster. All rights reserved.
            </p>
            <div className='flex space-x-4 mt-4 md:mt-0'>
              <Link
                to='/terms'
                className='text-xs text-gray-500 hover:text-gray-900'
              >
                Terms
              </Link>
              <Link
                to='/privacy'
                className='text-xs text-gray-500 hover:text-gray-900'
              >
                Privacy
              </Link>
              <Link
                to='/cookies'
                className='text-xs text-gray-500 hover:text-gray-900'
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
