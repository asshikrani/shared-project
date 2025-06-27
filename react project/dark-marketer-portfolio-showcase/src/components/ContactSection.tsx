
import React, { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, Facebook, Linkedin,MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canSubmit = name.trim() !== "" && email.trim() !== "" && message.trim() !== "";

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!canSubmit) {
      toast({
        title: "Error",
        description: "Please fill in all the fields to send your message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message (in real app, connect to API)
    setTimeout(() => {
      setIsSubmitting(false);
      setName("");
      setEmail("");
      setMessage("");
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I will get back to you soon.",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-darkgray text-gray-100 px-6 sm:px-12 max-w-4xl mx-auto rounded-lg animate-fade-in-up">
      <h2 className="text-3xl font-bold mb-10 text-center text-foreground">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 text-sm font-semibold">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className="rounded-md bg-background text-foreground px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSubmitting}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 text-sm font-semibold">Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="rounded-md bg-background text-foreground px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 text-sm font-semibold">Message</label>
          <textarea
            id="message"
            placeholder="Your message..."
            rows={5}
            className="rounded-md bg-background text-foreground px-4 py-3 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary resize-y"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isSubmitting}
            required
          />
        </div>
        <button
          type="submit"
          disabled={!canSubmit || isSubmitting}
          className="w-full py-3 rounded-lg font-semibold bg-primary text-black hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Send message"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
      <div className="mt-12 flex justify-center space-x-8 text-gray-400">
        <a
          href="mailto:yasirshikrani56@email.com"
          aria-label="Email"
          className="hover:text-primary transition-colors"
          target="_blank"
          rel="noreferrer"
        >
          <Mail size={28} />
        </a>
        <a
          href="tel:+923266138477"
          aria-label="Phone"
          className="hover:text-primary transition-colors"
          target="_blank"
          rel="noreferrer"
        >
          <Phone size={28} />
        </a>
        <a
          href="https://www.facebook.com/yasirmunir0?mibextid=ZbWKwL"
          aria-label="Instagram"
          target="_blank"
          rel="noreferrer"
          className="hover:text-socialInsta transition-colors"
        >
          <Facebook size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/yasir-munir-3b5b55270"
          aria-label="Linkedin"
          target="_blank"
          rel="noreferrer"
          className="hover:text-socialLinkedin transition-colors"
        >
          <Linkedin size={28} />
        </a>
        <a
          href="https://wa.me/message/W4G7ZM7ZEL76B1"
          aria-label="Twitter"
          target="_blank"
          rel="noreferrer"
          className="hover:text-socialBlue transition-colors"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;

