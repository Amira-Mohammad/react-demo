import {CREATE_POST , CREATE_POST_ERROR} from '../Types'
const initState= {
  posts: [
    { id : "1" , author :"Amira" , Title :"UI developer"},
    { id : "2" , author :"Mohammad" , Title :"accountant"},
    { id : "3" , author :"Aml" , Title :"employee"}
  ]
}
const postReducers = (state = initState , action) =>{
  switch (action.type){
    case CREATE_POST :
     console.log('created project' , action.post)
     return state 
     case CREATE_POST_ERROR :
      console.log('created project error' , action.err)
      return state
      default:
      return state
  }

}

export default postReducers;