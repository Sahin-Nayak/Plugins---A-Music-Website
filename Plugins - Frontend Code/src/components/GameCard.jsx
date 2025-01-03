import { Link } from 'react-router-dom';



const GameCard = ({ game }) => {
  const { image = "", title = "Untitled", platform = "Unknown", rating = "N/A", link = "#" } = game || {};

  return (
    <Link to={link}>
    <div
      className="relative bg-gray-700 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 h-72 flex flex-col justify-end bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

      {/* Content */}
      <div className="relative p-4 z-10">
        <h3 className="text-2xl font-semibold mb-1">{title}</h3>
        <div className="flex justify-between text-sm mt-2 opacity-90">
          <span className="bg-gray-900 bg-opacity-70 px-2 py-1 rounded-lg">{platform}</span>
          <span className="bg-gray-900 bg-opacity-70 px-2 py-1 rounded-lg">{rating}</span>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default GameCard;
