import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Calendar, Clock, Users, MessageCircle, Phone, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
    occasion: ''
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const occasions = [
    { value: '', label: 'Sélectionner une occasion (optionnel)' },
    { value: 'anniversaire', label: '🎂 Anniversaire' },
    { value: 'romantique', label: '💕 Dîner romantique' },
    { value: 'business', label: '💼 Repas d\'affaires' },
    { value: 'famille', label: '👨‍👩‍👧‍👦 Repas de famille' },
    { value: 'amis', label: '👥 Entre amis' },
    { value: 'celebration', label: '🎉 Célébration spéciale' }
  ];

  const timeSlots = [
    '12:00', '12:30', '13:00', '13:30', '14:00',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    }

    if (!formData.date) {
      newErrors.date = 'La date est requise';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'La date ne peut pas être dans le passé';
      }
    }

    if (!formData.time) {
      newErrors.time = 'L\'heure est requise';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Remplace les valeurs ci-dessous par tes propres identifiants EmailJS
      const SERVICE_ID = 'remplace_par_ton_service_id';
      const TEMPLATE_ID = 'remplace_par_ton_template_id';
      const USER_ID = 'remplace_par_ton_user_id';

      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        guests: formData.guests,
        message: formData.message,
        occasion: formData.occasion
      };

      try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            guests: '2',
            message: '',
            occasion: ''
          });
        }, 5000);
      } catch (error) {
        setIsSubmitting(false);
        alert('Erreur lors de l\'envoi du mail. Merci de réessayer.');
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8 bg-white rounded-2xl shadow-2xl">
          <div className="mb-6">
            <CheckCircle className="mx-auto text-green-500" size={64} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Réservation confirmée !</h2>
          <p className="text-gray-600 mb-6">
            Merci {formData.name} ! Nous avons bien reçu votre demande de réservation. 
            Nous vous contacterons sous peu pour confirmer votre table.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
            <p><strong>Date :</strong> {formData.date}</p>
            <p><strong>Heure :</strong> {formData.time}</p>
            <p><strong>Personnes :</strong> {formData.guests}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden">
        {/* Motifs de réservation animés */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(12)].map((_, i) => (
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
              <Calendar size={30 + Math.random() * 20} />
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6" 
                style={{ fontFamily: 'Dancing Script, cursive' }}>
              Réservation
            </h1>
            <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
              Réservez votre table pour une expérience culinaire authentique
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center bg-[#0C0D0E] px-4 py-2 rounded-full shadow-md">
                <Clock className="text-[#E8DD8D] mr-2" size={16} />
                <span className="text-[#E8DD8D]">Confirmation immédiate</span>
              </div>
              <div className="flex items-center bg-[#0C0D0E] px-4 py-2 rounded-full shadow-md">
                <Users className="text-[#E8DD8D] mr-2" size={16} />
                <span className="text-[#E8DD8D]">Groupes acceptés</span>
              </div>
              <div className="flex items-center bg-[#0C0D0E] px-4 py-2 rounded-full shadow-md">
                <MessageCircle className="text-[#E8DD8D] mr-2" size={16} />
                <span className="text-[#E8DD8D]">Demandes spéciales</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Formulaire de réservation */}
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2" 
                      style={{ fontFamily: 'Dancing Script, cursive' }}>
                    Réserver en ligne
                  </h2>
                  <p className="text-gray-600">Remplissez le formulaire ci-dessous pour réserver votre table</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Informations personnelles */}
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
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Votre nom"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="06 12 34 56 78"
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                    </div>
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
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="votre@email.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>

                  {/* Détails de la réservation */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="inline mr-2" size={16} />
                        Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                          errors.date ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.date && <p className="mt-1 text-sm text-red-500">{errors.date}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Clock className="inline mr-2" size={16} />
                        Heure *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${
                          errors.time ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Choisir l'heure</option>
                        {timeSlots.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                      {errors.time && <p className="mt-1 text-sm text-red-500">{errors.time}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Users className="inline mr-2" size={16} />
                        Personnes
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      >
                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'personne' : 'personnes'}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Occasion */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Occasion spéciale
                    </label>
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    >
                      {occasions.map(occasion => (
                        <option key={occasion.value} value={occasion.value}>
                          {occasion.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageCircle className="inline mr-2" size={16} />
                      Message (optionnel)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Demandes spéciales, allergies, préférences de table..."
                    />
                  </div>

                  {/* Bouton de soumission */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Envoi en cours...
                      </div>
                    ) : (
                      'Confirmer la réservation'
                    )}
                  </button>
                </form>
              </div>

              {/* Méthodes alternatives et informations */}
              <div className="space-y-8">
                {/* Réservation par téléphone */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl shadow-lg border border-yellow-200">
                  <div className="flex items-center mb-4">
                    <Phone className="text-orange-600 mr-3" size={28} />
                    <h3 className="text-2xl font-bold text-gray-800">Réservation par téléphone</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Appelez-nous directement pour réserver votre table ou pour des groupes de plus de 10 personnes
                  </p>
                  <a 
                    href="tel:+33758814737"
                    className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors transform hover:scale-105"
                  >
                    <Phone className="mr-2" size={20} />
                    +33 7 58 81 47 37
                  </a>
                  <div className="mt-4">
                    <a
                      href="https://wa.me/33758814737?text=Bonjour%2C%20je%20souhaite%20réserver%20une%20table%20au%20restaurant."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors transform hover:scale-105"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12.004 2.003a9.994 9.994 0 0 0-8.66 15.13l-1.13 4.13a1 1 0 0 0 1.22 1.22l4.13-1.13a9.994 9.994 0 1 0 4.44-19.35Zm0 18.001a7.98 7.98 0 0 1-4.09-1.16 1 1 0 0 0-.8-.09l-2.7.74.74-2.7a1 1 0 0 0-.09-.8A7.994 7.994 0 1 1 12.004 20.004Zm4.13-5.47c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.51.12-.15.23-.58.75-.71.9-.13.15-.26.17-.49.06-.23-.12-.97-.36-1.85-1.13-.68-.6-1.14-1.34-1.28-1.57-.13-.23-.01-.35.1-.46.1-.1.23-.26.34-.39.11-.13.15-.23.23-.38.08-.15.04-.28-.02-.4-.06-.12-.51-1.23-.7-1.68-.18-.44-.37-.38-.51-.39-.13-.01-.28-.01-.43-.01a.83.83 0 0 0-.6.28c-.21.23-.8.78-.8 1.9 0 1.12.82 2.2.94 2.36.12.15 1.62 2.48 3.93 3.38.55.19.98.3 1.31.38.55.14 1.05.12 1.44.07.44-.07 1.36-.56 1.55-1.1.19-.54.19-1.01.13-1.1-.06-.09-.21-.15-.44-.27Z"/></svg>
                      Réserver sur WhatsApp
                    </a>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    Ouvert tous les jours de 11h à 22h
                  </p>
                </div>

                

                {/* Informations importantes */}
                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl shadow-lg border border-green-200">
                  <div className="flex items-center mb-4">
                    <AlertCircle className="text-green-600 mr-3" size={28} />
                    <h3 className="text-2xl font-bold text-gray-800">Informations importantes</h3>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      <span>Réservation recommandée, surtout le weekend</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      <span>Confirmation par email ou SMS dans les 2h</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      <span>Annulation gratuite jusqu'à 2h avant</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      <span>Groupes de 8+ personnes : nous contacter</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      <span>Tables en terrasse selon disponibilité</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      <span>Accessible aux personnes à mobilité réduite</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;