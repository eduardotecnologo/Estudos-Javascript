import React from 'react'
//helper
export default props => {
    if (props.test) {
        return props.children
    } else {
        return false
    }
}