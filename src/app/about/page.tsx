import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* About Header - Visual */}
      <section className="relative h-screen bg-warm-beige">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50">
          <div className="w-full h-full bg-warm-beige flex items-center justify-center">
            {/* Placeholder for heritage/interior image */}
            <div className="text-forest-green/20 text-center">
              <svg className="w-32 h-32 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">Heritage Image from @cafecostermans</p>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 font-light tracking-wide">
              Our Story
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
              Where generations of craftsmanship meet modern café culture
            </p>
          </div>
        </div>
      </section>

      {/* Heritage Story - Visual and Atmospheric */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Story Content */}
            <div>
              <h2 className="text-4xl text-forest-green mb-8">
                A Legacy of Excellence
              </h2>
              <div className="space-y-6 text-lg text-dark-green text-body">
                <p>
                  Café Costermans emerges from a rich family heritage rooted in Costermans Antiquaire, 
                  where for generations, our family has cultivated an appreciation for craftsmanship, 
                  authenticity, and the finest things in life.
                </p>
                <p>
                  This deep understanding of quality and attention to detail naturally evolved into 
                  our café, where we apply the same principles to every cup of coffee, every dish, 
                  and every moment our guests spend with us.
                </p>
              </div>
            </div>
            
            {/* Heritage Photo */}
            <div className="order-first lg:order-last">
              <div className="aspect-[4/3] bg-warm-beige rounded-lg flex items-center justify-center">
                <div className="text-forest-green/20 text-center">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">Antique Heritage Photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Secret Terrace - Photo-Focused */}
      <section className="py-20 bg-warm-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-forest-green mb-6">
              Our Secret Terrace
            </h2>
            <p className="text-xl text-dark-green text-body max-w-3xl mx-auto">
              Tucked away in the heart of Sablon, our terrace offers a timeless escape from the bustling city
            </p>
          </div>
          
          {/* Photo Grid showcasing the terrace */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="aspect-square bg-white rounded-lg flex items-center justify-center group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow">
              <div className="text-forest-green/20 group-hover:text-forest-green/30 transition-colors">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="aspect-square bg-white rounded-lg flex items-center justify-center group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow">
              <div className="text-forest-green/20 group-hover:text-forest-green/30 transition-colors">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="aspect-square bg-white rounded-lg flex items-center justify-center group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow">
              <div className="text-forest-green/20 group-hover:text-forest-green/30 transition-colors">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Atmosphere description */}
          <div className="text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-dark-green text-body leading-relaxed">
                Natural materials, warm lighting, and subtle antique details create an atmosphere 
                that feels both contemporary and timeless. Every element has been chosen to reflect 
                our family&apos;s appreciation for enduring beauty and authentic craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Simplified and Visual */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-forest-green mb-6">
              What Drives Us
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="aspect-square bg-warm-beige rounded-lg flex items-center justify-center mb-6 mx-auto max-w-48">
                <div className="text-forest-green/20">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl text-forest-green mb-4">Quality</h3>
              <p className="text-dark-green text-body">
                Every ingredient, every detail reflects our unwavering commitment to excellence
              </p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square bg-warm-beige rounded-lg flex items-center justify-center mb-6 mx-auto max-w-48">
                <div className="text-forest-green/20">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl text-forest-green mb-4">Heritage</h3>
              <p className="text-dark-green text-body">
                We honor our family legacy while embracing modern café innovation
              </p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square bg-warm-beige rounded-lg flex items-center justify-center mb-6 mx-auto max-w-48">
                <div className="text-forest-green/20">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl text-forest-green mb-4">Community</h3>
              <p className="text-dark-green text-body">
                Creating connections over exceptional experiences in our secret garden
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Visual */}
      <section className="py-20 bg-forest-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6 font-light">
            Experience Our Story
          </h2>
          <p className="text-xl mb-12 text-white/90 font-light max-w-2xl mx-auto">
            Visit our secret terrace and become part of the continuing story of Café Costermans
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/menu" className="bg-ochre text-dark-green px-8 py-4 rounded-full font-medium hover:bg-gold transition-colors duration-300">
              View Our Menu
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-forest-green transition-all duration-300">
              Visit Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}