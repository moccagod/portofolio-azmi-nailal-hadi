const Footer = () => {
  return (
    <footer className="bg-white border-t-4 border-black mt-10 py-6 px-4">
      <div className="max-w-5xl mx-auto text-black">
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="font-bold text-lg mb-2 border-b border-black inline-block">
              Tentang
            </h3>
            <p>
              Website ini adalah portfolio yang menampilkan berbagai project
              yang telah saya kerjakan, dengan tampilan bergaya komik.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2 border-b border-black inline-block">
              Kontak
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                {/* Email Icon */}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16v16H4z" stroke="black" fill="none" />
                  <path d="M4 4l8 6 8-6" stroke="black" fill="none" />
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
                  <path d="M4.98 3C3.34 3 2 4.34 2 5.98s1.34 2.98 2.98 2.98S8 7.62 8 5.98 6.62 3 4.98 3zM2 9h6v12H2zM14 9h4v1.79h.06c.55-.99 1.9-2.04 3.94-2.04 4.22 0 5 2.78 5 6.39V21h-6v-6c0-1.44-.03-3.3-2-3.3s-2.3 1.56-2.3 3.18V21h-6z" />
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
                  <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.263.793-.583 0-.287-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.204.084 1.837 1.236 1.837 1.236 1.07 1.834 2.805 1.304 3.492.996.107-.775.42-1.305.763-1.604-2.665-.3-5.467-1.334-5.467-5.934 0-1.31.469-2.382 1.236-3.222-.124-.303-.536-1.522.117-3.176 0 0 1.008-.323 3.3 1.23a11.505 11.505 0 0 1 3-.403c1.02.005 2.045.137 3 .403 2.29-1.553 3.297-1.23 3.297-1.23.655 1.654.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.63-5.48 5.922.432.37.82 1.096.82 2.21 0 1.594-.015 2.875-.015 3.266 0 .322.192.7.8.582C20.565 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
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

          <div>
            <h3 className="font-bold text-lg mb-2 border-b border-black inline-block">
              Navigasi
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="underline">
                  Homepage
                </a>
              </li>
              <li>
                <a href="/project" className="underline">
                  Project
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

        <div className="text-center text-xs text-gray-600 mt-6 border-t border-black pt-4">
          © {new Date().getFullYear()} Dibuat oleh Azmi Nailal Hadi. Semua hak
          dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
