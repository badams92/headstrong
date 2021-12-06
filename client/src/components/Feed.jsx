import React from 'react';
import axios from 'axios';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Follow from './Follow.jsx';
const Feed = ({ quoteText, quoteAuthor, entries, changePosts, username, imageURL }) => {

  const time = moment().calendar();

  return (
    <div className='text wrap'>

      <div id='mainFeed'>
        <h1>{quoteText}</h1>
        <h2 style={ { marginRight: 5 } }><i>- {quoteAuthor}</i></h2>
        <br></br>


        <button className='btn btn-primary btn-block ' type='submit' onClick={ () =>{
          const data = { author: quoteAuthor, body: quoteText };
          axios.post('/quotes', data)
            .then(response => console.log('Quote Added', response))
            .catch(err => console.log('Axios Quote Error', err));
        }
        }>Like</button>
      </div>
      <div id='comments'>


        <h1 >Public Posts</h1>


        {entries.map(entry =>
          <div key={ entry.id } >
            <p>{`${ entry.username }`}</p>

            <p>{`${ entry.title }`}</p>
            <p>{`Message: ${ entry.blog }`}</p>
            <p>{entry.journalImage ? <img height='200px' width='auto' src={ entry.journalImage }/> : null}</p>
            <p>{`Posted: ${entry.createdAt}`}</p>
            < Follow />
            <hr></hr>
          </div>).sort()}
      </div>

    </div>
  );
};

export default Feed;
