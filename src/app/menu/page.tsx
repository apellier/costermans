export default function MenuPage() {
  const menuSections = [
    {
      title: "Brunch Classics",
      description: "Timeless favorites prepared with artisan care",
      image: "brunch-hero",
      items: [
        {
          name: "Eggs Benedict Costermans",
          description: "Free-range poached eggs, Belgian ham, hollandaise sauce on house-made English muffin",
          price: "€16"
        },
        {
          name: "Avocado & Smoked Salmon Toast",
          description: "Sourdough toast, smashed avocado, Nordic salmon, microgreens, lemon zest",
          price: "€14"
        },
        {
          name: "French Toast Grand Sablon",
          description: "Brioche bread, vanilla custard, seasonal berries, maple syrup, whipped cream",
          price: "€12"
        },
        {
          name: "Croque Monsieur Traditionnel",
          description: "Gruyère cheese, Belgian ham, béchamel sauce, served with mixed greens",
          price: "€13"
        }
      ]
    },
    {
      title: "Artisan Coffee & Beverages",
      description: "Carefully selected beans and house-crafted drinks",
      image: "coffee-hero",
      items: [
        {
          name: "Espresso Costermans",
          description: "Single origin Ethiopian beans, notes of chocolate and citrus",
          price: "€3.50"
        },
        {
          name: "Cappuccino",
          description: "Silky microfoam, house blend, choice of oat, almond, or whole milk",
          price: "€4.50"
        },
        {
          name: "Cold Brew Antique",
          description: "24-hour cold extraction, served over ice with a hint of vanilla",
          price: "€5"
        },
        {
          name: "Golden Milk Latte",
          description: "Turmeric, ginger, cinnamon, coconut milk, local honey",
          price: "€5.50"
        }
      ]
    },
    {
      title: "Light Bites & Pastries",
      description: "Fresh selections perfect for your terrace moment",
      image: "pastries-hero",
      items: [
        {
          name: "Almond Croissant",
          description: "Buttery pastry, almond cream, toasted almonds, daily baked",
          price: "€4.50"
        },
        {
          name: "Seasonal Fruit Tart",
          description: "Vanilla custard, fresh seasonal fruits, shortbread crust",
          price: "€6.50"
        },
        {
          name: "Brussels Waffle",
          description: "Traditional recipe, pearl sugar, choice of toppings",
          price: "€8"
        },
        {
          name: "Artisan Cheese Plate",
          description: "Selection of Belgian cheeses, fig jam, walnut bread, honey",
          price: "€15"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Menu Header - Visual Hero */}
      <section className="relative h-screen bg-warm-beige">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50">
          <div className="w-full h-full bg-warm-beige flex items-center justify-center">
            {/* Placeholder for food/menu hero image */}
            <div className="text-forest-green/20 text-center">
              <svg className="w-32 h-32 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm">Menu Hero Image from @cafecostermans</p>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 font-light tracking-wide">
              Our Menu
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
              Artisan ingredients meet timeless recipes
            </p>
          </div>
        </div>
      </section>

      {/* Menu Sections - Visual First */}
      {menuSections.map((section, sectionIndex) => (
        <section key={sectionIndex} className={`py-20 ${sectionIndex % 2 === 0 ? 'bg-white' : 'bg-warm-beige'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header with Visual */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div className={sectionIndex % 2 === 0 ? 'order-first' : 'order-last lg:order-first'}>
                <h2 className="text-4xl text-forest-green mb-6">
                  {section.title}
                </h2>
                <p className="text-xl text-dark-green text-body mb-8">
                  {section.description}
                </p>
              </div>
              
              {/* Section Image */}
              <div className={sectionIndex % 2 === 0 ? 'order-last' : 'order-first lg:order-last'}>
                <div className="aspect-[4/3] bg-warm-beige rounded-lg flex items-center justify-center">
                  <div className="text-forest-green/20 text-center">
                    <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">{section.title} Photo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className="bg-white rounded-lg p-8 card-shadow hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-forest-green pr-4">
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold text-ochre whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-dark-green text-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Menu Philosophy Section */}
      <section className="py-20 bg-forest-green text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl mb-8 font-light">
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
            
            <div className="space-y-6">
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

      {/* Instagram Food Gallery */}
      <section className="py-20 bg-warm-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-forest-green mb-6">From Our Kitchen</h2>
            <p className="text-xl text-dark-green text-body max-w-3xl mx-auto">
              A glimpse into the artistry behind every dish
            </p>
          </div>
          
          {/* Food Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-white rounded-lg flex items-center justify-center group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="text-forest-green/20 group-hover:text-forest-green/30 transition-colors">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
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