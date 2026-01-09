import React, { useState } from "react";
import DownArrowIcon from "@/assets/images/icons/downArrowIcon.png";
import { useTranslation } from "react-i18next";

interface FaqItem {
  question: string;
  answer: string;
}

const FaqSection: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const { t } = useTranslation();
  const toggleExpand = (index: number) => setExpanded(expanded === index ? null : index);

  // Desktop-first: Default desktop data
  const faqs: FaqItem[] = [
    { 
      question: t("what_is_visa") || "What is a visa?", 
      answer: t("visa_explanation") || "A visa is an endorsement by the issuing country, usually stamped or bound into a passport, that allows the bearer to enter the country." 
    },
    { 
      question: t("how_long_visa") || "How long does it take to get a visa?", 
      answer: t("visa_processing_time") || "Processing times vary by country and visa type, typically ranging from a few days to several weeks." 
    },
    { 
      question: t("what_documents_required") || "What documents are required?", 
      answer: t("required_documents") || "Commonly required documents include a passport, application form, photos, and proof of funds/accommodation." 
    },
    { 
      question: t("visa_validity") || "How long is a visa valid?", 
      answer: t("visa_validity_explanation") || "Visa validity depends on the type and country. Tourist visas typically range from 30 days to 10 years, depending on the destination." 
    },
    { 
      question: t("can_extend_visa") || "Can I extend my visa?", 
      answer: t("visa_extension") || "Visa extension policies vary by country. Some allow extensions, while others require you to leave and reapply. Check with the specific country's immigration rules." 
    }
  ];

  // Convert StaticImageData to string for img src
  const downArrowIconSrc = typeof DownArrowIcon === 'string' ? DownArrowIcon : (DownArrowIcon as any)?.src || DownArrowIcon;

  return (
    <div className="max-w-[1120px] mx-auto px-8 py-5 bg-white md:px-8 md:py-5 sm:px-4 sm:py-4">
      <h3 className="font-poppins font-semibold text-[#00366B] text-3xl mb-4 md:text-3xl md:mb-4 sm:text-xl sm:mb-3">{t('faqs')}</h3>

      {faqs?.map((faq: FaqItem, index: number) => {
        const isExpanded = expanded === index;
        return (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleExpand(index)}
              className="w-full flex items-center justify-between py-2 cursor-pointer"
              aria-expanded={isExpanded}
            >
              <div className="font-poppins font-medium text-[#00366B] text-lg text-left md:text-lg sm:text-base">
                {faq.question}
              </div>
              <img
                src={downArrowIconSrc}
                alt="expand"
                className={`w-6 h-6 transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>

            {isExpanded && (
              <div className="pb-2 text-base text-[#707478] font-poppins md:text-base sm:text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FaqSection;
