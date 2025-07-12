import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Video } from 'lucide-react';
import { InterviewSetup } from '@/components/TextInterview/InterviewSetup';
import { FeedbackView } from '@/components/TextInterview/FeedbackView';
import { ChatInterface } from '@/components/TextInterview/ChatInterface';

export function TextInterviewPage() {
  const [phase, setPhase] = useState('setup');
  const [config, setConfig] = useState(null);
  const [messages, setMessages] = useState([]);
  const [feedback, setFeedback] = useState(null);

  const handleStartInterview = (interviewConfig) => {
    setConfig(interviewConfig);
    setPhase('interview');
  };

  const handleEndInterview = (interviewFeedback) => {
    setFeedback(interviewFeedback);
    setPhase('feedback');
  };

  const handleRestartInterview = () => {
    setPhase('setup');
    setConfig(null);
    setMessages([]);
    setFeedback(null);
  };

  const handleBackToDashboard = () => {
    window.location.href = '/dashboard';
  };

  return (
    <div className='flex min-h-screen flex-col'>
      {/* Simple Header */}
      <header className='border-b bg-white'>
        <div className='container mx-auto flex h-16 items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Button
              variant='ghost'
              size='sm'
              className='flex items-center gap-2'
              onClick={handleBackToDashboard}
            >
              <ArrowLeft className='h-4 w-4' />
              Back to Dashboard
            </Button>
            <div className='flex items-center gap-2 font-bold text-xl'>
              <Video className='h-6 w-6 text-emerald-600' />
              <span>MockMaster</span>
            </div>
          </div>
          <div className='text-sm text-gray-500'>
            {phase === 'setup' && 'Interview Setup'}
            {phase === 'interview' && config && `${config.type} Interview`}
            {phase === 'feedback' && 'Interview Results'}
          </div>
        </div>
      </header>

      <main className='flex-1 bg-gray-50 flex flex-col items-center justify-center'>
        <div className='w-full max-w-2xl px-4'>
          {phase === 'setup' && (
            <InterviewSetup onStart={handleStartInterview} />
          )}

          {phase === 'interview' && config && (
            <ChatInterface
              config={config}
              messages={messages}
              setMessages={setMessages}
              onEndInterview={handleEndInterview}
            />
          )}

          {phase === 'feedback' && feedback && (
            <FeedbackView
              feedback={feedback}
              onRestart={handleRestartInterview}
            />
          )}
        </div>
      </main>
    </div>
  );
}
