import React from 'react'

import { getEvents } from './gcal'

class Events extends React.Component {
    constructor () {
        super()
        this.state = {
          events: []
        }
    }

    componentDidMount () {
        getEvents((events) => {
          this.setState({events})
        })
        console.log(this.state.events);
    }

    render() {
        return (
            <div>
                <h3>Upcoming activities</h3>
                <ul>
                    <li>November 6, 7pm - Event title</li>
                    <li>November 13, 7pm - Event title2</li>
                    <li>November 20, 7pm - Event title2</li>
                </ul>
            </div>
        )
    }
};

export default Events;
