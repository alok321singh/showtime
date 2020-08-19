import React, { useEffect, createContext,useState } from "react";
import  {getPopularMoviesUrl} from '../Api/url'
import  {getTopRatedMoviesUrl} from '../Api/url'
import  {getTrendingDailyMoviesUrl} from '../Api/url'
import  {getTrendingWeeklyMoviesUrl} from '../Api/url'
import  {getPopularTvUrl} from '../Api/url'
import  {getTopRatedTvUrl} from '../Api/url'
import  {getTrendingDailyTvUrl } from '../Api/url'
import  { getTrendingWeeklyTvUrl} from '../Api/url'
export const globalStore = createContext();

// const initialState = {
  
// };

// const user = (state = {}, action) => {
//     switch (action.type) {
//         case LOGIN:
//             return action.payload
//         case SIGNUP:
//             return action.payload
//         case UPDATE_EMAIL:
//            return { ...state, email: action.payload }
           
//         case UPDATE_PASSWORD:
//             return { ...state, password: action.payload }
//         case ERROR:
//          return {...state,error:action.payload}
//         default:
//             return state
//     }
// }

export const ShowtimeContextProvider = props => {
  // const [state, dispatch] = useReducer(user, initialState);
  const [Loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [data6, setData6] = useState([]);
  const [data7, setData7] = useState([]);
  const rated="TOP POPULAR MOVIES";
  
const Movie=getPopularMoviesUrl(1)
const Movie1=getTopRatedMoviesUrl(1)
const Movie2=getTrendingDailyMoviesUrl(1)
const Movie3=getTrendingWeeklyMoviesUrl(1)
const Tv=getPopularTvUrl(1)
const  Tv1=getTopRatedTvUrl(1)
const Tv2=getTrendingDailyTvUrl(1)
const Tv3=getTrendingWeeklyTvUrl(1)
async function fetchMyAPI() {
  Promise.all([
    await fetch(Movie).then(value => value.json()),
    await  fetch(Movie1).then(value => value.json()),
    await   fetch(Movie2).then(value => value.json()),
    await   fetch(Movie3).then(value => value.json()),
    await   fetch(Tv).then(value => value.json()),
    await  fetch(Tv1).then(value => value.json()),
    await   fetch(Tv2).then(value => value.json()),
    await   fetch(Tv3).then(value => value.json())
     ])
     .then((value) => {
        setData(value[0].results)
        setData1(value[1].results)
        setData2(value[2].results)
        setData3(value[3].results)
        setData4(value[4].results)
        setData5(value[5].results)
        setData6(value[6].results)
        setData7(value[7].results)
     })
     .catch((err) => {
         console.log(err);
     }) .finally(() => setLoading(false));
}

    
  useEffect(() => {
    fetchMyAPI()
  },
   [Movie,Movie1,Movie2,Movie3]);
  return (
    <globalStore.Provider value={{
      Loading,
      data,
      data1,
      data2,
      data3,
      data4,
      data5,
      data6,
      data7
    }}>
      {props.children}
    </globalStore.Provider>
  );
};