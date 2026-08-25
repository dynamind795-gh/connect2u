"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      service: formData.get("service"),
      message: formData.get("message"),
      budget: formData.get("budget"),
      website: formData.get("website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send message.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );

      setStatus("error");
    }
  }

  const fieldStyle =
    "mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-300">
          Name *
          <input
            className={fieldStyle}
            type="text"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Your name"
          />
        </label>

        <label className="text-sm font-medium text-slate-300">
          Email *
          <input
            className={fieldStyle}
            type="email"
            name="email"
            autoComplete="email"
            required
            maxLength={200}
            placeholder="you@company.com"
          />
        </label>

        <label className="text-sm font-medium text-slate-300 sm:col-span-2">
          Company
          <input
            className={fieldStyle}
            type="text"
            name="company"
            autoComplete="organization"
            maxLength={150}
            placeholder="Optional"
          />
        </label>

        <label className="text-sm font-medium text-slate-300 sm:col-span-2">
          What can I help with? *
          <select
            className={fieldStyle}
            name="service"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            <option>SQL & Database Solutions</option>
            <option>Data Cleanup & Reconciliation</option>
            <option>Reporting & Automation</option>
            <option>ETL & Data Integration</option>
            <option>Excel & Access Modernization</option>
            <option>Something Else / Not Sure</option>
          </select>
        </label>

        <label className="text-sm font-medium text-slate-300 sm:col-span-2">
          Tell me about the problem *
          <textarea
            className={`${fieldStyle} min-h-40 resize-y`}
            name="message"
            required
            maxLength={5000}
            placeholder="What's happening now? What would you like to accomplish?"
          />
        </label>

        <label className="text-sm font-medium text-slate-300 sm:col-span-2">
          Budget / project size
          <select
            className={fieldStyle}
            name="budget"
            defaultValue="Not sure yet"
          >
            <option>Not sure yet</option>
            <option>Under $500</option>
            <option>$500 – $1,500</option>
            <option>$1,500 – $5,000</option>
            <option>$5,000+</option>
            <option>Ongoing / Retainer</option>
          </select>
        </label>
      </div>

      {/* Honeypot field for bots */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="mt-7">
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-xl bg-cyan-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending"
            ? "Sending..."
            : "Send Project Inquiry"}
        </button>

        {status === "success" && (
          <div
            className="mt-5 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-300"
            role="status"
          >
            ✓ Thanks! Your message was sent successfully. I'll get back to you
            soon.
          </div>
        )}

        {status === "error" && (
          <div
            className="mt-5 rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-red-300"
            role="alert"
          >
            {errorMessage}
          </div>
        )}
      </div>

      <p className="mt-5 text-center text-xs leading-5 text-slate-500">
        Your information is used only to respond to your project inquiry.
      </p>
    </form>
  );
}