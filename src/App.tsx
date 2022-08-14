import { useEffect, useState } from 'react';
import axios from 'axios';
import { Responce } from './Model/Models';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Loading from './components/Loading';

function App() {
  const [loading, setloading] = useState(true)
  const [mode, setMode] = useState(false)
  const [res, setRes] = useState<Responce>({
    count: 5,
    next: null,
    previous: null,
    results: [
      {
        name: "Aaliyah Love",
        age: 41,
        date_of_birth: "1981-01-11",
        nationality: "United States",
        ethnicity: "Caucasian",
        eyes: "Hazel",
        hair: "Blonde",
        height: "5ft 1in",
        height_ft: 5,
        height_in: 1,
        weight: "105lbs",
        boobs: "Natural",
        ass: "Unknown",
        shoe_size: "35.5 eu",
        tats: "Little Bear On Left Shoulder",
        piercings: "Both Ears",
        cup_size: "A",
        raw_measurement: "33A-25-34",
        bust: 33,
        waist: 25,
        hip: 2,
        pornpics_link: 'https://www.pornpics.com/pornstars/aaliyah-love/',
        freeones_link: '/aaliyah-love/bio',
        images: [
          {
            image: 'https://cdni.pornpics.com/460/7/89/74808621/74808621_004_b5ec.jpg',
            image_link: 'https://api.papi.rest/media/74808621_004_b5ec.jpg',
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
  const themeChanger = () => {
    if (mode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };
  setTimeout(() => {
    setloading(false)
  }, 300)
  return (
    <div className="App">
      {
        loading ? <Loading /> : null
      }
      <Navbar setName={setName} themeChange={themeChanger} setMode={setMode} mode={mode} />
      <Card res={res} setRes={setRes} />
    </div>
  );
}

export default App;
