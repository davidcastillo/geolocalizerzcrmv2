import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv'
dotenv.config()


const app = express();
const port = process.env.PORT || 5000;


app.get('/api/cities', async (req, res) => {
    var key = '';
    const response = await fetch(`https://accounts.zoho.com/oauth/v2/token?refresh_token=${process.env.ZOHOCRM_REFRESH_TOKEN}&client_id=${process.env.ZOHOCRM_CLIENT_ID}&client_secret=${process.env.ZOHOCRM_CLIENT_SECRET}&grant_type=refresh_token`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
    })
    .then(response => response.json())
    .then(data => key = data.access_token)
    .then( async test => {
     key = `Zoho-oauthtoken ${key}`;
     const fetchCities = async () => {
       await fetch(`https://www.zohoapis.com/crm/v2/Ciudades`, {
         method: 'GET', 
         headers: {
           'Authorization': key              
         },
       })
       .then(response => response.json())
       .then(data => {
         //console.log('Success:', data);
         res.send({ citiesInZCRM: data });
       })
       .catch((error) => {
         console.error('Error:', error);
       });
     }
      fetchCities();
       })
});


app.listen(port, () => console.log(`Listening on port ${port}`))