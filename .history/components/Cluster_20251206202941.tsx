"use client";

import { motion, Variants } from "framer-motion";
import { Cluster as ClusterType, Photo } from "../app/data";
import Image from "next/image";
import { clsx } from "clsx";

const bounce: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { 
      type: "spring",
      stiffness: 150,
      damping: 15,
      mass: 1.2
    } 
  },
};

// Random rotation for playful effect
const getRandomRotation = () => Math.random() * 6 - 3; 

const PhotoItem = ({ 
  photo, 
  className, 
  rotation = 0,
  priority = false 
}: { 
  photo: Photo; 
  className?: string; 
  rotation?: number;
  priority?: boolean;
}) => {
  return (
    <div 
      className={clsx(
        "absolute bg-white p-3 shadow-md hover:shadow-xl transition-all duration-300 ease-out hover:scale-105 hover:rotate-0 cursor-pointer border border-gray-100", 
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="relative w-full h-full overflow-hidden rounded-sm bg-gray-100">
        <Image
          src={photo.url}
          alt={photo.alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export const Cluster = ({ cluster, index }: { cluster: ClusterType, index: number }) => {
  const { photos, description, date } = cluster;
  const count = photos.length;
  
  // 1st cluster gets priority loading
  const isPriority = index === 0;
  
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={bounce}
      className="mb-20 max-w-7xl mx-auto px-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        
        {/* Text Cell */}
        <div className={clsx(
          "flex flex-col gap-6 z-10",
          isEven ? "md:order-1" : "md:order-2"
        )}>
          <div className="w-fit px-4 py-1.5 rounded-full bg-accent-yellow text-xs font-bold tracking-widest text-gray-600 shadow-sm -rotate-2">
            {date}
          </div>
          <div className="relative">
            <div className="absolute -inset-2 bg-white/50 rounded-3xl -z-10 rotate-1 blur-sm"></div>
            <p className="text-2xl md:text-3xl text-gray-800 font-semibold leading-tight tracking-tight text-balance">
              {description}
            </p>
          </div>
        </div>

        {/* Image Cluster Cell */}
        <div className={clsx(
          "relative h-[500px] w-full flex items-center justify-center isolate",
          isEven ? "md:order-2" : "md:order-1"
        )}>
            
          {count === 1 && (
             <div className="relative w-3/4 aspect-[4/3]">
               <PhotoItem photo={photos[0]} className="w-full h-full rounded-xl" rotation={3} priority={isPriority} />
             </div>
          )}

          {count === 2 && (
            <div className="relative w-full h-full">
               <PhotoItem photo={photos[0]} className="top-1/4 left-10 w-2/3 h-64 rounded-xl z-10" rotation={-6} priority={isPriority} />
               <PhotoItem photo={photos[1]} className="top-1/3 right-10 w-2/3 h-64 rounded-xl z-20" rotation={6} priority={isPriority} />
            </div>
          )}

          {count === 3 && (
            <div className="relative w-full h-full">
               <PhotoItem photo={photos[0]} className="top-10 left-0 w-7/12 h-60 rounded-xl z-10" rotation={-8} priority={isPriority} />
               <PhotoItem photo={photos[1]} className="top-1/4 right-4 w-6/12 h-52 rounded-xl z-20" rotation={12} priority={isPriority} />
               <PhotoItem photo={photos[2]} className="bottom-20 left-12 w-8/12 h-64 rounded-xl z-30" rotation={-4} priority={isPriority} />
            </div>
          )}

          {count === 4 && (
            <div className="relative w-full h-full">
               <PhotoItem photo={photos[0]} className="top-10 left-8 w-1/2 aspect-square rounded-2xl z-10" rotation={-12} priority={isPriority} />
               <PhotoItem photo={photos[1]} className="top-20 right-8 w-1/2 aspect-square rounded-2xl z-20" rotation={8} priority={isPriority} />
               <PhotoItem photo={photos[2]} className="bottom-24 left-12 w-1/2 aspect-square rounded-2xl z-30" rotation={-5} priority={isPriority} />
               <PhotoItem photo={photos[3]} className="bottom-10 right-16 w-1/2 aspect-square rounded-2xl z-40" rotation={6} priority={isPriority} />
            </div>
          )}
          
        </div>

      </div>
    </motion.div>
  );
};
