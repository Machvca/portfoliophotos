// src/app/[locale]/contact/page.tsx
"use client";

import { useRef, useState } from "react";
import { showToast } from "nextjs-toast-notify";

export default function ContactPage() {
  // namespace “Contact”
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const isFormValid =
    formData.email.trim() !== "" &&
    formData.subject.trim() !== "" &&
    formData.message.trim() !== "";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid || loading) return;

    setLoading(true);
    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.status === 200) {
      showToast.success("Email sent successfully!", {
        duration: 4000,
        progress: true,
        position: "top-right",
        transition: "bounceIn",
        icon: "✅",
      });
      formRef.current?.reset();
      setFormData({ email: "", subject: "", message: "" });
    } else {
        showToast.error("Error sending email. Please try again.", {
          duration: 4000,
          progress: true,
          position: "top-right",
          transition: "bounceIn",
        });
      }
    setLoading(false);
  };

  return (
    <main className="bg-gradient-to-br from-terracota/10 via-terracota/30 to-terracota min-h-screen flex flex-col">
      <section className="flex flex-col items-center justify-center px-4 mx-6 md:mx-0 py-32 md:px-8 -mt-10 md:-mt-0 animate-fade-in-up ">
        <div className="w-full max-w-2xl bg-terracota/15 border border-terracota rounded-2xl shadow-2xl p-8  ">
          <h2 className="text-4xl md:text-7xl font-medium mb-6 text-terracota text-center">
            Contact Me
          </h2>
          <p className="text-stone-950 text-xs md:text-base mb-8 text-center ">
            Tell me a bit about the project you’d like to work on together – I’d
            love to hear your ideas!
          </p>

          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-xs md:text-base font-medium text-stone-900"
              >
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                placeholder="youremail@example.com"
                className="w-full p-4 text-xs md:text-base text-stone-950 border border-terracota rounded-xl focus:outline-none focus:ring-stone-100 invalid:focus:ring-stone-200"
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-xs md:text-base font-medium text-stone-950"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                placeholder="Portraits, corporate event, etc."
                className="w-full p-4 text-xs md:text-base text-stone-950 border border-terracota rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-200  invalid:focus:ring-red-950"
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-xs md:text-base font-medium text-stone-950"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                required
                placeholder="Tell me about your event and preferred date/time..."
                className="w-full p-4 text-xs md:text-base text-stone-950 border border-terracota rounded-xl focus:outline-none focus:ring-stone-100 focus:ring-2 focus:ring- invalid:focus:terracota"
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              disabled={!isFormValid || loading}
              className={`w-full font-medium py-3 rounded-xl transition duration-300 shadow-2xl flex items-center justify-center ${
                isFormValid && !loading
                  ? "bg-terracota text-stone-100 cursor-pointer hover:scale-105"
                  : "bg-terracota/20 text-terracota cursor-not-allowed opacity-50 border"
              }`}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
              ) : null}
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
