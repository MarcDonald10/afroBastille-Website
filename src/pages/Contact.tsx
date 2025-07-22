import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CreditCard, Instagram, Facebook, Send, MessageCircle, Navigation } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const subjects = [
    { value: '', label: 'Choisir un sujet' },
    { value: 'reservation', label: '📅 Réservation' },
    { value: 'event', label: '🎉 Événement privé' },
    { value: 'catering', label: '🍽️ Traiteur' },
    { value: 'feedback', label: '💬 Avis / Suggestion' },
    { value: 'partnership', label: '🤝 Partenariat' },
    { value: 'other', label: '❓ Autre' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-teal-50 overflow-hidden">
        {/* Motifs de contact animés */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + i * 0.2}s`
              }}
            >
              <MessageCircle size={25 + Math.random() * 15} />
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6" 
                style={{ fontFamily: 'Dancing Script, cursive' }}>
              Contact & Localisation
            </h1>
            <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
              Venez nous rendre visite ou contactez-nous pour plus d'informations
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                <Phone className="text-blue-500 mr-2" size={16} />
                <span>Réponse rapide</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                <MapPin className="text-green-500 mr-2" size={16} />
                <span>Centre-ville Grenoble</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-md">
                <Clock className="text-purple-500 mr-2" size={16} />
                <span>Ouvert 7j/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2" 
                    style={{ fontFamily: 'Dancing Script, cursive' }}>
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-600">Nous vous répondrons dans les plus brefs délais</p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="mb-4">
                    <Send className="mx-auto text-green-500" size={48} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Message envoyé !</h3>
                  <p className="text-gray-600">Merci pour votre message. Nous vous répondrons rapidement.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      {subjects.map(subject => (
                        <option key={subject.value} value={subject.value}>
                          {subject.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Informations de contact */}
            <div className="space-y-8">
              {/* Contact principal */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg border border-yellow-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Informations de Contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-orange-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Adresse</h4>
                      <p className="text-gray-600">
                        1 Rue Amiral Courbet, <br />
                        38000 Grenoble, France
                      </p>
                      <button className="mt-2 text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center">
                        <Navigation size={14} className="mr-1" />
                        Itinéraire
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="text-orange-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Téléphone</h4>
                      <a 
                        href="tel:+33752898820" 
                        className="text-gray-600 hover:text-orange-600 transition-colors text-lg font-medium"
                      >
                        +33 7 52 89 88 20
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Réservations et renseignements</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="text-orange-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                      <a 
                        href="mailto:contact@afrobastille.fr" 
                        className="text-gray-600 hover:text-orange-600 transition-colors"
                      >
                        contact@afrobastille.fr
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Réponse sous 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="text-orange-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Horaires d'ouverture</h4>
                      <div className="text-gray-600 space-y-1 text-sm">
                        <p><span className="font-medium">Lun - Sam :</span> 12h - 14h30 & 19h - 22h</p>
                        <p><span className="font-medium">Dimanche :</span> 12h - 15h</p>
                        <p className="text-red-600 mt-2">Fermé le dimanche soir</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Moyens de paiement */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-green-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Moyens de Paiement</h3>
                <div className="flex items-center space-x-4 text-gray-600">
                  <CreditCard size={24} />
                  <div>
                    <p className="font-medium">Cartes acceptées</p>
                    <p className="text-sm">CB, Visa, Mastercard, American Express</p>
                    <p className="text-sm">Espèces, Chèques, Tickets restaurant</p>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border border-purple-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full hover:from-pink-600 hover:to-pink-700 transition-all transform hover:scale-110"
                  >
                    <Instagram size={24} />
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-110"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
                <p className="text-sm text-gray-600 mt-3">
                  Découvrez nos dernières créations et l'ambiance du restaurant
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carte et accès */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4" 
                  style={{ fontFamily: 'Dancing Script, cursive' }}>
                Comment nous trouver
              </h2>
              <p className="text-xl text-gray-600">
                Situés en plein cœur de Grenoble, facilement accessibles
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Carte */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin size={64} className="mx-auto mb-4" />
                    <p className="text-lg font-medium">Carte Google Maps</p>
                    <p className="text-sm">12 Rue de la Bastille, 38000 Grenoble</p>
                    <p className="text-sm mt-2">
                      Intégration Google Maps API requise pour l'affichage interactif
                    </p>
                  </div>
                </div>
              </div>

              {/* Informations d'accès */}
              {/* <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                    <span className="text-2xl mr-2">🚊</span>
                    Transports en commun
                  </h4>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Tramway :</strong> Arrêt Bastille (Ligne A) - 2 min à pied</p>
                    <p><strong>Bus :</strong> Lignes 10, 12, 16 - Arrêt République</p>
                    <p><strong>Métro :</strong> Station Hubert Dubedout - 5 min à pied</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                    <span className="text-2xl mr-2">🚗</span>
                    En voiture
                  </h4>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Parking :</strong> Parking Bastille (2 min à pied)</p>
                    <p><strong>Parking :</strong> Parking Notre-Dame (5 min à pied)</p>
                    <p><strong>Stationnement :</strong> Places payantes dans la rue</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                    <span className="text-2xl mr-2">🚲</span>
                    À vélo
                  </h4>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Métrovélo :</strong> Station à 50m du restaurant</p>
                    <p><strong>Pistes cyclables :</strong> Accès direct par la rue</p>
                    <p><strong>Stationnement :</strong> Arceaux vélos devant le restaurant</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Informations pratiques
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700">
                <div className="space-y-3">
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Accessible aux personnes à mobilité réduite
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    WiFi gratuit pour nos clients
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Terrasse couverte disponible
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Climatisation et chauffage
                  </p>
                </div>
                <div className="space-y-3">
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Groupes acceptés sur réservation
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Plats végétariens disponibles
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Livraison et vente à emporter
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Service traiteur pour événements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;