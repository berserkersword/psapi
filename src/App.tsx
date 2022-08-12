import { useEffect, useState } from 'react';
import axios from 'axios';
import { Responce } from './Model/Models';
import Navbar from './components/Navbar';
import Card from './components/Card'
function App() {
  const [res, setRes] = useState<Responce>({
    count: 5,
    next: null,
    previous: null,
    results: [
      {
        name: 'Mia',
        age: 20,
        date_of_birth: '123',
        eyes: 'blue',
        hair: '',
        pornpics_link: 'https://m.media-amazon.com/images/M/MV5BMzc1YTA1ZjItMWRhMy00ZTBlLTkzNTgtNTc4ZDE3YTM3ZDk2XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY1200_CR285,0,630,1200_AL_.jpg',
        freeones_link: 'https://m.media-amazon.com/images/M/MV5BMzc1YTA1ZjItMWRhMy00ZTBlLTkzNTgtNTc4ZDE3YTM3ZDk2XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY1200_CR285,0,630,1200_AL_.jpg',
        images: [
          {
            image: 'https://m.media-amazon.com/images/M/MV5BMzc1YTA1ZjItMWRhMy00ZTBlLTkzNTgtNTc4ZDE3YTM3ZDk2XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY1200_CR285,0,630,1200_AL_.jpg',
            image_link: 'https://m.media-amazon.com/images/M/MV5BMzc1YTA1ZjItMWRhMy00ZTBlLTkzNTgtNTc4ZDE3YTM3ZDk2XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY1200_CR285,0,630,1200_AL_.jpg',
            is_profile_pic: false
          }
        ]
      }
    ]
  });
  const [name, setName] = useState<string | null>(null);
  useEffect(() => {
    let options = {
      method: 'GET',
      url: 'https://papi-pornstarsapi.p.rapidapi.com/pornstars/',
      headers: {
        'X-RapidAPI-Key': '2d04c8fe7dmsha351e7b3080b61cp1a8af9jsncefbf38edcd1',
        'X-RapidAPI-Host': 'papi-pornstarsapi.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      setRes(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [name])

  return (
    <div className="App">
      <Navbar setName={setName} />
      <Card res={res} />
    </div>
  );
}

export default App;
