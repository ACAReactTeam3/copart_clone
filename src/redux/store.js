import { legacy_createStore as createStore } from "redux";
import { v4 as uuid } from "uuid";
import { actionType } from "../constants/constants";

export let store = createStore(function(state, action) {
  
    if(action.type == actionType.userSignIn) {
       return state.map(item => {
        if(item.nickname == action.payload.nickname && item.password == action.payload.password ) {
          return {
            ...item,
            loggedIn: action.payload.loggedIn,
            save: localStorage.setItem('userLoggedIn', true )
          }
          
        } else {return item }
      })
    }

    if(action.type == actionType.userSignUp) {
        return [
            ...state,
            {
              nickname: action.payload.nickname,
              name: action.payload.name,
              surname: action.payload.surname,
              password: action.payload.password,
              loggedIn: false,
              id: uuid(),
              posts: '',
              favorite: []
            }
          ]
    }
    if(action.type == 'added-user-post') {
      return state.map(item => {
        return {
          ...item,
          posts: [
            {
              model: action.payload.model,
              color: action.payload.color,
              price: action.payload.price,
              moneyType: action.payload.moneyType,
              mileage: action.payload.mileage,
              horsepower: action.payload.horsepower,
              body: action.payload.body,
              gearbox: action.payload.gearbox,
              handDrive: action.payload.handDrive,
              engine: action.payload.engine,
              additionalInfo: action.payload.additionalInfo
            }
          ]
        }
      })
    }
    return state
},  [
        {
          nickname: 'Tigran',
          name: 'Tigran',
          surname: 'Yeritsyan',
          password: 123,
          loggedIn: false,
          id: uuid(),
          posts: [],
          favorite: [],
        },
        {
          nickname: 'Armen',
          name: 'Armen',
          surname: 'Vardanyan',
          password: 123,
          loggedIn: false,
          id: uuid(),
          posts: [],
          favorite: []
        }
    ]
)