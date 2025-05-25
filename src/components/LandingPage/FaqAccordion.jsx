'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function FaqAccordion() {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>How does the AI interviewer work?</AccordionTrigger>
        <AccordionContent>
          Our AI interviewer uses advanced natural language processing to
          understand your responses and provide realistic interview experiences.
          It adapts to your answers, asks follow-up questions, and provides
          feedback based on industry standards and best practices for your
          target role.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='item-2'>
        <AccordionTrigger>
          What types of interviews can I practice?
        </AccordionTrigger>
        <AccordionContent>
          You can practice technical interviews (coding, system design),
          behavioral interviews, case interviews for consulting roles, product
          management interviews, and general HR interviews. We cover a wide
          range of industries and roles, from software engineering to finance.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='item-3'>
        <AccordionTrigger>
          Do I need special equipment for video interviews?
        </AccordionTrigger>
        <AccordionContent>
          For video interviews, you'll need a computer with a webcam and
          microphone. Most built-in laptop cameras and microphones work well. We
          recommend using a quiet environment with good lighting for the best
          experience.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='item-4'>
        <AccordionTrigger>How accurate is the AI feedback?</AccordionTrigger>
        <AccordionContent>
          Our AI feedback is based on thousands of real interview scenarios and
          industry best practices. While no AI can perfectly replicate human
          judgment, our users report that our feedback closely matches what they
          receive in actual interviews, and has helped them significantly
          improve their performance.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='item-5'>
        <AccordionTrigger>
          Can I cancel my subscription anytime?
        </AccordionTrigger>
        <AccordionContent>
          Yes, you can cancel your subscription at any time. There are no
          long-term commitments or cancellation fees. If you cancel, you'll
          continue to have access to your plan until the end of your current
          billing period.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
