export const intialState ={
  

  
    term:null
 };
 
 function reducer(state,action){
    
       switch (action.type) {
           case 'SAVE_TERM':
            
               
 
         
            
             return{
                 ...state,
                 term:action.term
             }
         
 
           default:
               return state;
             
       }
 }
 export default reducer;