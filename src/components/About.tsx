import React from 'react';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50 relative overflow-hidden">
      {/* Bogolan Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Story Section */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Dancing Script, cursive' }}>
                Notre Histoire
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Afro Bastille vous invite à découvrir l'authenticité de la cuisine sénégalaise au cœur de Grenoble. 
                Fondé par une famille passionnée originaire de Dakar, notre restaurant vous transporte dans un voyage 
                culinaire exceptionnel, où chaque plat raconte une histoire et chaque saveur évoque les traditions 
                ancestrales du Sénégal.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Dans une ambiance chaleureuse et conviviale, nous perpétuons l'héritage culinaire sénégalais en 
                utilisant des épices authentiques et des recettes transmises de génération en génération.
              </p>
              
              {/* Quote */}
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500 mb-8">
                <blockquote className="text-xl italic text-gray-800 font-medium">
                  "Un voyage culinaire au cœur de Dakar"
                </blockquote>
                <cite className="text-gray-600 mt-2 block">- Famille Diop, Fondateurs</cite>
              </div>
            </div>

            {/* Practical Information */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Informations Pratiques</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Clock className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Horaires d'ouverture</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Lundi - Samedi : 12h - 14h30 & 19h - 22h</p>
                      <p>Dimanche : 12h - 15h</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Adresse</h4>
                    <p className="text-gray-600">12 Rue de la Bastille<br />1 Rue Amiral Courbet, 38000 Grenoble, France</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Téléphone</h4>
                    <a href="tel:+33752898820" className="text-gray-600 hover:text-yellow-600 transition-colors">
                      +33 7 52 89 88 20
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
                    <a href="mailto:contact@afrobastille.fr" className="text-gray-600 hover:text-yellow-600 transition-colors">
                      contact@afrobastille.fr
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;