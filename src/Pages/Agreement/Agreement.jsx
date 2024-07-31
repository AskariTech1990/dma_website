// import React, { useState } from "react";
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from "axios";

// const Agreement = () => {
//   const [name, setName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [nnicNumber, setNnicNumber] = useState("");
//   const [address, setAddress] = useState("");
//   const [frontImage, setFrontImage] = useState(null);
//   const [backImage, setBackImage] = useState(null);
//   const [year, setYear] = useState(24);
//   const [agreed, setAgreed] = useState(false);

//   const location = useLocation();
//     const { orderData } = location.state || {};

//     console.log("order items coming here", orderData)

//   const handleImageUpload = (event, setImage) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   const handleAgreementChange = () => {
//     setAgreed(!agreed);
//   };

//   const handleAgree = async () => {
//     const fullOrderData = {
//         ...orderData,
//         customerInfo: {
//             name,
//             phoneNumber,
//             nationalId: nnicNumber,
//             address,
//             frontImage,
//             backImage,
//         },
//     };

//     try {
//         const response = await axios.post(`https://2lkz6gq8-5002.inc1.devtunnels.ms/api/users/order-item`, fullOrderData, {
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem('token')}`,
//                 'Content-Type': 'application/json',
//             },
//         });

//         console.log('Order placed successfully:', response.data);
//     } catch (error) {
//         console.error('Error placing order:', error);
//         alert('Error placing order. Please try again.');
//     }
// };

//   return (
//     <div className="flex flex-col md:flex-row py-10 px-2  gap-1">
//       {/* Card for Additional Information */}
//       <div className="flex-1 flex items-center justify-center md:w-[40%]  w-[100%]">
//         <div className="bg-gray-200 shadow-lg rounded-lg p-6 mb-8 w-full h-full">
//           <h2 className="text-2xl font-bold mb-4">Customer Information</h2>
//           <form>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">Name:</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">Phone Number:</label>
//               <input
//                 type="text"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">Address:</label>
//               <input
//                 type="text"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">
//                 National ID Number:
//               </label>
//               <input
//                 type="text"
//                 value={nnicNumber}
//                 onChange={(e) => setNnicNumber(e.target.value)}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">
//                 NNIC Front Image:
//               </label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => handleImageUpload(e, setFrontImage)}
//                 className="w-full p-2 border rounded"
//               />
//               {frontImage && (
//                 <img
//                   src={frontImage}
//                   alt="NNIC Front"
//                   className="mt-4 w-48 h-32 object-cover"
//                 />
//               )}
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">
//                 NNIC Back Image:
//               </label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => handleImageUpload(e, setBackImage)}
//                 className="w-full p-2 border rounded"
//               />
//               {backImage && (
//                 <img
//                   src={backImage}
//                   alt="NNIC Back"
//                   className="mt-4 w-48 h-32 object-cover"
//                 />
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//       {/* Agreement Section */}
//       <div className="flex-1 bg-white shadow-lg rounded-lg p-6  md:w-[60%] w-[100%]">
//         <h1 className="text-2xl font-bold mb-4">
//           Conditions for Rental of Scaffolding
//         </h1>
//         <p className="mb-4">
//           This is an agreement made between{" "}
//           <span className="font-bold">DMA Transport & Scaffolding Ltd</span>{" "}
//           (Owner) and{" "}
//           <span className="underline">
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="border border-b-gray-950"
//             />
//           </span>{" "}
//           (Customer) in the year of our Lord 20
//           <span className="underline">
//             <input
//               type="number"
//               value={year}
//               onChange={(e) => setYear(e.target.value)}
//               className="border border-b-gray-950"
//             />
//           </span>
//         </p>
//         <ol className="list-decimal list-inside mb-4">
//           <li className="mb-2">
//             Scaffolding must be maintained in proper manner by client.
//           </li>
//           <li className="mb-2">
//             Scaffolding and/or components must not be thrown from any height so
//             as to cause damage to same.
//           </li>
//           <li className="mb-2">
//             All scaffolding must be kept at the job location for which it is
//             rented and must not be transferred to any other site without the
//             owner's written permission.
//           </li>
//           <li className="mb-2">
//             Scaffolding is rented on a daily basis for any part thereof.
//           </li>
//           <li className="mb-2">
//             Cost of rental and deposit must be paid in advance.
//           </li>
//           <li className="mb-2">
//             Saturday Sunday and Public Holidays are included in the days for
//             which rental is charged.
//           </li>
//           <li className="mb-2">
//             Scaffolding could be collected and rented between the hours of:
//           </li>
//           <ul className="list-disc list-inside pl-6 mb-2">
//             <li>7:30am - 3:30pm Mondays - Fridays</li>
//             <li>8:00am - 12:00noon Sundays</li>
//           </ul>
//           <li className="mb-2">
//             Scaffolding must be loaded or unloaded in the presence of the owner
//             or appointed agent at the time of collection or return.
//           </li>
//           <li className="mb-2">
//             In any case where any scaffolding and/or components are lost or
//             damaged the customer agrees to pay the owner the cost for the
//             equipment.
//           </li>
//         </ol>

//         <div className="flex items-center mt-8">
//           <input
//             type="checkbox"
//             id="agree"
//             checked={agreed}
//             onChange={handleAgreementChange}
//             className="mr-2"
//           />
//           <label htmlFor="agree" className="text-gray-700 font-bold" >
//             I agree to the terms and conditions
//           </label>
//         </div>

//         {agreed && (
//           <div className="mt-4">
//             <button className="bg-blue-500 text-white px-6 py-2 rounded font-bold" onClick={handleAgree}>
//               I Agree
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Agreement;


// import React, { useState } from "react";
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Agreement = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { orderData } = location.state || {};

//   const [name, setName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [nnicNumber, setNnicNumber] = useState("");
//   const [address, setAddress] = useState("");
//   const [frontImage, setFrontImage] = useState(null);
//   const [backImage, setBackImage] = useState(null);
//   const [year, setYear] = useState(24);
//   const [agreed, setAgreed] = useState(false);

//   const handleImageUpload = (event, setImage) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//     }
//   };

//   const handleAgreementChange = () => {
//     setAgreed(!agreed);
//   };

//   const handleAgree = async () => {
//     const fullOrderData = {
//       ...orderData,
//       customerInfo: {
//         name,
//         phoneNumber,
//         nationalId: nnicNumber,
//         address,
//         frontImage,
//         backImage,
//       },
//     };

//     try {
//       const response = await axios.post(`https://2lkz6gq8-5002.inc1.devtunnels.ms/api/users/order-item`, fullOrderData, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       console.log('Order placed successfully:', response.data);
//       navigate('/order-success', { state: { message: response.data } });
//     } catch (error) {
//       console.error('Error placing order:', error);
//       alert('Error placing order. Please try again.');
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row py-10 px-2 gap-1">
//       {/* Card for Additional Information */}
//       <div className="flex-1 flex items-center justify-center md:w-[40%] w-[100%]">
//         <div className="bg-gray-200 shadow-lg rounded-lg p-6 mb-8 w-full h-full">
//           <h2 className="text-2xl font-bold mb-4">Customer Information</h2>
//           <form>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">Name:</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">Phone Number:</label>
//               <input
//                 type="text"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">Address:</label>
//               <input
//                 type="text"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">National ID Number:</label>
//               <input
//                 type="text"
//                 value={nnicNumber}
//                 onChange={(e) => setNnicNumber(e.target.value)}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">NNIC Front Image:</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => handleImageUpload(e, setFrontImage)}
//                 className="w-full p-2 border rounded"
//               />
//               {frontImage && (
//                 <img
//                   src={frontImage}
//                   alt="NNIC Front"
//                   className="mt-4 w-48 h-32 object-cover"
//                 />
//               )}
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">NNIC Back Image:</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => handleImageUpload(e, setBackImage)}
//                 className="w-full p-2 border rounded"
//               />
//               {backImage && (
//                 <img
//                   src={backImage}
//                   alt="NNIC Back"
//                   className="mt-4 w-48 h-32 object-cover"
//                 />
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//       {/* Agreement Section */}
//       <div className="flex-1 bg-white shadow-lg rounded-lg p-6 md:w-[60%] w-[100%]">
//         <h1 className="text-2xl font-bold mb-4">Conditions for Rental of Scaffolding</h1>
//         <p className="mb-4">
//           This is an agreement made between{" "}
//           <span className="font-bold">DMA Transport & Scaffolding Ltd</span>{" "}
//           (Owner) and{" "}
//           <span className="underline">
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="border border-b-gray-950"
//             />
//           </span>{" "}
//           (Customer) in the year of our Lord 20
//           <span className="underline">
//             <input
//               type="number"
//               value={year}
//               onChange={(e) => setYear(e.target.value)}
//               className="border border-b-gray-950"
//             />
//           </span>
//         </p>
//         <ol className="list-decimal list-inside mb-4">
//           <li className="mb-2">Scaffolding must be maintained in proper manner by client.</li>
//           <li className="mb-2">Scaffolding and/or components must not be thrown from any height so as to cause damage to same.</li>
//           <li className="mb-2">All scaffolding must be kept at the job location for which it is rented and must not be transferred to any other site without the owner's written permission.</li>
//           <li className="mb-2">Scaffolding is rented on a daily basis for any part thereof.</li>
//           <li className="mb-2">Cost of rental and deposit must be paid in advance.</li>
//           <li className="mb-2">Saturday Sunday and Public Holidays are included in the days for which rental is charged.</li>
//           <li className="mb-2">Scaffolding could be collected and rented between the hours of:</li>
//           <ul className="list-disc list-inside pl-6 mb-2">
//             <li>7:30am - 3:30pm Mondays - Fridays</li>
//             <li>8:00am - 12:00noon Sundays</li>
//           </ul>
//           <li className="mb-2">Scaffolding must be loaded or unloaded in the presence of the owner or appointed agent at the time of collection or return.</li>
//           <li className="mb-2">In any case where any scaffolding and/or components are lost or damaged the customer agrees to pay the owner the cost for the equipment.</li>
//         </ol>

//         <div className="flex items-center mt-8">
//           <input
//             type="checkbox"
//             id="agree"
//             checked={agreed}
//             onChange={handleAgreementChange}
//             className="mr-2"
//           />
//           <label htmlFor="agree" className="text-gray-700 font-bold">
//             I agree to the terms and conditions
//           </label>
//         </div>

//         {agreed && (
//           <div className="mt-4">
//             <button className="bg-blue-500 text-white px-6 py-2 rounded font-bold" onClick={handleAgree}>
//               I Agree
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Agreement;


// 24/july/24

// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import axios from 'axios';
// import { clearCart } from '../../Slice/Cart/CartSlice'; // Adjust the import path as necessary
// import PaymentModal from '../../Components/Modal/PaymentModal'

// const Agreement = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { orderData } = location.state || {};
//   const { paymentDetails } = location.state || {};


//   const ApiUrl = 'https://2lkz6gq8-5002.inc1.devtunnels.ms'; // Replace with your actual API URL

//   const [name, setName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [nnicNumber, setNnicNumber] = useState("");
//   const [address, setAddress] = useState("");
//   const [frontImage, setFrontImage] = useState(null);
//   const [backImage, setBackImage] = useState(null);
//   const [year, setYear] = useState(24);
//   const [agreed, setAgreed] = useState(false);
//   const [modalMessage, setModalMessage] = useState("");
//   const [showModal, setShowModal] = useState(false);


//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {
//     // Fetch data from local storage
//     const savedName = localStorage.getItem('name');
//     const savedPhoneNumber = localStorage.getItem('phoneNumber');
//     const savedNnicNumber = localStorage.getItem('nationalId');
//     const savedAddress = localStorage.getItem('address');
//     const savedFrontImage = localStorage.getItem('imageFront');
//     const savedBackImage = localStorage.getItem('imageBack');

//     // Set state with fetched data
//     if (savedName) setName(savedName);
//     if (savedPhoneNumber) setPhoneNumber(savedPhoneNumber);
//     if (savedNnicNumber) setNnicNumber(savedNnicNumber);
//     if (savedAddress) setAddress(savedAddress);
//     if (savedFrontImage) setFrontImage(`${ApiUrl}/gallery${savedFrontImage}`);
//     if (savedBackImage) setBackImage(`${ApiUrl}/gallery${savedBackImage}`);

//     // Log the URLs to ensure they are correct
//     console.log('Front Image URL:', `${ApiUrl}/gallery${savedFrontImage}`);
//     console.log('Back Image URL:', `${ApiUrl}/gallery${savedBackImage}`);
//   }, [ApiUrl]);
//   const [showPaymentModal, setShowPaymentModal] = useState(false);


//   const openPaymentModal = () => {
//     setShowPaymentModal(true);
//   };

//   // const handlePaymentSubmit = async () => {
//   //   try {
//   //     const paymentResponse = await axios.post(`${ApiUrl}/wipay/voucher_pay`, {
//   //       account_number: '4630',
//   //       total: 0.01,
//   //       details: 'hello this is testibg',
//   //       voucher: 'uyr8vmap230t',
//   //     });

//   //     if (paymentResponse.data.success) {
//   //       // If payment is successful, place the order
//   //       handleOrderPlacement();
//   //     } else {
//   //       setModalMessage('Payment failed. Please try again.');
//   //       setShowModal(true);
//   //     }
//   //   } catch (error) {
//   //     console.error('Error processing payment:', error);
//   //     setModalMessage('Error processing payment. Please try again.');
//   //     setShowModal(true);
//   //   }
//   // }

//   const handlePaymentSubmit = async () => {

//     try {
//     console.log("payment goes", paymentDetails)

//       const pres = await fetch(`${ApiUrl}/wipay/voucher_pay`, {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(paymentDetails)
//       })
      
//       const paymentData = await pres.json()
//       console.log(paymentData)

//       if (paymentData.status === "success") {
//               // If payment is successful, place the order
//               handleOrderPlacement();
//             } else {
//               setModalMessage('Payment failed. Please try again.');
//               setShowModal(true);
//             }

//     } catch (error) {
//       console.error('Error processing payment:', error);
//       setModalMessage('Error processing payment. Please try again.');
//       setShowModal(true);
//     }
//   }
  


//   const handleImageUpload = (event, setImage) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(file);
//     }
//   };

//   const handleAgreementChange = () => {
//     setAgreed(!agreed);
//   };

//   // const handleAgree = async () => {
//   //   const formData = new FormData();
//   //   formData.append('orderData', JSON.stringify(orderData));

//   //   if (frontImage) {
//   //     formData.append('imageFront', frontImage);
//   //   }

//   //   if (backImage) {
//   //     formData.append('imageBack', backImage);
//   //   }

//   //   try {
//   //     const response = await axios.post(`${ApiUrl}/api/users/order-item`, formData, {
//   //       headers: {
//   //         Authorization: `Bearer ${localStorage.getItem('token')}`,
//   //         'Content-Type': 'multipart/form-data',
//   //       },
//   //     });

//   //     if (response.status === 200 && response.data.message === "Order Placed Successfully") {
//   //       dispatch(clearCart());
//   //       navigate('/orderHistory');
//   //       console.log('Order placed successfully:');
//   //     } else {
//   //       setModalMessage(response.data.message || 'Order placement failed. Please try again.');
//   //       setShowModal(true);
//   //     }
//   //   } catch (error) {
//   //     console.error('Error placing order:', error);
//   //     setModalMessage('Error placing order. Please try again.');
//   //     setShowModal(true);
//   //   }
//   // };

//   const handleAgree = () => {
//     openPaymentModal();
//   };

//   const handleOrderPlacement = async () => {
//     const formData = new FormData();
//     formData.append('orderData', JSON.stringify(orderData));

//     if (frontImage) {
//       formData.append('imageFront', frontImage);
//     }

//     if (backImage) {
//       formData.append('imageBack', backImage);
//     }

//     try {
//       const response = await axios.post(`${ApiUrl}/api/users/order-item`, formData, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('token')}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response.status === 200 && response.data.message === "Order Placed Successfully") {
//         dispatch(clearCart());
//         navigate('/orderHistory');
//         console.log('Order placed successfully:');
//       } else {
//         setModalMessage(response.data.message || 'Order placement failed. Please try again.');
//         setShowModal(true);
//       }
//     } catch (error) {
//       console.error('Error placing order:', error);
//       setModalMessage('Error placing order. Please try again.');
//       setShowModal(true);
//     }
//   };


//   const closeModal = () => {
//     setShowModal(false);
//     setModalMessage("");
//   };

//   return (
//     <div className="flex flex-col md:flex-row py-10 px-2 gap-1">
//       {/* Card for Additional Information */}
//       <div className="flex-1 flex items-center justify-center md:w-[40%] w-[100%]">
//         <div className="bg-gray-200 shadow-lg rounded-lg p-6 mb-8 w-full h-full">
//           <h2 className="text-2xl font-bold mb-4">Customer Information</h2>
//           <form>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">Name:</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">Phone Number:</label>
//               <input
//                 type="text"
//                 value={phoneNumber}
//                 onChange={(e) => setPhoneNumber(e.target.value)}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">Address:</label>
//               <input
//                 type="text"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">National ID Number:</label>
//               <input
//                 type="text"
//                 value={nnicNumber}
//                 onChange={(e) => setNnicNumber(e.target.value)}
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">NNIC Front Image:</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => handleImageUpload(e, setFrontImage)}
//                 className="w-full p-2 border rounded"
//               />
//               {frontImage && (
//                 <img
//                   src={typeof frontImage === 'string' ? frontImage : URL.createObjectURL(frontImage)}
//                   alt="NNIC Front"
//                   className="mt-4 w-48 h-32 object-cover"
//                 />
//               )}
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 mb-2">NNIC Back Image:</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => handleImageUpload(e, setBackImage)}
//                 className="w-full p-2 border rounded"
//               />
//               {backImage && (
//                 <img
//                   src={typeof backImage === 'string' ? backImage : URL.createObjectURL(backImage)}
//                   alt="NNIC Back"
//                   className="mt-4 w-48 h-32 object-cover"
//                 />
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//       {/* Agreement Section */}
//       <div className="flex-1 bg-white shadow-lg rounded-lg p-6 md:w-[60%] w-[100%]">
//         <h1 className="text-2xl font-bold mb-4">Conditions for Rental of Scaffolding</h1>
//         <p className="mb-4">
//           This is an agreement made between{" "}
//           <span className="font-bold">DMA Transport & Scaffolding Ltd</span>{" "}
//           (Owner) and{" "}
//           <span className="underline">
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="border border-b-gray-950"
//             />
//           </span>{" "}
//           (Customer) in the year of our Lord 20
//           <span className="underline">
//             <input
//               type="number"
//               value={year}
//               onChange={(e) => setYear(e.target.value)}
//               className="border border-b-gray-950"
//             />
//           </span>
//         </p>
//         <ol className="list-decimal list-inside mb-4">
//           <li className="mb-2">Scaffolding must be maintained in proper manner by client.</li>
//           <li className="mb-2">Scaffolding and/or components must not be thrown from any height so as to cause damage to same.</li>
//           <li className="mb-2">All scaffolding must be kept at the job location for which it is rented and must not be transferred to any other site without the owner's written permission.</li>
//           <li className="mb-2">Scaffolding is rented on a daily basis for any part thereof.</li>
//           <li className="mb-2">Cost of rental and deposit must be paid in advance.</li>
//           <li className="mb-2">Saturday Sunday and Public Holidays are included in the days for which rental is charged.</li>
//           <li className="mb-2">Scaffolding could be collected and rented between the hours of:</li>
//           <ul className="list-disc list-inside pl-6 mb-2">
//             <li>7:30am - 3:30pm Mondays - Fridays</li>
//             <li>8:00am - 12:00noon Sundays</li>
//           </ul>
//           <li className="mb-2">Scaffolding must be loaded or unloaded in the presence of the owner or appointed agent at the time of collection or return.</li>
//           <li className="mb-2">In any case where any scaffolding and/or components are lost or damaged the customer agrees to pay the owner the cost for the equipment.</li>
//         </ol>

//         <div className="flex items-center mt-8">
//           <input
//             type="checkbox"
//             id="agree"
//             checked={agreed}
//             onChange={handleAgreementChange}
//             className="mr-2"
//           />
//           <label htmlFor="agree" className="text-gray-700 font-bold">
//             I agree to the terms and conditions
//           </label>
//         </div>

//         {agreed && (
//           <div className="mt-4">
//             {/* <button className="bg-blue-500 text-white px-6 py-2 rounded font-bold" onClick={handleAgree}>
//               I Agree
//             </button> */}
//             <button onClick={handleAgree}>Agree and Place Order</button>

//             <PaymentModal
//               show={showPaymentModal}
//               onClose={() => setShowPaymentModal(false)}
//               onSubmit={handlePaymentSubmit}
//             />

//           </div>
//         )}
//       </div>
//       {/* Modal for showing messages */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded shadow-lg">
//             <h2 className="text-2xl font-bold mb-4">Message</h2>
//             <p>{modalMessage}</p>
//             <button className="bg-red-500 text-white px-4 py-2 rounded mt-4" onClick={closeModal}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Agreement


//30/july/24

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { clearCart } from '../../Slice/Cart/CartSlice'; // Adjust the import path as necessary
import PaymentModal from '../../Components/Modal/PaymentModal'

const Agreement = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orderData } = location.state || {};

  const ApiUrl = 'https://2lkz6gq8-5002.inc1.devtunnels.ms'; // Replace with your actual API URL

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nnicNumber, setNnicNumber] = useState("");
  const [address, setAddress] = useState("");
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [year, setYear] = useState(24);
  const [agreed, setAgreed] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Fetch data from local storage
    const savedName = localStorage.getItem('name');
    const savedPhoneNumber = localStorage.getItem('phoneNumber');
    const savedNnicNumber = localStorage.getItem('nationalId');
    const savedAddress = localStorage.getItem('address');
    const savedFrontImage = localStorage.getItem('imageFront');
    const savedBackImage = localStorage.getItem('imageBack');

    // Set state with fetched data
    if (savedName) setName(savedName);
    if (savedPhoneNumber) setPhoneNumber(savedPhoneNumber);
    if (savedNnicNumber) setNnicNumber(savedNnicNumber);
    if (savedAddress) setAddress(savedAddress);
    if (savedFrontImage) setFrontImage(`${ApiUrl}/gallery${savedFrontImage}`);
    if (savedBackImage) setBackImage(`${ApiUrl}/gallery${savedBackImage}`);

    // Log the URLs to ensure they are correct
    console.log('Front Image URL:', `${ApiUrl}/gallery${savedFrontImage}`);
    console.log('Back Image URL:', `${ApiUrl}/gallery${savedBackImage}`);
  }, [ApiUrl]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const openPaymentModal = () => {
    setShowPaymentModal(true);
  };

  const handlePaymentSubmit = async (details) => {
    setPaymentDetails(details); // Set the payment details in state

    try {
      const pres = await fetch(`${ApiUrl}/wipay/voucher_pay`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(details)
      });

      const paymentData = await pres.json();
      console.log(paymentData);

      if (paymentData.status === "success") {
        // If payment is successful, place the order
        handleOrderPlacement();
      } else {
        setModalMessage('Payment failed. Please try again.');
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      setModalMessage('Error processing payment. Please try again.');
      setShowModal(true);
    }
  };

  const handleImageUpload = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleAgreementChange = () => {
    setAgreed(!agreed);
  };

  const handleAgree = () => {
    openPaymentModal();
  };

  const handleOrderPlacement = async () => {
    const formData = new FormData();
    formData.append('orderData', JSON.stringify(orderData));

    if (frontImage) {
      formData.append('imageFront', frontImage);
    }

    if (backImage) {
      formData.append('imageBack', backImage);
    }

    try {
      const response = await axios.post(`${ApiUrl}/api/users/order-item`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200 && response.data.message === "Order Placed Successfully") {
        dispatch(clearCart());
        navigate('/orderHistory');
        console.log('Order placed successfully:');
      } else {
        setModalMessage(response.data.message || 'Order placement failed. Please try again.');
        setShowModal(true);
      }
    } catch (error) {
      console.error('Error placing order:', error);
      setModalMessage('Error placing order. Please try again.');
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setModalMessage("");
  };

  return (
    <div className="flex flex-col md:flex-row py-10 px-2 gap-1">
      {/* Card for Additional Information */}
      <div className="flex-1 flex items-center justify-center md:w-[40%] w-[100%]">
        <div className="bg-gray-200 shadow-lg rounded-lg p-6 mb-8 w-full h-full">
          <h2 className="text-2xl font-bold mb-4">Customer Information</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Phone Number:</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Address:</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">National ID Number:</label>
              <input
                type="text"
                value={nnicNumber}
                onChange={(e) => setNnicNumber(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">NNIC Front Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, setFrontImage)}
                className="w-full p-2 border rounded"
              />
              {frontImage && (
                <img
                  src={typeof frontImage === 'string' ? frontImage : URL.createObjectURL(frontImage)}
                  alt="NNIC Front"
                  className="mt-4 w-48 h-32 object-cover"
                />
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">NNIC Back Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, setBackImage)}
                className="w-full p-2 border rounded"
              />
              {backImage && (
                <img
                  src={typeof backImage === 'string' ? backImage : URL.createObjectURL(backImage)}
                  alt="NNIC Back"
                  className="mt-4 w-48 h-32 object-cover"
                />
              )}
            </div>
          </form>
        </div>
      </div>
      {/* Agreement Section */}
      <div className="flex-1 bg-white shadow-lg rounded-lg p-6 md:w-[60%] w-[100%]">
        <h1 className="text-2xl font-bold mb-4">Conditions for Rental of Scaffolding</h1>
        <p className="mb-4">
          This is an agreement made between{" "}
          <span className="font-bold">DMA Transport & Scaffolding Ltd</span>{" "}
          (Owner) and{" "}
          <span className="underline">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-b-gray-950"
            />
          </span>{" "}
          (Customer) in the year of our Lord 20
          <span className="underline">
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="border border-b-gray-950"
            />
          </span>
        </p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-2">Scaffolding must be maintained in proper manner by client.</li>
          <li className="mb-2">Scaffolding and/or components must not be thrown from any height so as to cause damage to same.</li>
          <li className="mb-2">All scaffolding must be kept at the job location for which it is rented and must not be transferred to any other site without the owner's written permission.</li>
          <li className="mb-2">Scaffolding is rented on a daily basis for any part thereof.</li>
          <li className="mb-2">Cost of rental and deposit must be paid in advance.</li>
          <li className="mb-2">Saturday Sunday and Public Holidays are included in the days for which rental is charged.</li>
          <li className="mb-2">Scaffolding could be collected and rented between the hours of:</li>
          <ul className="list-disc list-inside pl-6 mb-2">
            <li>7:30am - 3:30pm Mondays - Fridays</li>
            <li>8:00am - 12:00noon Sundays</li>
          </ul>
          <li className="mb-2">Scaffolding must be loaded or unloaded in the presence of the owner or appointed agent at the time of collection or return.</li>
          <li className="mb-2">In any case where any scaffolding and/or components are lost or damaged the customer agrees to pay the owner the cost for the equipment.</li>
        </ol>

        <div className="flex items-center mt-8">
          <input
            type="checkbox"
            id="agree"
            checked={agreed}
            onChange={handleAgreementChange}
            className="mr-2"
          />
          <label htmlFor="agree" className="text-gray-700 font-bold">
            I agree to the terms and conditions
          </label>
        </div>

        {agreed && (
          <div className="mt-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded font-bold" onClick={handleAgree}>
              I Agree
            </button>

            <PaymentModal
              show={showPaymentModal}
              onClose={() => setShowPaymentModal(false)}
              onSubmit={handlePaymentSubmit}
            />
          </div>
        )}
      </div>
      {/* Modal for showing messages */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Message</h2>
            <p>{modalMessage}</p>
            <button className="bg-red-500 text-white px-4 py-2 rounded mt-4" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Agreement;

