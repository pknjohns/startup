import React from 'react';
import './about.css';

export function About() {
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');
  
  // We only want this to render the first time the component is created and so we provide an empty dependency list.
  React.useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setQuoteAuthor(data.author);
      })
      .catch();
  }, []);

    return (
      <main>
        <div id='picture' className='picture-box'>
          <img width='400px' src='assets\datingPic.JPG' alt='random' />
        </div>
        <p>
          The Date Idea Generator is a website where you can find inspiration for dates.
          You can search for dates by category, and then when you find a date idea that interests you
          you can commit to the date. This will then show in your dating history. If you would like to
          see what dates are popular, you can visit the Local Dating History page to see what dates people
          are going on and be inspired by their history.
        </p>

        <div className='quote-box bg-light text-dark'>
          <p className='quote'>{quote}</p>
          <p className='author'>{quoteAuthor}</p>
        </div>
    </main>
    );
  }