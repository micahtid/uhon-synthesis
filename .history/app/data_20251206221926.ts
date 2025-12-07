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
    date: "Has your perspective on one or more of the Husker POWER letters changed over the semester? If so, how?",
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
      {
        id: "p3",
        url: "https://lh3.googleusercontent.com/d/11XnrbKHJflgY8dybOYgmq_b4tWt-7hYe",
        alt: "3",
        aspectRatio: "portrait",
      },
      {
        id: "p4",
        url: "https://lh3.googleusercontent.com/d/11XnrbKHJflgY8dybOYgmq_b4tWt-7hYe",
        alt: "4",
        aspectRatio: "portrait",
      },
    ],
  },
  {
    id: "2",
    date: "Describe your experience with the HIs and SMART goals and how you will apply the information you learned from them going forward. (100-150 words)",
    description: "A solitary walk through the autumn woods. The silence was only broken by the crunch of leaves underfoot and the distant call of a crow.",
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
      {
        id: "p3",
        url: "https://lh3.googleusercontent.com/d/11XnrbKHJflgY8dybOYgmq_b4tWt-7hYe",
        alt: "3",
        aspectRatio: "portrait",
      },
      {
        id: "p4",
        url: "https://lh3.googleusercontent.com/d/11XnrbKHJflgY8dybOYgmq_b4tWt-7hYe",
        alt: "4",
        aspectRatio: "portrait",
      },
    ],
  },
  {
    id: "4",
    date: "What is one challenge you experienced your first semester, and how did you overcome it (or are working to overcome it)? (100-150 words)",
    description: "Minimalism is not about the absence of things, but the presence of the right things. Finding calm in the chaos.",
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
      {
        id: "p3",
        url: "https://lh3.googleusercontent.com/d/11XnrbKHJflgY8dybOYgmq_b4tWt-7hYe",
        alt: "3",
        aspectRatio: "portrait",
      },
      {
        id: "p4",
        url: "https://lh3.googleusercontent.com/d/11XnrbKHJflgY8dybOYgmq_b4tWt-7hYe",
        alt: "4",
        aspectRatio: "portrait",
      },
    ],
  },
  {
    id: "4",
    date: "What is one challenge you experienced your first semester, and how did you overcome it (or are working to overcome it)? (100-150 words)",
    description: "Minimalism is not about the absence of things, but the presence of the right things. Finding calm in the chaos.",
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
      {
        id: "p3",
        url: "https://lh3.googleusercontent.com/d/11XnrbKHJflgY8dybOYgmq_b4tWt-7hYe",
        alt: "3",
        aspectRatio: "portrait",
      },
      {
        id: "p4",
        url: "https://lh3.googleusercontent.com/d/11XnrbKHJflgY8dybOYgmq_b4tWt-7hYe",
        alt: "4",
        aspectRatio: "portrait",
      },
    ],
  },
  {
    id: "4",
    date: "What is one challenge you experienced your first semester, and how did you overcome it (or are working to overcome it)? (100-150 words)",
    description: "Minimalism is not about the absence of things, but the presence of the right things. Finding calm in the chaos.",
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
      {
        id: "p3",
        url: "https://lh3.googleusercontent.com/d/11XnrbKHJflgY8dybOYgmq_b4tWt-7hYe",
        alt: "3",
        aspectRatio: "portrait",
      },
      {
        id: "p4",
        url: "https://lh3.googleusercontent.com/d/11XnrbKHJflgY8dybOYgmq_b4tWt-7hYe",
        alt: "4",
        aspectRatio: "portrait",
      },
    ],
  },
  {
    id: "4",
    date: "What is one challenge you experienced your first semester, and how did you overcome it (or are working to overcome it)? (100-150 words)",
    description: "Minimalism is not about the absence of things, but the presence of the right things. Finding calm in the chaos.",
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
      {
        id: "p3",
        url: "https://lh3.googleusercontent.com/d/11XnrbKHJflgY8dybOYgmq_b4tWt-7hYe",
        alt: "3",
        aspectRatio: "portrait",
      },
      {
        id: "p4",
        url: "https://lh3.googleusercontent.com/d/11XnrbKHJflgY8dybOYgmq_b4tWt-7hYe",
        alt: "4",
        aspectRatio: "portrait",
      },
    ],
  },
];
