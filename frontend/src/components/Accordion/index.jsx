// FAQ accordion for premium content sections.
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    question: 'How does AI detect posture?',
    answer: 'The platform uses visual analysis to assess alignment, movement quality, and form consistency with real-time guidance.',
  },
  {
    question: 'Is my webcam secure?',
    answer: 'Yes. Your stream is processed locally and never stored unless you explicitly choose to save a session.',
  },
  {
    question: 'Can beginners use it?',
    answer: 'Absolutely. The experience is designed to adapt to your current level and provide guided coaching from day one.',
  },
  {
    question: 'Do I need equipment?',
    answer: 'No. Many routines can be completed with bodyweight movements, and the experience also supports equipment-based plans.',
  },
  {
    question: 'Can I use it on mobile?',
    answer: 'Yes. The interface is built to feel native and fluid across mobile, tablet, and desktop devices.',
  },
];

export default function Accordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {faqs.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question} className="rounded-[1.25rem] border border-white/10 bg-white/8 p-4 backdrop-blur-xl">
            <button onClick={() => setOpen(isOpen ? -1 : index)} className="flex w-full items-center justify-between text-left text-white">
              <span className="text-lg font-medium">{item.question}</span>
              <FiChevronDown className={`transition ${isOpen ? 'rotate-180 text-cyan-300' : ''}`} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                  <p className="pt-3 text-sm leading-7 text-slate-400">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
