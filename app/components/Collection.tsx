import Image from "next/image"
import Link from 'next/link';

const nfts = [
  { id: 0, name: "Wasteland Warrior", image: "/nft1.jpg" },
  { id: 1, name: "Toxic Avenger", image: "/nft3.jpg" },
  { id: 2, name: "Cybernetic Survivor", image: "/nft2.jpg" },
  { id: 3, name: "Dark Hunter", image: "/nft4.jpg" },
  { id: 4, name: "Mutant Hunter", image: "/nft5.jpg" },
]

export default function Collection() {
  return (
    <section id="collection" className="py-20 bg-gray-900 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium mb-12 text-center text-white">Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {nfts.map((nft) => (
            <div key={nft.id} className="bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src={nft.image || "/placeholder.svg"}
                alt={nft.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-medium text-white">{nft.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 right-4">
          <Link href="/full-collection" className="text-xl bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
            View More
          </Link>
        </div>
      </div>
    </section>
  )
}

