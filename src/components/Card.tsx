import axios from 'axios';
import { useState } from 'react';
import { Responce } from '../Model/Models'

const Card = (props: { res: Responce, setRes: React.Dispatch<React.SetStateAction<Responce>> }) => {
    const [pagnumber, setPagnumber] = useState(1)
    const pagination = () => {
        if (props.res.next) {
            let options = {
                method: 'GET',
                url: props.res.next,
                headers: {
                    'X-RapidAPI-Key': '2d04c8fe7dmsha351e7b3080b61cp1a8af9jsncefbf38edcd1',
                    'X-RapidAPI-Host': 'papi-pornstarsapi.p.rapidapi.com'
                }
            };
            axios.request(options).then(function (response) {
                props.setRes(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        }
        if (props.res.previous) {
            let options = {
                method: 'GET',
                url: props.res.previous,
                headers: {
                    'X-RapidAPI-Key': '2d04c8fe7dmsha351e7b3080b61cp1a8af9jsncefbf38edcd1',
                    'X-RapidAPI-Host': 'papi-pornstarsapi.p.rapidapi.com'
                }
            };
            axios.request(options).then(function (response) {
                props.setRes(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        }
    };

    const data = props.res.results;
    return (
        <div className="w-full p-6 dark:bg-gray-900">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 px-auto">
                {
                    data.map(item => {
                        return (
                            <div
                                className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a href="/">
                                    <img src={item.images[0].image} className="rounded-t-lg" alt="actress-img" />
                                </a>
                                <div>
                                    <a href={item.pornpics_link}>
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                    <a href={item.images[0].image_link} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Read more
                                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* Pagination */}
            <nav aria-label="Page navigation example">
                <ul className="inline-flex items-center -space-x-px">
                    {
                        props.res.previous ?
                            <li>
                                <button onClick={() => { pagination(); setPagnumber(pagnumber - 1) }} className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Previous</span>
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                </button>
                            </li>
                            : null
                    }
                    <li>
                        <button aria-current="page" className="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{pagnumber}</button>
                    </li>
                    {
                        props.res.next ?
                            <li>
                                <button onClick={() => { pagination(); setPagnumber(pagnumber + 1) }} className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Next</span>
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                </button>
                            </li> : null
                    }
                </ul>
            </nav>

        </div>
    )
}

export default Card
