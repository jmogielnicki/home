import evolutionGif from './media/evolution.gif'
import facesmashGif from './media/facesmash.gif'
import fishGif from './media/fish.gif'
import insectsGif from './media/insects.gif'
import pointsGif from './media/points.gif'
import explode from './media/explode.gif'

    
export const portfolioProjects = [
    {
        title: 'Evolution',
        date: 'August 2017',
        description: 'A genetic algorithm to find a path to a target over successive generations',
        link: '/evolution/',
        gif: evolutionGif
    },
    {
        title: 'FaceSmash',
        date: 'December 2015',
        description: 'A two-player arcade video game.  This served as an experiment in physics (attraction, repulsion, drag), and a Christmas present for my nephews.',
        link: '/smash/',
        gif: facesmashGif
    },
    {
        title: 'Explode',
        date: 'October 2016',
        description: 'Just some fun',
        link: '/explode/',
        gif: explode
        },
    {
        title: 'Insects',
        date: 'August 2015',
        description: 'An experiment to create lifelike motion using perlin noise. Also, a reminder of childhood summers on Black Hill Road in NH',
        link: '/insects/',
        gif: insectsGif
    },
    {
        title: 'Points',
        date: 'July 2015',
        description: 'A project that mimics pointellism. Built using p5.js.  Inspired by Dan Shiffman.',
        link: '/points/',
        gif: pointsGif
    },
]