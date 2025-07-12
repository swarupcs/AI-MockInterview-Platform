import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Clock, Plus, MessageSquare, Mic, Video } from 'lucide-react';
import { DashboardHeader } from '@/components/Dashboard/dashboardHeader';
import { DashboardNav } from '@/components/Dashboard/DashboardNav';
import { Link } from 'react-router-dom';

export function DashboardPage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <DashboardHeader />

      <div className='flex flex-1'>
        <DashboardNav />

        <main className='flex-1 p-6'>
          <div className='flex items-center justify-between mb-6'>
            <h1 className='text-2xl font-bold'>Dashboard</h1>
            <div className='flex space-x-2'>
              <Link to='/text-interview'>
                <Button className='bg-emerald-600 hover:bg-emerald-700'>
                  <Plus className='mr-2 h-4 w-4' />
                  New Interview
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Start Interview Options */}
          <div className='grid gap-4 md:grid-cols-3 mb-6'>
            <Card className='hover:shadow-md transition-shadow cursor-pointer'>
              <Link to='/text-interview'>
                <CardHeader className='pb-3'>
                  <div className='flex items-center space-x-3'>
                    <div className='h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center'>
                      <MessageSquare className='h-5 w-5 text-blue-600' />
                    </div>
                    <div>
                      <CardTitle className='text-lg'>Text Interview</CardTitle>
                      <CardDescription>Practice with AI chat</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-gray-600'>
                    Perfect for beginners. Chat-based interview practice with
                    instant feedback.
                  </p>
                </CardContent>
              </Link>
            </Card>

            <Card className='hover:shadow-md transition-shadow cursor-pointer opacity-75'>
              <CardHeader className='pb-3'>
                <div className='flex items-center space-x-3'>
                  <div className='h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center'>
                    <Mic className='h-5 w-5 text-orange-600' />
                  </div>
                  <div>
                    <CardTitle className='text-lg'>Voice Interview</CardTitle>
                    <CardDescription>Coming Soon</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-gray-600'>
                  Practice speaking your answers with AI voice interaction.
                </p>
              </CardContent>
            </Card>

            <Card className='hover:shadow-md transition-shadow cursor-pointer opacity-75'>
              <CardHeader className='pb-3'>
                <div className='flex items-center space-x-3'>
                  <div className='h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center'>
                    <Video className='h-5 w-5 text-purple-600' />
                  </div>
                  <div>
                    <CardTitle className='text-lg'>Video Interview</CardTitle>
                    <CardDescription>Coming Soon</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-gray-600'>
                  Full video interview experience with AI avatars.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6'>
            <Card>
              <CardHeader className='pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Total Interviews
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>12</div>
                <p className='text-xs text-gray-500'>+2 from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Average Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>78%</div>
                <p className='text-xs text-gray-500'>+5% from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Practice Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>4.5h</div>
                <p className='text-xs text-gray-500'>+1.2h from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className='pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Improvement Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='flex flex-wrap gap-1'>
                  <Badge variant='outline'>Communication</Badge>
                  <Badge variant='outline'>System Design</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue='recent' className='w-full'>
            <TabsList className='grid w-full grid-cols-3 mb-6'>
              <TabsTrigger value='recent'>Recent Interviews</TabsTrigger>
              <TabsTrigger value='scheduled'>Scheduled</TabsTrigger>
              <TabsTrigger value='progress'>Progress</TabsTrigger>
            </TabsList>

            <TabsContent value='recent'>
              <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                <Card>
                  <CardHeader className='pb-2'>
                    <div className='flex justify-between items-start'>
                      <CardTitle className='text-lg font-medium'>
                        DSA Interview
                      </CardTitle>
                      <Badge>Text</Badge>
                    </div>
                    <CardDescription>May 10, 2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='flex items-center space-x-2 text-sm text-gray-500 mb-2'>
                      <Clock className='h-4 w-4' />
                      <span>30 minutes</span>
                    </div>
                    <div className='flex items-center space-x-2 mb-4'>
                      <div className='h-2 w-full bg-gray-100 rounded-full'>
                        <div className='h-2 w-3/4 bg-emerald-600 rounded-full'></div>
                      </div>
                      <span className='text-sm font-medium'>75%</span>
                    </div>
                    <p className='text-sm'>
                      Binary Tree Traversal, Dynamic Programming
                    </p>
                  </CardContent>
                  <CardFooter className='pt-0'>
                    <Button
                      variant='outline'
                      size='sm'
                      className='w-full bg-transparent'
                    >
                      View Feedback
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className='pb-2'>
                    <div className='flex justify-between items-start'>
                      <CardTitle className='text-lg font-medium'>
                        Behavioral Interview
                      </CardTitle>
                      <Badge>Text</Badge>
                    </div>
                    <CardDescription>May 8, 2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='flex items-center space-x-2 text-sm text-gray-500 mb-2'>
                      <Clock className='h-4 w-4' />
                      <span>45 minutes</span>
                    </div>
                    <div className='flex items-center space-x-2 mb-4'>
                      <div className='h-2 w-full bg-gray-100 rounded-full'>
                        <div className='h-2 w-4/5 bg-emerald-600 rounded-full'></div>
                      </div>
                      <span className='text-sm font-medium'>80%</span>
                    </div>
                    <p className='text-sm'>Leadership, Conflict Resolution</p>
                  </CardContent>
                  <CardFooter className='pt-0'>
                    <Button
                      variant='outline'
                      size='sm'
                      className='w-full bg-transparent'
                    >
                      View Feedback
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className='pb-2'>
                    <div className='flex justify-between items-start'>
                      <CardTitle className='text-lg font-medium'>
                        System Design
                      </CardTitle>
                      <Badge>Text</Badge>
                    </div>
                    <CardDescription>May 5, 2025</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='flex items-center space-x-2 text-sm text-gray-500 mb-2'>
                      <Clock className='h-4 w-4' />
                      <span>60 minutes</span>
                    </div>
                    <div className='flex items-center space-x-2 mb-4'>
                      <div className='h-2 w-full bg-gray-100 rounded-full'>
                        <div className='h-2 w-4/5 bg-emerald-600 rounded-full'></div>
                      </div>
                      <span className='text-sm font-medium'>85%</span>
                    </div>
                    <p className='text-sm'>Distributed Systems, Caching</p>
                  </CardContent>
                  <CardFooter className='pt-0'>
                    <Button
                      variant='outline'
                      size='sm'
                      className='w-full bg-transparent'
                    >
                      View Feedback
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value='scheduled'>
              <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                <Card>
                  <CardHeader className='pb-2'>
                    <div className='flex justify-between items-start'>
                      <CardTitle className='text-lg font-medium'>
                        Frontend Interview
                      </CardTitle>
                      <Badge>Text</Badge>
                    </div>
                    <CardDescription>May 15, 2025 • 2:00 PM</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='flex items-center space-x-2 text-sm text-gray-500 mb-2'>
                      <Clock className='h-4 w-4' />
                      <span>45 minutes</span>
                    </div>
                    <p className='text-sm'>React, JavaScript, CSS</p>
                  </CardContent>
                  <CardFooter className='pt-0 flex space-x-2'>
                    <Button
                      variant='outline'
                      size='sm'
                      className='w-full bg-transparent'
                    >
                      Reschedule
                    </Button>
                    <Link to='/text-interview' className='w-full'>
                      <Button
                        size='sm'
                        className='w-full bg-emerald-600 hover:bg-emerald-700'
                      >
                        Start
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className='pb-2'>
                    <div className='flex justify-between items-start'>
                      <CardTitle className='text-lg font-medium'>
                        Backend Interview
                      </CardTitle>
                      <Badge>Text</Badge>
                    </div>
                    <CardDescription>May 18, 2025 • 10:00 AM</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className='flex items-center space-x-2 text-sm text-gray-500 mb-2'>
                      <Clock className='h-4 w-4' />
                      <span>60 minutes</span>
                    </div>
                    <p className='text-sm'>APIs, Databases, Architecture</p>
                  </CardContent>
                  <CardFooter className='pt-0 flex space-x-2'>
                    <Button
                      variant='outline'
                      size='sm'
                      className='w-full bg-transparent'
                    >
                      Reschedule
                    </Button>
                    <Link to='/text-interview' className='w-full'>
                      <Button
                        size='sm'
                        className='w-full bg-emerald-600 hover:bg-emerald-700'
                      >
                        Start
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value='progress'>
              <Card>
                <CardHeader>
                  <CardTitle>Your Progress</CardTitle>
                  <CardDescription>
                    Track your improvement over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='h-[200px] w-full bg-gray-50 rounded-md flex items-center justify-center'>
                    <p className='text-gray-500'>
                      Progress chart visualization would appear here
                    </p>
                  </div>

                  <div className='mt-6 space-y-4'>
                    <div>
                      <div className='flex items-center justify-between mb-1'>
                        <span className='text-sm font-medium'>
                          Technical Skills
                        </span>
                        <span className='text-sm font-medium'>78%</span>
                      </div>
                      <div className='h-2 w-full bg-gray-100 rounded-full'>
                        <div className='h-2 w-[78%] bg-emerald-600 rounded-full'></div>
                      </div>
                    </div>

                    <div>
                      <div className='flex items-center justify-between mb-1'>
                        <span className='text-sm font-medium'>
                          Communication
                        </span>
                        <span className='text-sm font-medium'>65%</span>
                      </div>
                      <div className='h-2 w-full bg-gray-100 rounded-full'>
                        <div className='h-2 w-[65%] bg-emerald-600 rounded-full'></div>
                      </div>
                    </div>

                    <div>
                      <div className='flex items-center justify-between mb-1'>
                        <span className='text-sm font-medium'>
                          Problem Solving
                        </span>
                        <span className='text-sm font-medium'>82%</span>
                      </div>
                      <div className='h-2 w-full bg-gray-100 rounded-full'>
                        <div className='h-2 w-[82%] bg-emerald-600 rounded-full'></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
