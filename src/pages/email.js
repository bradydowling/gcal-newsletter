import React from 'react'

import Layout from '../components/layout'
import Events from '../components/events'
import Birthdays from '../components/birthdays'
import Lessons from '../components/lessons'
import Closing from '../components/closing'
import "./email.css"

function getRandomArrayItem(arr) {
    let randomIndex = Math.round(Math.random() * (arr.length - 1));
    let randomItem = arr[randomIndex];
    return randomItem;
}

function getGreeting() {
    let greetings = [
        "Hi all",
        "Hi everyone",
        "Hello everyone",
        "Hello all"
    ];

    let greeting = getRandomArrayItem(greetings);
    return greeting;
}

const Email = () => (
<Layout className="email">
    <p>{getGreeting()},</p>
    <p>Thanks for all your hard work at the last great event we had. This week we've got some cool stuff going on (this should be updated every week).</p>
    <hr/>
    <Events/>
    <hr/>
    <Lessons/>
    <hr/>
    <Birthdays/>
    <hr/>
    <Closing/>
  </Layout>
);

export default Email;
