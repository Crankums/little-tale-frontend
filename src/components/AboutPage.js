import React from 'react';

export const About = () => {
    return (
        <div className='about-page'>
            <p>Come in, traveler and tell us a little tale! This app is a story prompter, giving you three items to work with. It provides a person, a item, and a monster. You will provide the rest! This is for lighthearted fare: your stories can be serious, silly, or anywhere in between. </p>
            <p>Soon, there will be a feature allowing other users to continue the story via comments. This is not implemented yet, but feel free to either write your stories to completion in one go, or just provide a starter for later users to contribute.</p>
            <p>The prompts are provided via the DnD 5E API, which can be found here: http://www.dnd5eapi.co/ This is a groovy little resource, you should check them out, if that's your thing!</p>
        </div>
    )
}

export default About