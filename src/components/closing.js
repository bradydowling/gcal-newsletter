import React from 'react'
import { Link } from 'gatsby'
import "./closing.css"

const Closing = () => (
    <div>
        <p>Let me know if you have any questions!</p>
        <div className="signature">
            <p>Thanks,</p>
            <p>Brady</p>
        </div>
        <div className="cal-links">
            <p><Link to="/some/website">Young Men Google Calendar</Link></p>
            <p><Link to="/some/website">Accessing this Google Calendar on your iPhone</Link></p>
        </div>
    </div>
);

export default Closing;
