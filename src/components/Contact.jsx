import { useState } from 'react';
import { Calendar, Send, Sparkles, Clock, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

const projectTypes = ['CGI Ad Spot', 'Product Commercial', 'Brand Film', 'Social Media Hook', 'Custom Project'];


export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '', type: 'Product Commercial' });
  const [formStatus, setFormStatus] = useState(null); // 'sending', 'success'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitMessage = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const subject = `Inquiry: ${formData.type} from ${formData.name}`;
    const body = `Hello Mahesh,

I'd like to discuss a project with you. Here are the details:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'N/A'}
Project Type: ${formData.type}

Message:
${formData.message}

Best regards,
${formData.name}`;

    const mailtoUrl = `mailto:maheshchandu431@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default mail client
    window.location.href = mailtoUrl;

    setFormStatus('success');
    setFormData({ name: '', email: '', company: '', message: '', type: 'Product Commercial' });
  };


  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-4 bg-[#070707] overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[450px] h-[450px] bg-brand-purple/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-brand-purple tracking-widest uppercase">
                <Calendar className="w-3 h-3" />
                <span>Get In Touch</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Let's Build <br />
                <span className="text-gradient-cyan font-display">Something Cinematic.</span>
              </h2>

              <p className="font-sans text-stone-300 text-sm leading-relaxed font-light">
                Ready to elevate your marketing with high-production AI films? Drop us a quick message, or schedule an introduction call directly with our production leads.
              </p>
            </div>

            {/* Info Cards */}
            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Average Response Time</h4>
                  <p className="text-xs text-stone-400 font-light mt-0.5">&lt; 12 Hours (Mon - Fri)</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Globe className="w-4 h-4 text-brand-purple" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Production HQ</h4>
                  <p className="text-xs text-stone-400 font-light mt-0.5">Remote First &mdash; EST / CET Time Zones</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Box (Tabs: Message / Call) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/5 relative">
              
              {formStatus === 'success' ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-brand-success/15 border border-brand-success/30 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-brand-success" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">Transmission Successful</h3>
                    <p className="font-sans text-stone-400 text-xs max-w-sm mx-auto font-light leading-relaxed">
                      Thank you! Our director has received your creative brief. We will reach back to you shortly.
                    </p>
                    <button
                      onClick={() => setFormStatus(null)}
                      className="mt-6 text-xs text-brand-cyan uppercase tracking-wider hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submitMessage} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-xl glass-input text-sm text-white placeholder-stone-500"
                        />
                      </div>
                      {/* Email input */}
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Your Email"
                          className="w-full px-4 py-3 rounded-xl glass-input text-sm text-white placeholder-stone-500"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div className="relative">
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company / Agency"
                        className="w-full px-4 py-3 rounded-xl glass-input text-sm text-white placeholder-stone-500"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-3">
                        Project Type
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {projectTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, type }))}
                            className={`px-3.5 py-2 rounded-lg text-xs transition-all duration-300 border cursor-pointer ${
                              formData.type === type
                                ? 'bg-brand-purple/20 border-brand-purple text-white shadow-[0_0_10px_rgba(139,92,246,0.2)]'
                                : 'bg-white/2 border-white/5 text-stone-400 hover:text-white hover:border-white/15'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Brief message */}
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="4"
                        placeholder="Tell us about your campaign objectives, timeline, or visual ideas..."
                        className="w-full px-4 py-3 rounded-xl glass-input text-sm text-white placeholder-stone-500 resize-none"
                      />
                    </div>

                    {formStatus === 'error' && (
                      <div className="text-[#ef4444] text-xs text-center font-medium bg-[#ef4444]/10 border border-[#ef4444]/20 py-2.5 px-4 rounded-xl animate-fadeIn">
                        Failed to send message. Please check your connection and try again.
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formStatus === 'sending'}
                      className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-xs font-semibold uppercase tracking-widest text-white shadow-lg flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                      data-hover
                    >
                      <span>{formStatus === 'sending' ? 'Transmitting brief...' : 'Send brief'}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )
              }

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
