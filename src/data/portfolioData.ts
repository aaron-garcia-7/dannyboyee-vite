import video1 from '../assets/portrait.webp';

interface Project {
    name: string,
    year: number,
    video?: string,
}

const portfolioData: Project[] = [
    {
        name: 'Sunder Energy',
        year: 2022,
    },
    {
        name: 'Join Sunder',
        year: 2023,
        video: video1,
    },
    {
        name: 'Enzy',
        year: 2023,
    },
    {
        name: 'Squad Game',
        year: 2022,
    },
    {
        name: 'Venture Fuel Summit',
        year: 2022,
    },
    {
        name: 'Briizy',
        year: 2022,
    },
    {
        name: 'Bak’d',
        year: 2022,
    }
]

export default portfolioData;