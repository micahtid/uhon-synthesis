export interface Photo {
  id: string;
  url: string;
  alt: string;
  aspectRatio?: "portrait" | "landscape" | "square";
}

export interface Cluster {
  id: string;
  descriptions: string[];
  author: string;
  photos: Photo[];
  date: string;
}

export const clusters: Cluster[] = [
  {
    id: "1",
    date: "October 12, 2023",
    author: "Micah",
    descriptions: [
      "The morning light hit the architecture in a way that made everything feel suspended in time. Shadows played across the concrete, softening the brutalist edges.",
      "There's something about early morning photography that changes how you see the world. The city is quieter, more honest.",
      "Brutalist architecture always divides people, but in the right light, those harsh angles become poetry.",
      "Standing there with my camera, I realized I was documenting more than buildings—I was capturing the feeling of stillness before the city wakes up."
    ],
    photos: [
      {
        id: "p1",
        url: "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?q=80&w=1200&auto=format&fit=crop",
        alt: "Modern concrete building with sunlight",
        aspectRatio: "landscape",
      },
      {
        id: "p2",
        url: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800&auto=format&fit=crop",
        alt: "Interior shadow play",
        aspectRatio: "portrait",
      },
    ],
  },
  {
    id: "2",
    date: "November 5, 2023",
    author: "Matthew",
    descriptions: [
      "A solitary walk through the autumn woods. The silence was only broken by the crunch of leaves underfoot and the distant call of a crow.",
      "Nature has a way of resetting your perspective. No notifications, no distractions—just you and the rhythm of your own footsteps.",
      "The autumn forest feels like walking through a memory. Everything is in transition, preparing for what comes next.",
      "I've learned that the best photographs come when you're not trying too hard. Sometimes you just need to walk and let the moment find you."
    ],
    photos: [
      {
        id: "p3",
        url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
        alt: "Forest path in autumn",
        aspectRatio: "landscape",
      },
    ],
  },
  {
    id: "3",
    date: "December 24, 2023",
    author: "Adam",
    descriptions: [
      "Urban textures. The city breathes in neon and exhales in steam. Every corner tells a different story of decay and renewal.",
      "There's a raw energy to city photography that you can't find anywhere else. The streets are constantly writing and rewriting themselves.",
      "Christmas Eve in the city hits different. While everyone's inside celebrating, the streets become this beautiful, lonely stage.",
      "I've shot this corner a hundred times, but every time the light changes, the story changes. That's the magic of urban photography."
    ],
    photos: [
      {
        id: "p4",
        url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop",
        alt: "City skyline at night",
        aspectRatio: "landscape",
      },
      {
        id: "p5",
        url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=800&auto=format&fit=crop",
        alt: "New York street view",
        aspectRatio: "portrait",
      },
      {
        id: "p6",
        url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=800&auto=format&fit=crop",
        alt: "Subway station motion blur",
        aspectRatio: "landscape",
      },
    ],
  },
  {
    id: "4",
    date: "January 15, 2024",
    author: "Aruneem Ogo was here",
    descriptions: [
      "Minimalism is not about the absence of things, but the presence of the right things. Finding calm in the chaos.",
      "After years of trying to capture everything, I'm learning the power of negative space. What you leave out is just as important as what you include.",
      "New year, new approach. This is my attempt to strip away the noise and focus on what actually matters in an image.",
      "The hardest part about minimalist photography isn't finding simple subjects—it's quieting your mind enough to see them."
    ],
    photos: [
      {
        id: "p7",
        url: "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?q=80&w=800&auto=format&fit=crop",
        alt: "White room interior",
        aspectRatio: "square",
      },
      {
        id: "p8",
        url: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop",
        alt: "Architectural detail",
        aspectRatio: "portrait",
      },
      {
        id: "p9",
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
        alt: "Shadow on white wall",
        aspectRatio: "portrait",
      },
      {
        id: "p10",
        url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=800&auto=format&fit=crop",
        alt: "Deep blue sea texture",
        aspectRatio: "landscape",
      },
    ],
  },
];
