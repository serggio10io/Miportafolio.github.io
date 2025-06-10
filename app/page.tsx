import Image from "next/image"
import Link from "next/link"
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
              <Image src="/images/logo-new.png" alt="Logo" width={100} height={30} className="h-8 w-auto" />
            </div>
            <Image
              src="/images/icons8-aprobacion-32-updated.png"
              alt="Verificado"
              width={20}
              height={20}
              className="w-5 h-5"
            />
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
              <Image src="/images/foto-de-perfil-new.jpg" alt="Foto de perfil" fill className="object-cover" />
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

          {/* Animated Click Indicator */}
          <div className="text-center mb-8">
            <p className="text-gray-600 text-sm mb-2">
              <span className="inline-block animate-pulse">👆</span>
              <span className="ml-2 animate-bounce inline-block">Haz clic en cualquier proyecto para visitarlo</span>
              <span className="inline-block animate-pulse ml-2">🚀</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Movi+ Project */}
            <Link href="https://moviplusapp.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
              <article className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <Image
                    src="/images/movi-plus-hero.png"
                    alt="Movi+ - Plataforma de Viajes"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Visitar Sitio →
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
                    Movi+ - Plataforma de Viajes
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Aplicación web para conectar pasajeros y conductores en Cuba. Incluye sistema de reservas, rutas
                    optimizadas y viajes seguros las 24/7.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-teal-400 text-white px-3 py-1 rounded-full text-xs">React</span>
                    <span className="bg-teal-400 text-white px-3 py-1 rounded-full text-xs">Next.js</span>
                    <span className="bg-teal-400 text-white px-3 py-1 rounded-full text-xs">Tailwind CSS</span>
                  </div>
                </div>
              </article>
            </Link>

            {/* tuMercao Project */}
            <Link href="https://tu-mercao.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
              <article className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <Image
                    src="/images/tumercao-hero.png"
                    alt="tuMercao - Marketplace Digital"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Visitar Sitio →
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
                    tuMercao - Marketplace Digital
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Mercado digital local en Camagüey para productos de calidad. Plataforma e-commerce con sistema de
                    búsqueda y gestión de inventario.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-teal-400 text-white px-3 py-1 rounded-full text-xs">Vue.js</span>
                    <span className="bg-teal-400 text-white px-3 py-1 rounded-full text-xs">Node.js</span>
                    <span className="bg-teal-400 text-white px-3 py-1 rounded-full text-xs">MongoDB</span>
                  </div>
                </div>
              </article>
            </Link>

            {/* Lashes Jade Project */}
            <Link
              href="https://serggio10io.github.io/LashesJade.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <article className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <Image
                    src="/images/lashes-jade-hero.png"
                    alt="Lashes Jade - Salón de Belleza"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Visitar Sitio →
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                    Lashes Jade - Salón de Belleza
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Sitio web elegante para salón de extensiones de pestañas. Diseño sofisticado con sistema de reservas
                    y galería de servicios.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs">HTML5</span>
                    <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs">CSS3</span>
                    <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs">JavaScript</span>
                  </div>
                </div>
              </article>
            </Link>

            {/* elRody Project */}
            <Link href="https://elrodybarber.vercel.app/" target="_blank" rel="noopener noreferrer" className="block">
              <article className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <Image
                    src="/images/elrody-hero.png"
                    alt="elRody - Barbería Cubana"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Visitar Sitio →
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                    elRody - Barbería Cubana
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Página web para barbería con estilo cubano tradicional. Incluye sistema de citas, localización y
                    galería de estilos de corte.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs">React</span>
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs">Express.js</span>
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs">MySQL</span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      </main>

      <SocialButtons />
      <ScrollToTop />

      <footer className="bg-gray-800 text-white py-8 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <Image src="/images/icons8-derechos-de-autor-32-updated.png" alt="Copyright" width={16} height={16} />
            <span>2024 Freeman. Todos los derechos reservados.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
