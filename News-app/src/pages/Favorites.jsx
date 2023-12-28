import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { useAppContext } from '../components/context/AppContext'

const Favorites = () => {
    const { favorites, addToFavorites, removeFromFavorites } = useAppContext()

    console.log('favorites are:', favorites)

    const favoriteChecker = (index) => {
        return favorites.some((news) => news.index === index)
    }

    const formatDate = (publishedAt) => {
        const date = new Date(publishedAt);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };

        return date.toLocaleDateString('en-US', options);
    };

    return (
        <>
            <div className='w-full min-h-screen bg-slate-200'>
                <Navbar />
                <div className="bg-slate-200 flex flex-col justify-center items-center">
                    <div className="flex flex-row flex-wrap justify-center">
                        {favorites.length > 0 ? favorites.map((p, index) => {
                            return (
                                <div key={index} className="w-3/4 mx-4 my-4 min-h-content rounded-lg overflow-hidden shadow-xl bg-white">
                                    <div className="flex md:flex-row flex-col">
                                        <div className="md:w-1/4 w-full">
                                            <div className="md:px-8 md:py-4">
                                                <img className="md:w-56 h-48 w-96" src={p.urlToImage} alt="image" />
                                            </div>
                                        </div>
                                        <div className="w-full px-4 flex flex-col py-8 justify-between">
                                            <div className="mb-4 text-slate-700 font-semibold font-sans flex items-center">
                                                <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" /></svg>
                                                {formatDate(p.publishedAt)}
                                            </div>
                                            <div>
                                                <h1 className="font-bold md:text-4xl text-2xl mb-2 text-blue-900">{p.title}</h1>
                                            </div>
                                            <div>
                                                <div className="font-base font-serif text-black md:text-xl text-base my-2">{p.description}</div>
                                            </div>
                                            <div className="flex flex-row items-center mt-8">
                                                <a className="font-semibold text-slate-800 mr-2 hover:underline cursor-pointer" href={p.url}>READ MORE</a>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                                            </div>
                                            <div>
                                                {favoriteChecker(p.index) ?
                                                    <button
                                                        onClick={() => removeFromFavorites(p.index)}
                                                        className="bg-red-600 text-white">Remove from Favourite</button>
                                                    :
                                                    <button
                                                        onClick={() => addToFavorites(p)}
                                                        className="bg-red-600 text-white">Add to Favourite</button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                            :
                            <h1 className='flex mt-32 text-3xl font-semibold text-black'>You don't have any Favorites</h1>
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Favorites