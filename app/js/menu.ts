"use client"

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar")
  const menuToggle = document.getElementById("menuToggle")
  const mobileMenu = document.getElementById("mobileMenu")
  const closeMenu = document.getElementById("closeMenu")
  const menuLinks = document.querySelectorAll("#mobileMenu a")

  // Cambiar estilo del navbar al hacer scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar?.classList.add("bg-white", "shadow-md")
      navbar?.classList.remove("bg-yellow-300")
    } else {
      navbar?.classList.remove("bg-white", "shadow-md")
      navbar?.classList.add("bg-yellow-300")
    }
  })

  // Abrir menú móvil
  menuToggle?.addEventListener("click", () => {
    if (mobileMenu) {
      mobileMenu.classList.remove("hidden")
      mobileMenu.classList.add("flex")
      // Use setTimeout to ensure the display change happens before the transition
      setTimeout(() => {
        mobileMenu.classList.remove("right-[-300px]")
        mobileMenu.classList.add("right-0")
      }, 10)
    }
  })

  // Cerrar menú móvil
  closeMenu?.addEventListener("click", () => {
    if (mobileMenu) {
      mobileMenu.classList.remove("right-0")
      mobileMenu.classList.add("right-[-300px]")
      setTimeout(() => {
        mobileMenu.classList.remove("flex")
        mobileMenu.classList.add("hidden")
      }, 300)
    }
  })

  // Cerrar menú al hacer clic en un enlace
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileMenu) {
        mobileMenu.classList.remove("right-0")
        mobileMenu.classList.add("right-[-300px]")
        setTimeout(() => {
          mobileMenu.classList.remove("flex")
          mobileMenu.classList.add("hidden")
        }, 300)
      }
    })
  })

  // Cerrar menú al hacer clic fuera
  document.addEventListener("click", (event) => {
    const target = event.target as Node
    if (mobileMenu && navbar && !navbar.contains(target) && mobileMenu.classList.contains("flex")) {
      mobileMenu.classList.remove("right-0")
      mobileMenu.classList.add("right-[-300px]")
      setTimeout(() => {
        mobileMenu.classList.remove("flex")
        mobileMenu.classList.add("hidden")
      }, 300)
    }
  })
})
