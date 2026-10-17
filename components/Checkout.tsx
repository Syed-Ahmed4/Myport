/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';
import { Project } from '../types';
import { 
  LINKEDIN_URL, 
  GITHUB_PLACEHOLDER_URL, 
  CONTACT_EMAIL, 
  PHONE_NUMBER, 
  WEB3FORMS_ACCESS_KEY 
} from '../constants';

// Functionally acts as "InquiryForm"
interface InquiryFormProps {
  projects: Project[];
  onBack: () => void;
}

const Checkout: React.FC<InquiryFormProps> = ({ projects, onBack }) => {
  const projectNames = projects.map(i => i.name).join(', ');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const data = new FormData();
      data.append('access_key', WEB3FORMS_ACCESS_KEY);
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('subject', `Project Inquiry from ${formData.name}${projects.length > 0 ? ` [${projects.length} Projects]` : ''}`);
      
      let fullMessage = formData.message;
      if (formData.organization) {
        fullMessage = `Organization: ${formData.organization}\n\n` + fullMessage;
      }
      if (projects.length > 0) {
        fullMessage += `\n\n--- Shortlisted Projects ---\n${projects.map(p => `• ${p.name} (${p.category})`).join('\n')}`;
      }
      
      data.append('message', fullMessage);
      data.append('from_name', 'Syed Ahmed Portfolio Inquiry');
      data.append('botcheck', '');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json'
        }
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          organization: '',
          message: ''
        });
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Submission failed. Please try again or email directly.');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Network error occurred. Please check your internet connection.');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 bg-[#F5F2EB] dark:bg-[#141311] text-[#2C2A26] dark:text-[#E8E4DA] transition-colors duration-400 animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] dark:hover:text-[#E8E4DA] transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Portfolio
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <div>
            <h1 className="text-3xl font-serif text-[#2C2A26] dark:text-[#E8E4DA] mb-4">Get in Touch</h1>
            <p className="text-sm text-[#5D5A53] dark:text-[#9C968E] mb-12">I am currently open to internships and collaborative projects in Scientific Computing and Software Engineering.</p>
            
            {status === 'success' ? (
              <div className="bg-[#EBE7DE] dark:bg-[#1A1916] p-8 border border-[#D6D1C7] dark:border-[#2E2C28] text-center space-y-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-950/40 border border-green-300 dark:border-green-800 text-green-700 dark:text-green-400 rounded-full flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h2 className="text-2xl font-serif text-[#2C2A26] dark:text-[#E8E4DA]">Message Sent!</h2>
                <p className="text-sm text-[#5D5A53] dark:text-[#9C968E] leading-relaxed">
                  Thank you for reaching out. Your inquiry and project details have been sent to {CONTACT_EMAIL}. I will get back to you shortly.
                </p>
                <div className="pt-4 flex justify-center gap-4">
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 border border-[#2C2A26] dark:border-[#E8E4DA] text-xs uppercase tracking-widest font-bold text-[#2C2A26] dark:text-[#E8E4DA] hover:bg-[#2C2A26] dark:hover:bg-[#E8E4DA] hover:text-[#F5F2EB] dark:hover:text-[#141311] transition-colors"
                  >
                    Send Another
                  </button>
                  <button 
                    onClick={onBack}
                    className="px-6 py-2.5 bg-[#2C2A26] dark:bg-[#E8E4DA] text-[#F5F2EB] dark:text-[#141311] text-xs uppercase tracking-widest font-bold hover:bg-[#433E38] dark:hover:bg-white transition-colors"
                  >
                    Return Home
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-12" onSubmit={handleSubmit}>
                <div>
                  <h2 className="text-xl font-serif text-[#2C2A26] dark:text-[#E8E4DA] mb-6">Your Information</h2>
                  <div className="space-y-4">
                     <input 
                       type="text" 
                       name="name"
                       required
                       value={formData.name}
                       onChange={handleChange}
                       placeholder="Name *" 
                       className="w-full bg-transparent border-b border-[#D6D1C7] dark:border-[#2E2C28] py-3 text-[#2C2A26] dark:text-[#E8E4DA] placeholder-[#A8A29E] dark:placeholder-[#7A746C] outline-none focus:border-[#2C2A26] dark:focus:border-[#E8E4DA] transition-colors" 
                     />
                     <input 
                       type="email" 
                       name="email"
                       required
                       value={formData.email}
                       onChange={handleChange}
                       placeholder="Email address *" 
                       className="w-full bg-transparent border-b border-[#D6D1C7] dark:border-[#2E2C28] py-3 text-[#2C2A26] dark:text-[#E8E4DA] placeholder-[#A8A29E] dark:placeholder-[#7A746C] outline-none focus:border-[#2C2A26] dark:focus:border-[#E8E4DA] transition-colors" 
                     />
                     <input 
                       type="text" 
                       name="organization"
                       value={formData.organization}
                       onChange={handleChange}
                       placeholder="Company / Organization (Optional)" 
                       className="w-full bg-transparent border-b border-[#D6D1C7] dark:border-[#2E2C28] py-3 text-[#2C2A26] dark:text-[#E8E4DA] placeholder-[#A8A29E] dark:placeholder-[#7A746C] outline-none focus:border-[#2C2A26] dark:focus:border-[#E8E4DA] transition-colors" 
                     />
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-serif text-[#2C2A26] dark:text-[#E8E4DA] mb-6">Message</h2>
                  <div className="space-y-4">
                     {projects.length > 0 && (
                       <div className="bg-[#EBE7DE]/50 dark:bg-[#1A1916] p-4 border border-[#D6D1C7] dark:border-[#2E2C28] text-sm text-[#5D5A53] dark:text-[#9C968E] mb-4">
                         <span className="block font-bold mb-1 uppercase text-xs tracking-wide text-[#2C2A26] dark:text-[#E8E4DA]">Referencing Projects:</span>
                         {projectNames}
                       </div>
                     )}
                     <textarea 
                       rows={5}
                       name="message"
                       required
                       value={formData.message}
                       onChange={handleChange}
                       placeholder="How can I help you? Detail your inquiry or project requirements..." 
                       className="w-full bg-transparent border border-[#D6D1C7] dark:border-[#2E2C28] p-4 text-[#2C2A26] dark:text-[#E8E4DA] placeholder-[#A8A29E] dark:placeholder-[#7A746C] outline-none focus:border-[#2C2A26] dark:focus:border-[#E8E4DA] transition-colors text-sm" 
                     />
                  </div>
                </div>

                {status === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-red-800 dark:text-red-300 text-sm">
                    <p className="font-semibold">Unable to send message:</p>
                    <p className="text-xs mt-1">{errorMessage}</p>
                  </div>
                )}

                <div>
                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-5 bg-[#2C2A26] dark:bg-[#E8E4DA] text-[#F5F2EB] dark:text-[#141311] uppercase tracking-widest text-sm font-bold hover:bg-[#433E38] dark:hover:bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-[#F5F2EB] dark:text-[#141311]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </button>
                  <p className="text-[11px] text-[#A8A29E] text-center mt-3">
                    Submissions are delivered directly to {CONTACT_EMAIL} via Web3Forms.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Summary */}
          <div className="lg:pl-12 lg:border-l border-[#D6D1C7] dark:border-[#2E2C28]">
            <h2 className="text-xl font-serif text-[#2C2A26] dark:text-[#E8E4DA] mb-8">Discussion Topics</h2>
            
            {projects.length === 0 ? (
                <p className="text-[#5D5A53] dark:text-[#9C968E] italic">No specific projects selected from shortlist.</p>
            ) : (
                <div className="space-y-6 mb-8">
                {projects.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                        <div className="w-16 h-16 bg-[#EBE7DE] dark:bg-[#1A1916] relative overflow-hidden flex-shrink-0">
                            <img src={item.imageUrl} alt={item.name} loading="lazy" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-serif text-[#2C2A26] dark:text-[#E8E4DA] text-base">{item.name}</h3>
                            <p className="text-xs text-[#A8A29E]">{item.category}</p>
                        </div>
                    </div>
                ))}
                </div>
            )}
            
            <div className="border-t border-[#D6D1C7] dark:border-[#2E2C28] mt-12 pt-12">
               <h3 className="text-xl font-serif text-[#2C2A26] dark:text-[#E8E4DA] mb-4">Direct Contact</h3>
               <ul className="space-y-3 text-[#5D5A53] dark:text-[#9C968E]">
                   <li className="flex items-center gap-3">
                       <span className="font-bold text-xs uppercase tracking-widest text-[#A8A29E] w-16">Email</span>
                       <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-[#2C2A26] dark:hover:text-[#E8E4DA]">{CONTACT_EMAIL}</a>
                   </li>
                   <li className="flex items-center gap-3">
                       <span className="font-bold text-xs uppercase tracking-widest text-[#A8A29E] w-16">Phone</span>
                       <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="hover:text-[#2C2A26] dark:hover:text-[#E8E4DA]">{PHONE_NUMBER}</a>
                   </li>
                   <li className="flex items-center gap-3">
                       <span className="font-bold text-xs uppercase tracking-widest text-[#A8A29E] w-16">Social</span>
                       <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="underline hover:text-[#2C2A26] dark:hover:text-[#E8E4DA]">LinkedIn</a>
                       <span className="text-[#D6D1C7] dark:text-[#2E2C28]">/</span>
                       <a href={GITHUB_PLACEHOLDER_URL} target="_blank" rel="noreferrer" className="underline hover:text-[#2C2A26] dark:hover:text-[#E8E4DA]">GitHub</a>
                   </li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;