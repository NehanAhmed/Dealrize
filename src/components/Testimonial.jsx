import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrids'

const Testimonial = () => {
  const testimonials = [
    {
      review: "This tool completely changed how I handle brand emails. I’m closing deals in half the time!",
      name: "Samantha Lee",
      designation: "YouTube Lifestyle Influencer",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      review: "My inbox used to be chaos. Now I spot the best offers instantly and never miss a collab.",
      name: "Marcus Rivera",
      designation: "Tech Content Creator",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      review: "AI-powered filtering is a game-changer. I can finally focus on creating instead of digging through emails.",
      name: "Ava Thompson",
      designation: "Travel Vlogger",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      review: "From missed deals to a steady flow of brand partnerships — this tool just works.",
      name: "Noah Carter",
      designation: "Gaming Influencer",
      rating: 4.5,
      image: "https://randomuser.me/api/portraits/men/14.jpg"
    },
    {
      review: "The fastest way to turn brand emails into income. Worth every penny.",
      name: "Lily Chen",
      designation: "Fashion Influencer",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/19.jpg"
    },
    {
      review: "Deals that used to take weeks to secure now happen in days. Incredible!",
      name: "Ethan James",
      designation: "Fitness Coach & Influencer",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/55.jpg"
    },
    {
      review: "I’ve doubled my brand collaborations since using this tool. Highly recommend it to any influencer.",
      name: "Olivia Brooks",
      designation: "Beauty & Makeup Influencer",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/75.jpg"
    },
    {
      review: "It’s like having a personal manager in my inbox 24/7. Absolute game-changer.",
      name: "Daniel Scott",
      designation: "Music Content Creator",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/44.jpg"
    }
  ];
  return (
    <BentoGrid className="my-10">
      {testimonials.map((testimonial, index) => (
        <BentoGridItem
          key={index}
          title={testimonial.name}
          description={testimonial.review}
          icon={
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mb-2"
            />
          }
          className="flex items-center justify-center"

        />
      ))}
    </BentoGrid>
  );

}

export default Testimonial