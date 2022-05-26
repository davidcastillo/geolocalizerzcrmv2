import {useState, useEffect} from 'react'
import Map from './components/Map'
import Loader from './components/Loader'

function App() {
    const [eventData, setEventData] = useState([])
    //const [loading, setLoading] = useState(false)
    //var key = '';
    useEffect(()=>{

      fetch('https://www.givingis.cool/api/cities')
      .then(response => response.json())
      .then(data => {
        setEventData(data.citiesInZCRM.data)
        console.log(eventData)})
      .catch((error) => {
        console.error('Error:', error);
      });



      // const fetchEvents = async () => {
        //setLoading(true)
//        await fetch(`/auth/oauth/v2/token?refresh_token=${process.env.REACT_APP_ZOHOCRM_REFRESH_TOKEN}&client_id=${process.env.REACT_APP_ZOHOCRM_CLIENT_ID}&client_secret=${process.env.REACT_APP_ZOHOCRM_CLIENT_SECRET}&grant_type=refresh_token`, {
        // await fetch(`https://accounts.zoho.com/oauth/v2/token?refresh_token=${process.env.REACT_APP_ZOHOCRM_REFRESH_TOKEN}&client_id=${process.env.REACT_APP_ZOHOCRM_CLIENT_ID}&client_secret=${process.env.REACT_APP_ZOHOCRM_CLIENT_SECRET}&grant_type=refresh_token`, {

        //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
        // })
        // .then(response => response.json())
        // .then(data => {
        //   //setEventData(data.access_token)
        //   setEventData(data.data)
        //   //key = data.access_token
        //   //console.log(eventData)
        //   //console.log(key)
        // })
//         .then( async eventData => {
//           var queryRequest = JSON.stringify({"select_query": "select id from Contacts where id is not null limit 100"});
//           key = `Zoho-oauthtoken ${key}`;
//           //console.log(key);
//           //console.log(queryRequest);
  
//         const fetchCities = async () => {
// //          await fetch(`/data/crm/v2/Ciudades`, {

//           await fetch(`https://www.zohoapis.com/crm/v2/Ciudades`, {
//             method: 'GET', 
//             headers: {
//               //'Content-Type': 'text/plain',
//               'Authorization': key              
//             },
//             //body: queryRequest,
//           })
//           .then(response => response.json())
//           .then(data => {
//             setEventData(data.data)
//             //setLoading(false)

//             //console.log('Success:', data);
//           })
//           .catch((error) => {
//             console.error('Error:', error);
//           });
//         }
//          fetchCities()
//       })
      // };
      // fetchEvents()
      //console.log(eventData);
    },[])
  

  return (
    <div >
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <Map eventData={eventData}/>
      {/* <Map /> */}
    </div>
  );
}

export default App;
