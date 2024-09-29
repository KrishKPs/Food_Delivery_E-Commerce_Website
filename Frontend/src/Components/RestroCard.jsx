import { useNavigate } from "react-router-dom";

export function RestroCard({ data }) {
  const navigate = useNavigate();
  const url = encodeURI(data._id);

  return (
    <div
      onClick={() => navigate(`${url}`)}
      className="ml-1 mt-5  flex flex-col h-auto w-full  rounded-lg p-4 bg-white shadow-md hover:shadow-xl hover:rounded-xl transition-all duration-300 ease-in-out cursor-pointer"
    >
      <img
        src={data.image}  
        alt="restro"  
        className="w-full h-48 object-cover rounded-lg"
      />

      <h1 className="mt-4 text-lg font-semibold text-gray-800">{data.username}</h1>

      <h6 className="mt-2 text-sm text-gray-500">{data.category}</h6>

      <h6 className="text-sm text-gray-500">{data.adress}</h6>
    </div>
  );
}
