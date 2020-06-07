import {CREATE_POST , CREATE_POST_ERROR} from '../Types';

export const createPost = (post)=>{
    return ( dispatch , getState , {getFirebase , getFirestore}) =>{
        const firestore = getFirestore();
        firestore.collection('posts').add({
            ...post ,
            userFirstName:"Amira",
            userLastName:"Mohammad",
           }).then(()=>{
            dispatch({type: CREATE_POST , post})
        }).catch((err)=>{
            dispatch({type: CREATE_POST_ERROR , err})

        })
        

    }

}