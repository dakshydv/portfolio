"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

export const ContactForm = () => {
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonLoading(true);

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill all the fields");
      setButtonLoading(false);
      return;
    }

    try {
      await axios.post("/api/sendmail", {
        from: name,
        senderEmail: email,
        text: message,
      });

      toast.success("Form submitted successfully");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setButtonLoading(false);
    }
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="py-10 flex flex-col border border-neutral-300 dark:border-neutral-800 shadow-md rounded-md mt-6 gap-5 px-10 max-w-lg mx-auto"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-medium text-neutral-600 dark:text-neutral-200 tracking-tight"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          placeholder="Daksh Yadav"
          className="shadow-input px-2 py-1 rounded-md text-sm dark:text-neutral-200 focus:outline-none focus:ring-2 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 border border-neutral-300 dark:border-neutral-700"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-neutral-600 dark:text-neutral-200 tracking-tight"
        >
          Email Address
        </label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleChange}
          placeholder="dakshyadav.dev@gmail.com"
          className="shadow-input px-2 py-1 rounded-md text-sm dark:text-neutral-200 focus:outline-none focus:ring-2 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 border border-neutral-300 dark:border-neutral-700"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-neutral-600 tracking-tight"
        >
          Message
        </label>
        <textarea
          rows={5}
          id="message"
          name="message"
          onChange={handleChange}
          placeholder="You are crazy good, never change."
          className="resize-none shadow-input px-2 py-1 rounded-md text-sm focus:outline-none focus:ring-2 dark:text-neutral-200 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 border border-neutral-300 dark:border-neutral-700"
        />
      </div>
      <button
        type="submit"
        disabled={buttonLoading}
        className="rounded-md bg-primary px-4 py-2 text-white hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {buttonLoading ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
};
