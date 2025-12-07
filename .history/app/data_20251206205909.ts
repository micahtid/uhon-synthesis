export interface Photo {
  id: string;
  url: string;
  alt: string;
  aspectRatio?: "portrait" | "landscape" | "square";
}

export interface Cluster {
  id: string;
  description: string;
  photos: Photo[];
  date: string;
}

export const clusters: Cluster[] = [
  {
    id: "1",
    date: "October 12, 2023",
    description: "The morning light hit the architecture in a way that made everything feel suspended in time. Shadows played across the concrete, softening the brutalist edges.",
    photos: [
      {
        id: "p1",
        url: "https://lh3.googleusercontent.com/d/1EAgL7o-UqtApP2CXHFBBQKEH-LXQKdRz",
        alt: "Modern concrete building with sunlight",
        aspectRatio: "landscape",
      },
      {
        id: "p2",
        url: "https://lh3.googleusercontent.com/d/11XnrbKHJflgY8dybOYgmq_b4tWt-7hYe",
        alt: "Interior shadow play",
        aspectRatio: "portrait",
      },
    ],
  },
  {
    id: "2",
    date: "November 5, 2023",
    description: "A solitary walk through the autumn woods. The silence was only broken by the crunch of leaves underfoot and the distant call of a crow.",
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
    description: "Urban textures. The city breathes in neon and exhales in steam. Every corner tells a different story of decay and renewal.",
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
    description: "Minimalism is not about the absence of things, but the presence of the right things. Finding calm in the chaos.",
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
