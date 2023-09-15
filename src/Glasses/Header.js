import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div style={{ display: "block", width: " 100%", height: "100px", background: "#4a9e9e", opacity: "0.5", justifyContent: "center", }}>
                <h1 style={{ margin: "0", color: "white", fontSize: "32px", padding: "26px" }}>TRY GLASSES APP ONLINE</h1>
            </div>
        )
    }
}