import { Button } from "@/components/ui/button"
import { Twitter, Github, DiscIcon as Discord } from "lucide-react"

export default function Links() {
  return (
    <section id="links" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Connect With Us</h2>
        <div className="flex justify-center space-x-6">
          <Button
            className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 rounded-lg"
            size="lg"
          >
            <Twitter className="mr-2 h-8 w-8" />
            <span className="text-2xl font-normal">Twitter</span>
          </Button>
          <Button
            className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 rounded-lg"
            size="lg"
          >
            <Discord className="mr-2 h-8 w-8" />
            <span className="text-2xl font-normal">Discord</span>
          </Button>
          <Button
            className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 rounded-lg"
            size="lg"
          >
            <Github className="mr-2 h-8 w-8" />
            <span className="text-2xl font-normal">GitHub</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

