'use client';


import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image2 from './image/image1 (2).png';
import Image from 'next/image';
import image1 from './image/image1 (2).png';


const projects = [
  {
    id: 1,
    projectCloseDate: "2022-09-01 13:00:00",
    totalAllocation: "5,000,000 TKB",
    price: "1 TKB = 0.005 USDT",
    description: "TokenBot® links algorithmic strategies to exchanges for seamless liquidity access.",
    iconSvg: (
      <svg className='w-[45px] sm:w-[45px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[72px]' viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="72" height="72" rx="36" fill="#7D7DA8" fill-opacity="0.1"/>
<path d="M51.0611 36C51.0611 44.2843 44.318 51 36 51C27.682 51 20.939 44.2843 20.939 36C20.939 27.7157 27.682 21 36 21C44.318 21 51.0611 27.7157 51.0611 36ZM25.1564 36C25.1564 41.9645 30.0113 46.7996 36 46.7996C41.9888 46.7996 46.8436 41.9645 46.8436 36C46.8436 30.0355 41.9888 25.2004 36 25.2004C30.0113 25.2004 25.1564 30.0355 25.1564 36Z" fill="url(#paint0_linear_11_125)"/>
<rect x="14.8503" y="30.3511" width="4.16583" height="10.8511" rx="2.08291" fill="#D9D9D9"/>
<rect x="14.8503" y="30.3511" width="4.16583" height="10.8511" rx="2.08291" fill="url(#paint1_linear_11_125)"/>
<rect x="52.9836" y="30.3511" width="4.16583" height="10.8511" rx="2.08291" fill="#D9D9D9"/>
<rect x="52.9836" y="30.3511" width="4.16583" height="10.8511" rx="2.08291" fill="url(#paint2_linear_11_125)"/>
<ellipse cx="30.4562" cy="36.3192" rx="2.08291" ry="2.07447" fill="#D9D9D9"/>
<ellipse cx="30.4562" cy="36.3192" rx="2.08291" ry="2.07447" fill="#FFE856"/>
<ellipse cx="41.4796" cy="36.3192" rx="2.08291" ry="2.07447" fill="#D9D9D9"/>
<ellipse cx="41.4796" cy="36.3192" rx="2.08291" ry="2.07447" fill="#FFE856"/>
<defs>
<linearGradient id="paint0_linear_11_125" x1="36" y1="21" x2="36" y2="51" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD213"/>
<stop offset="1" stop-color="#FFF885"/>
</linearGradient>
<linearGradient id="paint1_linear_11_125" x1="16.9333" y1="30.3511" x2="16.9333" y2="41.2022" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD213"/>
<stop offset="1" stop-color="#FFF885"/>
</linearGradient>
<linearGradient id="paint2_linear_11_125" x1="55.0666" y1="30.3511" x2="55.0666" y2="41.2022" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD213"/>
<stop offset="1" stop-color="#FFF885"/>
</linearGradient>
</defs>
</svg>
    ),
    ellipseColor: "#3377FF",
    ellipseSvg1: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/2 -translate-x-1/2 w-1/2 z-[1]"
        viewBox="0 0 389 158"
        fill="none"
      >
        <g filter="url(#filter0_f_19_230)">
          <ellipse cx="194.5" cy="9" rx="19" ry="64.5" transform="rotate(-90 194.5 9)" fill="#3377FF" />
        </g>
        <defs>
          <filter
            id="filter0_f_19_230"
            x="0"
            y="-140"
            width="389"
            height="298"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="65" result="effect1_foregroundBlur_19_230" />
          </filter>
        </defs>
      </svg>
    ),
    ellipseSvg2: (
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 bottom-0 w-1/2 z-[1]" viewBox="0 0 322 375" fill="none">
          <g filter="url(#filter0_f_19_171)">
            <ellipse cx="265" cy="307.5" rx="65" ry="107.5" fill="#3377FF"/>
          </g>
          <defs>
            <filter id="filter0_f_19_171" x="0" y="0" width="530" height="615" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_19_171"/>
            </filter>
          </defs>
        </svg>
    ),
  },
  {
    id: 2,
    projectCloseDate: "2022-07-12 07:00:00",
    totalAllocation: "1,000,000 SWP",
    price: "1 SWP = 0.05 USDT",
    description: "StepWatch is a WEB3 fitness app combining health tracking, NFT Move-To-Earn rewards, and social networking features.",
    iconSvg: (
      <svg className='w-[45px] sm:w-[45px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[72px]' viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="72" height="72" rx="36" fill="#7D7DA8" fill-opacity="0.1"/>
<path d="M51 36C51 44.2843 44.2843 51 36 51C27.7157 51 21 44.2843 21 36C21 27.7157 27.7157 21 36 21C44.2843 21 51 27.7157 51 36ZM23.4651 36C23.4651 42.9228 29.0772 48.5349 36 48.5349C42.9228 48.5349 48.5349 42.9228 48.5349 36C48.5349 29.0772 42.9228 23.4651 36 23.4651C29.0772 23.4651 23.4651 29.0772 23.4651 36Z" fill="#D9D9D9"/>
<path d="M51 36C51 44.2843 44.2843 51 36 51C27.7157 51 21 44.2843 21 36C21 27.7157 27.7157 21 36 21C44.2843 21 51 27.7157 51 36ZM23.4651 36C23.4651 42.9228 29.0772 48.5349 36 48.5349C42.9228 48.5349 48.5349 42.9228 48.5349 36C48.5349 29.0772 42.9228 23.4651 36 23.4651C29.0772 23.4651 23.4651 29.0772 23.4651 36Z" fill="url(#paint0_linear_19_111)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.9748 46.6135C41.8463 46.6135 46.6061 41.8617 46.6061 36C46.6061 30.1384 41.8463 25.3866 35.9748 25.3866C30.1033 25.3866 25.3435 30.1384 25.3435 36C25.3435 41.8617 30.1033 46.6135 35.9748 46.6135ZM38.8563 31.1593C39.275 30.6417 39.1302 29.8425 38.538 29.5383C38.1485 29.3383 37.7433 29.1677 37.311 29.0927C36.448 28.9431 35.5611 29.0155 34.734 29.3033C33.907 29.5911 33.167 30.0846 32.5842 30.7372C32.0013 31.3899 31.5947 32.1802 31.4029 33.0333C31.2111 33.8865 31.2403 34.7744 31.4879 35.6132C31.7354 36.4519 32.1931 37.2138 32.8176 37.8269C33.4422 38.4399 34.213 38.8839 35.0572 39.1168C35.4963 39.2379 35.925 39.2151 36.367 39.1804C36.9852 39.1319 37.4873 38.5187 37.341 37.9161C37.2239 37.4335 36.7284 37.1501 36.2329 37.1162C36.0322 37.1024 35.832 37.0687 35.6389 37.0155C35.1525 36.8813 34.7084 36.6255 34.3486 36.2724C33.9888 35.9192 33.7252 35.4803 33.5826 34.997C33.4399 34.5138 33.4231 34.0023 33.5336 33.5108C33.6441 33.0193 33.8783 32.564 34.2141 32.188C34.5499 31.812 34.9762 31.5277 35.4527 31.3619C35.9292 31.1961 36.4401 31.1544 36.9373 31.2406C37.137 31.2752 37.3267 31.3423 37.5097 31.4257C37.9791 31.6397 38.5318 31.5605 38.8563 31.1593ZM35.7428 34.0827C35.7704 33.4184 36.4069 32.9143 37.0529 33.0759C37.478 33.1823 37.8955 33.3212 38.27 33.5498C39.0172 34.006 39.6356 34.6449 40.0666 35.406C40.4977 36.1672 40.7273 37.0255 40.7337 37.8999C40.7401 38.7743 40.523 39.6358 40.103 40.4032C39.6831 41.1705 39.0741 41.8183 38.3336 42.2852C37.5931 42.7522 36.7456 43.023 35.8711 43.0721C34.9966 43.1211 34.124 42.9467 33.3358 42.5654C32.9262 42.3672 32.6195 42.068 32.3107 41.7511C31.8778 41.3069 31.9054 40.515 32.4135 40.1588C32.8207 39.8733 33.3811 39.9875 33.7766 40.2888C33.9361 40.4103 34.1083 40.5166 34.2881 40.6035C34.7422 40.8232 35.2449 40.9237 35.7487 40.8954C36.2525 40.8672 36.7407 40.7112 37.1673 40.4422C37.5939 40.1731 37.9448 39.7999 38.1867 39.3579C38.4286 38.9158 38.5537 38.4195 38.55 37.9157C38.5463 37.412 38.4141 36.9175 38.1657 36.479C37.9174 36.0405 37.5611 35.6725 37.1307 35.4097C36.9582 35.3044 36.7721 35.2299 36.5801 35.1721C36.0851 35.023 35.7213 34.5985 35.7428 34.0827Z" fill="url(#paint1_linear_19_111)"/>
<defs>
<linearGradient id="paint0_linear_19_111" x1="51" y1="36" x2="21" y2="36" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFACC9"/>
<stop offset="1" stop-color="#FF699A"/>
</linearGradient>
<linearGradient id="paint1_linear_19_111" x1="46.6061" y1="36" x2="25.3435" y2="36" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFACC9"/>
<stop offset="1" stop-color="#FF699A"/>
</linearGradient>
</defs>
      </svg>

    ),
    ellipseColor: "#FF5733",
    ellipseSvg1: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/2 -translate-x-1/2 w-1/2 z-[1]"
        viewBox="0 0 389 158"
        fill="none"
      >
        <g filter="url(#filter0_f_19_230)">
          <ellipse cx="194.5" cy="9" rx="19" ry="64.5" transform="rotate(-90 194.5 9)" fill="#3377FF" />
        </g>
        <defs>
          <filter
            id="filter0_f_19_230"
            x="0"
            y="-140"
            width="389"
            height="298"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="65" result="effect1_foregroundBlur_19_230" />
          </filter>
        </defs>
      </svg>
    ),
    ellipseSvg2: (
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 bottom-0 w-1/2 z-[1]" viewBox="0 0 322 375" fill="none">
          <g filter="url(#filter0_f_19_173)">
            <ellipse cx="265" cy="307.5" rx="65" ry="107.5" fill="#3BE103"/>
          </g>
          <defs>
            <filter id="filter0_f_19_173" x="0" y="0" width="530" height="615" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_19_173"/>
            </filter>
          </defs>
        </svg>
    ),
  },
  {
    id: 3,
    projectCloseDate: "2022-06-17 16:00:00",
    totalAllocation: "166,667 REVO",
    price: "1 REVO = 0.6 USDT",
    description: "Revoland is a blockchain-based e-sports game featuring competitive gameplay, digital assets, and rewards.",
    iconSvg: (
      <svg className='w-[45px] sm:w-[45px] md:w-[40px] lg:w-[48px] xl:w-[64px] 2xl:w-[72px]' viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="72" height="72" rx="36" fill="#7D7DA8" fillOpacity="0.1" />
        <path
          d="M24 24L48 48M48 24L24 48"
          stroke="url(#paint0_linear_11_127)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="paint0_linear_11_127" x1="36" y1="24" x2="36" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#28A745" />
            <stop offset="1" stopColor="#68FF8D" />
          </linearGradient>
        </defs>
      </svg>
    ),
    ellipseColor: "#28A745",
    ellipseSvg1: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-1/2 -translate-x-1/2 w-1/2 z-[1]"
        viewBox="0 0 389 158"
        fill="none"
      >
        <g filter="url(#filter0_f_19_230)">
          <ellipse cx="194.5" cy="9" rx="19" ry="64.5" transform="rotate(-90 194.5 9)" fill="#3377FF" />
        </g>
        <defs>
          <filter
            id="filter0_f_19_230"
            x="0"
            y="-140"
            width="389"
            height="298"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="65" result="effect1_foregroundBlur_19_230" />
          </filter>
        </defs>
      </svg>
    ),
    ellipseSvg2: (
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-0 bottom-0 w-1/2 z-[1]" viewBox="0 0 322 375" fill="none">
          <g filter="url(#filter0_f_19_175)">
            <ellipse cx="265" cy="307.5" rx="65" ry="107.5" fill="#3CEAF3"/>
          </g>
          <defs>
            <filter id="filter0_f_19_175" x="0" y="0" width="530" height="615" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_19_175"/>
            </filter>
          </defs>
        </svg>
    ),
  },
];

const HeroPage = () => {

  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Check if the screen width is greater than 768px (non-mobile)
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
      // Animation for text elements
      gsap.from(textRef.current, {
        opacity: 0,
        x: -100,
        duration: 1.5,
        ease: 'power2.out',
      });

      // Animation for buttons
      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });

      // Animation for image
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 100,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out',
      });
    }
  }, []);


  const itemRefs = useRef([]);

  // GSAP animation effect
  useEffect(() => {
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
      itemRefs.current.forEach((el, index) => {
        if (!el) return;

        gsap.fromTo(
          el,
          {
            autoAlpha: 0,
            y: 50,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 100%',
              toggleActions: 'play none none none',
            },
            delay: index * 0.1, // Delay between each item
          }
        );
      });
    }
  }, []);


    return (
        <div id="hero" ref={buttonRef} className='relative pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px]'>
          <div className='relative z-[2] overflow-hidden px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] xl:px-[36px] 2xl:px-[40px]'>
              <div className='pt-[70px] sm:pt-[90px] md:pt-[110px] xl:pt-[100px] 2xl:pt-[120px]'>
                <div className=''>
                  <div className='grid grid-cols-6 sm:grid-cols-12 pl-[24px] sm:pl-[15px] md:pl-[16px] lg:pl-[20px] xl:pl-[24px] 2xl:pl-[32px] py-[24px] sm:py-[15px] md:py-[16px] lg:py-[20px] xl:py-[24px] 2xl:py-[32px] dashbordfastbox relative overflow-hidden'>
                    <svg className=' sm:h-auto h-full sm:w-full absolute top-0 left-0' viewBox="0 0 1360 290" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_2023_111)">
<ellipse cx="530" cy="82" rx="37" ry="50" transform="rotate(-16.9053 530 82)" fill="#3377FF"/>
</g>
<g filter="url(#filter1_f_2023_111)">
<ellipse cx="36.4247" cy="210.435" rx="54.4247" ry="123.435" fill="#3377FF"/>
</g>
<g filter="url(#filter2_f_2023_111)">
<ellipse cx="846.444" cy="57.8782" rx="29.4437" ry="39.8782" fill="#3377FF"/>
</g>
<g filter="url(#filter3_f_2023_111)">
<path d="M1332.23 -107L1398 -62.7539L1219.75 142.145L1184 119.801L1332.23 -107Z" fill="#3377FF"/>
</g>
<g filter="url(#filter4_f_2023_111)">
<circle cx="546" cy="82" r="1" fill="white"/>
</g>
<g filter="url(#filter5_f_2023_111)">
<circle cx="444" cy="57" r="2" fill="white"/>
</g>
<g filter="url(#filter6_f_2023_111)">
<circle cx="458" cy="134" r="1" fill="white"/>
</g>
<g filter="url(#filter7_f_2023_111)">
<circle cx="702" cy="92" r="2" fill="white"/>
</g>
<g filter="url(#filter8_f_2023_111)">
<circle cx="641" cy="19" r="1" fill="white"/>
</g>
<g filter="url(#filter9_f_2023_111)">
<circle cx="767" cy="48" r="1" fill="white"/>
</g>
<g filter="url(#filter10_f_2023_111)">
<circle cx="1275" cy="58" r="2" fill="white"/>
</g>
<g filter="url(#filter11_f_2023_111)">
<circle cx="1290" cy="175" r="1" fill="white"/>
</g>
<g filter="url(#filter12_f_2023_111)">
<circle cx="1240" cy="155" r="1" fill="white"/>
</g>
<g filter="url(#filter13_f_2023_111)">
<circle cx="1215" cy="91" r="1" fill="white"/>
</g>
<g filter="url(#filter14_f_2023_111)">
<circle cx="1089" cy="167" r="1" fill="white"/>
</g>
<g filter="url(#filter15_f_2023_111)">
<circle cx="1091" cy="19" r="1" fill="white"/>
</g>
<g filter="url(#filter16_f_2023_111)">
<circle cx="993" cy="144" r="1" fill="white"/>
</g>
<g filter="url(#filter17_f_2023_111)">
<circle cx="643" cy="84" r="1" fill="white"/>
</g>
<g filter="url(#filter18_f_2023_111)">
<circle cx="572" cy="114" r="1" fill="white"/>
</g>
<g filter="url(#filter19_f_2023_111)">
<circle cx="446" cy="207" r="1" fill="white"/>
</g>
<g filter="url(#filter20_f_2023_111)">
<circle cx="289" cy="168" r="2" fill="white"/>
</g>
<g filter="url(#filter21_f_2023_111)">
<path d="M618 54L618.552 56.4485L621 57L618.552 57.5515L618 60L617.448 57.5515L615 57L617.448 56.4485L618 54Z" fill="white"/>
</g>
<g filter="url(#filter22_f_2023_111)">
<path d="M724 111L724.552 113.448L727 114L724.552 114.552L724 117L723.448 114.552L721 114L723.448 113.448L724 111Z" fill="white"/>
</g>
<g filter="url(#filter23_f_2023_111)">
<path d="M834 29L834.552 31.4485L837 32L834.552 32.5515L834 35L833.448 32.5515L831 32L833.448 31.4485L834 29Z" fill="white"/>
</g>
<g filter="url(#filter24_f_2023_111)">
<path d="M1021 114L1021.55 116.448L1024 117L1021.55 117.552L1021 120L1020.45 117.552L1018 117L1020.45 116.448L1021 114Z" fill="white"/>
</g>
<g filter="url(#filter25_f_2023_111)">
<path d="M1147 55L1147.55 57.4485L1150 58L1147.55 58.5515L1147 61L1146.45 58.5515L1144 58L1146.45 57.4485L1147 55Z" fill="white"/>
</g>
<defs>
<filter id="filter0_f_2023_111" x="301.719" y="-157.045" width="456.561" height="478.09" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="95" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter1_f_2023_111" x="-218" y="-113" width="508.849" height="646.871" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter2_f_2023_111" x="627" y="-172" width="438.887" height="459.756" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="95" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter3_f_2023_111" x="1040" y="-251" width="501.999" height="537.145" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="72" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter4_f_2023_111" x="543" y="79" width="6" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter5_f_2023_111" x="438" y="51" width="12" height="12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter6_f_2023_111" x="455" y="131" width="6" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter7_f_2023_111" x="697" y="87" width="10" height="10" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter8_f_2023_111" x="638" y="16" width="6" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter9_f_2023_111" x="764" y="45" width="6" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter10_f_2023_111" x="1269" y="52" width="12" height="12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter11_f_2023_111" x="1287" y="172" width="6" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter12_f_2023_111" x="1237" y="152" width="6" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter13_f_2023_111" x="1212" y="88" width="6" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter14_f_2023_111" x="1086" y="164" width="6" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter15_f_2023_111" x="1088" y="16" width="6" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter16_f_2023_111" x="990" y="141" width="6" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter17_f_2023_111" x="640" y="81" width="6" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter18_f_2023_111" x="569" y="111" width="6" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter19_f_2023_111" x="443" y="204" width="6" height="6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter20_f_2023_111" x="283" y="162" width="12" height="12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter21_f_2023_111" x="614" y="53" width="8" height="8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter22_f_2023_111" x="720" y="110" width="8" height="8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter23_f_2023_111" x="830" y="28" width="8" height="8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter24_f_2023_111" x="1017" y="113" width="8" height="8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_2023_111"/>
</filter>
<filter id="filter25_f_2023_111" x="1143" y="54" width="8" height="8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_2023_111"/>
</filter>
</defs>
                      </svg>

                    <div className='col-span-5'>
                      <div className='flex items-start flex-col gap-[32px] sm:gap-[36px] md:gap-[40px] lg:gap-[48px] xl:gap-[64px] 2xl:gap-[90px]'>
                        <div className=''>
                          <h2 className='cryptolads text-[14px] sm:text-[15px] md:text-[16px] lg:text-[20px] xl:text-[24px] 2xl:text-[32px]'>Crypto Launchpad</h2>
                          <p className='crysearlyhto text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-2'>Get in Early on Hot Coins</p>
                        </div>
                         <div className='flex items-center justify-between w-full gap-4'>
                           <div className='flex items-center justify-center gap-[10px] sm:gap-[11px] md:gap-[12px] lg:gap-[13px] xl:gap-[14px]'>
                              <svg className='w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[62px]' viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="62" height="62" rx="31" fill="#7D7DA8" fill-opacity="0.1"/>
                              <path d="M26.5466 34.1111C26.5466 35.8356 27.88 37.2222 29.5155 37.2222H32.8577C34.2799 37.2222 35.4355 36.0133 35.4355 34.5022C35.4355 32.8844 34.7244 32.2978 33.6755 31.9245L28.3244 30.0578C27.2755 29.6844 26.5644 29.1156 26.5644 27.48C26.5644 25.9867 27.7199 24.76 29.1422 24.76H32.4844C34.12 24.76 35.4533 26.1467 35.4533 27.8711" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M30.991 23V39" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                             <div className=''>
                              <h3 className='numbazzsedcv text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>$4,791,448.70</h3>
                              <p className='taoalnumbering text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>Total Committed(USD)</p>
                             </div>
                           </div>
                            <div className='flex items-center justify-center gap-[10px] sm:gap-[11px] md:gap-[12px] lg:gap-[13px] xl:gap-[14px]'>
                              <svg className='w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[62px]' viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="62" height="62" rx="31" fill="#7D7DA8" fill-opacity="0.1"/>
                              <path d="M39.774 37C40.5233 37 41.1193 36.5285 41.6544 35.8691C42.7499 34.5194 40.9513 33.4408 40.2653 32.9126C39.568 32.3756 38.7894 32.0714 38 32M37 30C38.3807 30 39.5 28.8807 39.5 27.5C39.5 26.1193 38.3807 25 37 25" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
                              <path d="M22.226 37C21.4767 37 20.8807 36.5285 20.3455 35.8691C19.2501 34.5194 21.0487 33.4408 21.7346 32.9126C22.432 32.3756 23.2106 32.0714 24 32M24.5 30C23.1193 30 22 28.8807 22 27.5C22 26.1193 23.1193 25 24.5 25" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
                              <path d="M27.0836 34.1112C26.0618 34.743 23.3827 36.0331 25.0145 37.6474C25.8115 38.436 26.6993 39 27.8154 39H34.1842C35.3003 39 36.188 38.436 36.9851 37.6474C38.6168 36.0331 35.9378 34.743 34.916 34.1112C32.5199 32.6296 29.4796 32.6296 27.0836 34.1112Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M34.5 26.5C34.5 28.433 32.933 30 31 30C29.067 30 27.5 28.433 27.5 26.5C27.5 24.567 29.067 23 31 23C32.933 23 34.5 24.567 34.5 26.5Z" stroke="white" stroke-width="1.2"/>
                              </svg>
                             <div className=''>
                              <h3 className='numbazzsedcv text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>51,314</h3>
                              <p className='taoalnumbering text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>Total Participants</p>
                             </div>
                           </div>
                         </div>
                      </div>
                    </div>
                    <div className='col-span-7 relative'>
                      <div className='flex items-end justify-end absolute'>
                          <Image
                            src={image1}
                            alt="Hero Image"
                            className='w-full h-full object-cover'
                          />
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center sm:flex-row flex-col justify-between pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[32px] pb-[13px] sm:pb-[14px] md:pb-[15px] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[24px]'>
                    <h3 className='numbazzsedcv text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>$4,791,448.70</h3>
                    <p className='dateceseionnub text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex items-center justify-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-[13px] sm:w-[14px] md:w-[15px] lg:w-[16px] xl:w-[20px] 2xl:w-[24px]' viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="1.2"/>
                    <path d="M15.9453 12.3948C15.7686 13.0215 14.9333 13.4644 13.2629 14.3502C11.648 15.2064 10.8406 15.6346 10.1899 15.4625C9.9209 15.3913 9.6758 15.2562 9.47812 15.0701C9 14.6198 9 13.7465 9 12C9 10.2535 9 9.38018 9.47812 8.92995C9.6758 8.74381 9.9209 8.60868 10.1899 8.53753C10.8406 8.36544 11.648 8.79357 13.2629 9.64983C14.9333 10.5356 15.7686 10.9785 15.9453 11.6052C16.0182 11.8639 16.0182 12.1361 15.9453 12.3948Z" stroke="white" stroke-width="1.2" stroke-linejoin="round"/>
                  </svg> Launchpad Beginner’s Guide</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
                    {projects.map((project) => (
                      <div key={project.id} className="col-span-1 relative rounded-[24px] overflow-hidden tkbsectadon">
                        {project.ellipseSvg1}
                        {project.ellipseSvg2}
                        <div className="p-[24px] sm:p-[15px] md:p-[16px] lg:p-[20px] xl:p-[24px] 2xl:p-[32px] relative">
                          <div className="flex items-center justify-between">
                            {project.iconSvg}
                            <div>
                              <p className="pronclossdate text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px]">
                                Project Close Date
                              </p>
                              <h3 className="dateceseionnub pt-1 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
                                {project.projectCloseDate}
                              </h3>
                            </div>
                          </div>
                          <div className="flex items-center justify-start gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px] pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[32px]">
                            <h3 className="dateceseionnub pt-1 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
                              TKB
                            </h3>
                            <div className="dictruciotns flex items-center text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] py-2 px-[12px] gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[18px]"
                                viewBox="0 0 18 19"
                                fill="none"
                              >
                                <path
                                  d="M16.5 9.5C16.5 5.35786 13.1421 2 9 2C4.85786 2 1.5 5.35786 1.5 9.5C1.5 13.6421 4.85786 17 9 17C13.1421 17 16.5 13.6421 16.5 9.5Z"
                                  stroke="#7D7F87"
                                  strokeWidth="1.2"
                                />
                                <path
                                  d="M6 9.875L7.875 11.75L12 7.25"
                                  stroke="#7D7F87"
                                  strokeWidth="1.2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              Distribution
                            </div>
                          </div>
                          <p className="tokenbotasonx text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]">
                            {project.description}
                          </p>
                          <div className="flex items-center justify-between pt-[16px] sm:pt-[20px] md:pt-[24px] lg:pt-[32px] xl:pt-[36px] 2xl:pt-[40px] pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[88px]">
                            <div>
                              <p className="padionxestwed text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
                                Total Allocation
                              </p>
                              <h3 className="dateceseionnub text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]">
                                {project.totalAllocation}
                              </h3>
                            </div>
                            <div>
                              <p className="padionxestwed text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">
                                Price
                              </p>
                              <h3 className="dateceseionnub text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]">
                                {project.price}
                              </h3>
                            </div>
                          </div>
                          <button className="buttenccatps text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] w-full py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] relative z-[2] cursor-pointer">
                            Coin Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default HeroPage;