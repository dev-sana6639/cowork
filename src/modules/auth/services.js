import queryString from 'qs';
// // Handle the button press
// export const signInWithPhoneNumber = async (phoneNumber) => {
    
    
//     const number =  phoneNumber.Number
    
//     const confirmation = await auth().signInWithPhoneNumber(number);
//     console.log('after number')
//    return confirmation;
//   }


export const RegisterService = async (props) => {

    // const {
    //     email,
    //     fullname,
    //     password,
    //     phone_numer
    // } =props;

    const name = props.fullname;
    const email = props.email;
    const role = 3;
    const password = props.password;
   
    

    return new Promise((resolve, reject) => {
      const baseUrl = 'https://tourvenue.herokuapp.com/api/signin';
     const  token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MzFkYmFiYjhlMjAwMjI3YjRjODIiLCJpYXQiOjE2MjM2NjcyNDR9.UurIAdCBIDw1BKsMVl196mtSEa-2q5UScCfFCM7CZsU'
     

     fetch('https://tourvenue.herokuapp.com/api/signup', {
         method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            "name" : name,
             "email": email,
             "role" : role,
             "password" : password,
            })
      })
        .then(res => res.json())
        .then(data => {
          if (data.code) {
            reject(new Error(data.message));
          } else {
            resolve(data);
          }
        })
        .catch(error => {
          console.log(error);
          return error;
        });
    });
  };
    


  
export const LoginService = async (props) => {
 console.log('came to login service')
    // const {
    //     email,
    //     fullname,
    //     password,
    //     phone_numer
    // } =props;

    
    const email = props.email;
    
    const password = props.password
    const role = 3;
    

    return new Promise((resolve, reject) => {
       console.log('came inside promise')
     fetch('https://tourvenue.herokuapp.com/api/signin', {
         method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            "email" : email,
            "password": password,
            "role": role,
          })
      })
        .then(res => res.json())
        .then(data => {
          if (data.code) {
            reject(new Error(data.message));
          } else {
            resolve(data);
          }
        })
        .catch(error => {
          console.log(error);
          return error;
        });
    });
  };