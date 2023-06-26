import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "Brampton"
                }
            });
        setResults(response.data.businesses);
    } catch (err) {
        setErrorMessage('Something went wrong.');
    }
    }

    useEffect(() => {
       searchApi('indian');
   }, []); 
    // use effect with two arguements calls searchApi only the first
    // time when the component is rendered

    return [results, searchApi, errorMessage];
}