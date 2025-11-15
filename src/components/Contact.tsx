"use client"
import React, { useState } from "react";

export const Contact: React.FC = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (res.ok) setStatus("Message sent!");
    else setStatus("Failed to send message.");
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[#0F172A]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Get In Touch
        </h2>

        <div className="bg-[#1E293B] border border-indigo-800/40 rounded-xl p-8 hover:border-indigo-500/70 transition">
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            <div>
              <label className="block text-gray-200 font-medium mb-2">Name</label>
              <input
                name="name"
                type="text"
                className="w-full px-4 py-3 bg-[#0F172A] border border-indigo-800/40 text-gray-200 rounded-lg"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-200 font-medium mb-2">Email</label>
              <input
                name="email"
                type="email"
                className="w-full px-4 py-3 bg-[#0F172A] border border-indigo-800/40 text-gray-200 rounded-lg"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-200 font-medium mb-2">Message</label>
              <textarea
                name="message"
                rows={5}
                className="w-full px-4 py-3 bg-[#0F172A] border border-indigo-800/40 text-gray-200 rounded-lg"
                placeholder="Your message..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium"
            >
              Send Message
            </button>

            {status && (
              <p className="text-center text-gray-300 pt-2">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
