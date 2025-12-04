
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene, QuantumComputerScene } from './components/QuantumScene';
import { InvestmentChart, RevenueChart, LocationViz, MenuPreview } from './components/Diagrams';
import { ArrowDown, Menu, X, Wine, Flame, MapPin, DollarSign, Utensils } from 'lucide-react';

const TeamCard = ({ name, role, desc }: { name: string, role: string, desc?: string }) => {
  return (
    <div className="flex flex-col group items-start p-6 bg-white rounded-none border-l-2 border-casa-gold/20 hover:border-casa-gold transition-all duration-300 w-full">
      <h3 className="font-serif text-2xl text-casa-black mb-1">{name}</h3>
      <p className="text-xs text-casa-gold font-bold uppercase tracking-widest mb-3">{role}</p>
      {desc && <p className="text-sm text-stone-500 leading-relaxed">{desc}</p>}
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4] text-stone-800 selection:bg-casa-gold selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-casa-black/95 backdrop-blur-md shadow-lg py-4 border-b border-stone-800' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className={`font-serif font-bold text-xl tracking-[0.2em] transition-colors ${scrolled ? 'text-white' : 'text-casa-black'}`}>
              CASA DE ORO
            </div>
          </div>
          
          <div className={`hidden md:flex items-center gap-8 text-xs font-bold tracking-widest uppercase transition-colors ${scrolled ? 'text-stone-400' : 'text-stone-600'}`}>
            <a href="#vision" onClick={scrollToSection('vision')} className="hover:text-casa-gold transition-colors cursor-pointer">The Vision</a>
            <a href="#experience" onClick={scrollToSection('experience')} className="hover:text-casa-gold transition-colors cursor-pointer">Experience</a>
            <a href="#location" onClick={scrollToSection('location')} className="hover:text-casa-gold transition-colors cursor-pointer">Location</a>
            <a href="#financials" onClick={scrollToSection('financials')} className="hover:text-casa-gold transition-colors cursor-pointer">Financials</a>
            <a 
              href="#contact"
              onClick={scrollToSection('contact')}
              className={`px-6 py-2 border transition-all duration-300 ${scrolled ? 'border-casa-gold text-casa-gold hover:bg-casa-gold hover:text-casa-black' : 'border-casa-black text-casa-black hover:bg-casa-black hover:text-white'}`}
            >
              Invest
            </a>
          </div>

          <button className={`md:hidden p-2 ${scrolled ? 'text-white' : 'text-casa-black'}`} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-casa-cream flex flex-col items-center justify-center gap-8 text-xl font-serif animate-fade-in">
            <a href="#vision" onClick={scrollToSection('vision')} className="text-casa-black hover:text-casa-gold uppercase tracking-widest">The Vision</a>
            <a href="#experience" onClick={scrollToSection('experience')} className="text-casa-black hover:text-casa-gold uppercase tracking-widest">Experience</a>
            <a href="#location" onClick={scrollToSection('location')} className="text-casa-black hover:text-casa-gold uppercase tracking-widest">Location</a>
            <a href="#financials" onClick={scrollToSection('financials')} className="text-casa-black hover:text-casa-gold uppercase tracking-widest">Financials</a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-casa-cream">
        <HeroScene />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-1 border border-casa-gold text-casa-gold text-xs tracking-[0.3em] uppercase font-bold backdrop-blur-sm bg-white/50">
            Investment Opportunity
          </div>
          <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl text-casa-black leading-tight mb-6">
            CASA DE ORO
          </h1>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-stone-600 font-serif italic mb-12">
            Modern Mexican Steakhouse & Lounge
          </p>
          
          <div className="flex justify-center">
             <a href="#vision" onClick={scrollToSection('vision')} className="group flex flex-col items-center gap-3 text-xs font-bold tracking-widest text-stone-400 hover:text-casa-gold transition-colors cursor-pointer">
                <span>EXPLORE</span>
                <span className="p-3 border border-stone-300 rounded-full group-hover:border-casa-gold transition-colors bg-white/50">
                    <ArrowDown size={16} />
                </span>
             </a>
          </div>
        </div>
      </header>

      <main>
        {/* The Vision */}
        <section id="vision" className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-5 sticky top-32">
              <div className="inline-block mb-3 text-xs font-bold tracking-widest text-casa-gold uppercase">The Concept</div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight text-casa-black">Approachable Luxury in the Inland Empire</h2>
              <div className="w-24 h-1 bg-casa-gold mb-8"></div>
              <p className="text-lg text-stone-600 leading-relaxed font-serif italic">
                "We are filling a void in the Inland Empire that affluent customers have been forced to drive to Orange County or Los Angeles to experience."
              </p>
            </div>
            <div className="md:col-span-7 text-lg text-stone-600 leading-relaxed space-y-8">
              <p>
                <strong className="text-casa-black">Casa De Oro</strong> will introduce a modern interpretation of Mexican fine dining, blending premium wagyu, prime steaks, Baja coastal seafood, and fire-driven culinary techniques within an elevated, architecturally refined environment.
              </p>
              <p>
                The concept emphasizes a seductive yet approachable luxury atmosphere supported by an open-kitchen layout, allowing guests to experience craftsmanship, quality ingredients, and contemporary Mexican cuisine in real time.
              </p>
              
              <div className="bg-[#F5F4F0] p-8 rounded-xl border border-stone-200 mt-8">
                  <h3 className="font-serif text-2xl mb-4 text-casa-black">Target Audience</h3>
                  <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-casa-gold rounded-full mt-2.5"></span>
                          <span><strong>Local Professionals & High Income Households:</strong> Young professionals, entrepreneurs, and affluent families.</span>
                      </li>
                      <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-casa-gold rounded-full mt-2.5"></span>
                          <span><strong>Experience Seekers:</strong> Diners looking for elevated cuisine, refined ambiance, and a social environment.</span>
                      </li>
                  </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience / Menu */}
        <section id="experience" className="py-24 bg-casa-black text-white overflow-hidden relative">
            {/* Abstract Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-casa-gold blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-stone-700 blur-[150px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-casa-gold text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-white/20">
                        <Flame size={14} /> Culinary & Design
                    </div>
                    <h2 className="font-serif text-4xl md:text-6xl mb-6">Seductive Ambience</h2>
                    <p className="max-w-2xl mx-auto text-stone-400 text-lg">
                        Matte black, gold accents, textured stone, and warm indirect lighting create a design language that signals luxury the moment guests walk in.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                         <div>
                            <h3 className="font-serif text-3xl mb-4 text-white flex items-center gap-3">
                                <Utensils className="text-casa-gold"/> Core Offerings
                            </h3>
                            <MenuPreview />
                         </div>
                         
                         <div className="pt-8 border-t border-white/10">
                            <h3 className="font-serif text-3xl mb-4 text-white flex items-center gap-3">
                                <Wine className="text-casa-gold"/> High-End Cocktail Bar
                            </h3>
                            <p className="text-stone-400 leading-relaxed">
                                A social centerpiece featuring mixology-driven offerings inspired by coastal and fire-driven Mexican flavors. Emphasizing premium tequilas and mezcals.
                            </p>
                         </div>
                    </div>
                    
                    <div className="relative aspect-square bg-[#111] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <QuantumComputerScene />
                        <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/80 backdrop-blur-md rounded-xl border border-white/10">
                            <p className="text-sm font-serif italic text-casa-gold">"We are not creating another restaurant — we are creating a prestige environment that positions us as the Inland Empire’s first true luxury Mexican concept."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Location */}
        <section id="location" className="py-24 bg-white border-b border-stone-200">
             <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <LocationViz />
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-stone-200">
                            <MapPin size={14}/> Flagship Location
                        </div>
                        <h2 className="font-serif text-4xl mb-6 text-casa-black">Downtown Riverside</h2>
                        <h3 className="text-xl font-bold text-stone-500 mb-6">Market St. & Mission Inn Ave</h3>
                        
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                           A 5,500 sq ft corner space sitting directly across from the Riverside Food Lab and within a short walk of the historic Mission Inn Hotel & Spa.
                        </p>
                        <ul className="space-y-4 text-stone-600">
                            <li className="flex gap-3">
                                <span className="w-6 h-6 rounded-full bg-casa-gold/20 flex items-center justify-center text-casa-gold shrink-0">✓</span>
                                <span><strong>First-Generation Buildout:</strong> Complete creative freedom for a purpose-built, world-class space.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="w-6 h-6 rounded-full bg-casa-gold/20 flex items-center justify-center text-casa-gold shrink-0">✓</span>
                                <span><strong>High Traffic:</strong> Crossroads of highest pedestrian activity and tourism draw.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="w-6 h-6 rounded-full bg-casa-gold/20 flex items-center justify-center text-casa-gold shrink-0">✓</span>
                                <span><strong>Market Dominance:</strong> No direct competition in the luxury modern Mexican space.</span>
                            </li>
                        </ul>
                    </div>
                </div>
             </div>
        </section>

        {/* Financials */}
        <section id="financials" className="py-24 bg-[#F9F8F4]">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">THE NUMBERS</div>
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 text-casa-black">Financial Overview</h2>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        Casa De Oro is engineered for profitability through high-margin bar sales, premium menu pricing, and operational efficiency.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <InvestmentChart />
                    <div className="flex flex-col justify-center">
                        <RevenueChart />
                        <div className="mt-8 p-6 bg-white border-l-4 border-casa-gold shadow-sm">
                            <h4 className="font-serif text-xl mb-2 text-casa-black">Scalability & Growth</h4>
                            <p className="text-sm text-stone-600">
                                Following a successful launch, expansion will focus on high-income suburban and coastal markets across Southern California (Orange County, Pasadena, San Diego) and major Southwest markets (Scottsdale, Las Vegas).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Team / Strategic */}
        <section id="contact" className="py-24 bg-casa-black text-white border-t border-stone-800">
           <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="font-serif text-3xl md:text-4xl mb-8">Strategic Leadership</h2>
                        <div className="space-y-6">
                            <TeamCard 
                                name="Oscar De La Hoya" 
                                role="Strategic Partner" 
                                desc="Provides strategic credibility, cultural authenticity, and enhanced visibility. Assists with financing, media attention, and long-term scalability."
                            />
                            <TeamCard 
                                name="Operational Team" 
                                role="Execution" 
                                desc="Experienced Executive Chef, Mixologists, and Front-of-House management dedicated to disciplined execution and consistent quality."
                            />
                        </div>
                    </div>
                    
                    <div>
                         <div className="p-8 bg-casa-gold rounded-xl text-casa-black">
                            <h2 className="font-serif text-3xl mb-4">Invest in Casa De Oro</h2>
                            <p className="mb-8 font-medium">Be part of the Inland Empire's new flagship luxury destination.</p>
                            
                            <div className="space-y-4">
                                <div className="flex justify-between border-b border-black/10 pb-2">
                                    <span className="font-bold">Total Investment</span>
                                    <span className="font-mono">$2,500,000</span>
                                </div>
                                <div className="flex justify-between border-b border-black/10 pb-2">
                                    <span className="font-bold">Projected Net Profit</span>
                                    <span className="font-mono">~$756,000/yr</span>
                                </div>
                                <div className="flex justify-between border-b border-black/10 pb-2">
                                    <span className="font-bold">Location</span>
                                    <span className="font-mono">Downtown Riverside</span>
                                </div>
                            </div>

                            <button className="mt-8 w-full py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-stone-900 transition-colors">
                                Request Pitch Deck
                            </button>
                         </div>
                    </div>
                </div>
           </div>
        </section>

      </main>

      <footer className="bg-casa-black text-stone-500 py-16 border-t border-stone-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <div className="text-white font-serif font-bold text-2xl mb-2 tracking-widest">CASA DE ORO</div>
                <p className="text-xs uppercase tracking-wider">Modern Mexican Steakhouse & Lounge</p>
            </div>
            <div className="flex gap-8 text-sm">
                <a href="#" className="hover:text-casa-gold">Instagram</a>
                <a href="#" className="hover:text-casa-gold">TikTok</a>
                <a href="#" className="hover:text-casa-gold">Press</a>
            </div>
        </div>
        <div className="text-center mt-12 text-xs text-stone-700">
            © 2024 Casa De Oro. Confidential Investment Opportunity.
        </div>
      </footer>
    </div>
  );
};

export default App;
