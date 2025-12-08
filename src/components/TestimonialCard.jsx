// const TestimonialCard = ({ review, name, role, img }) => {
//     return (
//         <div className="relative bg-white rounded-3xl shadow-xl p-10 text-center overflow-hidden">

//             {/* Stars */}
//             <div className="mb-6 flex justify-center">
//                 <div className="bg-blue-400 px-6 py-2 rounded-xl shadow-md">
//                     <span className="text-white text-xl">★★★★★</span>
//                 </div>
//             </div>

//             {/* Review */}
//             <p className="text-gray-700 text-xl leading-relaxed mb-16">
//                 “{review}”
//             </p>

//             {/* Wave background */}
//             <div className="absolute bottom-0 left-0 w-full">
//                 <svg
//                     viewBox="0 0 1440 320"
//                     className="w-full h-24 fill-blue-400"
//                 >
//                     <path d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,149.3C672,139,768,117,864,128C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//                 </svg>
//             </div>

//             {/* User Image */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 bottom-10">
//                 <img
//                     src={img}
//                     className="w-24 h-24 rounded-full border-4 border-white shadow-xl"
//                     alt="User"
//                 />
//             </div>

//             {/* Name + Role */}
//             <div className="mt-20">
//                 <h3 className="text-xl font-bold text-gray-900">{name}</h3>
//                 <p className="text-gray-500">{role}</p>
//             </div>
//         </div>
//     );
// };

// export default TestimonialCard