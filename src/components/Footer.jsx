const Footer = () => {
  return (
    <footer className="bg-white border-t-4 border-black mt-10 py-10 px-4 text-sm">
      <div className="max-w-6xl mx-auto text-black">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-2">
            <h3 className="font-bold text-lg mb-2 border-b border-black inline-block">
              About This Website
            </h3>
            <p className="text-justify mt-2">
              This portfolio showcases projects I've built, with a playful
              comic-style visual. It's a space where I combine creativity and
              frontend technology to tell my story as a developer.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-2 border-b border-black inline-block">
              Contact
            </h3>
            <ul className="space-y-2 mt-2">
              <li className="flex items-center gap-2">
                {/* Email Icon */}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16v16H4z" />
                  <path d="M4 4l8 6 8-6" />
                </svg>
                <a
                  href="mailto:azminailalhadi.py@gmail.com"
                  className="underline"
                >
                  azminailalhadi.py@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                {/* LinkedIn Icon */}
                <svg className="w-4 h-4" fill="black" viewBox="0 0 24 24">
                  <path d="M4.98 3A2.98 2.98 0 002 5.98c0 1.65 1.34 2.98 2.98 2.98S8 7.63 8 5.98A2.98 2.98 0 004.98 3zM2 9h4v12H2zm6 0h4v1.8h.1c.6-1.1 2-2.1 4-2.1 4.2 0 5 2.8 5 6.4V21h-4v-5.5c0-1.5-.03-3.3-2-3.3-2 0-2.3 1.6-2.3 3.2V21h-4z" />
                </svg>
                <a
                  href="https://linkedin.com/in/azminailalhadi"
                  target="_blank"
                  className="underline"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2">
                {/* GitHub Icon */}
                <svg className="w-4 h-4" fill="black" viewBox="0 0 24 24">
                  <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.39.6.11.8-.26.8-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.5.99.1-.77.42-1.31.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.05.13 3 .4 2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.47 5.93.43.37.82 1.1.82 2.21v3.26c0 .32.2.7.8.58C20.56 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
                </svg>
                <a
                  href="https://github.com/moccagod"
                  target="_blank"
                  className="underline"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-2 border-b border-black inline-block">
              Navigation
            </h3>
            <ul className="space-y-2 mt-2">
              <li>
                <a href="/" className="underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/project" className="underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-gray-600 mt-10 border-t border-black pt-4">
          © {new Date().getFullYear()} Made With 💖 By Azmi Nailal Hadi
        </div>
      </div>
    </footer>
  );
};

export default Footer;
