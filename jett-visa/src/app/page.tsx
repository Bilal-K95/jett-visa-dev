"use client";

import { useEffect } from "react";
import { useFetchDestinationsQuery } from "@/store/visaDestinationApi";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import searchIcon from "@/assets/images/icons/search.png";
import downArrowIcon from "@/assets/images/icons/downArrowIcon.png";
import favoriteLocationIcon from "@/assets/images/icons/favorite-location.png";
import documentIcon from "@/assets/images/icons/documenticon.webp";
import rightArrowIcon from "@/assets/images/icons/rightArrowIcon.png";
import arrowLeftIcon from "@/assets/images/icons/arrowLeft.webp";
import arrowRightIcon from "@/assets/images/icons/arrowrighticon.webp";
import checkIcon from "@/assets/images/icons/checkicon.webp";
import formIcon from "@/assets/images/icons/formIcon.png";
import { useAppDispatch } from "@/store/hooks";
import { useTranslation } from "react-i18next";
import { loadLanguageFromStorage } from "@/store/slice/languageSlice";
import { useAuthorization } from "@/utils/hooks/useAuthorization";
import HomeScreen from "@/pages/home-screen/HomeScreen";

export default function Home() {
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();
  const { authorize } = useAuthorization();
  const authTokens = useSelector((state: RootState) => state.loginSlice?.authorizationTokens);

  useEffect(() => {
    dispatch(loadLanguageFromStorage());
  }, [dispatch]);

  const isRTL = i18n.language.startsWith("ar");

  // Initialize authorization on app load - exactly like your working React code
  useEffect(() => {
    if (!authTokens?.AccessToken) {
      const encryptedRequest = "GeWxBz3UdZnAQdXjYO37LhQlpSxJVcK7At4g44pgUMQtd9tCWq3rGbi3FLgl3XWNjVZdhXDleafMpnh4VCDBQI6s98Korp5taF7uAZhReLTDlKQPM3qjAFDajaSMEv4O9xZI/JmHzqsFB26NxXpU8GrTlkOOBxPWIajyrMqWRVvv+bNWi69ZngEPQtHj7hGMxFkQIDWK/saFTmaLAPSvQndGuVoObNQIiro+s1VAs6m8cTzoFQ9+zUvqeU5tlDaqnS9EfnZ9wzniBKTteneicpmm64flEpOTe3lFvA5bZQ58O6OijvCJq3YEyaXFn8C984KLoMuarxxLIW2QrumBZ55tjeWYcAgxHb5IPqCEWwuolm4r8r/d1soQym2SRPkwwn88r9gu++iWawDZMMpI6RwlkONCLzGYkgU3GXS1Xc2krr85c9GNO3h95jpr1MP9nH1cEqxcouYj81RFAaz+2qhucN/AZr+XTTR/v17WWJRF5XzIKR71V7CeETgb9AmOa46Q7CAtqFzYr6Ws6jarPMHnaBDcljEZLZMVDhGzG4n7zKHURNEFk4fY0kvUYISiKyN8o2Xhog+/Aqse5ByRiEuGi1qFSbde100qzmZaQsnyDV+Ydc36n2z8/4OHoyTN7zh4Lj3FK/g/lM4TgFCzIyQYkrgerlyjCeuj4DZg5f4=";
      
      authorize(encryptedRequest).catch((error) => {
        console.error('Failed to authorize:', error);
      });
    }
  }, [authTokens?.AccessToken, authorize]);
  
  // Fetch destinations API - will use OAuth tokens automatically
  const { 
    data: destinationsData, 
    error: destinationsError, 
    isLoading: destinationsLoading 
  } = useFetchDestinationsQuery(
    { language: "en-US" },
    { 
      skip: !authTokens?.ConsumerKey || !authTokens?.ConsumerSecret || !authTokens?.AccessToken 
    }
  );
  
  // Log destinations data when received
  useEffect(() => {
    if (destinationsData) {
      console.log("🌍 Destinations API Response:", destinationsData);
      console.log("📊 Destinations Data:", destinationsData.response);
      if (destinationsData.response && Array.isArray(destinationsData.response)) {
        console.log(`✅ Successfully fetched ${destinationsData.response.length} destinations`);
        destinationsData.response.forEach((destination: any, index: number) => {
          console.log(`  ${index + 1}. ${destination.countryName} (${destination.isoCode2})`);
        });
      }
    }
    
    if (destinationsError) {
      console.error("❌ Destinations API Error:", destinationsError);
    }
  }, [destinationsData, destinationsError]); 
  // Convert StaticImageData to string for img src
  // const searchIconSrc = typeof searchIcon === 'string' ? searchIcon : (searchIcon as any)?.src || searchIcon;
  // const downArrowIconSrc = typeof downArrowIcon === 'string' ? downArrowIcon : (downArrowIcon as any)?.src || downArrowIcon;
  // const favoriteLocationIconSrc = typeof favoriteLocationIcon === 'string' ? favoriteLocationIcon : (favoriteLocationIcon as any)?.src || favoriteLocationIcon;
  // const documentIconSrc = typeof documentIcon === 'string' ? documentIcon : (documentIcon as any)?.src || documentIcon;
  // const rightArrowIconSrc = typeof rightArrowIcon === 'string' ? rightArrowIcon : (rightArrowIcon as any)?.src || rightArrowIcon;
  // const arrowLeftIconSrc = typeof arrowLeftIcon === 'string' ? arrowLeftIcon : (arrowLeftIcon as any)?.src || arrowLeftIcon;
  // const arrowRightIconSrc = typeof arrowRightIcon === 'string' ? arrowRightIcon : (arrowRightIcon as any)?.src || arrowRightIcon;
  // const checkIconSrc = typeof checkIcon === 'string' ? checkIcon : (checkIcon as any)?.src || checkIcon;
  // const formIconSrc = typeof formIcon === 'string' ? formIcon : (formIcon as any)?.src || formIcon;

  return (
    <>
      <HomeScreen/>
    </>
  )
}