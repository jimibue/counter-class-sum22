import React from 'react'
import Contact from './Contact'

class Contacts extends React.Component{
    render(){
        return(
            <div>
                <h1>Contacts</h1>
                <Contact />
                <Contact />
            </div>
        )
    }
}

export default Contacts