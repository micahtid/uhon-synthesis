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
        url: "https://lh3.googleusercontent.com/d/1lgK7yM1AqcUrex7pfytW3B5MRJNESpvH",
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
        url: "https://lh3.googleusercontent.com/d/1ODUEnB3byPJOyOd_V4s72s_zKFi3Yjoo",
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
        url: "https://lh3.googleusercontent.com/d/1ilCEgblmDCnqJ00XSY-1VUocncVEtSIQ",
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
        url: "https://lh3.googleusercontent.com/d/1fM18RwU4Jrn5KjVH4gCC0je6NM3PvmOS",
        alt: "4",
        aspectRatio: "portrait",
      },
    ],
  },
  {
    id: "3",
    date: "What is one challenge you experienced your first semester, and how did you overcome it (or are working to overcome it)? (100-150 words)",
    description: "Minimalism is not about the absence of things, but the presence of the right things. Finding calm in the chaos.",
    photos: [
      {
        id: "p1",
        url: "https://lh3.googleusercontent.com/d/1bgd0qzV8eY-UtzWrqzjRxM2dD4F14wO8",
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
        url: "https://lh3.googleusercontent.com/d/1-KSwKJnF1D-8Q3972tyMIvksCumMeNZo",
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
        url: "https://lh3.googleusercontent.com/d/1_eo0B9ZMf_KF2GnZhqFB5VfaDmyya-wb",
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
        url: "https://lh3.googleusercontent.com/d/1Zl1fzoN8vpdhRUItP9SbZPvOBPUcRgjq",
        alt: "4",
        aspectRatio: "portrait",
      },
    ],
  },
  {
    id: "5",
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
        url: "https://lh3.googleusercontent.com/d/1ilCEgblmDCnqJ00XSY-1VUocncVEtSIQ",
        alt: "4",
        aspectRatio: "portrait",
      },
    ],
  },
  {
    id: "6",
    date: "What is one challenge you experienced your first semester, and how did you overcome it (or are working to overcome it)? (100-150 words)",
    description: "Minimalism is not about the absence of things, but the presence of the right things. Finding calm in the chaos.",
    photos: [
      {
        id: "p1",
        url: "https://lh3.googleusercontent.com/d/1LTVKdaTUKRbyJKjYcO3CMTk3VnSS7imE",
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
        url: "https://lh3.googleusercontent.com/d/1d0lMTZWzp1KuguQGd7frxDthItqz17fH",
        alt: "4",
        aspectRatio: "portrait",
      },
    ],
  },
];
