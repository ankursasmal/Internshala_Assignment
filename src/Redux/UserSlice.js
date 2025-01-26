import { createSlice } from '@reduxjs/toolkit'
 
const initialState = {
  value: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state,action) => {
      let id=state.value.length
        action.payload={...action.payload,id:id};
      state.value.push(action.payload);
    },
    delUser: (state,action) => {
      console.log(action.payload)
       state.value=state.value.filter((user)=> user.id !==action.payload);
      
    },
    editUser: (state, action) => {
        let index=state.value.findIndex((user)=> user.id==action.payload.id);
if(index!=-1){
      state.value[index]={...state.value[index],...action.payload};
}  
},
   
  },
})

 export const { addUser, delUser,editUser } = userSlice.actions

export default userSlice.reducer