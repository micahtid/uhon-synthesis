"use client";

import { motion, Variants } from "framer-motion";
import { Cluster as ClusterType, Photo } from "../app/data";
import Image from "next/image";
import { clsx } from "clsx";
import { useState, useEffect, useRef } from "react";

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
  priority = false,
  zIndex = 10,
  onHover
}: {
  photo: Photo;
  className?: string;
  rotation?: number;
  priority?: boolean;
  zIndex?: number;
  onHover?: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={clsx(
        "absolute bg-white p-3 shadow-md cursor-pointer border border-gray-100",
        className
      )}
      style={{
        transform: `rotate(${rotation}deg)`,
        zIndex: isHovered ? 100 : zIndex
      }}
      animate={{
        scale: isHovered ? 1.05 : 1,
        rotate: isHovered ? 0 : rotation,
        boxShadow: isHovered ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" : "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25
      }}
      onHoverStart={() => {
        setIsHovered(true);
        onHover?.();
      }}
      onHoverEnd={() => setIsHovered(false)}
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
    </motion.div>
  );
};

export const Cluster = ({ cluster, index }: { cluster: ClusterType, index: number }) => {
  const { photos, descriptions, author, date } = cluster;
  const count = photos.length;
  const [currentDescIndex, setCurrentDescIndex] = useState(0);
  const [minHeight, setMinHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // 1st cluster gets priority loading
  const isPriority = index === 0;

  const isEven = index % 2 === 0;

  // Calculate the maximum height needed across all descriptions
  useEffect(() => {
    if (contentRef.current) {
      const currentHeight = contentRef.current.offsetHeight;
      if (currentHeight > minHeight) {
        setMinHeight(currentHeight);
      }
    }
  }, [currentDescIndex, descriptions, minHeight]);

  const handleNext = () => {
    setCurrentDescIndex((prev) => (prev + 1) % descriptions.length);
  };

  const handlePrev = () => {
    setCurrentDescIndex((prev) => (prev - 1 + descriptions.length) % descriptions.length);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={bounce}
      className="max-w-7xl mx-auto px-6"
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

          <div className="relative" style={{ minHeight: minHeight > 0 ? `${minHeight}px` : 'auto' }}>
            <div className="absolute -inset-2 bg-white/50 rounded-3xl -z-10 rotate-1 blur-sm"></div>

            <div ref={contentRef}>
              <p className="text-base md:text-lg text-gray-800 font-medium leading-relaxed tracking-tight text-balance">
                {descriptions[currentDescIndex]}
              </p>

              {/* Author name */}
              <div className="mt-4 pt-3 border-t border-gray-200">
                <span className="text-sm font-medium text-gray-500">{author}</span>
              </div>
            </div>

            {/* Navigation buttons */}
            {descriptions.length > 1 && (
              <div className="flex items-center gap-3 mt-6">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm hover:shadow-md"
                  aria-label="Previous description"
                >
                  <svg className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex gap-1.5">
                  {descriptions.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentDescIndex(i)}
                      className={clsx(
                        "h-1.5 rounded-full transition-all",
                        i === currentDescIndex
                          ? "w-6 bg-gray-700"
                          : "w-1.5 bg-gray-300 hover:bg-gray-400"
                      )}
                      aria-label={`Go to description ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm hover:shadow-md"
                  aria-label="Next description"
                >
                  <svg className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Image Cluster Cell */}
        <div className={clsx(
          "relative h-[500px] w-full flex items-center justify-center isolate",
          isEven ? "md:order-2" : "md:order-1"
        )}>
            
          {count === 1 && (
             <div className="relative w-3/4 aspect-[4/3]">
               <PhotoItem photo={photos[0]} className="w-full h-full rounded-xl" rotation={3} priority={isPriority} zIndex={10} />
             </div>
          )}

          {count === 2 && (
            <div className="relative w-full h-full">
               <PhotoItem photo={photos[0]} className="top-1/4 left-10 w-2/3 h-64 rounded-xl" rotation={-6} priority={isPriority} zIndex={10} />
               <PhotoItem photo={photos[1]} className="top-1/3 right-10 w-2/3 h-64 rounded-xl" rotation={6} priority={isPriority} zIndex={20} />
            </div>
          )}

          {count === 3 && (
            <div className="relative w-full h-full">
               <PhotoItem photo={photos[0]} className="top-10 left-0 w-7/12 h-60 rounded-xl" rotation={-8} priority={isPriority} zIndex={10} />
               <PhotoItem photo={photos[1]} className="top-1/4 right-4 w-6/12 h-52 rounded-xl" rotation={12} priority={isPriority} zIndex={20} />
               <PhotoItem photo={photos[2]} className="bottom-20 left-12 w-8/12 h-64 rounded-xl" rotation={-4} priority={isPriority} zIndex={30} />
            </div>
          )}

          {count === 4 && (
            <div className="relative w-full h-full">
               <PhotoItem photo={photos[0]} className="top-10 left-8 w-1/2 aspect-square rounded-2xl" rotation={-12} priority={isPriority} zIndex={10} />
               <PhotoItem photo={photos[1]} className="top-20 right-8 w-1/2 aspect-square rounded-2xl" rotation={8} priority={isPriority} zIndex={20} />
               <PhotoItem photo={photos[2]} className="bottom-24 left-12 w-1/2 aspect-square rounded-2xl" rotation={-5} priority={isPriority} zIndex={30} />
               <PhotoItem photo={photos[3]} className="bottom-10 right-16 w-1/2 aspect-square rounded-2xl" rotation={6} priority={isPriority} zIndex={40} />
            </div>
          )}
          
        </div>

      </div>
    </motion.div>
  );
};
