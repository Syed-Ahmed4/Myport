/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { 
  CONTACT_EMAIL, 
  PHONE_NUMBER, 
  LOCATION, 
  LINKEDIN_URL, 
  GITHUB_PLACEHOLDER_URL, 
  WEB3FORMS_ACCESS_KEY 
} from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const predefinedSubjects = [
    '2026 Internship',
    'Scientific Computing',
    'Algorithmic Research',
    'General Inquiry'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }).catch(() => {
      // Fallback
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectSubject = (subj: string) => {
    setFormData(prev => ({
      ...prev,
      subject: prev.subject === subj ? '' : subj
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
      data.append('subject', formData.subject || 'New Message from Portfolio Contact Form');
      data.append('message', formData.message);
      data.append('from_name', 'Syed Ahmed Portfolio Visitor');
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
          subject: '',
          message: ''
        });
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong while sending. Please try again or email directly.');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Network error occurred. Please check your connection or reach out directly via email.');
    }
  };

  return (
    <section id="contact" className="bg-[#F5F2EB] dark:bg-[#141311] py-20 md:py-32 px-6 md:px-12 border-t border-[#D6D1C7]/60 dark:border-[#2E2C28] transition-colors duration-400">
      <div className="max-w-[1800px] mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 pb-8 border-b border-[#D6D1C7] dark:border-[#2E2C28] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] dark:text-[#8C867C]">Get in Touch</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#2C2A26] dark:text-[#E8E4DA]">Contact & Inquiry</h2>
          </div>
          <p className="max-w-md text-[#5D5A53] dark:text-[#ABA59B] font-light text-sm md:text-base leading-relaxed">
            Interested in discussing numerical methods, computational modeling, or discussing opportunities for 2026 internships? Let's connect.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Contact Information & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] dark:text-[#8C867C] mb-4 block">
                Direct Channels
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-[#2C2A26] dark:text-[#E8E4DA] mb-8 leading-snug">
                Send an email or message directly to my inbox.
              </h3>

              {/* Direct Email Card */}
              <div className="bg-[#EBE7DE] dark:bg-[#1A1916] p-6 md:p-8 rounded-none border border-[#D6D1C7] dark:border-[#2E2C28] mb-8 transition-shadow hover:shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#A8A29E] dark:text-[#8C867C]">Primary Email</span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#2C2A26] dark:text-[#E8E4DA] hover:text-[#5D5A53] dark:hover:text-[#B5B0A4] transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-green-600 dark:text-green-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-green-700 dark:text-green-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                        </svg>
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
                <a 
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-mono text-base md:text-lg text-[#2C2A26] dark:text-[#E8E4DA] font-medium break-all hover:underline block"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>

              {/* Quick Details List */}
              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <span className="w-24 font-bold text-xs uppercase tracking-widest text-[#A8A29E] dark:text-[#8C867C] pt-0.5">Phone</span>
                  <a href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} className="text-[#2C2A26] dark:text-[#E8E4DA] hover:underline font-mono">
                    {PHONE_NUMBER}
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-24 font-bold text-xs uppercase tracking-widest text-[#A8A29E] dark:text-[#8C867C] pt-0.5">Location</span>
                  <span className="text-[#5D5A53] dark:text-[#ABA59B]">{LOCATION}</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="w-24 font-bold text-xs uppercase tracking-widest text-[#A8A29E] dark:text-[#8C867C] pt-0.5">Profiles</span>
                  <div className="flex items-center gap-3">
                    <a 
                      href={LINKEDIN_URL} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-[#2C2A26] dark:text-[#E8E4DA] underline hover:text-[#5D5A53] dark:hover:text-[#B5B0A4] transition-colors"
                    >
                      LinkedIn
                    </a>
                    <span className="text-[#D6D1C7] dark:text-[#38352F]">/</span>
                    <a 
                      href={GITHUB_PLACEHOLDER_URL} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-[#2C2A26] dark:text-[#E8E4DA] underline hover:text-[#5D5A53] dark:hover:text-[#B5B0A4] transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Note */}
            <div className="p-6 bg-[#EBE7DE]/60 dark:bg-[#1A1916] border-l-2 border-[#2C2A26] dark:border-[#E8E4DA]">
              <span className="text-xs uppercase font-bold tracking-widest text-[#2C2A26] dark:text-[#E8E4DA] block mb-1">
                Fast Response
              </span>
              <p className="text-xs text-[#5D5A53] dark:text-[#ABA59B] leading-relaxed">
                Messages submitted via this form are dispatched in real-time to my personal inbox. I typically reply within 24 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Web3Forms Contact Form */}
          <div className="lg:col-span-7 bg-[#EBE7DE]/40 dark:bg-[#1A1916]/70 p-8 md:p-12 border border-[#D6D1C7] dark:border-[#2E2C28]">
            {status === 'success' ? (
              <div className="py-12 px-4 text-center animate-fade-in-up">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-950/60 border border-green-300 dark:border-green-800 text-green-700 dark:text-green-400 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-[#2C2A26] dark:text-[#E8E4DA] mb-3">Message Delivered!</h3>
                <p className="text-[#5D5A53] dark:text-[#ABA59B] max-w-md mx-auto text-sm md:text-base leading-relaxed mb-8">
                  Thank you for reaching out. Your message has been routed directly to <span className="font-medium text-[#2C2A26] dark:text-[#E8E4DA]">{CONTACT_EMAIL}</span>. I will review it and get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3.5 bg-[#2C2A26] dark:bg-[#E8E4DA] text-[#F5F2EB] dark:text-[#141311] text-xs font-bold uppercase tracking-widest hover:bg-[#433E38] dark:hover:bg-white transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h3 className="text-2xl font-serif text-[#2C2A26] dark:text-[#E8E4DA] mb-2">Send a Direct Message</h3>
                  <p className="text-xs text-[#A8A29E] dark:text-[#8C867C] uppercase tracking-wider">
                    Powered by Web3Forms · Direct Email Delivery
                  </p>
                </div>

                {/* Optional Quick Topic Chips */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#A8A29E] dark:text-[#8C867C] mb-3">
                    Select a Topic (Optional)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {predefinedSubjects.map((subj) => (
                      <button
                        type="button"
                        key={subj}
                        onClick={() => handleSelectSubject(subj)}
                        className={`text-xs px-3.5 py-1.5 transition-all border ${
                          formData.subject === subj
                            ? 'bg-[#2C2A26] dark:bg-[#E8E4DA] text-[#F5F2EB] dark:text-[#141311] border-[#2C2A26] dark:border-[#E8E4DA]'
                            : 'bg-transparent text-[#5D5A53] dark:text-[#ABA59B] border-[#D6D1C7] dark:border-[#38352F] hover:border-[#2C2A26] dark:hover:border-[#E8E4DA]'
                        }`}
                      >
                        {subj}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-widest text-[#A8A29E] dark:text-[#8C867C] mb-2">
                      Your Name <span className="text-red-600 dark:text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Jane Doe"
                      className="w-full bg-[#F5F2EB] dark:bg-[#141311] border border-[#D6D1C7] dark:border-[#38352F] px-4 py-3 text-[#2C2A26] dark:text-[#E8E4DA] placeholder-[#A8A29E] dark:placeholder-[#6B665E] outline-none focus:border-[#2C2A26] dark:focus:border-[#E8E4DA] transition-colors text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-widest text-[#A8A29E] dark:text-[#8C867C] mb-2">
                      Your Email <span className="text-red-600 dark:text-red-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@organization.com"
                      className="w-full bg-[#F5F2EB] dark:bg-[#141311] border border-[#D6D1C7] dark:border-[#38352F] px-4 py-3 text-[#2C2A26] dark:text-[#E8E4DA] placeholder-[#A8A29E] dark:placeholder-[#6B665E] outline-none focus:border-[#2C2A26] dark:focus:border-[#E8E4DA] transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-widest text-[#A8A29E] dark:text-[#8C867C] mb-2">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Internship Inquiry / Collaboration Opportunity"
                    className="w-full bg-[#F5F2EB] dark:bg-[#141311] border border-[#D6D1C7] dark:border-[#38352F] px-4 py-3 text-[#2C2A26] dark:text-[#E8E4DA] placeholder-[#A8A29E] dark:placeholder-[#6B665E] outline-none focus:border-[#2C2A26] dark:focus:border-[#E8E4DA] transition-colors text-sm"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-widest text-[#A8A29E] dark:text-[#8C867C] mb-2">
                    Your Message <span className="text-red-600 dark:text-red-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your inquiry, project scope, or opportunity..."
                    className="w-full bg-[#F5F2EB] dark:bg-[#141311] border border-[#D6D1C7] dark:border-[#38352F] p-4 text-[#2C2A26] dark:text-[#E8E4DA] placeholder-[#A8A29E] dark:placeholder-[#6B665E] outline-none focus:border-[#2C2A26] dark:focus:border-[#E8E4DA] transition-colors text-sm resize-y"
                  />
                </div>

                {/* Error Banner */}
                {status === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 text-red-800 dark:text-red-300 text-sm flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 text-red-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold">Submission encountered an issue:</p>
                      <p className="text-xs mt-0.5">{errorMessage}</p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 px-6 bg-[#2C2A26] dark:bg-[#E8E4DA] text-[#F5F2EB] dark:text-[#141311] uppercase tracking-widest text-xs font-bold hover:bg-[#433E38] dark:hover:bg-white transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
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
                      <>
                        <span>Send Message</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-[#A8A29E] dark:text-[#8C867C] text-center mt-3">
                    Submissions are delivered directly to {CONTACT_EMAIL} via Web3Forms. No spam or marketing.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
