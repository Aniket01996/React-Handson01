import React from 'react'
import './Component.css'

function FunctionalComponent() {
    return (
        <span className='FunctionalComp'>
            <h2>This is created using Functional <br /> Component</h2>
            <p>This is done using External CSS</p>
            <p style={{ color: 'blueviolet' }}>This is done using Inline CSS</p>
        </span>
    )
}

export default FunctionalComponent
