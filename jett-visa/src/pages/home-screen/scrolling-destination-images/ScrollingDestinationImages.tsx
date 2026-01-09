import React from 'react';
// import { useTopDestination } from '@/utility/hooks/useTopDestination';
// import type { TopDestination } from '@/utility/hooks/useTopDestination';
import { useTranslation } from 'react-i18next';

interface TopDestination {
    IsoCode2?: string;
    Name?: string;
    Images?: Array<{ Filename?: string }>;
}

interface ScrollingDestinationImagesProps {
    isMobile: boolean;
    isTablet: boolean;
}

// Static test data - will be replaced with API integration later
const staticTopDestinations: TopDestination[] = [
    {
        IsoCode2: 'DE',
        Name: 'Germany',
        Images: [{ Filename: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=400&fit=crop' }]
    },
    {
        IsoCode2: 'FR',
        Name: 'France',
        Images: [{ Filename: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=400&fit=crop' }]
    },
    {
        IsoCode2: 'IT',
        Name: 'Italy',
        Images: [{ Filename: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=400&fit=crop' }]
    },
    {
        IsoCode2: 'ES',
        Name: 'Spain',
        Images: [{ Filename: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&h=400&fit=crop' }]
    },
    {
        IsoCode2: 'GB',
        Name: 'United Kingdom',
        Images: [{ Filename: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=400&fit=crop' }]
    },
    {
        IsoCode2: 'JP',
        Name: 'Japan',
        Images: [{ Filename: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=400&fit=crop' }]
    },
    {
        IsoCode2: 'AU',
        Name: 'Australia',
        Images: [{ Filename: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop' }]
    },
    {
        IsoCode2: 'US',
        Name: 'United States',
        Images: [{ Filename: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=400&fit=crop' }]
    },
    {
        IsoCode2: 'CA',
        Name: 'Canada',
        Images: [{ Filename: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=400&h=400&fit=crop' }]
    },
];

const ScrollingDestinationImages: React.FC<ScrollingDestinationImagesProps> = ({ isMobile, isTablet }) => {
    // const { topDestinationList, isTopDestinationListPending } = useTopDestination();
    // Using static data for testing - replace with API hook when ready
    const topDestinationList = staticTopDestinations;
    const isTopDestinationListPending = false;
    
    const { i18n } = useTranslation();
    const isRTL = i18n.dir() === "rtl";

    if (isMobile || isTablet || isTopDestinationListPending || !topDestinationList || topDestinationList.length === 0) {
        return null;
    }

    const destinationsWithImages = topDestinationList.filter((dest: TopDestination) => dest.Images?.[0]?.Filename);

    const columns: TopDestination[][] = [[], [], []];
    destinationsWithImages.forEach((destination: TopDestination, index: number) => {
        columns[index % 3].push(destination);
    });

    const duplicateItems = (items: TopDestination[]) => [...items, ...items];

    const renderColumn = (columnItems: TopDestination[], columnIndex: number) => {
        const duplicatedItems = duplicateItems(columnItems);
        return (
            <div key={columnIndex} className="flex-1 flex flex-col items-center min-w-[140px] md:min-w-[172px]">
                <div className="flex flex-col gap-3 animate-[scroll_35s_linear_infinite] hover:pause">
                    {duplicatedItems.map((destination, itemIndex) => {
                        const imageUrl = destination.Images?.[0]?.Filename || '';
                        const countryName = destination.Name || '';
                        const uniqueKey = `${destination.IsoCode2}-${columnIndex}-${itemIndex}`;

                        return (
                            <div key={uniqueKey} className="relative w-[140px] md:w-[172px] h-[172px] md:h-[212px] rounded-[20px] overflow-hidden cursor-pointer border-4 border-white shadow-md hover:scale-105 transition-transform">
                                <img src={imageUrl} alt={countryName} loading="lazy" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="px-4 py-2 rounded-md bg-transparent text-center">
                                        <span className="text-transparent font-semibold">{countryName}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <div className={`absolute top-[-188px] ${isRTL ? 'left-[650px]' : 'right-[90px]'} transform ${isRTL ? 'rotate-15' : '-rotate-15'} z-10 w-full max-w-[calc(100%-20px)]`}>
            <div className="flex gap-4 px-4 py-4 bg-gradient-to-b from-transparent via-transparent to-[rgba(160,224,227,0.3)]">
                {columns.map((columnItems, columnIndex) => renderColumn(columnItems, columnIndex))}
            </div>
            <div className={`absolute bottom-[-50px] left-1/2 ${isRTL ? 'translate-x-[30%]' : '-translate-x-[30%]'} w-[120%] h-[500px]`} style={{ background: 'linear-gradient(to top, rgba(92, 183, 188, 0.7) 0%, rgba(105, 184, 188, 0.5) 20%, rgba(51, 110, 113, 0.3) 50%, transparent 100%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0 }} />
        </div>
    );
};

export default ScrollingDestinationImages;

