import React, { Component } from "react";
import Container from "../components/Container";
import Card from "../components/Card/Card";
import API from "../utils/API";
import Alert from "../components/Alert"

class Discover extends Component {
    state = {
        image: "",
        match: false,
        matchCount: 0
    }
    componentDidMount(){
        this.loadNextDogPic()    
    };

    handleBtnClick= event => {
        const btnType = event.target.attributes.getNamedItem("data-value").value;
        const dogChoice = Math.floor(Math.random() * 5) + 1
        if(btnType==='pick' && dogChoice === 1 ){
            this.setState({matchCount: this.state.matchCount+1 , match: true})
        } else {
            this.setState({match: false})
        }

        this.loadNextDogPic()
    };

    loadNextDogPic = ()=> {
        API.getRandomDog()
        .then(res => 
            this.setState({image: res.data.message
            })
        )
        .catch (err => console.log(err))  

    };

    render() {
        return (
            <div>
                <Container>
                    <h1 className="text-center">Make New Friends</h1>
                    <h2 className="text-center">Thumbs up on any pups you'd like to meet!</h2>
                    <Card
                        image={this.state.image}
                        handleBtnClick={this.handleBtnClick}
                    />
                    <h1 className="text-center">
                        Made friends with {this.state.matchCount} pups so far!
                    </h1>
                    <Alert style={{ opacity: this.state.match ? 1 : 0, height:60, fontSize: 24 }} type="success">
                        Yay! That Pup Liked You Too!!!
                    </Alert>
                </Container>
            </div>

        )
    }
}

export default Discover;