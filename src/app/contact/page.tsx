"use client"
import { Header } from '@/components/Header';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import React, { useState } from 'react';

export default function AlexPortfolioContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div 
      className="relative flex size-full min-h-screen flex-col bg-[#121417] dark group/design-root overflow-x-hidden" 
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-white tracking-light text-[32px] font-bold leading-tight">Get in Touch</p>
                <p className="text-[#a1abb5] text-sm font-normal leading-normal">
                  I'm always open to discussing new projects, creative ideas, or opportunities to collaborate. Feel free to reach out, and I'll get back to you as soon as possible.
                </p>
              </div>
            </div>

            <div className="flex p-4 gap-4">
                <a href="?"><Github color='white' /></a>
                <a href="?"><Linkedin color='white' /></a>
                <a href="?"><Twitter color='white' /></a>
                <a href="?"><Mail color='white' /></a>
              </div>
            
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  name="name"
                  placeholder="Your Name"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#3f4750] bg-[#1d2125] focus:border-[#3f4750] h-14 placeholder:text-[#a1abb5] p-[15px] text-base font-normal leading-normal"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#3f4750] bg-[#1d2125] focus:border-[#3f4750] h-14 placeholder:text-[#a1abb5] p-[15px] text-base font-normal leading-normal"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <input
                  name="subject"
                  placeholder="Subject"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#3f4750] bg-[#1d2125] focus:border-[#3f4750] h-14 placeholder:text-[#a1abb5] p-[15px] text-base font-normal leading-normal"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#3f4750] bg-[#1d2125] focus:border-[#3f4750] min-h-36 placeholder:text-[#a1abb5] p-[15px] text-base font-normal leading-normal"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            
            <div className="flex px-4 py-3 justify-start">
              <button
                type="button"
                onClick={handleSubmit}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#d2e2f3] text-[#121417] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}