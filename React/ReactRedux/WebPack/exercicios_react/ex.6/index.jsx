import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'



ReactDOM.render(
    <Family lastName='Silva'>
        <Member name='Eduardo' />
        <Member name='Lucas' />
        <Member name='Lohann' />

    </Family>
    , document.getElementById('app'))

