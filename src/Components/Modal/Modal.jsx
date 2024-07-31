

//13/july/24
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import OTPModal from './OtpModal'; // Adjust the import path accordingly
// import { setAuthData } from '../../Slice/Auth/AuthSlice';
// import { auth, googleProvider } from '../../../firebase'; // Adjust the import path accordingly
// import { signInWithPopup } from 'firebase/auth'; // import signInWithPopup from Firebase Auth
// import GoogleIcon from "../../assets/Images/GoogleIcon.jpg"

// const Modal = ({ isOpen, onClose, modalType, switchToSignUp, onSignInSuccess }) => {
//   const [signInData, setSignInData] = useState({ username: '', password: '' });
//   const [signUpData, setSignUpData] = useState({ username: '', profilePicture: null, email: '', password: '' });
//   const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
//   const [emailForOtp, setEmailForOtp] = useState('');
//   const [error, setError] = useState('');

//   const dispatch = useDispatch();

//   if (!isOpen) return null;

//   const handleSignIn = async () => {
//     try {
//       const signData = {
//         email: signInData.username,
//         password: signInData.password,
//       };

//       const response = await axios.post('https://2lkz6gq8-5002.inc1.devtunnels.ms/api/users/login', signData);

//       console.log("Login data:", response.data);

//       const { token, userId, name, image } = response.data;

//       localStorage.setItem('token', token);
//       localStorage.setItem('userId', userId);
//       localStorage.setItem('name', name);
//       localStorage.setItem('profilePicture', image);

//       dispatch(setAuthData({ token, userId }));

//       onClose();
//       onSignInSuccess({ name, profilePicture: image });

//     } catch (error) {
//       console.error('Sign In Error:', error.response);
//       setError('Invalid email or password. Please try again or fill all the fields'); // Set error message
//     }
//   };

//   const handleSignUp = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('name', signUpData.username);
//       formData.append('image', signUpData.profilePicture);
//       formData.append('email', signUpData.email);
//       formData.append('password', signUpData.password);
//       formData.append('role', 'user');

//       const response = await axios.post('https://2lkz6gq8-5002.inc1.devtunnels.ms/api/users/register', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       console.log("registered successfully....", response.data);

//       if (response.data.message === "success") {
//         setEmailForOtp(signUpData.email);
//         setIsOtpModalOpen(true);
//       } else {
//         setError('Failed to register. Please try again or fill all the fields.');
//       }
//     } catch (error) {
//       console.error('Sign Up Error:', error);
//       setError('Failed to register. Please try again or fill all the fields.');
//     }
//   };

//   const handleSignInChange = (e) => {
//     const { name, value } = e.target;
//     setSignInData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleSignUpChange = (e) => {
//     const { name, value } = e.target;
//     setSignUpData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleProfilePictureChange = (e) => {
//     setSignUpData((prevState) => ({ ...prevState, profilePicture: e.target.files[0] }));
//   };

//   const handleVerifyOtp = (otp) => {
//     console.log('Verify OTP:', otp);
//     setIsOtpModalOpen(false);
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const { user } = result;
//       const token = await user.getIdToken();
//       const { displayName, email, photoURL, uid } = user;

//       localStorage.setItem('token', token);
//       localStorage.setItem('userId', uid);
//       localStorage.setItem('name', displayName);
//       localStorage.setItem('profilePicture', photoURL);

//       dispatch(setAuthData({ token, userId: uid }));

//       onClose();
//       onSignInSuccess({ name: displayName, profilePicture: photoURL });
//     } catch (error) {
//       console.error('Google Sign-In Error:', error);
//     }
//   };

//   return (
//     <>
//       <div className="fixed inset-0 z-50 flex justify-end">
//         <div className="fixed inset-0" onClick={onClose}></div>
//         <div className="relative w-80 h-full bg-white bg-opacity-95 shadow-lg p-8">
//           <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">
//             &#10005;
//           </button>
//           {modalType === 'signin' ? (
//             <div>
//               <h2 className="text-2xl mb-4 text-customColor-circleColor font-bold">Sign In</h2>
//               {error && <p className="text-red-500 mb-2">{error}</p>}
//               <div>
//                 <h3 className="text-black">Email:</h3>
//                 <input
//                   type="text"
//                   name="username"
//                   value={signInData.username}
//                   onChange={handleSignInChange}
//                   placeholder="Email"
//                   className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-black">Password:</h3>
//                 <input
//                   type="password"
//                   name="password"
//                   value={signInData.password}
//                   onChange={handleSignInChange}
//                   placeholder="Password"
//                   className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
//                 />
//               </div>
//               <button className="w-full py-2 bg-yellow-500 text-white rounded" onClick={handleSignIn}>
//                 Log In
//               </button>
//               <button className='w-full flex my-4 p-2 text-yellow-500 bg-white rounded border border-customColor-circleColor justify-center'>
//               <div
//                 className="pr-2"
//                 onClick={handleGoogleSignIn}
//               >
//                 Log In With Google
//               </div>
//               <img src={GoogleIcon} alt="google" className='h-7 w-7'/>
//               </button>
//               <div className="flex justify-between my-5">
//                 <p className="text-sm">Remember</p>
//                 <p className="text-sm text-customColor-circleColor underline">Lost Your Password?</p>
//               </div>
//               <div className="flex justify-center text-center">
//                 <p className="text-sm">
//                   <span className="text-customColor-circleColor underline cursor-pointer" onClick={switchToSignUp}>
//                     Create An Account
//                   </span>
//                 </p>
//               </div>
//             </div>
//           ) : (
//             <div>
//               <h2 className="text-2xl mb-4 text-customColor-circleColor">Sign Up</h2>
//               {error && <p className="text-red-500 mb-2">{error}</p>}
//               <div>
//                 <h3 className="text-black">Username:</h3>
//                 <input
//                   type="text"
//                   name="username"
//                   value={signUpData.username}
//                   onChange={handleSignUpChange}
//                   placeholder="Username"
//                   className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-black">Upload Profile:</h3>
//                 <input
//                   type="file"
//                   name="profilePicture"
//                   onChange={handleProfilePictureChange}
//                   className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-black">Email:</h3>
//                 <input
//                   type="text"
//                   name="email"
//                   value={signUpData.email}
//                   onChange={handleSignUpChange}
//                   placeholder="Email"
//                   className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-black">Password:</h3>
//                 <input
//                   type="password"
//                   name="password"
//                   value={signUpData.password}
//                   onChange={handleSignUpChange}
//                   placeholder="Password"
//                   className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
//                 />
//               </div>
//               <button className="w-full py-2 bg-yellow-500 text-white rounded" onClick={handleSignUp}>
//                 Sign Up
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//       <OTPModal
//         isOpen={isOtpModalOpen}
//         onClose={() => setIsOtpModalOpen(false)}
//         onVerify={handleVerifyOtp}
//         email={emailForOtp}
//       />
//     </>
//   );
// };

// export default Modal;


// 23/july/24
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import OTPModal from './OtpModal'; // Adjust the import path accordingly
// import { setAuthData } from '../../Slice/Auth/AuthSlice';
// import { auth, googleProvider } from '../../../firebase'; 
// import { signInWithPopup } from 'firebase/auth'; // import signInWithPopup from Firebase Auth
// import GoogleIcon from "../../assets/Images/GoogleIcon.jpg"

// const Modal = ({ isOpen, onClose, modalType, switchToSignUp, onSignInSuccess }) => {
//   const [signInData, setSignInData] = useState({ username: '', password: '' });
//   const [signUpData, setSignUpData] = useState({ username: '', email: '', password: '' });
//   const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
//   const [emailForOtp, setEmailForOtp] = useState('');
//   const [error, setError] = useState('');

//   const dispatch = useDispatch();

//   if (!isOpen) return null;

//   const handleSignIn = async () => {
//     try {
//       const signData = {
//         email: signInData.username,
//         password: signInData.password,
//       };

//       const response = await axios.post('https://2lkz6gq8-5002.inc1.devtunnels.ms/api/users/login', signData);

//       console.log("Login data:", response.data);

//       const { token, userId, name, image } = response.data;

//       localStorage.setItem('token', token);
//       localStorage.setItem('userId', userId);
//       localStorage.setItem('name', name);
//       localStorage.setItem('profilePicture', image);

//       dispatch(setAuthData({ token, userId }));

//       onClose();
//       onSignInSuccess({ name, profilePicture: image });

//     } catch (error) {
//       console.error('Sign In Error:', error.response);
//       setError('Invalid email or password. Please try again or fill all the fields'); // Set error message
//     }
//   };

//   const handleSignUp = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('name', signUpData.username);
//       // formData.append('image', signUpData.profilePicture);
//       formData.append('email', signUpData.email);
//       formData.append('password', signUpData.password);
//       formData.append('role', 'user');

//       const response = await axios.post('https://2lkz6gq8-5002.inc1.devtunnels.ms/api/users/register', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       console.log("registered successfully....", response.data);

//       if (response.data.message === "success") {
//         setEmailForOtp(signUpData.email);
//         setIsOtpModalOpen(true);
//       } else {
//         setError('Failed to register. Please try again or fill all the fields.');
//       }
//     } catch (error) {
//       console.error('Sign Up Error:', error);
//       setError('Failed to register. Please try again or fill all the fields.');
//     }
//   };

//   const handleSignInChange = (e) => {
//     const { name, value } = e.target;
//     setSignInData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleSignUpChange = (e) => {
//     const { name, value } = e.target;
//     setSignUpData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleProfilePictureChange = (e) => {
//     setSignUpData((prevState) => ({ ...prevState, profilePicture: e.target.files[0] }));
//   };

//   const handleVerifyOtp = (otp) => {
//     console.log('Verify OTP:', otp);
//     setIsOtpModalOpen(false);
//   };

//   const handleGoogleSignIn = async () => {
//     try {
      

//       const response = await axios.get('https://2lkz6gq8-5002.inc1.devtunnels.ms/auth/google');

//       console.log("Google Sign-In data:", response.data);

//       localStorage.setItem('token', token);
//       localStorage.setItem('userId', uid);
//       localStorage.setItem('name', displayName);
//       localStorage.setItem('profilePicture', photoURL);

//       dispatch(setAuthData({ token, userId: uid }));

//       onClose();
//       onSignInSuccess({ name: displayName, profilePicture: photoURL });
//     } catch (error) {
//       console.error('Google Sign-In Error:', error);
//     }
//   };

//   const handleGoogleSignUp = async () => {
//     try {
    

//       const response = await axios.post('https://2lkz6gq8-5002.inc1.devtunnels.ms/auth/google');

//       console.log("Google Sign-Up data:", response.data);

//       localStorage.setItem('token', token);
//       localStorage.setItem('userId', uid);
//       localStorage.setItem('name', displayName);
//       localStorage.setItem('profilePicture', photoURL);

//       dispatch(setAuthData({ token, userId: uid }));

//       onClose();
//       onSignInSuccess({ name: displayName, profilePicture: photoURL });
//     } catch (error) {
//       console.error('Google Sign-Up Error:', error);
//     }
//   };

//   return (
//     <>
//       <div className="fixed inset-0 z-50 flex justify-end">
//         <div className="fixed inset-0" onClick={onClose}></div>
//         <div className="relative w-80 h-full bg-white bg-opacity-95 shadow-lg p-8">
//           <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">
//             &#10005;
//           </button>
//           {modalType === 'signin' ? (
//             <div>
//               <h2 className="text-2xl mb-4 text-customColor-circleColor font-bold">Sign In</h2>
//               {error && <p className="text-red-500 mb-2">{error}</p>}
//               <div>
//                 <h3 className="text-black">Email:</h3>
//                 <input
//                   type="text"
//                   name="username"
//                   value={signInData.username}
//                   onChange={handleSignInChange}
//                   placeholder="Email"
//                   className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-black">Password:</h3>
//                 <input
//                   type="password"
//                   name="password"
//                   value={signInData.password}
//                   onChange={handleSignInChange}
//                   placeholder="Password"
//                   className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
//                 />
//               </div>
//               <button className="w-full py-2 bg-yellow-500 text-white rounded" onClick={handleSignIn}>
//                 Log In
//               </button>
//               <button className='w-full flex my-4 p-2 text-yellow-500 bg-white rounded border border-customColor-circleColor justify-center' onClick={handleGoogleSignIn}>
//                 <div className="pr-2">
//                   Log In With Google
//                 </div>
//                 <img src={GoogleIcon} alt="google" className='h-7 w-7'/>
//               </button>
//               <div className="flex justify-between my-5">
//                 <p className="text-sm">Remember</p>
//                 <p className="text-sm text-customColor-circleColor underline">Lost Your Password?</p>
//               </div>
//               <div className="flex justify-center text-center">
//                 <p className="text-sm">
//                   <span className="text-customColor-circleColor underline cursor-pointer" onClick={switchToSignUp}>
//                     Create An Account
//                   </span>
//                 </p>
//               </div>
//             </div>
//           ) : (
//             <div>
//               <h2 className="text-2xl mb-4 text-customColor-circleColor">Sign Up</h2>
//               {error && <p className="text-red-500 mb-2">{error}</p>}
//               <div>
//                 <h3 className="text-black">Username:</h3>
//                 <input
//                   type="text"
//                   name="username"
//                   value={signUpData.username}
//                   onChange={handleSignUpChange}
//                   placeholder="Username"
//                   className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
//                 />
//               </div>
//               {/* <div>
//                 <h3 className="text-black">Upload Profile:</h3>
//                 <input
//                   type="file"
//                   name="profilePicture"
//                   onChange={handleProfilePictureChange}
//                   className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
//                 />
//               </div> */}
//               <div>
//                 <h3 className="text-black">Email:</h3>
//                 <input
//                   type="text"
//                   name="email"
//                   value={signUpData.email}
//                   onChange={handleSignUpChange}
//                   placeholder="Email"
//                   className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-black">Password:</h3>
//                 <input
//                   type="password"
//                   name="password"
//                   value={signUpData.password}
//                   onChange={handleSignUpChange}
//                   placeholder="Password"
//                   className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
//                 />
//               </div>
//               <button className="w-full py-2 bg-yellow-500 text-white rounded" onClick={handleSignUp}>
//                 Sign Up
//               </button>
//               <button className='w-full flex my-4 p-2 text-yellow-500 bg-white rounded border border-customColor-circleColor justify-center' onClick={handleGoogleSignUp}>
//                 <div className="pr-2">
//                   Sign Up With Google
//                 </div>
//                 <img src={GoogleIcon} alt="google" className='h-7 w-7'/>
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//       <OTPModal
//         isOpen={isOtpModalOpen}
//         onClose={() => setIsOtpModalOpen(false)}
//         onVerify={handleVerifyOtp}
//         email={emailForOtp}
//       />
//     </>
//   );
// };

// export default Modal;

// 23/7/24
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import OTPModal from './OtpModal'; // Adjust the import path accordingly
// import { setAuthData } from '../../Slice/Auth/AuthSlice';
// import { auth, googleProvider } from '../../../firebase'; 
// import { signInWithPopup } from 'firebase/auth'; // import signInWithPopup from Firebase Auth
// import GoogleIcon from "../../assets/Images/GoogleIcon.jpg"

// const Modal = ({ isOpen, onClose, modalType, switchToSignUp, onSignInSuccess }) => {
//   const [signInData, setSignInData] = useState({ username: '', password: '' });
//   const [signUpData, setSignUpData] = useState({ username: '', email: '', password: '' });
//   const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
//   const [emailForOtp, setEmailForOtp] = useState('');
//   const [error, setError] = useState('');

//   const dispatch = useDispatch();

//   if (!isOpen) return null;

//   const handleSignIn = async () => {
//     try {
//       const signData = {
//         email: signInData.username,
//         password: signInData.password,
//       };

//       const response = await axios.post('https://2lkz6gq8-5002.inc1.devtunnels.ms/api/users/login', signData);

//       console.log("Login data:", response.data);

//       const { token, userId, name, image } = response.data;

//       localStorage.setItem('token', token);
//       localStorage.setItem('userId', userId);
//       localStorage.setItem('name', name);
//       localStorage.setItem('profilePicture', image);

//       dispatch(setAuthData({ token, userId }));

//       onClose();
//       onSignInSuccess({ name, profilePicture: image });

//     } catch (error) {
//       console.error('Sign In Error:', error.response);
//       setError('Invalid email or password. Please try again or fill all the fields'); // Set error message
//     }
//   };

//   const handleSignUp = async () => {
//     try {
//       const signUpFormData = {
//         name: signUpData.username,
//         email: signUpData.email,
//         password: signUpData.password,
//         role: 'user',
//       };

//       const response = await axios.post('https://2lkz6gq8-5002.inc1.devtunnels.ms/api/users/register', signUpFormData);

//       console.log("Registered successfully:", response.data);

//       if (response.data.message === "success") {
//         setEmailForOtp(signUpData.email);
//         setIsOtpModalOpen(true);
//       } else {
//         setError('Failed to register. Please try again or fill all the fields.');
//       }
//     } catch (error) {
//       console.error('Sign Up Error:', error);
//       setError('Failed to register. Please try again or fill all the fields.');
//     }
//   };

//   const handleSignInChange = (e) => {
//     const { name, value } = e.target;
//     setSignInData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleSignUpChange = (e) => {
//     const { name, value } = e.target;
//     setSignUpData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleVerifyOtp = (otp) => {
//     console.log('Verify OTP:', otp);
//     setIsOtpModalOpen(false);
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       const response = await axios.get('https://2lkz6gq8-5002.inc1.devtunnels.ms/auth/google');

//       console.log("Google Sign-In data:", response.data);

//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('userId', response.data.uid);
//       localStorage.setItem('name', response.data.displayName);
//       localStorage.setItem('profilePicture', response.data.photoURL);

//       dispatch(setAuthData({ token: response.data.token, userId: response.data.uid }));

//       onClose();
//       onSignInSuccess({ name: response.data.displayName, profilePicture: response.data.photoURL });
//     } catch (error) {
//       console.error('Google Sign-In Error:', error);
//     }
//   };

//   const handleGoogleSignUp = async () => {
//     try {
//       const response = await axios.post('https://2lkz6gq8-5002.inc1.devtunnels.ms/auth/google');

//       console.log("Google Sign-Up data:", response.data);

//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('userId', response.data.uid);
//       localStorage.setItem('name', response.data.displayName);
//       localStorage.setItem('profilePicture', response.data.photoURL);

//       dispatch(setAuthData({ token: response.data.token, userId: response.data.uid }));

//       onClose();
//       onSignInSuccess({ name: response.data.displayName, profilePicture: response.data.photoURL });
//     } catch (error) {
//       console.error('Google Sign-Up Error:', error);
//     }
//   };

//   return (
//     <>
//       <div className="fixed inset-0 z-50 flex justify-end">
//         <div className="fixed inset-0" onClick={onClose}></div>
//         <div className="relative w-80 h-full bg-white bg-opacity-95 shadow-lg p-8">
//           <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">
//             &#10005;
//           </button>
//           {modalType === 'signin' ? (
//             <div>
//               <h2 className="text-2xl mb-4 text-customColor-circleColor font-bold">Sign In</h2>
//               {error && <p className="text-red-500 mb-2">{error}</p>}
//               <div>
//                 <h3 className="text-black">Email:</h3>
//                 <input
//                   type="text"
//                   name="username"
//                   value={signInData.username}
//                   onChange={handleSignInChange}
//                   placeholder="Email"
//                   className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-black">Password:</h3>
//                 <input
//                   type="password"
//                   name="password"
//                   value={signInData.password}
//                   onChange={handleSignInChange}
//                   placeholder="Password"
//                   className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
//                 />
//               </div>
//               <button className="w-full py-2 bg-yellow-500 text-white rounded" onClick={handleSignIn}>
//                 Log In
//               </button>
//               <button className='w-full flex my-4 p-2 text-yellow-500 bg-white rounded border border-customColor-circleColor justify-center' onClick={handleGoogleSignIn}>
//                 <div className="pr-2">
//                   Log In With Google
//                 </div>
//                 <img src={GoogleIcon} alt="google" className='h-7 w-7'/>
//               </button>
//               <div className="flex justify-between my-5">
//                 <p className="text-sm">Remember</p>
//                 <p className="text-sm text-customColor-circleColor underline">Lost Your Password?</p>
//               </div>
//               <div className="flex justify-center text-center">
//                 <p className="text-sm">
//                   <span className="text-customColor-circleColor underline cursor-pointer" onClick={switchToSignUp}>
//                     Create An Account
//                   </span>
//                 </p>
//               </div>
//             </div>
//           ) : (
//             <div>
//               <h2 className="text-2xl mb-4 text-customColor-circleColor">Sign Up</h2>
//               {error && <p className="text-red-500 mb-2">{error}</p>}
//               <div>
//                 <h3 className="text-black">Username:</h3>
//                 <input
//                   type="text"
//                   name="username"
//                   value={signUpData.username}
//                   onChange={handleSignUpChange}
//                   placeholder="Username"
//                   className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-black">Email:</h3>
//                 <input
//                   type="text"
//                   name="email"
//                   value={signUpData.email}
//                   onChange={handleSignUpChange}
//                   placeholder="Email"
//                   className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-black">Password:</h3>
//                 <input
//                   type="password"
//                   name="password"
//                   value={signUpData.password}
//                   onChange={handleSignUpChange}
//                   placeholder="Password"
//                   className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
//                 />
//               </div>
//               <button className="w-full py-2 bg-yellow-500 text-white rounded" onClick={handleSignUp}>
//                 Sign Up
//               </button>
//               <button className='w-full flex my-4 p-2 text-yellow-500 bg-white rounded border border-customColor-circleColor justify-center' onClick={handleGoogleSignUp}>
//                 <div className="pr-2">
//                   Sign Up With Google
//                 </div>
//                 <img src={GoogleIcon} alt="google" className='h-7 w-7'/>
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//       <OTPModal
//         isOpen={isOtpModalOpen}
//         onClose={() => setIsOtpModalOpen(false)}
//         onVerify={handleVerifyOtp}
//         email={emailForOtp}
//       />
//     </>
//   );
// };

// export default Modal;

// 24/7/24

import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import OTPModal from './OtpModal'; // Adjust the import path accordingly
import { setAuthData } from '../../Slice/Auth/AuthSlice';
import { auth, googleProvider } from '../../../firebase'; 
import { signInWithPopup } from 'firebase/auth'; // import signInWithPopup from Firebase Auth
import GoogleIcon from "../../assets/Images/GoogleIcon.jpg"

const Modal = ({ isOpen, onClose, modalType, switchToSignUp, onSignInSuccess }) => {
  const [signInData, setSignInData] = useState({ username: '', password: '' });
  const [signUpData, setSignUpData] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    nationalId: '',
    imageFront: null,
    imageBack: null,
  });
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [emailForOtp, setEmailForOtp] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleSignIn = async () => {
    try {
      const signData = {
        email: signInData.username,
        password: signInData.password,
      };

      const response = await axios.post('https://2lkz6gq8-5002.inc1.devtunnels.ms/api/users/login', signData);

      console.log("Login data:", response.data);

      const { token, id, name, email, role, phoneNumber, address, imageBack, imageFront, nationalId } = response.data;

      // Save data to local storage
      localStorage.setItem('token', token);
      localStorage.setItem('userId', id);
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      // localStorage.setItem('profilePicture', imageFront);
      localStorage.setItem('imageFront', imageFront);
      localStorage.setItem('imageBack', imageBack);
      localStorage.setItem('address', address);
      localStorage.setItem('nationalId', nationalId);
      localStorage.setItem('phoneNumber', phoneNumber);
      localStorage.setItem('role', role);

      // Dispatch to Redux
      dispatch(setAuthData({
        token,
        userId: id,
        name,
        email,
        // profilePicture: imageFront,
        address,
        imageBack,
        imageFront,
        nationalId,
        phoneNumber,
        role
      }));


      onClose();
      onSignInSuccess({ name, profilePicture: imageFront });

    } catch (error) {
      console.error('Sign In Error:', error);
      setError('Invalid email or password. Please try again or fill all the fields'); // Set error message
    }
  };
  

  const handleSignUp = async () => {
    try {
      const signUpFormData = new FormData();
      signUpFormData.append('name', signUpData.username);
      signUpFormData.append('email', signUpData.email);
      signUpFormData.append('password', signUpData.password);
      signUpFormData.append('role', 'user');
      signUpFormData.append('phoneNumber', signUpData.phoneNumber);
      signUpFormData.append('address', signUpData.address);
      signUpFormData.append('nationalId', signUpData.nationalId);
      signUpFormData.append('imageFront', signUpData.imageFront);
      signUpFormData.append('imageBack', signUpData.imageBack);

      const response = await axios.post('https://2lkz6gq8-5002.inc1.devtunnels.ms/api/users/register', signUpFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log("Registered successfully:", response.data);

      if (response.data.message === "success") {
        setEmailForOtp(signUpData.email);
        setIsOtpModalOpen(true);
      } else {
        setError('Failed to register. Please try again or fill all the fields.');
      }
    } catch (error) {
      console.error('Sign Up Error:', error);
      setError('Failed to register. Please try again or fill all the fields.');
    }
  };

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setSignUpData((prevState) => ({ ...prevState, [name]: files[0] }));
  };

  const handleVerifyOtp = (otp) => {
    console.log('Verify OTP:', otp);
    setIsOtpModalOpen(false);
  };

  const handleGoogleSignIn = async () => {
    try {
      const response = await axios.get('https://2lkz6gq8-5002.inc1.devtunnels.ms/auth/google');

      console.log("Google Sign-In data:", response.data);

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.uid);
      localStorage.setItem('name', response.data.displayName);
      localStorage.setItem('profilePicture', response.data.photoURL);

      dispatch(setAuthData({ token: response.data.token, userId: response.data.uid }));

      onClose();
      onSignInSuccess({ name: response.data.displayName, profilePicture: response.data.photoURL });
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const response = await axios.post('https://2lkz6gq8-5002.inc1.devtunnels.ms/auth/google');

      console.log("Google Sign-Up data:", response.data);

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.uid);
      localStorage.setItem('name', response.data.displayName);
      localStorage.setItem('profilePicture', response.data.photoURL);

      dispatch(setAuthData({ token: response.data.token, userId: response.data.uid }));

      onClose();
      onSignInSuccess({ name: response.data.displayName, profilePicture: response.data.photoURL });
    } catch (error) {
      console.error('Google Sign-Up Error:', error);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-end">
        <div className="fixed inset-0" onClick={onClose}></div>
        <div className="relative w-80 h-full bg-white bg-opacity-95 shadow-lg p-8">
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">
            &#10005;
          </button>
          {modalType === 'signin' ? (
            <div>
              <h2 className="text-2xl mb-4 text-customColor-circleColor font-bold">Sign In</h2>
              {error && <p className="text-red-500 mb-2">{error}</p>}
              <div>
                <h3 className="text-black">Email:</h3>
                <input
                  type="text"
                  name="username"
                  value={signInData.username}
                  onChange={handleSignInChange}
                  placeholder="Email"
                  className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
                />
              </div>
              <div>
                <h3 className="text-black">Password:</h3>
                <input
                  type="password"
                  name="password"
                  value={signInData.password}
                  onChange={handleSignInChange}
                  placeholder="Password"
                  className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
                />
              </div>
              <button className="w-full py-2 bg-yellow-500 text-white rounded" onClick={handleSignIn}>
                Log In
              </button>
              {/* <button className='w-full flex my-4 p-2 text-yellow-500 bg-white rounded border border-customColor-circleColor justify-center' onClick={handleGoogleSignIn}>
                <div className="pr-2">
                  Log In With Google
                </div>
                <img src={GoogleIcon} alt="google" className='h-7 w-7'/>
              </button> */}
              <div className="flex justify-between my-5">
                <p className="text-sm">Remember</p>
                <p className="text-sm text-customColor-circleColor underline">Lost Your Password?</p>
              </div>
              <div className="flex justify-center text-center">
                <p className="text-sm">
                  <span className="text-customColor-circleColor underline cursor-pointer" onClick={switchToSignUp}>
                    Create An Account
                  </span>
                </p>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl mb-4 text-customColor-circleColor">Sign Up</h2>
              {error && <p className="text-red-500 mb-2">{error}</p>}
              <div>
                <h3 className="text-black">Username:</h3>
                <input
                  type="text"
                  name="username"
                  value={signUpData.username}
                  onChange={handleSignUpChange}
                  placeholder="Username"
                  className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
                />
              </div>
              <div>
                <h3 className="text-black">Email:</h3>
                <input
                  type="text"
                  name="email"
                  value={signUpData.email}
                  onChange={handleSignUpChange}
                  placeholder="Email"
                  className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
                />
              </div>
              <div>
                <h3 className="text-black">Password:</h3>
                <input
                  type="password"
                  name="password"
                  value={signUpData.password}
                  onChange={handleSignUpChange}
                  placeholder="Password"
                  className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
                />
              </div>
              <div>
                <h3 className="text-black">Phone Number:</h3>
                <input
                  type="text"
                  name="phoneNumber"
                  value={signUpData.phoneNumber}
                  onChange={handleSignUpChange}
                  placeholder="Phone Number"
                  className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
                />
              </div>
              <div>
                <h3 className="text-black">Address:</h3>
                <input
                  type="text"
                  name="address"
                  value={signUpData.address}
                  onChange={handleSignUpChange}
                  placeholder="Address"
                  className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
                />
              </div>
              <div>
                <h3 className="text-black">National ID:</h3>
                <input
                  type="text"
                  name="nationalId"
                  value={signUpData.nationalId}
                  onChange={handleSignUpChange}
                  placeholder="National ID"
                  className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
                />
              </div>
              <div>
                <h3 className="text-black">Front Image:</h3>
                <input
                  type="file"
                  name="imageFront"
                  onChange={handleFileChange}
                  className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
                />
              </div>
              <div>
                <h3 className="text-black">Back Image:</h3>
                <input
                  type="file"
                  name="imageBack"
                  onChange={handleFileChange}
                  className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
                />
              </div>
              <button className="w-full py-2 bg-yellow-500 text-white rounded" onClick={handleSignUp}>
                Sign Up
              </button>
              {/* <button className='w-full flex my-4 p-2 text-yellow-500 bg-white rounded border border-customColor-circleColor justify-center' onClick={handleGoogleSignUp}>
                <div className="pr-2">
                  Sign Up With Google
                </div>
                <img src={GoogleIcon} alt="google" className='h-7 w-7'/>
              </button> */}
            </div>
          )}
        </div>
      </div>
      <OTPModal
        isOpen={isOtpModalOpen}
        onClose={() => setIsOtpModalOpen(false)}
        onVerify={handleVerifyOtp}
        email={emailForOtp}
      />
    </>
  );
};

export default Modal;

