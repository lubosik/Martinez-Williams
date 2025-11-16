"use client";

import { useState } from "react";
import PhoneCTA from "./PhoneCTA";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does it cost to hire you?",
      answer: "Nothing upfront. We work on a contingency fee basis, which means you pay nothing unless we win your case. If we don't secure a settlement or verdict in your favor, you owe us nothing. Our fee is a percentage of the settlement we recover for you, so we're only successful when you are.",
    },
    {
      question: "How long will my case take?",
      answer: "Every case is different, but most car accident cases settle within 6-12 months. Complex cases or those that go to trial may take longer. We'll keep you informed throughout the process and work as efficiently as possible while ensuring we don't settle for less than you deserve. The timeline depends on factors like the severity of your injuries, the complexity of the case, and the insurance company's responsiveness.",
    },
    {
      question: "What if the accident was partially my fault?",
      answer: "California follows a comparative negligence rule, which means you can still recover compensation even if you were partially at fault. Your settlement will be reduced by your percentage of fault. For example, if you were 20% at fault and your damages are $100,000, you could still recover $80,000. We'll fight to minimize any fault assigned to you and maximize your recovery.",
    },
    {
      question: "How much is my case worth?",
      answer: "Case value depends on many factors including medical expenses, lost wages, pain and suffering, property damage, and the impact on your daily life. We'll evaluate all aspects of your case during your free consultation and give you an honest assessment. We've secured settlements ranging from thousands to millions of dollars – the key is having experienced attorneys who know how to properly value and present your case.",
    },
    {
      question: "Do I really need a lawyer for my car accident?",
      answer: "While you're not legally required to have a lawyer, statistics show that accident victims with legal representation receive significantly higher settlements than those who handle claims themselves. Insurance companies have teams of adjusters and lawyers working to minimize payouts. Having an experienced attorney levels the playing field and ensures you receive the full compensation you're entitled to. Plus, we handle all the complex paperwork and negotiations so you can focus on recovery.",
    },
    {
      question: "What should I do immediately after an accident?",
      answer: "First, ensure your safety and call 911 if anyone is injured. Exchange information with the other driver (name, contact, insurance, license plate). Take photos of the scene, vehicles, and any visible injuries. Get contact information from witnesses. Seek medical attention immediately, even if you don't feel hurt – some injuries appear later. Don't admit fault or discuss the accident with the other driver's insurance company. Then call us for a free consultation as soon as possible.",
    },
    {
      question: "How do I pay my medical bills while my case is pending?",
      answer: "This is a common concern. We can help you find medical providers who will treat you on a lien basis, meaning they'll wait to be paid until your case settles. We can also negotiate with your health insurance to cover treatment, and they'll be reimbursed from your settlement. In some cases, we can negotiate with medical providers to reduce bills. We'll work with you to find solutions so you can get the treatment you need without financial stress.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-neutral-lightest">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-darkest mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-neutral-medium max-w-3xl mx-auto">
            Get answers to common questions about car accident cases and working with our firm
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-200 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg md:text-xl font-heading font-semibold text-neutral-darkest pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`flex-shrink-0 w-6 h-6 text-primary transition-transform duration-300 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 md:px-8 md:pb-6 pt-0">
                  <p className="text-neutral-dark leading-relaxed text-base md:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA After FAQ */}
        <div className="mt-12 md:mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-neutral-darkest mb-4">
            Still have questions?
          </h3>
          <p className="text-lg md:text-xl text-neutral-medium mb-6">
            Call us now for immediate answers
          </p>
          <PhoneCTA variant="large" location="faq_section" />
        </div>
      </div>
    </section>
  );
}

