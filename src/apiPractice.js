// const getData = async () => {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//         const data = await response.json();

//         if(!response.ok){
//             throw new Error(data.message);
//         }
//         console.log(data);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// getData();

// get, post, put, patch, delete

// const myProduct = {title: 'api product'};

// const postData = async () => {
//     try {
//         const response = await fetch('https://dummyjson.com/products/add', {
//             method: 'POST',
//             headers: { 'Content-Type' : 'application/json'}, //no content type for body of type FormData
//             body: JSON.stringify(myProduct)
//         });4
//         const data = await response.json();
        
//         if(!response.ok){
//             throw new Error(data.message || "Invalid response");
//         }

//         console.log(data);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// postData();


// export const authenticateUser = async () => {
//     try {
//         const response = await fetch('https://dummyjson.com/auth/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 username: 'emilys',
//                 password : 'emilyspass',
//                 expiresInMins : 30,
//             }),
//             credentails: 'include'
//         });
//         const data = await response.json();
//         if(!response.ok){
//             throw new Error(data.message || "Invalid response");
//         }

//         localStorage.setItem('token', data.accessToken);
//         const token = localStorage.getItem('token');
//         console.log(token, 'token');
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// authenticateUser();


// export const getUserInfo = async () => {
//     try {
//         const token = localStorage.getItem('token');
//         const response = await fetch('https://dummyjson.com/auth/me', {
//             method: 'GET',
//             headers: {
//                 'Authorization': ` Bearer ${token}`
//             }, 
//             // credentials: 'include'
//         });

//         const data = await response.json();
//         if(!response.ok){
//             throw new Error(data.message || "Server error");
//         }

//         console.log(data);
//     } catch (error) {
//         console.error(error);
//         console.log(error.message);
//     }
// }

// getUserInfo();


