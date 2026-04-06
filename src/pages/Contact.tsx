import React, { useState } from 'react';
import Botpoison from '@botpoison/browser';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const botpoison = new Botpoison({ publicKey: 'pk_23c283b4-3034-48f0-bc86-1206b236df71' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const { solution } = await botpoison.challenge();
    await fetch('https://submit-form.com/rMnhtyF7Q', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...data, _botpoison: solution }),
    });
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-cream min-h-screen"
    >
      {/* Header */}
      <section className="bg-sage/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-forest mb-6">Contact & Booking</h1>
          <p className="text-forest/70 text-lg max-w-2xl mx-auto">
            Have a question or ready to book? We'd love to hear from you. Fill out the form below or give us a call.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-forest mb-8">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-sage/10 rounded-2xl flex items-center justify-center text-sage shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-bold text-forest mb-1">Call Us</h4>
                      <p className="text-forest/60 mb-1">Available for inquiries and bookings</p>
                      <a href="tel:0359775328" className="text-xl font-bold text-forest hover:text-sage transition-colors">(03) 5977 5328</a>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-sage/10 rounded-2xl flex items-center justify-center text-sage shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-bold text-forest mb-1">Email Us</h4>
                      <p className="text-forest/60 mb-1">For general questions and feedback</p>
                      <a href="mailto:bookings@treetopscattery.com.au" className="text-xl font-bold text-forest hover:text-sage transition-colors">bookings@treetopscattery.com.au</a>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-sage/10 rounded-2xl flex items-center justify-center text-sage shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-bold text-forest mb-1">Visit Us</h4>
                      <p className="text-forest/60 mb-1">Located in beautiful Moorooduc</p>
                      <p className="text-xl font-bold text-forest">222 Coolart Road, Moorooduc VIC 3913</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-forest text-cream p-10 rounded-[2.5rem] shadow-xl">
                <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                  <Clock size={24} className="text-sage" />
                  Opening Hours
                </h3>
                <ul className="space-y-4 text-cream/80">
                  <li className="flex justify-between border-b border-cream/10 pb-2">
                    <span>Monday - Sunday</span>
                    <span className="font-bold">8:30 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-cream/10 pb-2">
                    <span>Wednesday & Saturday</span>
                    <span className="font-bold">8:30 AM - 12:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Drop Off Between</span>
                    <span className="font-bold">08:30 AM - 12:00 PM</span>
                  </li>
                </ul>
                <p className="mt-8 text-sm italic text-cream/60">
                  * Inspections are welcome during opening hours. No appointment necessary!
                </p>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-sage/10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center text-sage mx-auto mb-8">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-forest mb-4">Thank You!</h3>
                  <p className="text-forest/60 text-lg mb-8">
                    Your message has been sent successfully. We'll get back to you as soon as possible to confirm your booking.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sage font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-3xl font-serif font-bold text-forest mb-8">Booking Inquiry</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-forest/70 uppercase tracking-wider">Your Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        className="w-full px-6 py-4 bg-cream rounded-2xl border border-sage/10 focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-forest/70 uppercase tracking-wider">Email Address</label>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 bg-cream rounded-2xl border border-sage/10 focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-forest/70 uppercase tracking-wider">Phone Number</label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="(03) 1234 5678"
                        className="w-full px-6 py-4 bg-cream rounded-2xl border border-sage/10 focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-forest/70 uppercase tracking-wider">Cat's Name</label>
                      <input
                        required
                        type="text"
                        name="cat_name"
                        placeholder="Whiskers"
                        className="w-full px-6 py-4 bg-cream rounded-2xl border border-sage/10 focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-forest/70 uppercase tracking-wider">Check-in Date</label>
                      <input
                        required
                        type="date"
                        name="checkin_date"
                        className="w-full px-6 py-4 bg-cream rounded-2xl border border-sage/10 focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-forest/70 uppercase tracking-wider">Check-out Date</label>
                      <input
                        required
                        type="date"
                        name="checkout_date"
                        className="w-full px-6 py-4 bg-cream rounded-2xl border border-sage/10 focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-forest/70 uppercase tracking-wider">
                      Accommodation Preference <span className="text-forest/40 normal-case font-normal">(optional)</span>
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="accommodation"
                          value="inside"
                          className="w-5 h-5 rounded accent-sage cursor-pointer"
                        />
                        <span className="text-forest/80 font-medium">Inside</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          name="accommodation"
                          value="outside"
                          className="w-5 h-5 rounded accent-sage cursor-pointer"
                        />
                        <span className="text-forest/80 font-medium">Outside</span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-forest/70 uppercase tracking-wider">
                      Current Vaccinations <span className="text-red-400">*</span>
                    </label>
                    <div className="flex gap-6">
                      {['Yes', 'No', 'Not Sure'].map((option) => (
                        <label key={option} className="flex items-center gap-2 cursor-pointer">
                          <input
                            required
                            type="radio"
                            name="vaccinations"
                            value={option.toLowerCase().replace(' ', '-')}
                            className="w-5 h-5 accent-sage cursor-pointer"
                          />
                          <span className="text-forest/80 font-medium">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-forest/70 uppercase tracking-wider">Message / Special Requirements</label>
                    <textarea
                      rows={4}
                      name="message"
                      placeholder="Tell us about your cat's needs..."
                      className="w-full px-6 py-4 bg-cream rounded-2xl border border-sage/10 focus:outline-none focus:ring-2 focus:ring-sage/50 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-forest text-cream py-5 rounded-2xl font-bold text-lg hover:bg-sage transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Sending...' : <><span>Send Inquiry</span> <Send size={20} /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-sage/20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-forest/30 flex-col gap-4">
          <MapPin size={64} />
          <span className="font-serif text-2xl font-bold">Find us on the Mornington Peninsula</span>
        </div>
        {/* In a real app, embed a Google Map here */}
      </section>
    </motion.div>
  );
}
