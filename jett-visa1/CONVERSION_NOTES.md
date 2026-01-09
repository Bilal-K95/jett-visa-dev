# Next.js Conversion Notes

## Files Moved
All components from `src/home-screen/` have been moved to `src/components/features/` with the same folder structure.

## Missing Dependencies

### Required npm packages to install:
```bash
npm install @mui/material @emotion/react @emotion/styled
npm install react-i18next i18next
```

### Missing Files/Folders Structure Needed:

1. **Custom Components** (currently imported from `@components/core-module/`):
   - `src/components/core-module/` - Create this folder structure
   - Components needed:
     - `find-visa/FindVisaWidget.tsx`
     - `navbar/TopBar.tsx`
     - `nationality-residency/NationalityResidencySelector.tsx`
     - `nationality-residency/modals/UpdateResidencyDialog.tsx`
     - `nationality-residency/common/BottomConfirmBar.tsx`
     - `travel-date-calendar/TravelDateCalender.tsx`
     - `visa-type/OtherVisaTypes.tsx`
     - `destination-list/DestinationList.tsx`
     - `custom-drawer/MobileBottomDrawer.tsx`
     - Skeleton components (HeroSectionSkeleton, TopDestinationsSkeleton, etc.)
     - FooterSection component

2. **Utilities & Hooks** (currently imported from `@utility/`):
   - `src/lib/utils/` - Already exists, add utility functions here
   - `src/hooks/` - Already exists, add custom hooks here
   - Hooks needed:
     - `useCountry.ts`
     - `useLocation.ts`
     - `useTopDestination.ts`
     - `useVisaStaticContent.ts`
   - Utilities needed:
     - `helper.ts` (with `getCountryVisaUrl` function)
     - `constant.ts` (with ROUTES constant)
     - Mock data files

3. **Types** (currently imported from `@utility/types/`):
   - `src/lib/types/` - Already exists
   - Types needed:
     - `nationality-residency/Country.ts`
     - `country/Country.ts`
     - `top-destination/TopDestinationItem.ts`

4. **i18n Configuration**:
   - `src/i18n/` - Create i18n configuration folder
   - `i18n.ts` - Main i18n configuration file
   - Translation JSON files

5. **Theme Configuration**:
   - `src/theme/` - Create theme folder
   - `theme.ts` - Material-UI theme configuration

## Conversion Requirements

### 1. React Router → Next.js Router
- Replace `useNavigate()` from `react-router-dom` with `useRouter()` from `next/navigation`
- Replace `window.location.href` with Next.js navigation methods

### 2. Material-UI → Consider Tailwind CSS
- Option A: Keep Material-UI (requires installing packages)
- Option B: Convert all Material-UI components to Tailwind CSS (recommended for clean Next.js)

### 3. Client Components
- All components using hooks/state need `'use client'` directive at the top

### 4. Image Optimization
- Replace `<img>` tags with Next.js `Image` component
- Replace `src={image}` imports with proper Next.js image imports

### 5. Styled Components
- Convert Material-UI `styled` components to Tailwind CSS classes

## Current Structure

```
src/
├── components/
│   ├── features/          ✅ Moved here
│   │   ├── faq-section/
│   │   ├── how-to-apply-section/
│   │   ├── offer-section/
│   │   ├── scrolling-destination-images/
│   │   ├── search-destination/
│   │   ├── testimonials-section/
│   │   ├── top-destination-section/
│   │   ├── travel-date-section/
│   │   ├── visa-selection-options/
│   │   ├── why-choose-musafir-section/
│   │   └── HomeScreen.tsx
│   ├── layout/            ✅ Exists (empty)
│   └── ui/                ✅ Exists (empty)
├── lib/
│   ├── utils/             ✅ Exists (empty)
│   ├── constants/         ✅ Exists (empty)
│   └── types/             ✅ Exists (empty)
├── hooks/                 ✅ Exists (empty)
└── services/              ✅ Exists (empty)
```

## Next Steps

1. Install missing npm packages (Material-UI or convert to Tailwind)
2. Create missing component files in `src/components/core-module/`
3. Create missing hooks in `src/hooks/`
4. Create missing utilities in `src/lib/utils/`
5. Create missing types in `src/lib/types/`
6. Set up i18n configuration
7. Convert all components to use Next.js patterns
8. Add `'use client'` directive where needed

