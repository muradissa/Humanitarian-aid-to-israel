import React, { Component } from 'react';
import Navbar, { ElementsWrapper } from '../navbar';
import Part1 from '../part1/part1';
import Part2 from '../part2/part2';
import Part3 from '../part3/part3';
import Part4 from '../part4/part4';

class Home extends Component {
    render() {
        const navbarItems = [
            {
                label: "Home",
                target: "item-1"
            }, {
                label: "What Happend",
                target: "item-2"
            }, {
                label: "Donate ",
                target: "item-3"
            }, {
                label: "Donate Now",
                target: "item-4"
            }, 
            // {
            //     label: "Item 5",
            //     target: "item-5"
            // }, {
            //     label: "Item 6",
            //     target: "item-6"
            // }, 
        ];

        const containerStyle = {
            width: "100%",
            margin: "70px 0 100px"
        }

        return (
            <div>
                <Navbar items={navbarItems} offset={-80} duration={500} delay={0}>
                </Navbar>
                <div style={containerStyle}>
                    <ElementsWrapper items={navbarItems} className="home-items">
                        <div name="item-1" className="item">
                            <Part1></Part1>
                        </div>
                        <div name="item-2" className="item">
                            <Part2></Part2>    
                        </div>
                        <div name="item-3" className="item">
                            <Part3></Part3>
                        </div>
                        <div name="item-4" className="item">
                            <Part4></Part4>
                        </div>
                        {/* <div name="item-5" className="item">item 5</div>
                        <div name="item-6" className="item">item 6</div> */}
                    </ElementsWrapper>
                </div>
            </div>
        );
    }
}

export default Home;