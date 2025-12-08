"use client";

import { clsx } from "clsx";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Cluster as ClusterType, Photo } from "../app/data";

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const PhotoItem = ({
  photo,
  className,
  rotation = 0,
  priority = false,
  isSelected = false,
  onClick,
}: {
  photo: Photo;
  className?: string;
  rotation?: number;
  priority?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div
      className={clsx(
        "absolute bg-white p-3 shadow-md transition-all duration-300 ease-out cursor-pointer border-2",
        className,
        isSelected
          ? "scale-110 rotate-0 shadow-2xl z-50 border-blue-500"
          : "hover:shadow-xl hover:scale-105 hover:rotate-0 border-gray-100"
      )}
      style={{ transform: isSelected ? 'rotate(0deg)' : `rotate(${rotation}deg)` }}
      onClick={onClick}
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

  // Track which answer is being displayed (default to first)
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(0);

  // Track which photo is selected for bringing to front
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // 1st cluster gets priority loading
  const isPriority = index === 0;

  const isEven = index % 2 === 0;

  const handlePrevious = () => {
    setCurrentAnswerIndex((prev) => (prev === 0 ? count - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentAnswerIndex((prev) => (prev === count - 1 ? 0 : prev + 1));
  };

  // Parse the answer text to extract quote and writer
  const parseAnswer = (text: string) => {
    // Format: "Name: Quote text"
    const match = text.match(/^([^:]+):\s*(.+)$/);
    if (match) {
      return {
        writer: match[1].trim(),
        quote: match[2].trim()
      };
    }
    return { writer: '', quote: text };
  };

  const currentAnswer = parseAnswer(photos[currentAnswerIndex].alt);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeIn}
      className="max-w-7xl mx-auto px-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">

        {/* Text Cell */}
        <div className={clsx(
          "flex flex-col gap-6 z-10",
          isEven ? "md:order-1" : "md:order-2"
        )}>
          <div className="w-fit px-4 py-1.5 rounded-full bg-accent-yellow text-xs font-bold tracking-widest text-gray-600 shadow-sm -rotate-2">
            Question {index + 1}
          </div>
          <h2 className="text-xl md:text-2xl text-gray-700 font-semibold leading-tight">
            {date}
          </h2>
          <div className="relative flex flex-col">
            <div className="absolute -inset-2 bg-white/50 rounded-3xl -z-10 rotate-1 blur-sm"></div>
            <div className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed h-[300px] sm:h-[350px] md:h-[400px] flex flex-col justify-between">
              <p className="italic">"{currentAnswer.quote}"</p>

              {/* Author and Navigation Row */}
              <div className="flex items-center justify-between gap-4 mt-3">
                {currentAnswer.writer && (
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 flex-shrink-0">
                    — {currentAnswer.writer}
                  </p>
                )}

                {/* Navigation Controls */}
                {count > 1 && (
                  <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                    <button
                      onClick={handlePrevious}
                      className="p-1.5 sm:p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-200"
                      aria-label="Previous answer"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                    </button>

                    <div className="flex items-center gap-1.5 sm:gap-2">
                      {photos.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentAnswerIndex(idx)}
                          className={clsx(
                            "w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all",
                            idx === currentAnswerIndex
                              ? "bg-blue-500 w-4 sm:w-6"
                              : "bg-gray-300 hover:bg-gray-400"
                          )}
                          aria-label={`Go to answer ${idx + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={handleNext}
                      className="p-1.5 sm:p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-200"
                      aria-label="Next answer"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Image Cluster Cell */}
        <div className={clsx(
          "relative h-[500px] w-full flex items-center justify-center isolate",
          isEven ? "md:order-2" : "md:order-1"
        )}>

          {count === 1 && (
            <div className="relative w-3/4 aspect-[4/3]">
              <PhotoItem
                photo={photos[0]}
                className="w-full h-full rounded-xl"
                rotation={3}
                priority={isPriority}
                isSelected={selectedPhotoIndex === 0}
                onClick={() => setSelectedPhotoIndex(0)}
              />
            </div>
          )}

          {count === 2 && (
            <div className="relative w-full h-full">
              <PhotoItem
                photo={photos[0]}
                className="top-1/4 left-10 w-2/3 h-64 rounded-xl"
                rotation={-6}
                priority={isPriority}
                isSelected={selectedPhotoIndex === 0}
                onClick={() => setSelectedPhotoIndex(0)}
              />
              <PhotoItem
                photo={photos[1]}
                className="top-1/3 right-10 w-2/3 h-64 rounded-xl"
                rotation={6}
                priority={isPriority}
                isSelected={selectedPhotoIndex === 1}
                onClick={() => setSelectedPhotoIndex(1)}
              />
            </div>
          )}

          {count === 3 && (
            <div className="relative w-full h-full">
              <PhotoItem
                photo={photos[0]}
                className="top-10 left-0 w-7/12 h-60 rounded-xl"
                rotation={-8}
                priority={isPriority}
                isSelected={selectedPhotoIndex === 0}
                onClick={() => setSelectedPhotoIndex(0)}
              />
              <PhotoItem
                photo={photos[1]}
                className="top-1/4 right-4 w-6/12 h-52 rounded-xl"
                rotation={12}
                priority={isPriority}
                isSelected={selectedPhotoIndex === 1}
                onClick={() => setSelectedPhotoIndex(1)}
              />
              <PhotoItem
                photo={photos[2]}
                className="bottom-20 left-12 w-8/12 h-64 rounded-xl"
                rotation={-4}
                priority={isPriority}
                isSelected={selectedPhotoIndex === 2}
                onClick={() => setSelectedPhotoIndex(2)}
              />
            </div>
          )}

          {count === 4 && (
            <div className="relative w-full h-full">
              <PhotoItem
                photo={photos[0]}
                className="top-10 left-8 w-1/2 aspect-square rounded-2xl"
                rotation={-12}
                priority={isPriority}
                isSelected={selectedPhotoIndex === 0}
                onClick={() => setSelectedPhotoIndex(0)}
              />
              <PhotoItem
                photo={photos[1]}
                className="top-20 right-8 w-1/2 aspect-square rounded-2xl"
                rotation={8}
                priority={isPriority}
                isSelected={selectedPhotoIndex === 1}
                onClick={() => setSelectedPhotoIndex(1)}
              />
              <PhotoItem
                photo={photos[2]}
                className="bottom-24 left-12 w-1/2 aspect-square rounded-2xl"
                rotation={-5}
                priority={isPriority}
                isSelected={selectedPhotoIndex === 2}
                onClick={() => setSelectedPhotoIndex(2)}
              />
              <PhotoItem
                photo={photos[3]}
                className="bottom-10 right-16 w-1/2 aspect-square rounded-2xl"
                rotation={6}
                priority={isPriority}
                isSelected={selectedPhotoIndex === 3}
                onClick={() => setSelectedPhotoIndex(3)}
              />
            </div>
          )}

        </div>

      </div>
    </motion.div>
  );
};