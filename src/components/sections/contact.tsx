import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Mail, Github, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const contactLinks = [
  { icon: Mail, label: 'nandanr532@gmail.com', href: 'mailto:nandanr532@gmail.com' },
  { icon: Github, label: 'github.com/Raj-nandan', href: 'https://github.com/Raj-nandan' },
  { icon: Linkedin, label: 'linkedin.com/in/raj-nandan', href: 'https://www.linkedin.com/in/raj-nandan/' },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<{ type: 'success' | 'error' | ''; message: string }>({ type: '', message: '' });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({ type: 'error', message: 'Email service configuration is missing.' });
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, e.target as HTMLFormElement, { publicKey });
      setStatus({ type: 'success', message: 'Message sent! I\'ll get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send. Please try again or email me directly.' });
    }
    setIsSubmitting(false);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 max-w-5xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: text & links */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="section-label">Let's connect</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-2">Get In Touch</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Have a project in mind or just want to say hello? I'm always open to new opportunities and interesting conversations.
              </p>
            </div>

            <div className="space-y-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-border/60 bg-card/40 hover:bg-card/80 hover:border-accent/30 transition-all duration-200 group animated-underline"
                >
                  <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <link.icon className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <span className="text-sm font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
          >
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-card/60 border-border/60 focus:border-accent/60 h-11 rounded-xl transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-card/60 border-border/60 focus:border-accent/60 h-11 rounded-xl transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea
                  name="message"
                  placeholder="Tell me about your project or just say hi..."
                  className="min-h-[160px] bg-card/60 border-border/60 focus:border-accent/60 rounded-xl resize-none transition-colors"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-2 p-3 rounded-xl text-sm ${
                    status.type === 'success'
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                      : 'bg-destructive/10 text-destructive border border-destructive/20'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                  ) : (
                    <AlertCircle className="h-4 w-4 shrink-0" />
                  )}
                  {status.message}
                </motion.div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 rounded-xl group"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}