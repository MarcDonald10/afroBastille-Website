import React from 'react';
import { MapPin, Phone, Mail, Clock, CreditCard, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
            Contact & Localisation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Venez nous rendre visite ou contactez-nous pour plus d'informations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Informations de Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-yellow-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Adresse</h4>
                    <p className="text-gray-600">
                      1 Rue Amiral Courbet,<br />
                      38000 Grenoble, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-yellow-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Téléphone</h4>
                    <a 
                      href="tel:+33752898820" 
                      className="text-gray-600 hover:text-yellow-600 transition-colors"
                    >
                      +33 7 52 89 88 20
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-yellow-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                    <a 
                      href="mailto:contact@afrobastille.fr" 
                      className="text-gray-600 hover:text-yellow-600 transition-colors"
                    >
                      contact@afrobastille.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-yellow-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Horaires d'ouverture</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Lundi - Samedi : 12h - 14h30 & 19h - 22h</p>
                      <p>Dimanche : 12h - 15h</p>
                      <p className="text-sm text-red-600 mt-2">Fermé le dimanche soir</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Moyens de Paiement</h3>
              <div className="flex items-center space-x-4 text-gray-600">
                <CreditCard size={24} />
                <span>CB, Visa, Mastercard, American Express, Espèces</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="flex items-center justify-center w-12 h-12 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin size={48} className="mx-auto mb-4" />
                <p className="text-lg font-medium">Carte Google Maps</p>
                <p className="text-sm">12 Rue de la Bastille, 38000 Grenoble</p>
                <p className="text-sm mt-2">
                  Intégration Google Maps API requise pour l'affichage interactif
                </p>
              </div>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-gray-800 mb-2">Comment nous trouver</h4>
              <p className="text-gray-600 text-sm mb-4">
                Nous sommes situés en plein cœur de Grenoble, à proximité de la Bastille et des transports en commun.
              </p>
              <div className="text-sm text-gray-600 space-y-1">
                <p>🚊 Tramway : Arrêt Bastille (Ligne A)</p>
                <p>🚌 Bus : Lignes 10, 12, 16</p>
                <p>🚗 Parking : Parking Bastille (2 min à pied)</p>
                <p>🚲 Vélo : Station Métrovélo à 50m</p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Info */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Informations importantes</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <p>• Accessible aux personnes à mobilité réduite</p>
              <p>• Wifi gratuit pour nos clients</p>
              <p>• Terrasse couverte disponible</p>
            </div>
            <div>
              <p>• Groupes acceptés sur réservation</p>
              <p>• Plats végétariens disponibles</p>
              <p>• Livraison et vente à emporter</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;