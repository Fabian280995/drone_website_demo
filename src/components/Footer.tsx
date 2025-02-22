import Link from "next/link";
import { SocialIcon } from "react-social-icons"; // Offizielle Social Media Icons

export default function Footer() {
  return (
    <footer className="w-full bg-slate-800 text-white py-8 h-[calc(100vh/4)] flex items-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 w-full">
        {/* Firmenname & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">Fabian Lessmann | CineEagle</h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Alle Rechte vorbehalten.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/impressum"
            className="text-gray-400 hover:text-white transition"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="text-gray-400 hover:text-white transition"
          >
            Datenschutz
          </Link>
        </nav>

        {/* Offizielle Social Media Icons mit react-social-icons */}
        <div className="flex gap-4">
          <SocialIcon
            url="https://facebook.com"
            fgColor="#ffffff"
            bgColor="transparent"
            style={{ height: 32, width: 32 }}
          />
          <SocialIcon
            url="https://instagram.com"
            fgColor="#ffffff"
            bgColor="transparent"
            style={{ height: 32, width: 32 }}
          />
          <SocialIcon
            url="https://linkedin.com"
            fgColor="#ffffff"
            bgColor="transparent"
            style={{ height: 32, width: 32 }}
          />
        </div>
      </div>
    </footer>
  );
}
