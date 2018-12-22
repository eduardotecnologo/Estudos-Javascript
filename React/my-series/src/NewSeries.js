import React, { Component } from 'react'

class NewSeries extends Component{
    render(){
        return (
            <section className="intro-section">
                <h1>New Serie</h1>
                <form>
                    Name: <input type="text" className="form-control"/><br />
                </form>    
            </section>
        )
    }
}
export default NewSeries