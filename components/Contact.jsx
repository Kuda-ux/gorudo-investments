"use client";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "General Enquiry",
    message: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ state: "error", message: "Please complete the required fields." });
      return;
    }
    setStatus({ state: "loading", message: "Sending your message..." });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      setStatus({
        state: "success",
        message:
          "Thank you. Your enquiry has been received — our team will respond shortly.",
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        interest: "General Enquiry",
        message: "",
      });
    } catch (err) {
      setStatus({
        state: "error",
        message: "We couldn't send your message. Please email us directly.",
      });
    }
  };

  return (
    <section id="contact" className="relative bg-white py-24 sm:py-32">
      <div className="container-xl container-px">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="reveal lg:col-span-5">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Contact
            </span>
            <h2 className="h-display mt-5 text-4xl sm:text-5xl">
              Let's talk supply,
              <span className="block italic">
                <span className="text-gradient">produce and partnership.</span>
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Whether you're sourcing fresh produce, placing an ice order,
              inviting us to tender, or exploring a long-term supply
              partnership — we'd be glad to hear from you.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-base font-semibold">
                    Operating Hubs
                  </p>
                  <p className="text-sm text-ink/70">
                    Harare &middot; Marondera, Zimbabwe
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-base font-semibold">Phone</p>
                  <p className="text-sm text-ink/70">
                    Available on request &middot; share your number below
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-base font-semibold">Email</p>
                  <p className="text-sm text-ink/70">
                    info@gorudoinvestments.co.zw
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-10 rounded-2xl bg-cream p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                Business enquiries
              </p>
              <p className="mt-2 text-sm text-ink/70">
                For RFQs, tenders, framework supply and procurement
                opportunities, please specify your timeline, volumes and
                delivery location in your message.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="reveal card lg:col-span-7 p-8 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Full name *"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Moyo"
              />
              <Field
                label="Email address *"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jane@company.co.zw"
              />
              <Field
                label="Phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+263 …"
              />
              <Field
                label="Company / Institution"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Your organisation"
              />
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-ink/70">
                  Nature of enquiry
                </label>
                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-brand-900/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-700 focus:ring-2 focus:ring-brand-700/10"
                >
                  {[
                    "General Enquiry",
                    "Fresh Produce / Greenhouse",
                    "Poultry & Piggery",
                    "Shashi Maputi",
                    "Shashi Ice",
                    "Procurement / Tender",
                    "Supply Partnership",
                  ].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-ink/70">
                  Your message *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements, volumes, timelines and location."
                  className="w-full resize-none rounded-xl border border-brand-900/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-700 focus:ring-2 focus:ring-brand-700/10"
                />
              </div>
            </div>

            <div className="mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="text-xs text-ink/60">
                By submitting you agree to be contacted about your enquiry.
              </p>
              <button
                type="submit"
                disabled={status.state === "loading"}
                className="btn-primary disabled:opacity-60"
              >
                {status.state === "loading" ? "Sending..." : "Send Enquiry"}
                <Send className="h-4 w-4" />
              </button>
            </div>

            {status.state === "success" && (
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-brand-200 bg-brand-50 p-4 text-sm text-brand-800">
                <CheckCircle2 className="mt-0.5 h-5 w-5" />
                <span>{status.message}</span>
              </div>
            )}
            {status.state === "error" && (
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                <AlertCircle className="mt-0.5 h-5 w-5" />
                <span>{status.message}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, type = "text", placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-ink/70">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-brand-900/10 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-ink/40 focus:border-brand-700 focus:ring-2 focus:ring-brand-700/10"
      />
    </div>
  );
}
