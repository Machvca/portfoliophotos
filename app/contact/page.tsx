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
      showToast.success("toastSuccess", {
        duration: 4000,
        progress: true,
        position: "top-right",
        transition: "bounceIn",
        icon: "✅",
      });
      formRef.current?.reset();
      setFormData({ email: "", subject: "", message: "" });
    } else {
        showToast.error("toastError", {
          duration: 4000,
          progress: true,
          position: "top-right",
          transition: "bounceIn",
        });
      }
    setLoading(false);
  };

  return (
    <main className="bg-gradient-to-br from-terracota via-terracota/10 to-terracota/80 min-h-screen flex flex-col">

      <section className="flex flex-col items-center justify-center px-4 py-32 md:px-8 font-rubik animate-fade-in-up">
        <div className="w-full max-w-2xl bg-[#feefef] rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-7xl font-medium mb-6 text-terracota text-center font-syne">
            Contact Me
          </h2>
          <p className="text-stone-700 text-base mb-8 text-center font-rubik">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            quas aliquam fugit libero eveniet vitae temporibus delectus
            architecto iure, porro inventore beatae nemo a, cumque, voluptatum
            impedit dolorum voluptates? Aperiam!
          </p>

          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-base font-medium text-stone-900"
              >
              email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                placeholder="placeholderEmail"
                className="w-full p-4 text-base text-stone-900 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-500 invalid:border-red-200 invalid:focus:ring-red-900"
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-base font-medium text-stone-900"
              >
                holiiifafdsnoikdasnad
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                placeholder="placeholderSubject"
                className="w-full p-4 text-base text-stone-900 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-500 invalid:border-red-200 invalid:focus:ring-red-900"
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-base font-medium text-stone-900"
              >
              tu mensaje
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                required
                placeholder="placeholderMessage"
                className="w-full p-4 text-base text-stone-900 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-500 invalid:border-red-200 invalid:focus:ring-red-900"
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              disabled={!isFormValid || loading}
              className={`w-full font-medium py-3 rounded-xl transition duration-300 shadow-2xl flex items-center justify-center ${
                isFormValid && !loading
                  ? "bg-[#621316] text-stone-100 cursor-pointer"
                  : "bg-[#621316]/20 text-[#621316] cursor-not-allowed opacity-50"
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
              {loading ? "buttonSending" : "buttonSubmit"}
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
