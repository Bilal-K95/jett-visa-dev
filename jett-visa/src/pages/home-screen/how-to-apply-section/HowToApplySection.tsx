import React from 'react';
import InfoCard from './InfoCard';
import FavoriteLocationIcon from "@/assets/images/icons/favorite-location.png";
import BookMarkIcon from "@/assets/images/icons/bookmark.png";
import PencilIcon from "@/assets/images/icons/pencil.png";
import OptionDoneIcon from "@/assets/images/icons/option-done.png";
import { useTranslation } from 'react-i18next';

interface HowToApplyStep {
  step: string;
  icon: string;
  title: string;
  description: string;
}

const HowToApplySection = React.memo(() => {
  const { t } = useTranslation();
  
  // Desktop-first: Default desktop data with 4 steps
  const howToApplySteps: HowToApplyStep[] = [
    {
      step: "1",
      icon: "favorite-location.png",
      title: t("choose_destination") || "Choose Destination",
      description: t("select_your_desired_country") || "Select your desired country and visa type."
    },
    {
      step: "2",
      icon: "bookmark.png",
      title: t("upload_documents") || "Upload Documents",
      description: t("securely_upload_documents") || "Securely upload all required documents online."
    },
    {
      step: "3",
      icon: "pencil.png",
      title: t("review_apply") || "Review & Apply",
      description: t("experts_review_application") || "Our experts review your application before submission."
    },
    {
      step: "4",
      icon: "option-done.png",
      title: t("get_visa") || "Get Visa",
      description: t("receive_visa_prepare") || "Receive your visa and prepare for your trip."
    }
  ];
  
  // Convert StaticImageData to string for iconMap
  const favoriteLocationIconSrc = typeof FavoriteLocationIcon === 'string' ? FavoriteLocationIcon : (FavoriteLocationIcon as any)?.src || FavoriteLocationIcon;
  const bookMarkIconSrc = typeof BookMarkIcon === 'string' ? BookMarkIcon : (BookMarkIcon as any)?.src || BookMarkIcon;
  const pencilIconSrc = typeof PencilIcon === 'string' ? PencilIcon : (PencilIcon as any)?.src || PencilIcon;
  const optionDoneIconSrc = typeof OptionDoneIcon === 'string' ? OptionDoneIcon : (OptionDoneIcon as any)?.src || OptionDoneIcon;

  const iconMap: Record<string, string> = {
    "favorite-location.png": favoriteLocationIconSrc,
    "bookmark.png": bookMarkIconSrc,
    "pencil.png": pencilIconSrc,
    "option-done.png": optionDoneIconSrc,
  };

  const stepsWithIcons = howToApplySteps.map(step => ({
    ...step,
    icon: iconMap[step.icon] || favoriteLocationIconSrc
  }));

  return (
    <div className="max-w-[1120px] mx-auto px-8 py-5 md:px-8 md:py-5 sm:px-4 sm:py-4">
      <h3 className="font-poppins font-semibold text-[#00366B] text-3xl mb-6 md:text-3xl md:mb-6 sm:text-xl sm:mb-3">
        {t("how_to_apply")}
      </h3>

      <div className="grid grid-cols-4 gap-6 md:grid-cols-4 md:gap-6 lg:grid-cols-4 sm:grid-cols-1 sm:gap-3">
        {stepsWithIcons?.map((step, index) => (
          <div key={`${step.step}-${index}`} className="w-full">
            <InfoCard
              imageSrc={step.icon}
              imageAlt={step.title}
              title={step.title}
              description={step.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
});

export default HowToApplySection;