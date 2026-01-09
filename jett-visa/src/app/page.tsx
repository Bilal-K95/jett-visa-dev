import searchIcon from "@/assets/images/icons/search.png";
import downArrowIcon from "@/assets/images/icons/downArrowIcon.png";
import favoriteLocationIcon from "@/assets/images/icons/favorite-location.png";
import documentIcon from "@/assets/images/icons/documenticon.webp";
import rightArrowIcon from "@/assets/images/icons/rightArrowIcon.png";
import arrowLeftIcon from "@/assets/images/icons/arrowLeft.webp";
import arrowRightIcon from "@/assets/images/icons/arrowrighticon.webp";
import checkIcon from "@/assets/images/icons/checkicon.webp";
import formIcon from "@/assets/images/icons/formIcon.png";

export default function Home() {
  // Convert StaticImageData to string for img src
  const searchIconSrc = typeof searchIcon === 'string' ? searchIcon : (searchIcon as any)?.src || searchIcon;
  const downArrowIconSrc = typeof downArrowIcon === 'string' ? downArrowIcon : (downArrowIcon as any)?.src || downArrowIcon;
  const favoriteLocationIconSrc = typeof favoriteLocationIcon === 'string' ? favoriteLocationIcon : (favoriteLocationIcon as any)?.src || favoriteLocationIcon;
  const documentIconSrc = typeof documentIcon === 'string' ? documentIcon : (documentIcon as any)?.src || documentIcon;
  const rightArrowIconSrc = typeof rightArrowIcon === 'string' ? rightArrowIcon : (rightArrowIcon as any)?.src || rightArrowIcon;
  const arrowLeftIconSrc = typeof arrowLeftIcon === 'string' ? arrowLeftIcon : (arrowLeftIcon as any)?.src || arrowLeftIcon;
  const arrowRightIconSrc = typeof arrowRightIcon === 'string' ? arrowRightIcon : (arrowRightIcon as any)?.src || arrowRightIcon;
  const checkIconSrc = typeof checkIcon === 'string' ? checkIcon : (checkIcon as any)?.src || checkIcon;
  const formIconSrc = typeof formIcon === 'string' ? formIcon : (formIcon as any)?.src || formIcon;

  return (
    <div className="max-w-full mx-auto relative overflow-hidden bg-background-light dark:bg-background-dark pb-20">
      {/* Header Section */}
      <div className="relative bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-background-dark pb-8 pt-6 px-5 rounded-b-[2.5rem] shadow-soft">
        {/* Decorative blur */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60 pointer-events-none"></div>

        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-6 relative z-10">
          <div className="flex items-center gap-1">
            <span className="text-primary font-bold text-xl tracking-tight">
              musafir<span className="text-orange-400">.com</span>
            </span>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-slate-700 shadow-md">
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3xOTLMXjBWqjFijRYIPB209vO5xxueKBYgSgtJ-8sx6OaaQA4SDLuMSVZoul23_DL069DNHZWj88I34gA4gEBqsfbO006MNp8-PZ1imwcLQ5PMeB6vy93iezo3haYbQpTlHrjALIBVi2oUvrAYtG7F0bY9_nrZyapt1-h5vHCLeYkeFzYGrHnePDif_ZNcFdywMPrqyX95o8UqS-0yeFM-AKKvg-t6PVZG-uRMA6YU5nc7xxbamm9kZ5Lfjum4HmGxVUkHHfQSFA"
            />
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white relative z-10">
          Search. Visa. <span className="text-primary">Go.</span>
          <img 
            src={rightArrowIconSrc} 
            alt="flight" 
            className="inline-block text-primary align-middle w-4 h-4 ml-1 transform -rotate-45" 
          />
        </h1>

        {/* Search Card */}
        <div className="bg-white dark:bg-card-dark rounded-2xl p-4 shadow-lg mb-6 relative z-10 border border-slate-100 dark:border-slate-700">
          {/* Country Selectors */}
          <div className="flex gap-3 mb-4">
            <div className="flex-1 bg-slate-50 dark:bg-slate-800 rounded-xl p-2 px-3 flex items-center gap-2 border border-slate-100 dark:border-slate-600">
              <img
                alt="India"
                className="w-5 h-3.5 rounded-sm object-cover shadow-sm"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnvCjIEAI4kt3_gxowAtOQtd8wxpmzCFjw0-9qQyjLu0GZFcb273s5r_LyjjfxU8t08oXLTY9rBORnKgYPQE314P830VKTguqjHHE4DbdRjr5e44ANa296YzQsLTpUAi_q76A04m3PwPj_Qh0-zXWq9Wk22mAB8B8UQ6lpy2sRa_a_PJQLOd3GeMBFXZNqoWb9GLhQbxJNXyHgVvF2AvIb_sJKYft3206no5DeDs-1Zm1vBZRc0I3WdLtdv3GdYXibDRLUec2kl8Q"
              />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-medium leading-none mb-0.5">
                  Nationality
                </span>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                  Indian
                </span>
              </div>
              <img 
                src={downArrowIconSrc} 
                alt="expand" 
                className="w-4 h-4 ml-auto opacity-60" 
              />
            </div>
            <div className="flex-1 bg-slate-50 dark:bg-slate-800 rounded-xl p-2 px-3 flex items-center gap-2 border border-slate-100 dark:border-slate-600">
              <img
                alt="UAE"
                className="w-5 h-3.5 rounded-sm object-cover shadow-sm"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDqlo9wHpaWPMIxpOLWLgC0PcWLsro6rSSLaEZVh_OOZfzmRrjilQr0lNKFomc95UIrle_hgaAvdGrM5kSVGxXURnSjTKy3ALgRvEkT1uoPfA9w0GL2oj47317lxhiafVhepY710rlNwY3EmkrV7q0y4JSF1dM5nCmR3wcSWS4EEtjauv9N7OJWvFa3C5SoZUlSLf1h0zPtnPMx8sgi1NnSBIuUOYmEuIrBaRsWWAEVOQNiqUo81tGepyjILmNpR2z7-IyKbR8Q0g"
              />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-medium leading-none mb-0.5">
                  Residency
                </span>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                  UAE
                </span>
              </div>
              <img 
                src={downArrowIconSrc} 
                alt="expand" 
                className="w-4 h-4 ml-auto opacity-60" 
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between gap-4 mb-4 px-2">
            <button className="flex flex-col items-center gap-1 group">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-primary rounded-xl flex items-center justify-center transition group-hover:bg-primary group-hover:text-white shadow-sm">
                <img src={favoriteLocationIconSrc} alt="destination" className="w-6 h-6 object-contain" />
              </div>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                Destination
              </span>
            </button>
            <button className="flex flex-col items-center gap-1 group">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-primary rounded-xl flex items-center justify-center transition group-hover:bg-primary group-hover:text-white shadow-sm">
                <img src={documentIconSrc} alt="visa mode" className="w-6 h-6 object-contain" />
              </div>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                Visa mode
              </span>
            </button>
            <button className="flex flex-col items-center gap-1 group">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-primary rounded-xl flex items-center justify-center transition group-hover:bg-primary group-hover:text-white shadow-sm">
                <img src={rightArrowIconSrc} alt="travel" className="w-6 h-6 object-contain" />
              </div>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                Travel mode
              </span>
            </button>
          </div>

          {/* Search Input */}
          <div className="relative">
            <input
              className="w-full bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm rounded-xl py-3 pl-4 pr-10 border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-slate-400"
              placeholder="Search by country or city"
              type="text"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary p-1">
              <img src={searchIconSrc} alt="search" className="w-5 h-5 object-contain" />
            </button>
          </div>
        </div>

        {/* Floating Message */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 w-max max-w-[90%]">
          <div className="bg-white dark:bg-slate-800 shadow-md border border-purple-100 dark:border-slate-600 rounded-full py-1.5 px-4 flex items-center gap-2 text-[10px] font-medium text-slate-600 dark:text-slate-300 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"></span>
            Plan your next adventure, and let us simplify your visa
            <img src={rightArrowIconSrc} alt="arrow forward" className="w-3 h-3 object-contain" />
          </div>
        </div>
      </div>

      {/* Top Destinations */}
      <div className="mt-8 px-5">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-lg font-bold text-slate-800 dark:text-white">
            Top destinations
          </h2>
          <a
            className="text-primary text-xs font-semibold hover:underline"
            href="#"
          >
            View all
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {/* Germany Card */}
          <div className="relative h-48 rounded-2xl overflow-hidden group shadow-md cursor-pointer">
            <img
              alt="Germany"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkLDFErptf2vt6Dk543Hidet5nFdX69BeaKt482tc_XYCJ77Y01qorjpicRRzOrzM09opAVuEJABMN386b2Gi-5sbjmFgeBYgYx-tmGl493xutA-Lmoglayp_0NqfAQcWPyCDRYRLH1SZoOu8S-ANf5aFnpwV-tlhwB8Yjt_uidcvLV79Hr_SVCoGGxQT3sQk8JvbBHRkZ2DGxLbNyhZODoGrTmrfU0MiWxa-lYH413zpIW2DVttzfttSvGkQFMtzPtGsmnZuhskg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute top-2 left-2 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white border border-white/30">
              Sticker Visa
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <h3 className="font-bold text-sm">Germany</h3>
              <div className="flex justify-between items-center mt-1">
                <p className="text-[10px] opacity-80">Starts ₹6,800</p>
                <span className="text-[9px] bg-white/20 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/20">
                  4-5 days
                </span>
              </div>
            </div>
          </div>

          {/* India Card */}
          <div className="relative h-48 rounded-2xl overflow-hidden group shadow-md cursor-pointer">
            <img
              alt="India"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD2fWnEEzi_cidjOzN1crn3eUpks1AreiLNrJZtcH26Q_4WX9lCuK9aXS8CQVAS7TFgdjFGvVag0PruLobJNoSiGuRAWHVY0A3TmzBahUfii7bjqPDAruMKKnyJ-63eOKrIHpF9wDlHgI0IOVAF7Y5Dog_fAQjQTCxuXgzHwf6m7h6ZP-bjxDkUtz52qFcPFVc964LAkPcA-zHFxz9L_CW3KqXe4r1jLKlmQIKv8bPaOwN1HLLoUuQcqXShtECGC5I9WxRN-pc97U"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute top-2 left-2 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white border border-white/30">
              E-Visa
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <h3 className="font-bold text-sm">India</h3>
              <div className="flex justify-between items-center mt-1">
                <p className="text-[10px] opacity-80">Starts ₹2,100</p>
                <span className="text-[9px] bg-white/20 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/20">
                  48 hours
                </span>
              </div>
            </div>
          </div>

          {/* Australia Card */}
          <div className="relative h-48 rounded-2xl overflow-hidden group shadow-md cursor-pointer">
            <img
              alt="Australia"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS4cyqxlNTmZOj4jONHtIOK1RtiRzX_Iw7XldJQY6zwyPQFlUToG6vhK7I0904Zl8N9qSNjxuFkRUduC1_UUeQQ_K47JfW3IAwYUBUNUHC-AZm0cm2iFb3GtuVC80RRix8sOddT96jLyFxZDjLdbtCbMXmmiJJQYPQekMYguWXjtD5Naciqic6VJj8SLqTx6ltFanioSw8Eu6z1XlYsmqdcv2794axSdp_qwQZAV-j8UosiHuXbPfUqLpBQEBd1UH0jPGSNvEgQ1w"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute top-2 left-2 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white border border-white/30">
              E-Visitor
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <h3 className="font-bold text-sm">Australia</h3>
              <div className="flex justify-between items-center mt-1">
                <p className="text-[10px] opacity-80">Starts ₹9,500</p>
                <span className="text-[9px] bg-white/20 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/20">
                  15-20 days
                </span>
              </div>
            </div>
          </div>

          {/* Japan Card */}
          <div className="relative h-48 rounded-2xl overflow-hidden group shadow-md cursor-pointer">
            <img
              alt="Japan"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDws-RUQldi83x0aXDHXhWaCVZKQqK5JuduChQzUy9Yq9PBOJoB1AdWFDd23SFxFNBYGf2jSiJPEnQkAlG1Y7WSchho29wg_2Wz50AjZdKB_uqQMau8xoE9onfySNgVe4W82AmbwbIfu2QS3o7OAhl4aXUg4GBIKZJzHV9G4Bc45VDe2wodLEuNeeHmFHujn-B284KpmG2W6YBeDHLj3yZ7iLuRE8NLMdv5xMcutzu___XXrgZuujaT9JwX7ijIm1p0PnruBlgaM4E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute top-2 left-2 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white border border-white/30">
              E-Visa
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <h3 className="font-bold text-sm">Japan</h3>
              <div className="flex justify-between items-center mt-1">
                <p className="text-[10px] opacity-80">Starts ₹3,200</p>
                <span className="text-[9px] bg-white/20 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/20">
                  5-7 days
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-2 mt-4">
          <button className="w-6 h-6 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 bg-white dark:bg-card-dark hover:text-primary hover:border-primary transition">
            <img src={arrowLeftIconSrc} alt="previous" className="w-3 h-3 object-contain" />
          </button>
          <button className="w-6 h-6 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 bg-white dark:bg-card-dark hover:text-primary hover:border-primary transition">
            <img src={arrowRightIconSrc} alt="next" className="w-3 h-3 object-contain" />
          </button>
        </div>
      </div>

      {/* Offers Section */}
      <div className="mt-6 px-5">
        <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-3">
          Offers
        </h2>
        <div className="relative rounded-2xl overflow-hidden shadow-md">
          <img
            alt="Travel Offer"
            className="w-full h-32 object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyi0zROqT-8uriu3bOhADUvcwUWRZEymINjMUmKgqfcXF0e0cXKGg5p0tlMiALhCtZxF8qR5Z8X4jeTNvGfuWQaSY-LXCNned3Mpd_1Fz91guYad_krgtmeM5VQEah62x_2IzSPg6i25uwgUzj7X_Gn2gAkqZ0FLJgEstAgjw-W_AdiZmmKj4tJtnJ-CymDv2q9IOOFiBzR8qbAKTvDUtxmTKncrHBmldqjd4QdJT87yTVUENpng2fGG766FOATDB4E0BS20kfiRY"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-transparent"></div>
          <div className="absolute top-0 left-0 h-full p-5 flex flex-col justify-center max-w-[60%] text-white">
            <p
              className="font-cursive text-2xl font-bold italic leading-tight mb-1"
              style={{ fontFamily: "'Brush Script MT', cursive" }}
            >
              Time to Travel
            </p>
            <p className="text-[10px] opacity-90 mb-2">
              Explore the world with us
            </p>
            <div className="inline-block bg-yellow-400 text-blue-900 text-xs font-bold px-2 py-0.5 rounded-sm w-max transform -rotate-2">
              35% OFF
            </div>
          </div>
        </div>
        <div className="flex gap-1 mt-3 justify-start">
          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700"></div>
        </div>
      </div>

      {/* Find Your Visa Section */}
      <div className="mt-10 px-0 pb-10 relative overflow-hidden">
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[150%] h-[300px] bg-gradient-to-b from-blue-50 to-transparent dark:from-slate-800/50 dark:to-transparent rounded-[100%] -z-10"></div>
        <div className="px-5 text-center mb-6">
          <h2 className="text-lg font-bold text-slate-800 dark:text-white">
            Find your visa
          </h2>
          <div className="flex items-center justify-center gap-2 mt-1 mb-4 text-[10px] text-slate-400 uppercase tracking-widest">
            <span className="h-[1px] w-4 bg-slate-200 dark:bg-slate-700"></span>
            Based on your nationality
            <span className="h-[1px] w-4 bg-slate-200 dark:bg-slate-700"></span>
          </div>
          <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-full px-4 py-1.5 shadow-sm">
            <img
              alt="India"
              className="w-5 h-3.5 rounded-sm object-cover shadow-sm"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq_Umt3wJNFITmMHuQGnlmHuwVfgTMid6GLR1TgpPb4QLGjYrYz0LF9URu51rpDVHY93mxEmsGaaDuVIsr_zBrIkA54sYDahFihZpS2A_umuzx9DMJvlAxvM5I5AH9h8yEL0mMrF7P8S5SNuqrPmjhd4gzfKxlIjhqCituj483PvTbAKTifR-2ELTn5OsExpUp8bSOW73G_a6aQqOw3ws2Ur4OfLYE2J0IPQrEK9SVqZmayP7pbCANrvTj6hM-xntq6o-HFSzvTF4"
            />
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
              Indian
            </span>
            <img src={downArrowIconSrc} alt="expand" className="w-4 h-4 opacity-60" />
          </div>
        </div>

        {/* Carousel */}
        <div className="relative px-5">
          <div className="absolute top-1/2 -translate-y-1/2 left-2 z-20">
            <button className="w-8 h-8 rounded-full bg-white dark:bg-slate-700 shadow-lg flex items-center justify-center text-slate-400 hover:text-primary">
              <img src={arrowLeftIconSrc} alt="previous" className="w-4 h-4 object-contain" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-2 z-20">
            <button className="w-8 h-8 rounded-full bg-white dark:bg-slate-700 shadow-lg flex items-center justify-center text-slate-400 hover:text-primary">
              <img src={arrowRightIconSrc} alt="next" className="w-4 h-4 object-contain" />
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide py-4 px-4 snap-x snap-mandatory items-center justify-center">
            {/* Side Card - India */}
            <div className="snap-center shrink-0 w-32 h-40 rounded-xl overflow-hidden relative opacity-70 transform scale-90 grayscale-[30%]">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz9xHQR0vbh0WuL65lpBP2jW7OFm-gYmrkUHNzGUexNw6ImplEkbVJQR5rWRaDW89J5mVS3x-hKM7ndLRBTDlaZOEzf_OfGZS9-nguv83krKp0oT1pWgHmzr3Dr6yoRNyQ6Vx1nPX8Fp0pmt6rfPWG0lPRUNy9-mea1wZINfEx7LA9u3iGh6e7guVeGCWCNZSHCqdNeQMCzmkVWtpSkx9aXJPyYUdmaqUPdD6TodiaJCxc1j1Kr5COpcXbbug6Q2VthES8SWpW4zQ"
              />
              <div className="absolute bottom-2 left-0 right-0 text-center text-white">
                <p className="font-bold text-xs">India</p>
              </div>
            </div>

            {/* Center Card - Germany */}
            <div className="snap-center shrink-0 w-48 h-64 rounded-2xl overflow-hidden relative shadow-2xl transform scale-100 z-10 border-4 border-white dark:border-slate-700">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8ZWlqv1atgDYb573KwA-_j81EhNQCUUJP0QId_FHLsodT4XTHadI9AsiduDC6Ttn_McSupIgr1fcJn-njCtEuWYFQJBRgnjbFLViaizczzJ-DFAcRPwCcsbGO6QHfW4qeRHLYt-jQBpsbJ_jx3XVkqlwtl9AdGpttCyWjz0PfGDxqZ1-UIJzY3i3xpa6O9O42ynyA8pIRmzLSb-bivpvjsrfma1pLQwZ01WP8UGZizkRi7eMAWNlgzA-tY1sTWX5POCZF_OaH3Ys"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white border border-white/30">
                Sticker Visa
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <h3 className="font-bold text-lg mb-1">Germany</h3>
                <p className="text-[10px] opacity-80 mb-2">Starts ₹6,800</p>
                <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs px-4 py-1.5 rounded-full border border-white/30 transition w-full flex items-center justify-center gap-1">
                  Apply{" "}
                  <img src={rightArrowIconSrc} alt="arrow forward" className="w-3 h-3 object-contain" />
                </button>
              </div>
            </div>

            {/* Side Card - United Kingdom */}
            <div className="snap-center shrink-0 w-32 h-40 rounded-xl overflow-hidden relative opacity-70 transform scale-90 grayscale-[30%]">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1HmCiqzmmK9ycw1PLEaOks4vcfHiUduFsRS4bs7gH3G4A0nNUTY90RLUI_kCQzaDl39_5V4zLELF0jG-Mvo2c7JvMvl1Bs8xsHMtky6NKYeWcLzu4Ykoyl5d5gWgP43Mm_My2XcA-RQNGHweaSOIwWiEe57diW3bSN8NTiGN5j8VOGdAft5vF_aKflP-T_glizDXOavCgWCmQBbUkejq_snvXev6xoYSdso72CS90oQZh7zLFf722XrhoGQniyPDJ9Al7so64bZs"
              />
              <div className="absolute bottom-2 left-0 right-0 text-center text-white">
                <p className="font-bold text-xs">United Kingdom</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <a
              className="text-primary text-xs font-semibold hover:underline"
              href="#"
            >
              View all
            </a>
          </div>
        </div>
      </div>

      {/* How to Apply Section */}
      <div className="bg-blue-50 dark:bg-slate-900 py-8 px-5 mt-4 rounded-t-3xl">
        <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-6">
          How to apply
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white dark:bg-card-dark p-4 rounded-xl flex flex-col items-center text-center shadow-sm">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-primary mb-3">
              <img src={formIconSrc} alt="upload" className="w-6 h-6 object-contain" />
            </div>
            <h3 className="text-xs font-bold text-slate-700 dark:text-slate-200">
              Upload Documents
            </h3>
          </div>
          <div className="bg-white dark:bg-card-dark p-4 rounded-xl flex flex-col items-center text-center shadow-sm">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-primary mb-3">
              <img src={checkIconSrc} alt="verified" className="w-6 h-6 object-contain" />
            </div>
            <h3 className="text-xs font-bold text-slate-700 dark:text-slate-200">
              Get Verified
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}