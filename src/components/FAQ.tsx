import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does a full grooming session take?",
      answer: "A full grooming session typically takes 2-3 hours, depending on your pet's size, breed, and coat condition. We take our time to ensure your pet is comfortable and stress-free throughout the process."
    },
    {
      question: "Do you handle anxious or difficult pets?",
      answer: "Absolutely! We specialize in working with pets of all temperaments. Our gentle approach and patience help even the most anxious pets feel comfortable. We take breaks as needed and use calming techniques to ensure a positive experience."
    },
    {
      question: "What vaccinations are required?",
      answer: "We require that all pets are up to date on their core vaccinations (rabies, DHPP for dogs, FVRCP for cats) and are flea-free. Please bring vaccination records on your first visit."
    },
    {
      question: "Can I stay with my pet during grooming?",
      answer: "While we understand your concern, we find that pets are often calmer and more cooperative when owners aren't present. However, you're welcome to discuss your pet's specific needs with us before the grooming begins."
    },
    {
      question: "How often should I bring my pet for grooming?",
      answer: "This depends on your pet's breed and lifestyle. Generally, every 4-8 weeks for most dogs, and every 6-12 weeks for cats. We'll provide personalized recommendations based on your pet's specific needs."
    },
    {
      question: "What if my pet has sensitive skin or allergies?",
      answer: "Please let us know about any skin conditions or allergies when booking. We use hypoallergenic products and can accommodate special needs with appropriate shampoos and gentle handling techniques."
    },
    {
      question: "Do you offer nail trimming only services?",
      answer: "Yes! We offer nail trimming as a standalone service, which typically takes 15-30 minutes. No appointment necessary for quick services, but calling ahead is recommended during busy periods."
    },
    {
      question: "What are your cancellation policies?",
      answer: "We require 24-hour notice for cancellations. Same-day cancellations may incur a small fee. We understand emergencies happen, so please call us to discuss your situation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our grooming services? Here are answers to the most 
            common questions we receive from pet parents.
          </p>
        </div>

        <div className="space-y-4 fade-in">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="card-elegant transition-all duration-300 hover:shadow-medium"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 rounded-2xl"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                }`}
              >
                <div className="pt-4 border-t border-border/50">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:2104404084" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-2xl font-semibold hover:bg-primary/90 transition-colors duration-300"
            >
              Call Us: 210 440 4084
            </a>
            <a 
              href="mailto:pawsh@gmail.com" 
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-2xl font-semibold text-foreground hover:bg-muted transition-colors duration-300"
            >
              Email: pawsh@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;