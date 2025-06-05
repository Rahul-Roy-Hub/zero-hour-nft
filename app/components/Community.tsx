import { Users, MessageSquare, Share2 } from "lucide-react"

export default function Community() {
  return (
    <section id="community" className="relative py-60 bg-gray-800">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/EarthGlobalBg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-6xl font-medium mb-12 text-center hover:text-green-500 transition-colors">Join Our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Users size={50} className="mx-auto mb-4 text-green-500" />
            <h3 className="text-4xl font-normal mb-2">10,000+ Survivors</h3>
            <p className="text-2xl">Community of apocalypse enthusiasts</p>
          </div>
          <div className="text-center">
            <MessageSquare size={50} className="mx-auto mb-4 text-green-500" />
            <h3 className="text-4xl font-normal mb-2">Active Discord</h3>
            <p className="text-2xl">Engage in discussions, events, and exclusive giveaways</p>
          </div>
          <div className="text-center">
            <Share2 size={50} className="mx-auto mb-4 text-green-500" />
            <h3 className="text-4xl font-normal mb-2">Share Your Story</h3>
            <p className="text-2xl">Create and share your own apocalyptic adventures</p>
          </div>
        </div>
      </div>
    </section>
  )
}

