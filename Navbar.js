import React, { Component } from 'react'
class Navbar extends Component {
    render() {
        return <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>

<a href='https://www.google.com' className='navbar-brand'>Google</a>
<a href='https://www.youtube.com' className='navbar-brand'>Youtube</a>
<a href='https://www.facebook.com' className='navbar-brand'>facebook</a>
<a href='https://www.twitter.com' className='navbar-brand'>twitter</a>

        </nav>
    }
}
export default Navbar