import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-space-grotesk font-bold text-sun mb-4 title-accent">Café Costermans</h3>
            <p className="text-white/80 mb-4 font-space-grotesk">
              A timeless, slightly secret terrace in the heart of Sablon, 
              where heritage meets modern café culture.
            </p>
            <p className="text-sm text-white/60 font-space-grotesk">
              Connected to Costermans Antiquaire - a family tradition of craftsmanship and authenticity.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-space-grotesk font-bold text-white mb-4" style={{color: 'white'}}>Visit Us</h4>
            <address className="text-white not-italic font-space-grotesk">
              <p className="mb-2">5 place du grand sablon</p>
              <p className="mb-2">1000 Bruxelles</p>
              <p>
                <a href="mailto:cafecostermans@gmail.com" className="text-white hover:text-grasse transition-colors">
                  cafecostermans@gmail.com
                </a>
              </p>
            </address>
          </div>

          {/* Hours & Links */}
          <div>
            <h4 className="text-lg font-space-grotesk font-bold text-white mb-4" style={{color: 'white'}}>Hours</h4>
            <div className="text-white space-y-1 mb-6 font-space-grotesk">
              <p><strong>Mardi:</strong> 09h-18h</p>
              <p><strong>Mercredi:</strong> 09h-23h</p>
              <p><strong>Jeudi:</strong> 09h-23h</p>
              <p><strong>Vendredi:</strong> 09h-23h</p>
              <p><strong>Samedi:</strong> 09h-18h</p>
              <p><strong>Dimanche:</strong> 09h-18h</p>
              <p className="text-sm italic">Fermé le lundi</p>
            </div>
            
            <div className="flex space-x-4">
              <Link href="/menu" className="text-white hover:text-grasse transition-colors font-space-grotesk">
                Menu
              </Link>
              <Link href="/about" className="text-white hover:text-grasse transition-colors font-space-grotesk">
                About
              </Link>
              <Link href="/contact" className="text-white hover:text-grasse transition-colors font-space-grotesk">
                Contact
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-forest mt-8 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Maison Costermans SRL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}