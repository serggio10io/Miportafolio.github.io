"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const languages = [
  {
    name: "HTML",
    icon: "/icons/HTML5.svg",
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: "/icons/CSS3.svg",
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: "/icons/JavaScript.svg",
    color: "#F7DF1E",
  },
  {
    name: "typescript",
    icon: "/icons/typescript.svg",
    color: "#007ACC",
  },
  {
    name: "React.js",
    icon: "/icons/react.svg",
    color: "#61DAFB",
  },
  {
    name: "Python",
    icon: "/icons/Python.svg",
    color: "#3776AB",
  },
  {
    name: "Node",
    icon: "/icons/Node.svg",
    color: "#3776AB",
  },
  {
    name: "vite",
    icon: "/icons/vite.svg",
    color: "#646CFF",
  },
  {
    name: "bootstrap",
    icon: "/icons/bootstrap.svg",
    color: "#563D7C",
  },
  {
    name: "git",
    icon: "/icons/git.svg",
    color: "#F05032",
  },
  {
    name: "github",
    icon: "/icons/github.svg",
    color: "#181717",
  },
]

// Duplicamos los lenguajes para crear el efecto infinito
const allLanguages = [...languages, ...languages, ...languages]

export default function LanguageCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    // Función para resetear la posición cuando llega al final
    const checkPosition = () => {
      if (!scrollContainer) return

      // Si hemos desplazado más allá del segundo conjunto, volvemos al primero
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth * (2 / 3)) {
        scrollContainer.scrollLeft = 0
      }
    }

    // Animación de desplazamiento automático
    let animationId: number
    const scroll = () => {
      if (!scrollContainer) return

      scrollContainer.scrollLeft += 1
      checkPosition()
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={scrollRef}
        className="flex items-center gap-12 py-8 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {allLanguages.map((lang, index) => (
          <div key={index} className="flex flex-col items-center flex-shrink-0 transition-all duration-300">
            <div
              className="w-40 h-40 md:w-24 md:h-24 rounded-full flex items-center justify-center p-3"
              style={{ backgroundColor: `${lang.color}20` }}
            >
              <Image
                src={lang.icon || "/placeholder.svg"}
                alt={lang.name}
                width={109} // Increased by 25px from 84
                height={120} // Increased by 25px from 95
                className="w-[4.5rem] h-[114px] md:w-[5.25rem] md:h-[129px]" // Increased by 25px
              />
            </div>
            <span className="mt-2 font-medium text-sm md:text-base">{lang.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
