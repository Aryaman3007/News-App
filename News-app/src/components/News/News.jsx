import React, { useState } from "react";
import axios from 'axios'
import BackToTop from "../BackToTop";

const News = () => {
  const navItems = [
    {
      name: 'Apple',
      api: 'https://newsapi.org/v2/everything?q=apple&from=2023-12-23&to=2023-12-23&sortBy=popularity&apiKey=e68a970b58ba470f86da2db556263176',
      img: "https://www.macobserver.com/wp-content/uploads/2019/04/workfeatured-apple-news-text-logo.png"

    },
    {
      name: "US Headlines",
      api: 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e68a970b58ba470f86da2db556263176',
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2Punhc0T_lvjjOFaO1IDYTCT55YTuJK-LDZps0j2hh2OGxdZRoVI3kQbjWZU1tYjJ-Y&usqp=CAU"

    },
    {
      name: "TechCrunch",
      api: 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e68a970b58ba470f86da2db556263176',
      img: "data:image/png;base64,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"
    },
    {
      name: "Wall Street Journal",
      api: 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e68a970b58ba470f86da2db556263176',
      img: "https://library.rice.edu/sites/default/files/styles/wide/public/media-images/Wall-Street-Journal_0.png?itok=pX2q_fat"
    },
    {
      name: "BBC News",
      api: "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e68a970b58ba470f86da2db556263176",
      img: "https://ichef.bbci.co.uk/images/ic/1200x675/p0g6j1tq.jpg"
    },
    {
      name: "Tesla",
      api: "https://newsapi.org/v2/everything?q=tesla&from=2023-11-26&sortBy=publishedAt&apiKey=e68a970b58ba470f86da2db556263176",
      img: "data:image/jpeg;base64,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"
    }
  ]

  const [data, setData] = useState([])
  const [visible, setVisible] = useState(6)

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 4)
  }


  const formatDate = (publishedAt) => {
    const date = new Date(publishedAt);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };

    return date.toLocaleDateString('en-US', options);
  };

  const getNews = (propToFill) => {
    axios.get(`${propToFill}`)
      .then((res) => {
        setData(res.data.articles)
        setVisible(6)
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }
  return (
    <>
      <div className="w-full flex flex-row flex-wrap justify-center my-8">
        {navItems.map((item,index) =>
        (
          <div key={index} onClick={() => getNews(item.api)} className="w-1/3 px-8 flex flex-col justify-center cursor-pointer opacity-85 hover:opacity-100 py-8">
            <img className="w-full h-60" src={item.img} />
            <h1 className='flex justify-center text-2xl font-semibold font-mono pt-2'>
              {item.name}
            </h1>
          </div>
        )
        )}
      </div>
      <div className="bg-slate-200 flex flex-col justify-center items-center">
        <div className="flex flex-row flex-wrap justify-center">
          {data.slice(0, visible).map((p,index) => {
            return (
              <div key={index} className="w-3/4 mx-4 my-4 min-h-content rounded-lg overflow-hidden shadow-xl bg-white">
                <div className="flex flex-row">
                  <div className="w-1/4">
                    <div className="px-8 py-4">
                      <img className="w-56 h-48" src={p.urlToImage} alt="image" />
                    </div>
                  </div>
                  <div className="w-3/4 flex flex-col py-8 px-4 justify-between">
                    <div className="mb-4 text-slate-700 font-semibold font-sans flex items-center">
                      <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z" /></svg>
                      {formatDate(p.publishedAt)}
                    </div>
                    <div>
                      <h1 className="font-bold text-4xl mb-2 text-blue-900">{p.title}</h1>
                    </div>
                    <div>
                      <div className="font-base font-serif text-black text-xl my-2">{p.description}</div>
                    </div>
                    <div className="flex flex-row items-center mt-8">
                      <a className="font-semibold text-slate-800 mr-2 hover:underline cursor-pointer" href={p.url}>READ MORE</a>
                      <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        {visible < data.length && (
          <button onClick={showMoreItems} className="bg-blue-700 px-8 py-4 mb-12 font-medium text-white my-4 hover:bg-blue-600">LOAD MORE</button>
        )}
      </div>
    </>
  );
}

export default News


