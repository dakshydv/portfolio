import { useState } from "react";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import { toast } from "sonner";
import axios from "axios";

export const ContactLanding = () => {
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [message, setMessage] = useState("");
  const hanldeSubmit = async () => {
    setButtonLoading(true);
    await axios.post("/api/sendmail", {
      senderEmail: message,
    });
    setButtonLoading(false);
    toast.success("Enquiry sent successfully.");
  };

  return (
    <div className="my-6 pb-2">
      <Heading>Get in touch</Heading>
      <SubHeading>
        I am currently looking for new opportunities. Whether you have a
        questions or want to say hi, hit that button
      </SubHeading>
      <div className="relative mx-4 mt-4">
        <input
          type="text"
          placeholder="Your email"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="shadow-input px-4 py-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-600 w-full pr-16 bg-white dark:bg-[#171717] text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700"
        />
        <button
          type="submit"
          onClick={hanldeSubmit}
          disabled={buttonLoading}
          className="absolute hover:cursor-pointer right-2 top-1/2 transform -translate-y-1/2 text-gray-800 dark:text-gray-200 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 px-4 py-1 rounded text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {buttonLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            "Send Enquiry"
          )}
        </button>
      </div>
    </div>
  );
};
