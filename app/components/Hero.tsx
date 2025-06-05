import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center hero-background">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-4">Zero Hour</h1>
        <p className="text-2xl mb-8">The apocalypse is here. Will you survive?</p>
        <Button variant="destructive" className="text-2xl px-8 py-6">
          Mint Now
        </Button>
      </div>
    </section>
  )
}

