import React from 'react';
import Noticia from './Noticia';
import PropTypes from 'prop-types';
import Form from './Form';

const NewsList = ( {news} ) => ( 
        <div className = "row">
            {news.map(noticia => (
                <Noticia
                    key = {noticia.url}
                    noticia = {noticia}
                />
            ))}
        </div>
     );

NewsList.propTypes = {
    news : PropTypes.array.isRequired
}
export default NewsList;