
export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    },
  };
  

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': '522cc987f1mshe5f9f993899b784p11834djsndc95c970787e',
    },
};

export const fetchData = async (url, options)=>{
    const response = await fetch(url, options);
    const data = await response.json()
    return data;
}