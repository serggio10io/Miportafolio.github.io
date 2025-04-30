import Image from "next/image"
import LanguageCarousel from "@/components/language-carousel"
import SocialButtons from "@/components/social-buttons"
import ScrollToTop from "@/components/scroll-to-top"
import { Wave } from "@/components/wave"

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="w-full bg-yellow-300 relative overflow-hidden">
        <nav
          className="fixed w-full flex items-center justify-between p-6 transition-all duration-500 bg-yellow-300 z-50"
          id="navbar"
        >
          <div className="flex items-center gap-1">
            <div className="text-2xl font-light text-black">
              <Image src="/images/logo.png" alt="Logo" width={100} height={30} className="h-8 w-auto" />
            </div>
            <Image src="/images/icons8-aprobación-32.png" alt="Verificado" width={20} height={20} className="w-5 h-5" />
          </div>

          <div className="md:hidden">
            <button className="text-2xl" id="menuToggle">
              &#9776;
            </button>
          </div>

          <ul className="hidden md:flex md:gap-8 items-center" id="menu">
            <li>
              <a
                href="#"
                className="font-bold text-black hover:bg-black hover:text-white hover:px-3 hover:py-1 hover:rounded-2xl transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="font-bold text-black hover:bg-black hover:text-white hover:px-3 hover:py-1 hover:rounded-2xl transition-all duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="font-bold text-black hover:bg-black hover:text-white hover:px-3 hover:py-1 hover:rounded-2xl transition-all duration-300"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-bold text-black hover:bg-black hover:text-white hover:px-3 hover:py-1 hover:rounded-2xl transition-all duration-300"
              >
                Contact
              </a>
            </li>
          </ul>

          <div
            className="fixed top-0 right-[-300px] w-[300px] h-screen bg-yellow-300/95 flex-col justify-center items-center transition-all duration-300 shadow-lg hidden"
            id="mobileMenu"
          >
            <button
              className="absolute top-4 right-4 text-2xl w-10 h-10 flex items-center justify-center rounded-full text-black hover:bg-black hover:text-white transition-all duration-300"
              id="closeMenu"
            >
              &times;
            </button>
            <ul className="flex flex-col items-center gap-4">
              <li>
                <a
                  href="#"
                  className="font-bold text-black hover:bg-black hover:text-white hover:px-3 hover:py-1 hover:rounded-2xl transition-all duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="font-bold text-black hover:bg-black hover:text-white hover:px-3 hover:py-1 hover:rounded-2xl transition-all duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="font-bold text-black hover:bg-black hover:text-white hover:px-3 hover:py-1 hover:rounded-2xl transition-all duration-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-bold text-black hover:bg-black hover:text-white hover:px-3 hover:py-1 hover:rounded-2xl transition-all duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="relative">
          <div className="profile-section text-center pt-40 pb-0 bg-yellow-300 relative overflow-hidden mb-0">
            <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-8 border-black shadow-2xl">
              <Image src="/images/foto-de-perfil.jpg" alt="Foto de perfil" fill className="object-cover" />
            </div>
            <div className="intro-text">
              <span className="bg-gray-800 text-white px-4 py-1 rounded inline-block mb-4 text-sm">
                Hello, i&apos;m
              </span>
              <h1 className="text-5xl font-bold leading-tight mb-4">
                Sergio
                <br />
                Olazabal
              </h1>
              <p className="text-lg font-medium">WEB DEVELOPER & DESIGNER.</p>
            </div>

            <Wave />
          </div>
        </div>
      </header>

      <main>
        <section
          className="about-me py-16 px-8 max-w-3xl mx-auto bg-white rounded-3xl shadow-lg relative z-10"
          id="about"
        >
          <h2 className="text-4xl mb-8 text-gray-800 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-yellow-300 after:rounded">
            Sobre mí
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 mb-6">
            Soy un desarrollador web apasionado por crear experiencias digitales únicas y funcionales. Con una sólida
            formación en diseño y programación, me especializo en la creación de sitios web responsivos y aplicaciones
            web que no solo se ven geniales, sino que también ofrecen una excelente experiencia de usuario.
          </p>
        </section>

        <section className="py-12 bg-gray-50">
          <h2 className="text-4xl mb-8 text-gray-800 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-yellow-300 after:rounded">
            Tecnologías
          </h2>
          <LanguageCarousel />
        </section>

        <section className="portfolio py-16 px-8 bg-gray-50" id="portfolio">
          <h2 className="text-4xl mb-8 text-gray-800 text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-yellow-300 after:rounded">
            Mi Trabajo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <article className="bg-white rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <Image src="/images/web1.jpg" alt="Diseño Web Futurista" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Diseño Web Futurista</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Diseño de interfaz moderna con temática futurista para empresa de tecnología.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-yellow-300 text-black px-3 py-1 rounded-full text-xs">React</span>
                  <span className="bg-yellow-300 text-black px-3 py-1 rounded-full text-xs">Three.js</span>
                  <span className="bg-yellow-300 text-black px-3 py-1 rounded-full text-xs">GSAP</span>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <Image src="/images/web2.jpg" alt="Tienda de Relojes Premium" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Tienda de Relojes Premium</h3>
                <p className="text-gray-600 text-sm mb-4">
                  E-commerce minimalista para marca de relojes de lujo con experiencia de usuario optimizada.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-yellow-300 text-black px-3 py-1 rounded-full text-xs">Next.js</span>
                  <span className="bg-yellow-300 text-black px-3 py-1 rounded-full text-xs">Stripe</span>
                  <span className="bg-yellow-300 text-black px-3 py-1 rounded-full text-xs">Tailwind CSS</span>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <Image src="/images/web3.jpg" alt="Página de Producto Apple" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Página de Producto Tech</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Diseño de landing page para producto tecnológico con enfoque en conversión y experiencia visual.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-yellow-300 text-black px-3 py-1 rounded-full text-xs">HTML5</span>
                  <span className="bg-yellow-300 text-black px-3 py-1 rounded-full text-xs">CSS3</span>
                  <span className="bg-yellow-300 text-black px-3 py-1 rounded-full text-xs">JavaScript</span>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <SocialButtons />
      <ScrollToTop />

      <footer className="bg-gray-800 text-white py-8 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm text-gray-400">© 2024 Freeman. Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  )
}
