"use client"

import Image from "next/image"
import Link from "next/link"

export default function SocialButtons() {
  return (
    <div className="fixed right-8 bottom-8 flex flex-col gap-4 z-50">
      <Link
        href="https://www.instagram.com/io_serggio?igsh=a3N6bXdyb2E1ODB2"
        target="_blank"
        className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-300 hover:-translate-y-1"
      >
        <Image src="/images/icons8-instagram-32-updated.png" alt="Instagram" width={24} height={24} />
      </Link>
      <Link
        href="https://wa.me/+5358850138?text=vengo%20desde%20tu%20portafolio%20y%20me%20interesa%20desarrollar%20un%20proyecto"
        target="_blank"
        className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-300 hover:-translate-y-1"
      >
        <Image src="/images/icons8-whatsapp-32-updated.png" alt="WhatsApp" width={24} height={24} />
      </Link>
      <Link
        href="https://facebook.com/sergio.olazabalgomez?mibextid=ZbWKwL"
        target="_blank"
        className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-300 hover:-translate-y-1"
      >
        <Image src="/images/icons8-facebook-32-updated.png" alt="Facebook" width={24} height={24} />
      </Link>
    </div>
  )
}
