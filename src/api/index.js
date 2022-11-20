import axios from "axios";


const options = {
    method: 'GET',
    url: 'https://covid-193.p.rapidapi.com/statistics',
    headers: {
      'X-RapidAPI-Key': 'c6d2598c7emshdcb4ee3cf59b7c0p1be428jsn93ed39cca7f6',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
};

export const fetchStatistics = async () => {
    try{
        const { data: {response} } = await axios.request(options);
        return response
    }catch (error){

    }
}
