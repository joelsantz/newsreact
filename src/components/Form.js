import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    state = {
        category : 'technology'
     }
    
     handle = e => {
         this.setState ({
             category : e.target.value
         }, () => {
             // Pasarlo a la pagina principal
         this.props.consultNews(this.state.category);
         });

         
     }

    render() { 
        return ( 
            <div className = "buscador row">
                <div className = "col s12 m8 offset-m2">
                    <form>
                        <h2>Find news by category</h2>
                        <div className = "input-field cold s12">
                            <select
                                onChange = {this.handle}
                            >
                                <option value = "general">
                                    General
                                </option>
                                <option value = "entertainment">
                                    Entertainment
                                </option>
                                <option value = "business">
                                    Business
                                </option>
                                <option value = "health">
                                    Health
                                </option>
                                <option value = "science">
                                    Science
                                </option>
                                <option value = "sports">
                                    Sports
                                </option>
                                <option value = "technology">
                                    Technology
                                </option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
Form.propTypes = {
    consultNews : PropTypes.func.isRequired
}

export default Form;