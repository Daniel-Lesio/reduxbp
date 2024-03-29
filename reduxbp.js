const { createStore } = Redux;

const initState = {
  todos : [],
  posts : []
}
function myReducer(state = initState,action){
   if( action.type =='ADD_TODO' ){
     return {
       ...state,
       todos : [...state.todos,action.todo]
     }
   }
    
  
  if( action.type =='ADD_POST' ){
     return {
       ...state,
       posts : [...state.posts,action.post]
     }
   }

}



const store = createStore(myReducer);

store.subscribe( () =>{
  console.log('state updated');
 
  console.log(store.getState())
} )

store.dispatch({type : 'ADD_TODO',todo : 'first todo'});
store.dispatch({type : 'ADD_TODO',todo : 'second todo'});

store.dispatch({type : 'ADD_POST',post : 'first post '});
