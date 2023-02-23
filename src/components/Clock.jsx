import React from "react"
import Moment from 'react-moment'

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        // this.show = props.show;
    }

    componentDidMount() {
        this.clockID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockID);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    // NOT SURE HOW TO MAKE THIS WORK
    getDate() {
        return this.state.date;
    }

    render() {
        const fullDate = <Moment format='dddd, MMMM D Y'>{this.state.date}</Moment>
        const time = this.state.date.toLocaleTimeString()
        return (
            <section className=' flex flex-col pt-5 text-2xl'>
                <div className="m-auto">
                    {fullDate}
                </div>
                {/* <br /> */}
                <div className="m-auto">
                    {time}
                </div>
            </section>
        );
    }
}