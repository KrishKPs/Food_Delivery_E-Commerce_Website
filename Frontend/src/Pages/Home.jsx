import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white px-4"
      style={{
        backgroundImage: `url('https://t3.ftcdn.net/jpg/02/79/75/74/360_F_279757406_PjHAMPHNAEyf5NvyEYlC7mJNRKHHkmCz.jpg')`,
      }}
    >
      {/* Title */}
      <h1 className="text-5xl md:text-6xl lg:text-8xl text-red-600 font-bold mb-4 md:mb-6 lg:mb-8">
        Zomato
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl lg:text-2xl text-red-600 mb-6 md:mb-8 lg:mb-10 text-center">
        Discover the best food & drinks near you
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <button
          onClick={() => navigate("/signup")}
          className="w-full md:w-auto px-6 py-3 bg-white text-red-600 font-semibold rounded-lg transition-all duration-300 transform hover:shadow-lg hover:scale-105"
        >
          Sign up
        </button>
        <button
          onClick={() => navigate("/login")}
          className="w-full md:w-auto px-6 py-3 bg-white text-red-600 font-semibold rounded-lg transition-all duration-300 transform hover:shadow-lg hover:scale-105"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/restroregistration")}
          className="w-full md:w-auto px-6 py-3 bg-white text-red-600 font-semibold rounded-lg transition-all duration-300 transform hover:shadow-lg hover:scale-105"
        >
          Add Restaurant
        </button>
      </div>
    </div>
  );
}
