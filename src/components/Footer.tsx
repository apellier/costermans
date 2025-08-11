import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-sans font-bold text-gold mb-4">Café Costermans</h3>
            <p className="text-gray-300 mb-4">
              A timeless, slightly secret terrace in the heart of Sablon, 
              where heritage meets modern café culture.
            </p>
            <p className="text-sm text-gray-400">
              Connected to Costermans Antiquaire - a family tradition of craftsmanship and authenticity.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-sans font-medium text-gold mb-4">Visit Us</h4>
            <address className="text-gray-300 not-italic">
              <p className="mb-2">Place du Grand Sablon</p>
              <p className="mb-2">1000 Brussels, Belgium</p>
              <p className="mb-2">
                <a href="tel:+32123456789" className="hover:text-ochre transition-colors">
                  +32 (0)12 34 56 789
                </a>
              </p>
              <p>
                <a href="mailto:hello@costermans.be" className="hover:text-ochre transition-colors">
                  hello@costermans.be
                </a>
              </p>
            </address>
          </div>

          {/* Hours & Links */}
          <div>
            <h4 className="text-lg font-sans font-medium text-gold mb-4">Hours</h4>
            <div className="text-gray-300 space-y-1 mb-6">
              <p>Monday - Friday: 8:00 - 17:00</p>
              <p>Saturday: 9:00 - 18:00</p>
              <p>Sunday: 9:00 - 16:00</p>
            </div>
            
            <div className="flex space-x-4">
              <Link href="/menu" className="text-gray-300 hover:text-ochre transition-colors font-sans">
                Menu
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-ochre transition-colors font-sans">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-ochre transition-colors font-sans">
                Contact
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-forest-green-light mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Café Costermans. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}