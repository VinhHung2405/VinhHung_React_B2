import React, { Component } from 'react'
import { listGlasses } from './Data'

export default class Content extends Component {
    state = {
        url: "v1.png",
        name: "GUCCI G8850U",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }

    handleChangeTryGl = (url, name, desc) => {
        this.setState({ url: url })
        this.setState({ name: name })
        this.setState({ desc: desc })
    }

    renderListglasses = () => {
        return (
            listGlasses.map((item, index) => {
                let imgPart = `./Bài tập glasses-20230915T083705Z-001/bài tập glasses/glassesImage/${item.url}`
                return <div key={index} className='col-2'>
                    <div >
                        <button onClick={() => {
                            this.handleChangeTryGl(item.url, item.name, item.desc)
                        }}>
                            <img style={{ width: "130px", height: "50px" }} src={imgPart} />
                        </button>
                    </div>
                </div>
            })
        )
    }
    render() {
        let model = "./Bài tập glasses-20230915T083705Z-001/bài tập glasses/glassesImage/model.jpg"
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <img style={{ height: "350px", position: "absolute" }} src={model} />
                        <img style={{ position: "relative", width: "180px", opacity: "0.8", marginTop: "85px", marginLeft: "55px" }} src={`./Bài tập glasses-20230915T083705Z-001/bài tập glasses/glassesImage/${this.state.url}`}></img>
                        <div style={{ position: "absolute", backgroundColor: "#FF6600", height: "105px", opacity: "0.6", width: "288px", bottom: "0", left: "29.4%" }}>
                            <h4 style={{ color: "darkgreen", opacity: "1" }}>
                                {this.state.name}
                            </h4>
                            <h5 style={{ fontSize: "16px", color: "white" }}>
                                {this.state.desc}
                            </h5>
                        </div>

                    </div>
                    <div className='col-6'>
                        <img style={{ height: "350px" }} src={model} />
                    </div>
                    <div className='col-12' style={{ backgroundColor: "#f5e8db", marginTop: "50px" }}>

                        <div className='row' style={{ height: "300px", alignContent: "space-around" }}>
                            {this.renderListglasses()}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}