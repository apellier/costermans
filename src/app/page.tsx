import Link from "next/link";
import InstagramEmbed from "@/components/InstagramEmbed";

export default function Home() {
  return (
    <>
      {/* Hero Section - Full Screen Visual */}
      <section className="relative h-screen" aria-labelledby="hero-heading">
        {/* Hero Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50">
          <div className="w-full h-full bg-warm-beige flex items-center justify-center">
            {/* Replace this placeholder with actual hero image from Instagram */}
            <div className="text-forest-green/20 text-center">
              <svg className="w-32 h-32 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">Hero Image from @cafecostermans</p>
            </div>
          </div>
        </div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6 lg:px-8">
            <h1 id="hero-heading" className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 font-light tracking-wide">
              Café Costermans
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
              A secret terrace in the heart of Sablon
            </p>
            <Link href="/menu" className="btn-primary">
              Discover Our Menu
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Atmosphere Section - Photo Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-forest-green mb-6">The Experience</h2>
            <p className="text-xl text-dark-green text-body max-w-3xl mx-auto">
              Step into our world where heritage meets modern café culture
            </p>
          </div>
          
          {/* Photo Grid - Replace with actual Instagram photos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="aspect-square bg-warm-beige rounded-lg flex items-center justify-center group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow">
              <div className="text-forest-green/20 group-hover:text-forest-green/30 transition-colors">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="aspect-square bg-warm-beige rounded-lg flex items-center justify-center group cursor-pointer overflow-hidden md:col-span-2 hover:shadow-lg transition-shadow">
              <div className="text-forest-green/20 group-hover:text-forest-green/30 transition-colors">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="aspect-square bg-warm-beige rounded-lg flex items-center justify-center group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow">
              <div className="text-forest-green/20 group-hover:text-forest-green/30 transition-colors">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="aspect-square bg-warm-beige rounded-lg flex items-center justify-center group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow">
              <div className="text-forest-green/20 group-hover:text-forest-green/30 transition-colors">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="aspect-square bg-warm-beige rounded-lg flex items-center justify-center group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow">
              <div className="text-forest-green/20 group-hover:text-forest-green/30 transition-colors">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="aspect-square bg-warm-beige rounded-lg flex items-center justify-center group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow">
              <div className="text-forest-green/20 group-hover:text-forest-green/30 transition-colors">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Simple essence statements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl text-forest-green mb-3">Heritage</h3>
              <p className="text-dark-green text-body">Connected to Costermans Antiquaire</p>
            </div>
            <div>
              <h3 className="text-2xl text-forest-green mb-3">Atmosphere</h3>
              <p className="text-dark-green text-body">Secret terrace in Sablon</p>
            </div>
            <div>
              <h3 className="text-2xl text-forest-green mb-3">Quality</h3>
              <p className="text-dark-green text-body">Artisan coffee & fresh cuisine</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <InstagramEmbed />
      
      {/* Visit Us Section - Simplified */}
      <section className="py-20 bg-warm-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-forest-green mb-12">Visit Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl text-forest-green mb-4">Hours</h3>
              <div className="text-dark-green space-y-2 text-lg">
                <p>Monday - Friday: 8:00 - 17:00</p>
                <p>Saturday: 9:00 - 18:00</p>
                <p>Sunday: 9:00 - 16:00</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl text-forest-green mb-4">Location</h3>
              <p className="text-dark-green text-lg mb-6">
                Place du Grand Sablon<br />
                1000 Brussels, Belgium
              </p>
              <div className="space-y-4">
                <Link href="/contact" className="block btn-primary">
                  Get Directions
                </Link>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:+32123456789" className="text-forest-green hover:text-ochre transition-colors font-medium">
                    +32 (0)12 34 56 789
                  </a>
                  <a href="mailto:hello@costermans.be" className="text-forest-green hover:text-ochre transition-colors font-medium">
                    hello@costermans.be
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}