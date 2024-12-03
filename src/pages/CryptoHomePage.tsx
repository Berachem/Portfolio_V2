import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoin, faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';

const cryptoProjects = [
  {
    icon: <FontAwesomeIcon icon={faBitcoin} />,
    name: "Bitcoin",
    symbol: "BTC",
    description: "Le fameux..."
  },
  {
    icon: <FontAwesomeIcon icon={faEthereum} />,
    name: "Ethereum",
    symbol: "ETH",
    description: "Le second fameux..."
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    name: "Binance Coin",
    symbol: "BNB",
    description: "Le géant de l'échange"
  },
  {
    icon: "⚽",
    name: "Chiliz",
    symbol: "CHZ",
    description: "Fan tokens sportifs"
  },
  {
    icon: "🌐",
    name: "Decentraland",
    symbol: "MANA",
    description: "Métaverse virtuel"
  },
  {
    icon: "⚡",
    name: "Elrond",
    symbol: "EGLD",
    description: "Blockchain haute performance"
  }
];

export const CryptoHomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Berachem Markria
                <span className="block text-2xl md:text-3xl mt-2 text-yellow-200">
                  Spéculateur en Crypto-monnaies & Passionné des nouvelles technologies
                </span>
              </h1>
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors"
              >
                Voir mon profil développeur
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <FontAwesomeIcon icon={faBitcoin} className="hidden md:block w-32 h-32 text-yellow-200 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Projets auxquels je crois
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cryptoProjects.map((project) => (
              <div
                key={project.symbol}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{project.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {project.name}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.symbol}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <a
            href="https://cryptoast.fr/fiches-crypto/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
          >
            <span className="text-xl">🧭</span>
            Découvrir plus de projets
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};