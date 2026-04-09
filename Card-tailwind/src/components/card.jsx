function Card({ name, role, image }) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      
      <img
        className="w-full h-48 object-cover"
        src={image}
        alt={name}
      />

      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-500">{role}</p>

        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          View Profile
        </button>
      </div>
    </div>
  );
}

export default Card;