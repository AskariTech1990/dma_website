//20july24
// import React, { useState, useEffect } from "react";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton CSS
// import ApiUrl from "../../Common/ApiUrl";

// const Card = ({ image, title, description, price, onClick }) => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Simulate data fetching
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 50); // Replace with actual data fetching logic
//   }, []);

//   return (
//     <div
//       className="max-w-xs overflow-hidden cursor-pointer r"
//       onClick={onClick}
//     >
//       {isLoading ? (
//         <Skeleton height={192} />
//       ) : (
//         <img
//           src={`${ApiUrl}${image}`}
//           alt={title}
//           className="w-full hover:scale-105 ease-in-out duration-2000 h-48  object-cover"
//         />
//       )}
//       <h2 className="lg:text-lg text-sm font-semibold">
//         {isLoading ? <Skeleton width={100} /> : title}
//       </h2>
//       <p className="text-gray-500 lg:text-md text-sm">
//         {isLoading ? <Skeleton count={2} /> : description.substring(0, 50)}.....
//       </p>
//       <p className="lg:text-sm text-xs font-bold text-red-600 mt-2">
//         {isLoading ? <Skeleton width={50} /> : `$${price}`}
//       </p>
//     </div>
//   );
// };

// export default Card;

//22july24
import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton CSS
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"; // Import heart icons
import ApiUrl from "../../Common/ApiUrl";

const Card = ({ image, title, description, price, onClick, onFavorite, isFavorite }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setIsLoading(false);
    }, 50); // Replace with actual data fetching logic
  }, []);

  return (
    <div className="relative max-w-xs overflow-hidden cursor-pointer" onClick={onClick}>
      {isLoading ? (
        <Skeleton height={192} />
      ) : (
        <img
          src={`${ApiUrl}${image}`}
          alt={title}
          className="w-full hover:scale-105 ease-in-out duration-2000 h-48 object-cover"
        />
      )}
      <div className="absolute top-2 right-2 bg-customColor-circleColor p-2 rounded">
        {isFavorite ? (
          <AiFillHeart
            className="text-red-500 text-2xl cursor-pointer "
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering onClick of the card
              onFavorite();
            }}
          />
        ) : (
          <AiOutlineHeart
            className="text-white text-2xl cursor-pointer"
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering onClick of the card
              onFavorite();
            }}
          />
        )}
      </div>
      <h2 className="lg:text-lg text-sm font-semibold">
        {isLoading ? <Skeleton width={100} /> : title}
      </h2>
      <p className="text-gray-500 lg:text-md text-sm">
        {isLoading ? <Skeleton count={2} /> : `${description.substring(0, 50)}.....`}
      </p>
      <p className="lg:text-sm text-xs font-bold text-red-600 mt-2">
        {isLoading ? <Skeleton width={50} /> : `$${price}`}
      </p>
    </div>
  );
};

export default Card;

//22july24
// import React, { useState, useEffect } from "react";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
// import ApiUrl from "../../Common/ApiUrl";

// const Card = ({ image, title, description, price, onClick, onFavorite, isFavorite }) => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 500);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="relative max-w-xs overflow-hidden cursor-pointer" onClick={onClick}>
//       {isLoading ? (
//         <Skeleton height={192} />
//       ) : (
//         <img
//           src={`${ApiUrl}${image}`}
//           alt={title}
//           className="w-full hover:scale-105 ease-in-out duration-2000 h-48 object-cover"
//         />
//       )}
//       <div className="absolute top-2 right-2 bg-customColor-circleColor p-2 rounded">
//         {isFavorite ? (
//           <AiFillHeart
//             className="text-red-500 text-2xl cursor-pointer"
//             onClick={(e) => {
//               e.stopPropagation();
//               onFavorite();
//             }}
//           />
//         ) : (
//           <AiOutlineHeart
//             className="text-white text-2xl cursor-pointer"
//             onClick={(e) => {
//               e.stopPropagation();
//               onFavorite();
//             }}
//           />
//         )}
//       </div>
//       <div className="p-4">
//         <h2 className="lg:text-lg text-sm font-semibold">
//           {isLoading ? <Skeleton width={100} /> : title}
//         </h2>
//         <p className="text-gray-500 lg:text-md text-sm">
//           {isLoading ? <Skeleton count={2} /> : `${description.substring(0, 50)}...`}
//         </p>
//         <p className="lg:text-sm text-xs font-bold text-red-600 mt-2">
//           {isLoading ? <Skeleton width={50} /> : `$${price}`}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Card;



