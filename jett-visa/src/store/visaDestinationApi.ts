import { oauthBaseQuery } from "@/utils/oauthBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";

export interface Destination {
  id: string;
  countryName: string;
  isoCode2: string;
  isoCode3: string;
  continent: string;
  currencyCode: string;
  nationality: string;
  flag: string;
  isdCode: string;
  symbol: string;
  visaMode: string;
  visaModeName: string;
  startingPrice: number;
  getVisaDays: number;
  startsPrefix: string;
  images: Array<{ filename: string }>;
  entityIds: string[];
}

export interface DestinationsApiResponse {
  context: { 
    statusCode: number; 
    trackingId: string; 
    message: string; 
    transactionId: string; 
  };
  response:Destination[]; 
  error: any; 
}

export interface DestinationsQueryParams {
  continent?: string;
  isoCode2?: string;
  language?: string;
}

export const visaDestinationsApi = createApi({
  reducerPath: "visaDestinationsApi",
 baseQuery: oauthBaseQuery,
  endpoints: (builder) => ({
    fetchDestinations: builder.query<DestinationsApiResponse, DestinationsQueryParams>({
      query: ({ continent, isoCode2, language = "en-US" }) => {
        // Use visa/countries/all endpoint if no continent specified or continent is "all"
        if (!continent || continent === "all") {
          const params: Record<string, string> = { language };
          return {
            url: "visa/countries/all",
            method: "GET",
            params,
          };
        }
        // Otherwise use countries/destinations endpoint with continent
        const params: Record<string, string> = { continent, language };
        if (isoCode2) {
          params.isoCode2 = isoCode2;
        }
        return {
          url: "countries/destinations",
          method: "GET",
          params,
        };
      },
    }),
  }),
});

export const { useFetchDestinationsQuery } = visaDestinationsApi;