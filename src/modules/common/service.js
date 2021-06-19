



export const topratedspaces = [
    {    
        id:1,
       
        spacename: 'Workinbuddy Park View',
        price:'11.000',
        location: 'BTM Layout',
        rating: 4.1
    },
    {   
        id:2,
     
        spacename: 'Workinbuddy Park View',
        price:'11.000',
        location: 'HSR Layout',
        rating: 4.1
    },
    {   
        id:3,
      
        spacename: 'Workinbuddy Park View',
        price:'11.000',
        location: 'AECS Layout',
        rating: 4.1
    },
   
   

]

// recent veiwed spaces


export const recentviewedspaces = [
    {    
        id:1,
        
        spacename: 'Workinbuddy Hermoso',
        price:'9.000',
        location: 'Kalyan Nagar',
        rating: 4.8
    },
    {   
        id:2,
        
        spacename: 'Workinbuddy Hermoso',
        price:'15.000',
        location: 'Kalyan Nagar',
        rating: 4.5
    },
    {   
        id:3,
      
        spacename: 'Workinbuddy Hermoso',
        price:'10.000',
        location: 'Kalyan Nagart',
        rating: 3.8
    },
   
   

]

// browsebylocality
export const browsebylocalityareas = [
    {  
        id:1,
       area:'HSR Layout'
    },
    {  
        id:2,
       area:'AECS Layout'
    },
    {  
        id:3,
       area:'BML Layout'
    },
]

// our blog to support you
export const blogstosuppoertyou = [
    {  
        id:1,
       headline:'5 Tips for staying healthy while working from home by workbuddy',
       time:'May 27, 2021'
    },
    {  
        id:2,
       area:'Best cyber security tip to keep your device secure by workbuddy',
       time:'May 27, 2021'
    },
    {  
        id:3,
       area:'5 Tips for creating a productive home office by workbuddy',
       time:'May 27, 2021'
    },
    {
        id:4,
        area:'9 Must do’s for business professionals tips by workbuddy',
        time:'May 27, 2021'
    },
]

export const Blogstosupportyou = async () =>{
    return blogstosuppoertyou
}
export const getbrowsebylocality = async () => {
    return browsebylocalityareas
}
export const  recentviewspaces = async () =>{

    return recentviewedspaces;
}

export const  gettopratedspaces = async () =>{

    return topratedspaces;
}


import {AndroidFaceBookAppID} from '../../config/constants';

export const LoginwithFacebook = async () =>{

    console.log('came to login service')
    console.log('facebook id is',AndroidFaceBookAppID)
    
    try{
        const {token, type} = await Facebook.logInWithReadPermissionsAsync(
            AndroidFaceBookAppID,
            {
                permissions: "'public_profile",
            }
        );

        console.log('token from facebook is:',token)

        // getting all user data from FB API
        // const response = await fetch(

        // )

    } catch(e){
        console.log('Error while connecting to facebook')
    }
}