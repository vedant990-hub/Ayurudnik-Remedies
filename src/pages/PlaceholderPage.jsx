import React from "react";

export const PlaceholderPage = ({ title }) => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white" data-testid="placeholder-page">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-center min-h-[30vh] sm:min-h-[40vh]">
          <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#0B0B0B] text-center px-4">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};
