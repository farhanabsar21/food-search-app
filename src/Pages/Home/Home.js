import React, { useEffect, useState } from 'react';
import './Home.scss';
import { projectFirestore } from '../../firebase/config'
import RecipeList from '../../Components/RecipeList/RecipeList';

const Home = () => {
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState('')
    
    // useEffect(()=> {
    //     setIsPending(true)
    //     projectFirestore.collection('recipes').get().then((snapshot) => {
    //         if(snapshot.empty){
    //             setError('no recipes to load')
    //             setIsPending(false)
    //         }else{
    //             let result = []
    //             snapshot.docs.forEach(doc => {
    //                 result.push({id: doc.id, ...doc.data()})
    //             })
    //             setData(result)
    //             setIsPending(false)
    //         }
    //     }).catch(err => console.log(err))
    // }, [])

    // real time update

    useEffect(()=> {
        setIsPending(true)
        const unSubscribe = projectFirestore.collection('recipes').onSnapshot((snapshot) => {
            if(snapshot.empty){
                setError('no recipes to load')
                setIsPending(false)
            }else{
                let result = []
                snapshot.docs.forEach(doc => {
                    result.push({id: doc.id, ...doc.data()})
                })
                setData(result)
                setIsPending(false)
            }
        }, (err) => {
            setError(err.message)
            setIsPending(false)
        })

        return () => unSubscribe()
    }, [])

    return (
        <div className='home-container'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <RecipeList recipes={data}/>}
        </div>
    );
};

export default Home;