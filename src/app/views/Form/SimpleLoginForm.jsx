import React, {Component, PropTypes} from 'react'
import {reduxForm} from 'redux-form'
import {show as showResults} from '../redux/modules/submission'

class SimpleLoginForm extends React.Component{
    render(){
        const {fields: {username, password}, error, resetForm, handleSubmit, submitting} = this.props
        return(
              <form onSubmit={handleSubmit (submit)}>
                <div>
                    <label>Username</label>
                  <div>
                    <input type="text" placeholder="Username" {...username}/>
                  </div>
                  {username.touched && username.error && <div>{username.error}</div>}
                </div>
              </form>
        )
    }
}
