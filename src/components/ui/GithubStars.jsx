
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';

import { FaGithub } from "react-icons/fa6";
const GithubStars = () => {
    const [stars, setStars] = useState(null);
    useEffect(() => {

        const fetchStars = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/NehanAhmed/Automated-Chatbot');
                const data = await response.json();
                setStars(data.stargazers_count);
            } catch (error) {
                console.error('Error fetching GitHub stars:', error);
            }
        };

        fetchStars();
    }, []);

    return (
        <div>
            <Button className='w-[90px] h-[44px] bg-zinc-800 border-2 border-zinc-950 text-lg hover:opacity-[5px]'><FaGithub /><span>{stars}</span></Button>
        </div>
    )
}

export default GithubStars