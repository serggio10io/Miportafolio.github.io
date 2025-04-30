"use server"

import { NextResponse } from "next/server"

export async function GET() {
  // Simulación de una API para obtener los elementos del menú
  const menuItems = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "#about" },
    { id: 3, name: "Portfolio", url: "#portfolio" },
    { id: 4, name: "Contact", url: "#contact" },
  ]

  return NextResponse.json({ menuItems })
}
