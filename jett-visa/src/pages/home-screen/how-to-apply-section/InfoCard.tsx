import React from 'react';
// import type { SxProps } from '@mui/material';

type InfoCardProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  // sx?: SxProps;
  // iconContainerSx?: SxProps;
  // textContainerSx?: SxProps;
};

const InfoCard: React.FC<InfoCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  return (
    <div className="rounded-xl sm:rounded-[25px] border border-[#DBE9F8] bg-white p-3 sm:p-4 md:p-5 flex flex-col gap-2 items-start h-full">
      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-b from-[#F2F2F8] to-transparent flex items-center justify-center flex-shrink-0">
        {/* Using next/image would be better, but keeping img for compatibility */}
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          width={31} 
          height={31} 
          className="w-6 h-6 sm:w-[31px] sm:h-[31px] object-contain" 
        />
      </div>

      <div className="flex flex-col gap-1.5 sm:gap-2">
        <h4 className="text-base sm:text-lg md:text-xl font-semibold text-[#00366B] font-poppins">{title}</h4>
        <p className="text-xs sm:text-sm md:text-base text-[#003669] font-poppins leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
