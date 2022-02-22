import React from 'react';
import { Section } from '@templates';

const body = [
    `
        I'm Wiley Hilton. I create websites and web applications using whichever tools will do the best job in the shortest amount of time.
        My entire career I've worked as a full stack developer which means I'm very comfortable in both the front end (what the user sees) as well as the back end (what runs on the server).
        I prefer working in the front end but one of my weeknesses is deisnging - so if I have a drawing or a wireframe to reference I typically do much better.
    `,
    `
        Some things I enjoy outside of software development include any hobby which crafts something such as knitting, weaving, woodworking, blacksmithing, and arduinos just to name a few things.
        Video games are also pretty popular with me and they do take up the majority of my Friday nights. I also enjoy table top games and have way more dnd lore knowledge than I should.
    `,
    `
        Technologies I have professional experience with in alphabetical order:
    `,
    `
        ASP Classic,
        ASP.Net,
        C#,
        C++,
        Docker,
        GraphQL,
        Java,
        Jest,
        Jquery,
        Microservices,
        Node,
        PostgreSQL,
        RabbitMQ,
        React,
        Redis,
        Redux,
        SQL Server,
        Storybook
    `,
];

export const About = ({ id }) => <Section narrow body={body} id={id} title='About Me' />;
