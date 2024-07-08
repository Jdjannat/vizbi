import React, { useState } from 'react';
import './faq.css';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'What is your return policy?',
      answer: 'You can return any item within 30 days of purchase.',
      open: false
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping usually takes 5-7 business days.',
      open: false
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship internationally.',
      open: false
    }
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : false
      }))
    );
  };

  return (
    <div className='mt-5'>
      <h2>FAQ</h2>
      <div className='col-md-11'>
        <div className="faq">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${faq.open ? 'open' : ''}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">{faq.question}</div>
              {faq.open && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
