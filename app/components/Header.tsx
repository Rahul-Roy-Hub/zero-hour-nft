import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50 text-4xl">
      <div className="container mx-auto px-2 py-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative w-[60px] h-[60px]">
            <Image
              src="/ZombieGif.gif"
              alt="Header animation"
              fill
              className="object-contain"
              priority
            />
          </div>
          <Link href="/" className="text-5xl font-bold text-red-500">
            Zero Hour
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
          <li>
              <Link href="#story" className="hover:text-red-500 transition-colors">
                Story
              </Link>
            </li>
            <li>
              <Link href="#collection" className="hover:text-red-500 transition-colors">
                Collection
              </Link>
            </li>
            <li>
              <Link href="#community" className="hover:text-red-500 transition-colors">
                Community
              </Link>
            </li>
            <li>
              <Link href="#links" className="hover:text-red-500 transition-colors">
                Links
              </Link>
            </li>
          </ul>
        </nav>
        <Button variant="destructive" className="text-2xl">Connect Wallet</Button>
      </div>
      
    </header>
  )
}

