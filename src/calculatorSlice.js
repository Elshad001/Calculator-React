import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  left:"",
  opr:" " ,
  right:" " ,
  result:""
};



const calculatorSlice = createSlice({
  name: "calculator",
  initialState: initialState,
  reducers: {

      changeNumber: (state,action) => {
        state.opr===" " ?

        state.left = state.left + action.payload 
        :
        state.right =state.right + action.payload
      },

      changeOperand: (state,action) => {
        state.opr = action.payload  
      },

      changeEqual: (state) => {
       
        if(state.opr === "+" )
        {
            state.result=parseInt(state.left)+ parseInt(state.right)
            state.left=' '  
            state.right=' '
            state.opr=' '
        }

        else if(state.opr === "-" )
        {
            state.result=parseInt(state.left) - parseInt(state.right)
            state.left=' '  
            state.right=' '
            state.opr=' '
        }

        else if(state.opr === "*" )
        {
            state.result=parseInt(state.left) * parseInt(state.right)
            state.left=' '  
            state.right=' '
            state.opr=' '
        }

        else if(state.opr === "/" )
        {
            state.result=parseInt(state.left) / parseInt(state.right)
            state.left=' '  
            state.right=' '
            state.opr=' '
        }
        
      },

      changeClear: (state) => {

        state.left=' '  
        state.right=' '
        state.opr=' '
        state.result=' '

      },

  },
});

  

export const { changeNumber ,changeOperand ,changeEqual,changeClear} = calculatorSlice.actions;
export default calculatorSlice.reducer;



