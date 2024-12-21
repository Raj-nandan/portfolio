import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
// import { toast } from 'sonner';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  

  const [status, setStatus] = useState({ type: '', message: '' });

  // Submit handler function
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'Email service configuration is missing.'
      });
      return;
    }

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        e.target as HTMLFormElement,
        { publicKey }
      );
      
      setStatus({
        type: 'success',
        message: 'Message sent successfully!'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
      console.error('Email error:', error);
    }
    setIsSubmitting(false);
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  

  return (
    <section id="contact" className="py-20">
      <div className="max-w-2xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label>Name</label>
            <Input
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Email</label>
            <Input
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Message</label>
            <Textarea
              name="message"
              placeholder="Your message..."
              className="min-h-[150px]"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>

          {status.message && (
            <p className={`text-center ${status.type === 'error' ? 'text-red-500' : 'text-green-500'}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}