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
        alt: "Micah: I believe my perspective on purpose has changed the most. Previously, I had decided to attend university to get the degree required for pursuing a corporate Software Engineering job. However, as the semester progressed, I had the opportunity to speak with certain individuals and attend networking events such as mkrs. Through this process, I realized that I love building and launching products. I find fulfillment in creating useful software that impacts the people around me. Long-term, I now want to build a SaaS startup, and I am attending university to meet inspiring people.",
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
        alt: "Adam: My perspective on the E in POWER changed significantly throughout the semester and especially through UHON 101. I understood in the beginning that it stood for engagement, however I did not know how many forms, ways, and interpretations of engagement there are. Every UHON 101 class, I felt encouraged to share, reflect, and truly consider the class material and connect it to myself. The discussions in our groups were welcoming and allowed for everyone to be respected, heard, and comfortable. I believe it is that culmination of safety and respect that created the optimal space for engagement to occur in the class throughout the semester. ",
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
        alt: "Micah: Our HIs with Claire showed just how many campus resources are available to students. Whether it’s volleyball courts for recreation or pantries for volunteering, there are countless opportunities. In addition, our one-on-one experiences have allowed me to reflect much more on myself—what am I currently struggling with? What do I hope to accomplish? All of this has helped me create far more actionable and realistic goals based on where I currently am, goals that are actually doable within the environment around me. I hope to continue creating these goals throughout my college career and to thrive in well-being across all aspects.",
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
        alt: "Adam: The HIs and one-on-one meetings were incredibly valuable to me. I think the area where I saw the most growth was self reflection. In all of our HI’s we were expected to look into ourselves and interpret our lives and what we wish to accomplish. For example, the journaling HI that I attended did this especially well. We spent the class period writing and brainstorming the events that happened the prior week, and it really affected the way I meditate and continue to journal my life. Moreover, the resume prep HI also did something similar. Though it was a career-development focused HI, in the process of updating and writing my resume, I did a surprising amount of reminiscing and remembering all of my accomplishments. ",
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
        alt: "Micah: To me, being a campus leader means leading by example—being someone others can relate to and look to for inspiration. For me, that means living in Husker POWER. Whether it’s showcasing my purpose through ownership of my professional experiences and hobbies or maintaining a healthy lifestyle—not overworking myself and making sure I have a balanced set of habits—it all contributes to that standard. It also means consistently engaging with my community, building healthy relationships, supporting one another, and holding each other accountable. Ultimately, it’s about contributing to a community where everyone feels valued.",
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
        alt: "Adam: To me, a campus leader is someone who is respected, looked up to, and depended on inside and outside of campus. I also think that a leader should possess all of the characteristics symbolized by Husker POWER (Purpose, Ownership, Wellbeing, Engagement, Relationships). On campus, I really hope to become a leader by embodying those characteristics. Though I have a lot of progress to make in some of the categories, I still think that actively improving in them is enough to become a leader. For example, I think I need to do a better job of developing my relationships with other peers, classmates, and professors.",
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
        alt: "Micah: Throughout my first semester, I’ve struggled to manage my time effectively. I often found myself scrolling on social media for hours without even realizing it. It always left me drained and took time away from other activities, such as going to the gym. Halfway through the semester, I deleted all forms of social media (TikTok, YouTube) except for Instagram. For Instagram, I used an app that forced me to make a conscious decision before opening it. These changes have improved my overall clarity and peace of mind, allowing me to manage my time more effectively. I hope to continue improving my habits and be intentional with how I spend my time.",
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
        alt: "Adam: The biggest challenge that I faced in this semester was balancing my time. I was surprised by how chaotic the environment here was at first and was taken off guard. I spent most of my morning and afternoon doing classes and random stuff and left most of my assignments to do at night. This in turn ruined my sleep schedule and I felt extremely tired for long periods of time. Keeping a calendar or some sort of scheduler to help me keep track of my assignments and responsibilities has largely fixed this and I will continue to work on taking ownership of my time.",
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
        alt: "Micah: As mentioned previously, I am very passionate about building and shipping software products. By the end of my sophomore year, I hope to be scaling two software products—likely web apps, extensions, or scripts. Currently, I am building a Chrome extension that can replicate the front-end code of any website component. It’s called :). I also hope to scale these products to over a hundred users and reach more than $1,000 in monthly recurring revenue. In addition, I hope to leverage these products to strengthen my competitiveness in a saturated job market and secure Software Engineering internships for professional development.",
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
        alt: "Adam: One goal I have for myself going forward is to keep up my volunteering efforts. I try to volunteer a few hours every semester, but this semester specifically felt very busy and I haven’t volunteered as much as I had hoped. However, when I did volunteer, it reminded me of its importance and how truly fun it was. In the upcoming semesters and years, I really want to continue volunteering for Lincoln Parks and Recreation. It not only helps my mental and emotional health, but I think it’s a very positive way to give back and help the Lincoln community.",
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
        alt: "Micah: I’ve definitely been focused on my well-being, particularly my career and spiritual well-being. Whether interning as a Software Engineer at FindU or building a micro-SaaS product, I’ve been working toward my professional goals. Spiritually, I’ve also tried to make time for clubs. Even though I’m often busy, I try to attend The Salt Company and Chi Alpha every few weeks. With that being said, I would like to prioritize relationships more. I’m thankful to have built a close friend group of hard-working and morally grounded students, and I hope to continue expanding my network and building meaningful relationships.",
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
        alt: "Adam: I definitely want to focus on the aspect of ownership. Specifically, I want to spend my time more effectively and efficiently. In highschool, one of my previous teachers taught me that there should only be two ways one should spend their time: doing something productive or doing something fulfilling. Ofcourse, these two can overlap, however there are things that satisfy neither of the conditions. Something fulfilling can be anything that you deem worthy to spend your time on, especially recreational activities. For me, this is going to the movie theater. After watching a movie, I always feel refreshed and overall happy. This is different from something like doomscrolling. I think many people have had the experience of doomscrolling then realizing that hours have passed. This is neither fulfilling nor productive. I want to take ownership over my time and spend it doing things that are productive and/or fulfilling.",
        aspectRatio: "portrait",
      },
    ],
  },
];
