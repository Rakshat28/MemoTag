// pages/faq.tsx
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { PlusCircle } from 'lucide-react';

// Define the FAQ item type
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// Sample FAQ data
const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How does MemoTag work?",
    answer: "MemoTag works by using advanced memory enhancement technology to help individuals with cognitive challenges. It provides personalized reminders, stores important information, and offers cognitive support through an easy-to-use interface designed specifically for dementia and elder care."
  },
  {
    id: 2,
    question: "How & Who can use MemoTag?",
    answer: "MemoTag is designed for individuals experiencing memory issues, particularly those with early to mid-stage dementia, as well as their caregivers and family members. The platform is accessible to users of all technical abilities with a simple, intuitive interface that requires minimal training."
  },
  {
    id: 3,
    question: "Is my data secure and private?",
    answer: "Yes, your data is secure and private with MemoTag. We implement end-to-end encryption, comply with healthcare privacy regulations, and never share your personal information with third parties. Your sensitive health and personal data remains confidential and protected at all times."
  },
  {
    id: 4,
    question: "What is cognitive analysis, and how can it help?",
    answer: "Cognitive analysis is our process of monitoring memory patterns and cognitive function over time. MemoTag tracks interactions to identify areas where additional support may be beneficial, helping caregivers provide more targeted assistance and enabling early intervention when cognitive changes occur."
  },
  {
    id: 5,
    question: "How much does MemoTag cost?",
    answer: "MemoTag offers several subscription tiers to meet different needs and budgets. Our basic plan starts at $19.99 monthly, while our comprehensive care plan is $39.99 monthly. All plans include core features, with premium options offering additional support tools and priority customer service."
  }
];

const FaqSection = () => {
  // State to track which FAQ item is expanded
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  // State to track visible elements
  const [headerVisible, setHeaderVisible] = useState(false);
  const [visibleFaqs, setVisibleFaqs] = useState<number[]>([]);
  
  // Refs for observed elements
  const headerRef = useRef<HTMLDivElement>(null);
  const faqItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Toggle FAQ expansion
  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  // Setup intersection observers
  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          headerObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    
    const faqObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-faq-id'));
            setVisibleFaqs(prev => [...prev, id]);
            faqObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    // Observe header
    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }
    
    // Observe FAQ items
    faqItemRefs.current.forEach(item => {
      if (item) {
        faqObserver.observe(item);
      }
    });
    
    return () => {
      headerObserver.disconnect();
      faqObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-blue-50">
      <Head>
        <title>Frequently Asked Questions | MemoTag</title>
        <meta name="description" content="Find answers to common questions about MemoTag and dementia caregiving" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div 
            ref={headerRef}
            className={`mb-10 transition-all duration-1000 transform ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full font-medium mb-4">
              <span className="mr-2">✱</span> FAQ'S
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-black">Frequently </span>
              <span className="text-gray-500">Asked Questions</span>
            </h1>
            
            <p className="text-gray-700 text-lg">
              Find answers to the most common questions about MemoTag and how we
              support dementia & elder caregiving.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={item.id}
                data-faq-id={item.id}
                ref={el => faqItemRefs.current[index] = el}
                className={`border border-dashed rounded-xl bg-white overflow-hidden transition-all duration-700 hover:shadow-md ${
                  visibleFaqs.includes(item.id) 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-10'
                }`}
                style={{ transitionDelay: `${(index % faqData.length) * 150}ms` }}
              >
                <div 
                  className="flex justify-between items-center p-6 cursor-pointer transition-colors duration-200 hover:bg-blue-50"
                  onClick={() => toggleExpand(item.id)}
                >
                  <h3 className="text-lg font-medium">{item.question}</h3>
                  <button 
                    className="text-blue-600 transition-transform duration-300 ease-in-out"
                    aria-expanded={expandedId === item.id}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <PlusCircle className={`transform transition-transform duration-300 ${expandedId === item.id ? 'rotate-45' : ''}`} />
                  </button>
                </div>
                
                <div
                  id={`faq-answer-${item.id}`}
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: expandedId === item.id ? '500px' : '0',
                    opacity: expandedId === item.id ? 1 : 0,
                  }}
                >
                  <div className="p-6 pt-0 text-gray-600">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;