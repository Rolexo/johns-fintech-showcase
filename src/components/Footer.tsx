import { Linkedin, Mail, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container-custom px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm opacity-90">
              © {currentYear} John Doe. All rights reserved.
            </p>
            <p className="text-xs opacity-75 mt-1">
              Certified Public Accountant (CPA-K)
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cta transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:john.doe@example.com"
              className="hover:text-cta transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://johndoe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cta transition-colors"
              aria-label="Portfolio Website"
            >
              <Globe className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <p className="text-center text-xs opacity-75">
            Crafted with precision and attention to detail
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
