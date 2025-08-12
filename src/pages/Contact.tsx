import React, { useState, useCallback } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Send, MessageCircle, Navigation } from 'lucide-react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { APIProvider, Map, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import positionIcon from '../../assets/images/position.png';

// Styles personnalisés pour la carte (thème moderne et coloré)
const mapStyles = [
  {
    featureType: 'all',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#1e293b' }, { weight: 0.8 }], // Darker text for better readability
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [{ color: '#e5e7eb' }], // Slightly darker background for contrast
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#3b82f6' }], // Brighter water for clarity
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#d1d5db' }, { weight: 1.5 }], // Thicker, more visible roads
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#1e293b' }], // Darker road labels
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#cbd5e1' }], // More distinct POIs
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#1e293b' }, { visibility: 'on' }], // Ensure POI labels are visible
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#d1d5db' }], // Clearer transit lines
  },
];

// Style du conteneur de la carte
const mapContainerStyle = {
  width: '100%',
  height: '700px',
};

// Données des emplacements
const locations = [
  {
    name: 'Afro Bastille 1',
    address: '87 Rue Saint Laurent, 38000 Grenoble, France',
    position: { lat: 45.195542366404524, lng: 5.72949730534436 },
    icon: positionIcon,
    phone: '+33 7 52 89 88 20',
  },
  {
    name: 'Afro Bastille 2',
    address: '1 Rue Amiral Courbet, 38000 Grenoble, France',
    position: { lat: 45.1894, lng: 5.7289 },
    icon: positionIcon,
    phone: '+33 7 52 89 88 20',
  },
];

// Centre de la carte (point médian entre les deux emplacements)
const center = {
  lat: (locations[0].position.lat + locations[1].position.lat) / 2,
  lng: (locations[0].position.lng + locations[1].position.lng) / 2,
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

  // Chargement de l'API Google Maps
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

  // Gestion des changements dans le formulaire
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    },
    []
  );

  // Soumission du formulaire

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulation d'une requête
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
      } catch (error) {
        console.error('Erreur lors de la soumission du formulaire:', error);
      } finally {
        setIsSubmitting(false);
      }
    },
    []
  );

  // Gestion du clic sur un marqueur
  const handleMarkerClick = useCallback((location: any) => {
    setSelectedLocation((prev) => (prev?.name === location.name ? null : location));
  }, []);

  // Gestion de la fermeture de l'InfoWindow
  const handleInfoWindowClose = useCallback(() => {
    setSelectedLocation(null);
  }, []);

  // Options du formulaire
  const subjects = [
    { value: '', label: 'Choisir un sujet' },
    { value: 'reservation', label: '📅 Réservation' },
    { value: 'event', label: '🎉 Événement privé' },
    { value: 'catering', label: '🍽️ Traiteur' },
    { value: 'feedback', label: '💬 Avis / Suggestion' },
    { value: 'partnership', label: '🤝 Partenariat' },
    { value: 'other', label: '❓ Autre' },
  ];

  if (loadError) {
    return (
      <div className="text-center py-12 text-red-600">
        Erreur lors du chargement de la carte : {loadError.message}
      </div>
    );
  }

  if (!isLoaded) {
    return <div className="text-center py-12">Chargement de la carte...</div>;
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-teal-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + i * 0.2}s`,
              }}
            >
              <MessageCircle size={25 + Math.random() * 15} />
            </div>
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-5xl md:text-7xl font-bold text-gray-800 mb-6"
              style={{ fontFamily: 'Dancing Script, cursive' }}
            >
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

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
              <div className="mb-8">
                <h2
                  className="text-3xl font-bold text-gray-800 mb-2"
                  style={{ fontFamily: 'Dancing Script, cursive' }}
                >
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-600">Nous vous répondrons dans les plus brefs délais</p>
              </div>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <Send className="mx-auto text-green-500" size={48} />
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
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg border border-yellow-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Informations de Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-orange-600 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Adresse</h4>
                      <p className="text-gray-600">
                        Afro Bastille 1 : 87 Rue Saint Laurent, 38000 Grenoble, France <br />
                        Afro Bastille 2 : 1 Rue Amiral Courbet, 38000 Grenoble, France
                      </p>
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

      {/* Section de la carte */}


      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
                Comment nous trouver
              </h2>
              <p className="text-xl text-gray-600">Situés en plein cœur de Grenoble, facilement accessibles</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}>
                <Map
                  style={mapContainerStyle}
                  defaultCenter={center}
                  defaultZoom={15}
                  mapId="your-map-id" // Remplace par un ID de carte Google si nécessaire
                  mapTypeId="roadmap"
                  mapTypeControl={true}
                  streetViewControl={false}
                  fullscreenControl={true}
                  zoomControl={true}
                  styles={mapStyles}
                >
                  {locations.map((location, index) => (
                    <AdvancedMarker
                      key={index}
                      position={location.position}
                      title={location.name}
                      onClick={() => handleMarkerClick(location)}
                    >
                      <div style={{ position: 'relative', textAlign: 'left' }}>
                        <img
                          src={positionIcon}
                          alt={location.name}
                          style={{ width: '40px', height: '40px' }}
                        />
                        <span
                          style={{
                            position: 'absolute',
                            left: '-85px',
                            top: '10px',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            color: '#e70202ff',
                            fontFamily: 'Arial, sans-serif',
                          }}
                        >
                          {location.name}
                        </span>
                      </div>
                    </AdvancedMarker>
                  ))}
                  {selectedLocation && (
                    <InfoWindow
                      position={selectedLocation.position}
                      onCloseClick={handleInfoWindowClose}
                    >
                      <div className="p-4 max-w-xs bg-white rounded-lg shadow-md">
                        <h3 className="font-bold text-lg text-gray-800 mb-2">{selectedLocation.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{selectedLocation.address}</p>
                        <div className="flex space-x-3">
                          <a
                            href={`https://www.google.com/maps/dir/?api=1&destination=${selectedLocation.position.lat},${selectedLocation.position.lng}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm"
                          >
                            <Navigation size={16} className="mr-1" />
                            Itinéraire
                          </a>
                          <a
                            href={`tel:${selectedLocation.phone}`}
                            className="flex items-center justify-center px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all text-sm"
                          >
                            <Phone size={16} className="mr-1" />
                            Appeler
                          </a>
                        </div>
                      </div>
                    </InfoWindow>
                  )}
                </Map>
              </APIProvider>
              <div className="p-4 text-center">
                {locations.map((location, index) => (
                  <p key={index} className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">{location.name}:</span> {location.address}
                  </p>
                ))}
              </div>
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
                  {/* <p className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Terrasse couverte disponible
                  </p> */}
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