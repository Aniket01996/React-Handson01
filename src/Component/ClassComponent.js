import React, { Component } from 'react'

export class ClassComponent extends Component {
    render() {
        return (
            <span className='classComp' style={{backgroundColor:'dodgerblue'}}>
                <h2>This is created using Class <br /> Component</h2>
                <p>This is done using External CSS</p>
                <p style={{ color: 'blueviolet' }}>This is done using Inline CSS</p>
            </span>
        )
    }
}

export default ClassComponent
