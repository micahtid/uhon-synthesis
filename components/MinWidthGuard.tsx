'use client';

import { useEffect, useState } from 'react';

export default function MinWidthGuard({ children }: { children: React.ReactNode }) {
  const [isWideEnough, setIsWideEnough] = useState(true);

  useEffect(() => {
    const checkWidth = () => {
      setIsWideEnough(window.innerWidth >= 1000);
    };

    // Check on mount
    checkWidth();

    // Check on resize
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  if (!isWideEnough) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-gray-900 font-sans mb-4">
            synthesis
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Please view this website on a larger device!
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
