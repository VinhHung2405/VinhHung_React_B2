import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'
// This function will set the height of the div element

export default class Glasses extends Component {
    render() {
        return (
            <div
                style={{
                    background: "#e8f5db",
                    display: "block",
                    width: "100%",
                    height: "951px"
                }}>
                <div style={{ paddingBottom: "50px" }}>
                    <Header></Header>
                </div>
                <Content></Content>
            </div >
        )
    }
}