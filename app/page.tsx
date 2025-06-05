import Header from "./components/Header"
import Hero from "./components/Hero"
import Collection from "./components/Collection"
import Community from "./components/Community"
import Story from "./components/Story"
import Links from "./components/Links"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Header />
      <main>
        <Hero />
        <Story />
        <Collection />
        <Community />
        <Links />
      </main>
      <Footer />
    </div>
  )
}
