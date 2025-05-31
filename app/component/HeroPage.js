'use client';


import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import coincoin from './image/coincon1.png';
import coincoin2 from './image/coincon2.png';
import coincoin3 from './image/coincon3.png';
import coincoin4 from './image/coincon4.png';
import coincoin5 from './image/coincon5.png';




const data = [
  {
    header: 'BTC',
    headerp: 'Bitcoin',
    image: coincoin,
    title: 'Coin Title',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="0 0 135 64" fill="none">
          <path d="M124.133 47.0211C127.778 62.1014 132.779 62.6014 134.778 63.6014C136.778 64.6014 0.777786 63.4046 0.777786 63.4046V3.8781L3.34119 4.71649C4.69861 5.16044 6.13997 4.3942 7.02853 3.27612C7.38026 2.83354 7.75829 2.45093 8.13065 2.12462C9.5283 0.899818 11.3177 1.11534 12.0963 2.80275C15.0086 9.11431 19.8079 27.3073 23.2368 34.9237C24.3451 37.3854 26.9341 37.7087 27.5984 35.092C29.1016 29.1713 28.9351 17.1184 31.7731 17.531C37.4087 20.8077 37.6647 40.4678 42.361 40.4678C46.5543 39.4228 44.4957 25.8818 48.9701 14.1907C49.3401 13.2238 50.3472 12.6812 51.0749 13.4176C56.1186 18.5214 63.5165 46.1741 71.4778 43.1983C75.2348 41.56 73.1003 22.446 77.1704 22.446C79.1286 22.446 80.5869 32.4739 84.2253 39.2845C84.7383 40.2446 86.0825 40.0375 86.4606 39.0167C90.6272 27.7688 92.9968 42.7979 95.6424 36.645C101.278 23.5382 105.122 52.5434 107.54 43.1983C110.67 35.0066 115.141 50.1494 117.558 54.6667C119.976 59.1841 120.376 38.2833 124.133 47.0211Z" fill="url(#paint0_linear_45_217)"/>
          <path d="M134.778 63.4046C131.278 64.6014 126.551 56.1814 124.133 47.0211C120.376 38.2833 119.977 59.1841 117.559 54.6667C115.141 50.1494 110.671 35.0066 107.54 43.1983C105.122 52.5434 101.278 23.5382 95.6429 36.645C92.9973 42.7979 90.6277 27.7688 86.4612 39.0167C86.083 40.0375 84.7388 40.2446 84.2258 39.2845C80.5874 32.4739 79.1291 22.446 77.1709 22.446C73.1008 22.446 75.2353 41.56 71.4783 43.1983C63.517 46.1741 56.1192 18.5214 51.0754 13.4176C50.3477 12.6812 49.3406 13.2238 48.9706 14.1907C44.4962 25.8818 46.5549 39.4228 42.3615 40.4678C37.6652 40.4678 37.4092 20.8077 31.7737 17.531C28.9356 17.1184 29.1022 29.1713 27.599 35.092C26.9346 37.7087 24.3456 37.3854 23.2373 34.9237C19.8084 27.3073 15.0091 9.11433 12.0968 2.80276C11.3182 1.11534 9.52881 0.89982 8.13116 2.12464C7.75881 2.45094 7.38079 2.83354 7.02907 3.27612C6.14049 4.3942 4.69914 5.16044 3.34173 4.71649L0.77832 3.8781" stroke="#E4315D" stroke-width="0.654206"/>
          <defs>
            <linearGradient id="paint0_linear_45_217" x1="67.7889" y1="0.601441" x2="65.5001" y2="71.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="#E4315D" stop-opacity="0.3"/>
              <stop offset="0.90131" stop-color="#E4315D" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>
    ),
    description1: '$82,987.65',
    description2: (<div className='text-[#E4315D] flex items-center gap-1'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 11V16H15" stroke="#E4315D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 16L15 11C14.1174 10.1174 13.6762 9.67615 13.1346 9.62737C13.045 9.6193 12.955 9.6193 12.8654 9.62737C12.3238 9.67615 11.8826 10.1174 11 11C10.1174 11.8826 9.67615 12.3238 9.13457 12.3726C9.04504 12.3807 8.95496 12.3807 8.86543 12.3726C8.32385 12.3238 7.88256 11.8826 7 11L4 8" stroke="#E4315D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      0.42%</div>)
  },
  {
    header: 'ETH',
    headerp: 'Ethereum',
    image: coincoin2,
    title: 'Coin Title',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="0 0 135 64" fill="none">
  <path d="M11.045 47.0211C7.40018 62.1014 2.39937 62.6014 0.39978 63.6014C-1.59981 64.6014 134.4 63.4046 134.4 63.4046V3.8781L131.837 4.71649C130.479 5.16044 129.038 4.3942 128.149 3.27612C127.798 2.83354 127.42 2.45093 127.047 2.12462C125.65 0.899818 123.86 1.11534 123.082 2.80275C120.169 9.11431 115.37 27.3073 111.941 34.9237C110.833 37.3854 108.244 37.7087 107.58 35.092C106.076 29.1713 106.243 17.1184 103.405 17.531C97.7693 20.8077 97.5133 40.4678 92.817 40.4678C88.6236 39.4228 90.6823 25.8818 86.2079 14.1907C85.8379 13.2238 84.8308 12.6812 84.1031 13.4176C79.0593 18.5214 71.6615 46.1741 63.7002 43.1983C59.9432 41.56 62.0777 22.446 58.0076 22.446C56.0494 22.446 54.5911 32.4739 50.9526 39.2845C50.4397 40.2446 49.0955 40.0375 48.7173 39.0167C44.5508 27.7688 42.1812 42.7979 39.5356 36.645C33.9001 23.5382 30.0561 52.5434 27.6384 43.1983C24.5076 35.0066 20.0374 50.1494 17.6197 54.6667C15.202 59.1841 14.8021 38.2833 11.045 47.0211Z" fill="url(#paint0_linear_45_249)"/>
  <path d="M0.399658 63.4046C3.89966 64.6014 8.62682 56.1814 11.0445 47.0211C14.8015 38.2833 15.2015 59.1841 17.6192 54.6667C20.0369 50.1494 24.507 35.0066 27.6379 43.1983C30.0556 52.5434 33.8996 23.5382 39.5351 36.645C42.1807 42.7979 44.5502 27.7688 48.7168 39.0167C49.095 40.0375 50.4392 40.2446 50.9521 39.2845C54.5906 32.4739 56.0489 22.446 58.0071 22.446C62.0772 22.446 59.9426 41.56 63.6996 43.1983C71.661 46.1741 79.0588 18.5214 84.1026 13.4176C84.8303 12.6812 85.8373 13.2238 86.2074 14.1907C90.6818 25.8818 88.6231 39.4228 92.8165 40.4678C97.5128 40.4678 97.7688 20.8077 103.404 17.531C106.242 17.1184 106.076 29.1713 107.579 35.092C108.243 37.7087 110.832 37.3854 111.941 34.9237C115.37 27.3073 120.169 9.11433 123.081 2.80276C123.86 1.11534 125.649 0.89982 127.047 2.12464C127.419 2.45094 127.797 2.83354 128.149 3.27612C129.037 4.3942 130.479 5.16044 131.836 4.71649L134.4 3.8781" stroke="#00FF99" stroke-width="0.654206"/>
  <defs>
    <linearGradient id="paint0_linear_45_249" x1="67.3891" y1="0.601441" x2="69.6779" y2="71.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00FF99" stop-opacity="0.3"/>
      <stop offset="0.90131" stop-color="#00FF99" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>
    ),
    description1: '$1,905.43',
    description2: (<div className='text-[#0F9] flex items-center gap-1'>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M20.8 13V8H15.8" stroke="#00FF99" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20.8 8L15.8 13C14.9174 13.8826 14.4762 14.3239 13.9346 14.3726C13.845 14.3807 13.755 14.3807 13.6654 14.3726C13.1238 14.3239 12.6826 13.8826 11.8 13C10.9174 12.1174 10.4762 11.6762 9.93462 11.6274C9.84509 11.6193 9.75501 11.6193 9.66548 11.6274C9.1239 11.6762 8.68261 12.1174 7.80005 13L4.80005 16" stroke="#00FF99" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      0.31%</div>)
  },
  {
    header: 'BNB',
    headerp: 'BNB',
    image: coincoin3,
    title: 'Coin Title',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="0 0 135 64" fill="none">
  <path d="M11.045 47.0211C7.40018 62.1014 2.39937 62.6014 0.39978 63.6014C-1.59981 64.6014 134.4 63.4046 134.4 63.4046V3.8781L131.837 4.71649C130.479 5.16044 129.038 4.3942 128.149 3.27612C127.798 2.83354 127.42 2.45093 127.047 2.12462C125.65 0.899818 123.86 1.11534 123.082 2.80275C120.169 9.11431 115.37 27.3073 111.941 34.9237C110.833 37.3854 108.244 37.7087 107.58 35.092C106.076 29.1713 106.243 17.1184 103.405 17.531C97.7693 20.8077 97.5133 40.4678 92.817 40.4678C88.6236 39.4228 90.6823 25.8818 86.2079 14.1907C85.8379 13.2238 84.8308 12.6812 84.1031 13.4176C79.0593 18.5214 71.6615 46.1741 63.7002 43.1983C59.9432 41.56 62.0777 22.446 58.0076 22.446C56.0494 22.446 54.5911 32.4739 50.9526 39.2845C50.4397 40.2446 49.0955 40.0375 48.7173 39.0167C44.5508 27.7688 42.1812 42.7979 39.5356 36.645C33.9001 23.5382 30.0561 52.5434 27.6384 43.1983C24.5076 35.0066 20.0374 50.1494 17.6197 54.6667C15.202 59.1841 14.8021 38.2833 11.045 47.0211Z" fill="url(#paint0_linear_45_249)"/>
  <path d="M0.399658 63.4046C3.89966 64.6014 8.62682 56.1814 11.0445 47.0211C14.8015 38.2833 15.2015 59.1841 17.6192 54.6667C20.0369 50.1494 24.507 35.0066 27.6379 43.1983C30.0556 52.5434 33.8996 23.5382 39.5351 36.645C42.1807 42.7979 44.5502 27.7688 48.7168 39.0167C49.095 40.0375 50.4392 40.2446 50.9521 39.2845C54.5906 32.4739 56.0489 22.446 58.0071 22.446C62.0772 22.446 59.9426 41.56 63.6996 43.1983C71.661 46.1741 79.0588 18.5214 84.1026 13.4176C84.8303 12.6812 85.8373 13.2238 86.2074 14.1907C90.6818 25.8818 88.6231 39.4228 92.8165 40.4678C97.5128 40.4678 97.7688 20.8077 103.404 17.531C106.242 17.1184 106.076 29.1713 107.579 35.092C108.243 37.7087 110.832 37.3854 111.941 34.9237C115.37 27.3073 120.169 9.11433 123.081 2.80276C123.86 1.11534 125.649 0.89982 127.047 2.12464C127.419 2.45094 127.797 2.83354 128.149 3.27612C129.037 4.3942 130.479 5.16044 131.836 4.71649L134.4 3.8781" stroke="#00FF99" stroke-width="0.654206"/>
  <defs>
    <linearGradient id="paint0_linear_45_249" x1="67.3891" y1="0.601441" x2="69.6779" y2="71.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00FF99" stop-opacity="0.3"/>
      <stop offset="0.90131" stop-color="#00FF99" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>
    ),
    description1: '$635.37',
    description2: (<div className='text-[#0F9] flex items-center gap-1'>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M20.8 13V8H15.8" stroke="#00FF99" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20.8 8L15.8 13C14.9174 13.8826 14.4762 14.3239 13.9346 14.3726C13.845 14.3807 13.755 14.3807 13.6654 14.3726C13.1238 14.3239 12.6826 13.8826 11.8 13C10.9174 12.1174 10.4762 11.6762 9.93462 11.6274C9.84509 11.6193 9.75501 11.6193 9.66548 11.6274C9.1239 11.6762 8.68261 12.1174 7.80005 13L4.80005 16" stroke="#00FF99" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      0.60%</div>)
  },
  {
    header: 'SOL',
    headerp: 'Solana',
    image: coincoin4,
    title: 'Coin Title',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="0 0 135 64" fill="none">
          <path d="M124.133 47.0211C127.778 62.1014 132.779 62.6014 134.778 63.6014C136.778 64.6014 0.777786 63.4046 0.777786 63.4046V3.8781L3.34119 4.71649C4.69861 5.16044 6.13997 4.3942 7.02853 3.27612C7.38026 2.83354 7.75829 2.45093 8.13065 2.12462C9.5283 0.899818 11.3177 1.11534 12.0963 2.80275C15.0086 9.11431 19.8079 27.3073 23.2368 34.9237C24.3451 37.3854 26.9341 37.7087 27.5984 35.092C29.1016 29.1713 28.9351 17.1184 31.7731 17.531C37.4087 20.8077 37.6647 40.4678 42.361 40.4678C46.5543 39.4228 44.4957 25.8818 48.9701 14.1907C49.3401 13.2238 50.3472 12.6812 51.0749 13.4176C56.1186 18.5214 63.5165 46.1741 71.4778 43.1983C75.2348 41.56 73.1003 22.446 77.1704 22.446C79.1286 22.446 80.5869 32.4739 84.2253 39.2845C84.7383 40.2446 86.0825 40.0375 86.4606 39.0167C90.6272 27.7688 92.9968 42.7979 95.6424 36.645C101.278 23.5382 105.122 52.5434 107.54 43.1983C110.67 35.0066 115.141 50.1494 117.558 54.6667C119.976 59.1841 120.376 38.2833 124.133 47.0211Z" fill="url(#paint0_linear_45_217)"/>
          <path d="M134.778 63.4046C131.278 64.6014 126.551 56.1814 124.133 47.0211C120.376 38.2833 119.977 59.1841 117.559 54.6667C115.141 50.1494 110.671 35.0066 107.54 43.1983C105.122 52.5434 101.278 23.5382 95.6429 36.645C92.9973 42.7979 90.6277 27.7688 86.4612 39.0167C86.083 40.0375 84.7388 40.2446 84.2258 39.2845C80.5874 32.4739 79.1291 22.446 77.1709 22.446C73.1008 22.446 75.2353 41.56 71.4783 43.1983C63.517 46.1741 56.1192 18.5214 51.0754 13.4176C50.3477 12.6812 49.3406 13.2238 48.9706 14.1907C44.4962 25.8818 46.5549 39.4228 42.3615 40.4678C37.6652 40.4678 37.4092 20.8077 31.7737 17.531C28.9356 17.1184 29.1022 29.1713 27.599 35.092C26.9346 37.7087 24.3456 37.3854 23.2373 34.9237C19.8084 27.3073 15.0091 9.11433 12.0968 2.80276C11.3182 1.11534 9.52881 0.89982 8.13116 2.12464C7.75881 2.45094 7.38079 2.83354 7.02907 3.27612C6.14049 4.3942 4.69914 5.16044 3.34173 4.71649L0.77832 3.8781" stroke="#E4315D" stroke-width="0.654206"/>
          <defs>
            <linearGradient id="paint0_linear_45_217" x1="67.7889" y1="0.601441" x2="65.5001" y2="71.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="#E4315D" stop-opacity="0.3"/>
              <stop offset="0.90131" stop-color="#E4315D" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>
    ),
    description1: '$124.77',
    description2: (<div className='text-[#E4315D] flex items-center gap-1'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 11V16H15" stroke="#E4315D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 16L15 11C14.1174 10.1174 13.6762 9.67615 13.1346 9.62737C13.045 9.6193 12.955 9.6193 12.8654 9.62737C12.3238 9.67615 11.8826 10.1174 11 11C10.1174 11.8826 9.67615 12.3238 9.13457 12.3726C9.04504 12.3807 8.95496 12.3807 8.86543 12.3726C8.32385 12.3238 7.88256 11.8826 7 11L4 8" stroke="#E4315D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      3.17%</div>)
  },
  {
    header: 'XRP',
    headerp: 'XRP',
    image: coincoin5,
    title: 'Coin Title',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" className='w-full' viewBox="0 0 135 64" fill="none">
          <path d="M124.133 47.0211C127.778 62.1014 132.779 62.6014 134.778 63.6014C136.778 64.6014 0.777786 63.4046 0.777786 63.4046V3.8781L3.34119 4.71649C4.69861 5.16044 6.13997 4.3942 7.02853 3.27612C7.38026 2.83354 7.75829 2.45093 8.13065 2.12462C9.5283 0.899818 11.3177 1.11534 12.0963 2.80275C15.0086 9.11431 19.8079 27.3073 23.2368 34.9237C24.3451 37.3854 26.9341 37.7087 27.5984 35.092C29.1016 29.1713 28.9351 17.1184 31.7731 17.531C37.4087 20.8077 37.6647 40.4678 42.361 40.4678C46.5543 39.4228 44.4957 25.8818 48.9701 14.1907C49.3401 13.2238 50.3472 12.6812 51.0749 13.4176C56.1186 18.5214 63.5165 46.1741 71.4778 43.1983C75.2348 41.56 73.1003 22.446 77.1704 22.446C79.1286 22.446 80.5869 32.4739 84.2253 39.2845C84.7383 40.2446 86.0825 40.0375 86.4606 39.0167C90.6272 27.7688 92.9968 42.7979 95.6424 36.645C101.278 23.5382 105.122 52.5434 107.54 43.1983C110.67 35.0066 115.141 50.1494 117.558 54.6667C119.976 59.1841 120.376 38.2833 124.133 47.0211Z" fill="url(#paint0_linear_45_217)"/>
          <path d="M134.778 63.4046C131.278 64.6014 126.551 56.1814 124.133 47.0211C120.376 38.2833 119.977 59.1841 117.559 54.6667C115.141 50.1494 110.671 35.0066 107.54 43.1983C105.122 52.5434 101.278 23.5382 95.6429 36.645C92.9973 42.7979 90.6277 27.7688 86.4612 39.0167C86.083 40.0375 84.7388 40.2446 84.2258 39.2845C80.5874 32.4739 79.1291 22.446 77.1709 22.446C73.1008 22.446 75.2353 41.56 71.4783 43.1983C63.517 46.1741 56.1192 18.5214 51.0754 13.4176C50.3477 12.6812 49.3406 13.2238 48.9706 14.1907C44.4962 25.8818 46.5549 39.4228 42.3615 40.4678C37.6652 40.4678 37.4092 20.8077 31.7737 17.531C28.9356 17.1184 29.1022 29.1713 27.599 35.092C26.9346 37.7087 24.3456 37.3854 23.2373 34.9237C19.8084 27.3073 15.0091 9.11433 12.0968 2.80276C11.3182 1.11534 9.52881 0.89982 8.13116 2.12464C7.75881 2.45094 7.38079 2.83354 7.02907 3.27612C6.14049 4.3942 4.69914 5.16044 3.34173 4.71649L0.77832 3.8781" stroke="#E4315D" stroke-width="0.654206"/>
          <defs>
            <linearGradient id="paint0_linear_45_217" x1="67.7889" y1="0.601441" x2="65.5001" y2="71.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="#E4315D" stop-opacity="0.3"/>
              <stop offset="0.90131" stop-color="#E4315D" stop-opacity="0"/>
            </linearGradient>
          </defs>
        </svg>
    ),
    description1: '$2.2705',
    description2: (<div className='text-[#E4315D] flex items-center gap-1'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 11V16H15" stroke="#E4315D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 16L15 11C14.1174 10.1174 13.6762 9.67615 13.1346 9.62737C13.045 9.6193 12.955 9.6193 12.8654 9.62737C12.3238 9.67615 11.8826 10.1174 11 11C10.1174 11.8826 9.67615 12.3238 9.13457 12.3726C9.04504 12.3807 8.95496 12.3807 8.86543 12.3726C8.32385 12.3238 7.88256 11.8826 7 11L4 8" stroke="#E4315D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      2.68%</div>)
  },

  // You can add more objects here
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
        <div id="hero"  className='relative pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px]'>
          <div className='relative z-[2] overflow-hidden px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] xl:px-[36px] 2xl:px-[40px]'>
              <div className='pt-[70px] sm:pt-[90px] md:pt-[110px] xl:pt-[100px] 2xl:pt-[120px]'>
                <div className='grid grid-cols-1 sm:grid-cols-5 gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px]'>
                  {data.map((item, index) => (
                  // eslint-disable-next-line react/jsx-key
                  <div className="congrothsecton p-[12px] sm:p-[13px] md:p-[14px] lg:p-[15px] xl:p-[16px] 2xl:p-[20px] grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 items-end text-white relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-full absolute left-1/2 -translate-x-1/2 top-0' viewBox="0 0 317 164" fill="none">
                    <g filter="url(#filter0_f_45_205)">
                      <ellipse cx="158.5" cy="2" rx="18" ry="64.5" transform="rotate(-90 158.5 2)" fill="#3861FB"/>
                    </g>
                    <defs>
                      <filter id="filter0_f_45_205" x="-50" y="-160" width="417" height="324" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="72" result="effect1_foregroundBlur_45_205"/>
                      </filter>
                    </defs>
                  </svg>
                      <div
                        key={index}
                        className=""
                        ref={(el) => (itemRefs.current[index] = el)}
                      >
                        <div className='flex items-center justify-start gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px]'>
                        <Image src={item.image} alt={item.title} className='w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[55px]' />
                          <div>
                            <p className="hadecoin text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">{item.header}</p>
                            <h2 className="hadecoinp text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[22px] pt-1">{item.headerp}</h2>
                          </div>
                        </div>
                        <p className='dixccaption1 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[30px]'>{item.description1}</p>
                        <p className='didcastwosa text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-2'>{item.description2}</p>
                      </div>
                      <div>{item.svg}</div>
                  </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
    );
};

export default HeroPage;