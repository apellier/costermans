import Image from "next/image";

export default function MenuPage() {
  const menuHighlights = [
    {
      title: "Morning Brunch",
      description: "Start your day with our signature morning creations",
      image: "brunch-vertical",
      highlights: [
        "Costermans Super Bun - €12",
        "N'Duja Eggs - €10",
        "Toasted Brioche - €6"
      ]
    },
    {
      title: "Midi Lunch/Brunch",
      description: "Perfect midday combinations of fresh flavors and comfort",
      image: "lunch-vertical",
      highlights: [
        "Bun aux Légumes - €14",
        "Croque Jambonneau - €14",
        "Crispy Tuna Melt - €14"
      ]
    },
    {
      title: "Dinner",
      description: "Evening delights featuring refined flavors and artisan techniques",
      image: "dinner-vertical",
      highlights: [
        "Ravioles (volaille, n'duja, citron confit et basilic thaï) - €12",
        "Pommes Dauphines (beurre de sauge, ail noir et champignons) - €12",
        "Maquereau à la Flamme (figue violette et shiso) - €12"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Menu Header - Mobile First Hero with Vertical Layout */}
      <section className="relative min-h-screen flex flex-col lg:flex-row">
        {/* Hero Image - Food/Brunch Photo */}
        <div className="relative flex-1 min-h-[50vh] lg:min-h-screen overflow-hidden">
          <Image
            src="/images/brunch/DSC02698-2.jpg"
            alt="Café Costermans - Fresh brunch and artisan cuisine"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/20 via-forest/10 to-forest/30"></div>
        </div>
        
        {/* Menu Content & PDF Access */}
        <div className="relative flex-1 flex items-center justify-center bg-gradient-to-br from-forest to-forest-light">
          <div className="text-center text-white px-4 py-8 lg:py-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 font-light tracking-wide">
              Our Menu
            </h1>
            <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
              Artisan ingredients meet timeless recipes
            </p>
            
            {/* PDF Download Options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/Carte food.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-forest border-2 border-white hover:bg-forest hover:text-white px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Food Menu (PDF)
              </a>
              <a 
                href="/Carte boissons.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-forest border-2 border-white hover:bg-forest hover:text-white px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Drinks Menu (PDF)
              </a>
            </div>
            
            <p className="text-sm text-white/70">
              Scroll down to explore our signature selections
            </p>
          </div>
        </div>
      </section>

      {/* Menu Highlights - Mobile First Vertical Layout */}
      {menuHighlights.map((section, sectionIndex) => (
        <section key={sectionIndex} className={`py-12 lg:py-20 ${sectionIndex % 2 === 0 ? 'bg-white' : 'bg-warm-beige'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
              {/* Vertical Image */}
              <div className="w-full lg:w-1/3">
                <div className="aspect-[3/4] bg-warm-beige rounded-lg overflow-hidden mx-auto max-w-sm lg:max-w-none hover:shadow-lg transition-shadow">
                  <Image
                    src={
                      sectionIndex === 0 ? "/images/brunch/DSC02686-2.jpg" :
                      sectionIndex === 1 ? "/images/brunch/DSC02828-2.jpg" :
                      "/images/dinner/dinner-2.jpg"
                    }
                    alt={`${section.title} at Café Costermans`}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl text-forest mb-4">
                  {section.title}
                </h2>
                <p className="text-lg text-body mb-6">
                  {section.description}
                </p>
                
                {/* Highlight Items */}
                <div className="space-y-3 mb-8">
                  {section.highlights.map((highlight, index) => (
                    <div key={index} className="text-forest font-medium">
                      {highlight}
                    </div>
                  ))}
                </div>
                
                <p className="text-sm text-body italic">
                  View complete selection in our detailed menu PDFs above
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Menu Philosophy Section */}
      <section className="py-16 lg:py-20 bg-forest text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl mb-8 font-light">
                Our Approach
              </h2>
              <div className="space-y-6 text-lg text-white/90">
                <p>
                  We source the finest ingredients from trusted suppliers who share our commitment 
                  to quality and sustainability. Every dish reflects our heritage of craftsmanship.
                </p>
                <p>
                  Our menu changes subtly with the seasons, ensuring freshness while maintaining 
                  the timeless classics our guests love.
                </p>
              </div>
            </div>
            
            <div className="space-y-6 w-full lg:w-auto">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Dietary Accommodations</h3>
                <p className="text-white/90">Vegetarian, vegan, and gluten-free options available upon request</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Local Sourcing</h3>
                <p className="text-white/90">We partner with Belgian producers whenever possible</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Fresh Daily</h3>
                <p className="text-white/90">Pastries baked fresh each morning, coffee roasted weekly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Food Gallery - Vertical Images */}
      <section className="py-16 lg:py-20 bg-warm-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl text-forest mb-6">From Our Kitchen</h2>
            <p className="text-lg lg:text-xl text-body max-w-3xl mx-auto">
              A glimpse into the artistry behind every dish
            </p>
          </div>
          
          {/* Food Photo Grid - Real Food & Drinks Photos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-12">
            {[
              { src: "/images/brunch/DSC02693-2.jpg", alt: "Artisan brunch plate" },
              { src: "/images/drinks/DSC02818-2.jpg", alt: "Specialty coffee creation" },
              { src: "/images/brunch/DSC02705-2.jpg", alt: "Fresh pastries and coffee" },
              { src: "/images/drinks/drinks-2.jpg", alt: "Signature beverages" },
              { src: "/images/brunch/DSC02783-2.jpg", alt: "Gourmet breakfast selection" },
              { src: "/images/drinks/DSC02900-2.jpg", alt: "Coffee craftsmanship" }
            ].map((photo, index) => (
              <div
                key={index}
                className="aspect-[3/4] bg-white rounded-lg overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={300}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <a
              href="https://www.instagram.com/cafecostermans"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Follow Our Kitchen Stories
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}