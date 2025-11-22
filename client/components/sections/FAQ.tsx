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
      answer: "If you have information about a lost item, click on the specific report and use the 'Share a Tip' button. Provide any relevant details or evidence you have. Once your tip leads to a successful recovery, you'll be eligible to claim the reward offered by the item owner."
    },
    {
      question: "Do I need to pay to use Fyndae?",
      answer: "Basic features like browsing reports and sharing tips are free. However, if you're reporting a lost item, you'll need to set a reward amount for the community. Our verification lookup system also requires a small fee to access detailed background checks on individuals and organizations."
    },
    {
      question: "How do I get rewarded?",
      answer: "When your tip or information leads to the successful recovery of a lost item, the item owner will mark your contribution as helpful. You can then claim your reward through our secure payment system. Rewards are processed within 24-48 hours after verification."
    },
    {
      question: "What kind of items can I report?",
      answer: "You can report various lost items including personal belongings (phones, wallets, keys, jewelry), documents (IDs, passports, certificates), electronics, bags, and other valuables. We recommend including clear photos and detailed descriptions to increase the chances of recovery."
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="px-6 md:px-20 py-16 md:py-20">
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
