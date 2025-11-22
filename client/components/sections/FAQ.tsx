import { useState } from "react";
import { Plus, X } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "How do I report a lost item?",
      answer: "Simply fill out a short form with details of what you lost (including your full name, number, email, location, description and photos if available) pay the reward amount you offering to our community and submit. Your report will be visible to our community network."
    },
    {
      question: "How do I share a tip?",
      answer: ""
    },
    {
      question: "Do I need to pay to use Fyndae?",
      answer: ""
    },
    {
      question: "How do I get rewarded?",
      answer: ""
    },
    {
      question: "What kind of items can I report?",
      answer: ""
    }
  ];

  return (
    <section className="w-full px-6 md:px-20 py-16 md:py-20 bg-white rounded-3xl">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-4 max-w-3xl px-6 md:px-20">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-black text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-[#21242C] text-center">
            Explore answers about joining the community, submitting leads and recovering lost items securely through Fyndae.
          </p>
        </div>

        <div className="w-full px-6 flex flex-col gap-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="w-full bg-[#F7F7F8] border border-[#B7BECD] rounded-xl">
      <button
        onClick={onToggle}
        className="w-full p-8 md:p-12 flex items-center justify-between gap-7 text-left"
      >
        <h3 className="flex-1 text-xl md:text-2xl font-semibold text-[#100E21] leading-relaxed">
          {question}
        </h3>
        <div className="flex items-center justify-center w-[52px] h-[52px] rounded-2xl bg-[#117465] shrink-0">
          {isOpen ? (
            <X className="w-7 h-7 text-white" strokeWidth={2} />
          ) : (
            <Plus className="w-7 h-7 text-white" strokeWidth={2} />
          )}
        </div>
      </button>
      {isOpen && answer && (
        <div className="px-8 md:px-12 pb-8 md:pb-12">
          <div className="pt-6 border-t border-[#B7BECD]">
            <p className="text-lg text-[#100E21] leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
