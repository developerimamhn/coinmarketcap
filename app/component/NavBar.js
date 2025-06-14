"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import logo from './image/logo.png';
import ellipse1 from './image/Ellipse 2.png';


const NavBar = () => {
    const [isClicked, setIsClicked] = useState('Cryptocurrencies');
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false); // For background styling
    const [isVisible, setIsVisible] = useState(true); // For show/hide
    const [prevScrollPos, setPrevScrollPos] = useState(0); // Tracks scroll direction

   const navItems = [
    { id: 'Cryptocurrencies', label: 'Cryptocurrencies' },
    { id: 'DexScan', label: 'DexScan' },
    { id: 'Exchanges', label: 'Exchanges' },
    { id: 'Community', label: 'Community' },
    { id: 'Product', label: 'Product' },
  ];

    // Handle clicks outside to close the menu
    const handleClickOutside = (event) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
        ) {
            setToggle(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Smooth scroll to section
    const handleScroll = (e, sectionId) => {
        e.preventDefault();
        setIsClicked(sectionId);
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 50,
                behavior: "smooth",
            });
            setToggle(false);
        }
    };

    // Scroll logic for show/hide and background change
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            // Update scrolled state for background styling
            if (currentScrollPos > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Show/hide navbar based on scroll direction
            if (currentScrollPos < 50) {
                setIsVisible(true); // Show near the top
            } else if (currentScrollPos > prevScrollPos) {
                setIsVisible(false); // Hide when scrolling down
            } else {
                setIsVisible(true); // Show when scrolling up
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    const handleScrollToTop   = (e, targetId) => {
        e.preventDefault();
        if (targetId === "") {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
      

    return (
        <div className={` header ${scrolled ? "scrolled" : " "} z-[150] w-full header backgronsdvg   ${
            isVisible ? "translate-y-0 transition-transform duration-300 " : "-translate-y-full transition-transform duration-300 "}`}>
            <header className='flex justify-between items-center py-[20px] sm:py-[25px] lg:py-[30px] relative  lg:overflow-hidden backgroundimage px-[24px] sm:px-[30px] lg:px-[40px]'>
            <div className='linersext absolute bottom-0 left-0 w-full h-[2px] z-10'></div>
            <Link onClick={(e) => handleScrollToTop(e, "")} href='/' className='cursor-pointer relative flex  items-center justify-start Froggo-Logo'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-[20px] sm:h-[24px] 2xl:h-[30px]' viewBox="0 0 168 30" fill="none">
  <g clip-path="url(#clip0_45_180)">
    <path d="M28.442 14.945V14.889C28.414 6.966 22.032 0.5 14.221 0.5C6.41 0.5 0 6.966 0 14.945C0 22.925 6.381 29.378 14.221 29.378C17.8185 29.3804 21.2785 27.9957 23.881 25.512C24.1373 25.2778 24.2901 24.9514 24.3058 24.6045C24.3215 24.2577 24.1987 23.9188 23.9645 23.6625C23.7303 23.4062 23.4039 23.2534 23.057 23.2377C22.7102 23.222 22.3713 23.3448 22.115 23.579L22.087 23.607C20.9641 24.6745 19.637 25.5041 18.1855 26.046C16.734 26.5878 15.1879 26.8308 13.6401 26.7603C12.0924 26.6898 10.5748 26.3072 9.17858 25.6356C7.78234 24.964 6.53621 24.0172 5.515 22.852L11.59 13.11V17.618C11.59 19.772 12.43 20.473 13.136 20.669C13.842 20.865 14.901 20.723 16.048 18.904L19.381 13.492C19.47 13.334 19.573 13.184 19.687 13.043V15.788C19.687 17.803 20.499 19.427 21.898 20.21C22.5438 20.5616 23.2728 20.7318 24.0075 20.7024C24.7423 20.673 25.4554 20.4451 26.071 20.043C27.687 18.994 28.555 17.157 28.442 14.945ZM24.746 17.78C24.5216 17.9346 24.2599 18.0264 23.9881 18.0459C23.7163 18.0654 23.4442 18.0119 23.2 17.891C22.64 17.556 22.303 16.801 22.303 15.765V12.592C22.303 11.082 21.715 9.989 20.708 9.711C18.999 9.195 17.713 11.306 17.236 12.09L14.221 16.932V10.97C14.193 9.599 13.744 8.787 12.904 8.534C12.344 8.367 11.504 8.452 10.693 9.684L3.946 20.489C3.04842 18.7787 2.57804 16.8765 2.575 14.945C2.575 8.422 7.809 3.131 14.221 3.131C20.633 3.131 25.867 8.422 25.867 14.945V15.002C25.934 16.26 25.53 17.27 24.747 17.772L24.746 17.78ZM48.263 10.018C48.4485 10.1368 48.6035 10.2975 48.7155 10.4872C48.8275 10.6769 48.8935 10.8902 48.908 11.11C48.9061 11.4313 48.7795 11.7394 48.5549 11.9692C48.3303 12.199 48.0252 12.3327 47.704 12.342C47.5516 12.3304 47.4011 12.3019 47.255 12.257C46.4707 11.6687 45.5193 11.3457 44.539 11.335C42.16 11.335 40.537 13.265 40.537 15.672C40.537 18.079 42.189 19.984 44.539 19.984C45.6686 19.9824 46.7531 19.5404 47.562 18.752C47.768 18.607 48.012 18.529 48.263 18.528C48.4639 18.5258 48.6618 18.5769 48.8364 18.6763C49.0111 18.7757 49.1562 18.9196 49.2569 19.0935C49.3576 19.2674 49.4103 19.4649 49.4096 19.6658C49.4089 19.8667 49.3549 20.0638 49.253 20.237C49.156 20.407 49.018 20.552 48.851 20.657C48.0314 21.3385 47.0599 21.8128 46.0185 22.0401C44.9771 22.2673 43.8964 22.2408 42.8674 21.9628C41.8384 21.6847 40.8913 21.1633 40.1061 20.4424C39.321 19.7216 38.7206 18.8225 38.3558 17.8209C37.991 16.8194 37.8724 15.7448 38.01 14.6879C38.1476 13.6309 38.5373 12.6225 39.1464 11.7477C39.7555 10.873 40.566 10.1575 41.5096 9.66175C42.4531 9.16595 43.5021 8.90435 44.568 8.899C45.886 8.879 47.178 9.269 48.263 10.018ZM54.925 12.809C53.6691 12.8037 52.4624 13.2964 51.5692 14.1793C50.676 15.0622 50.1693 16.2632 50.16 17.519C50.1678 18.7818 50.6708 19.9911 51.561 20.8869C52.4511 21.7827 53.6573 22.2933 54.92 22.309C57.384 22.309 59.484 20.097 59.484 17.519C59.484 14.943 57.417 12.809 54.925 12.809ZM54.897 19.976C53.722 19.976 52.742 18.912 52.742 17.54C52.742 16.113 53.722 15.244 54.897 15.244C55.99 15.244 56.912 16.141 56.912 17.54C56.912 18.94 55.99 19.984 54.897 19.984V19.976ZM61.056 20.852V14.244C61.0528 14.0727 61.0838 13.9024 61.1471 13.7432C61.2105 13.584 61.3049 13.439 61.4249 13.3166C61.5449 13.1943 61.6881 13.0971 61.846 13.0307C62.004 12.9643 62.1736 12.9301 62.345 12.93C62.6898 12.9345 63.0189 13.0752 63.2603 13.3213C63.5018 13.5675 63.6361 13.8992 63.634 14.244V20.852C63.6364 21.197 63.5022 21.5289 63.2607 21.7753C63.0192 22.0217 62.69 22.1625 62.345 22.167C62.0018 22.1569 61.6759 22.0144 61.4356 21.7692C61.1952 21.524 61.0592 21.1953 61.056 20.852ZM60.86 10.438C60.8544 10.2385 60.8886 10.0399 60.9604 9.85378C61.0323 9.66762 61.1405 9.49762 61.2787 9.35366C61.4169 9.2097 61.5823 9.09466 61.7654 9.01523C61.9484 8.9358 62.1455 8.89357 62.345 8.891C62.5457 8.89335 62.7441 8.93524 62.9286 9.01427C63.1132 9.0933 63.2803 9.20792 63.4206 9.35159C63.5608 9.49526 63.6714 9.66516 63.7459 9.85157C63.8204 10.038 63.8575 10.2373 63.855 10.438C63.855 10.835 63.6973 11.2158 63.4165 11.4965C63.1358 11.7773 62.755 11.935 62.358 11.935C61.961 11.935 61.5802 11.7773 61.2995 11.4965C61.0187 11.2158 60.86 10.835 60.86 10.438ZM68.559 17.27V20.852C68.559 21.1939 68.4232 21.5217 68.1815 21.7635C67.9397 22.0052 67.6119 22.141 67.27 22.141C66.9281 22.141 66.6003 22.0052 66.3585 21.7635C66.1168 21.5217 65.981 21.1939 65.981 20.852V13.937C65.981 13.6734 66.0857 13.4205 66.2721 13.2341C66.4585 13.0477 66.7114 12.943 66.975 12.943C67.2386 12.943 67.4915 13.0477 67.6779 13.2341C67.8643 13.4205 67.969 13.6734 67.969 13.937C68.3363 13.5616 68.7787 13.2679 69.2672 13.0749C69.7556 12.8819 70.2793 12.794 70.804 12.817C73.381 12.817 74.528 14.749 74.528 16.961V20.852C74.528 21.1939 74.3922 21.5217 74.1505 21.7635C73.9087 22.0052 73.5809 22.141 73.239 22.141C72.8971 22.141 72.5693 22.0052 72.3275 21.7635C72.0858 21.5217 71.95 21.1939 71.95 20.852V17.27C71.95 16.149 71.811 15.208 70.187 15.208C69.041 15.208 68.564 16.159 68.564 17.27H68.559ZM82.865 18.641C82.7342 18.6413 82.6051 18.6109 82.4882 18.5522C82.3713 18.4935 82.2699 18.4081 82.192 18.303L79.197 15.056V20.852C79.2018 21.0242 79.172 21.1957 79.1094 21.3562C79.0468 21.5167 78.9527 21.6631 78.8326 21.7866C78.7124 21.9101 78.5688 22.0083 78.4101 22.0753C78.2513 22.1424 78.0808 22.1769 77.9085 22.1769C77.7362 22.1769 77.5657 22.1424 77.4069 22.0753C77.2482 22.0083 77.1046 21.9101 76.9844 21.7866C76.8643 21.6631 76.7702 21.5167 76.7076 21.3562C76.645 21.1957 76.6152 21.0242 76.62 20.852V9.373C76.6597 9.2778 76.7256 9.19581 76.8101 9.13652C76.8945 9.07723 76.994 9.04307 77.097 9.038C77.319 9.07568 77.5188 9.19521 77.657 9.373L82.445 14.749C82.4938 14.8183 82.5562 14.8769 82.6284 14.9212C82.7007 14.9656 82.7811 14.9948 82.865 15.007C83.0316 14.9747 83.1809 14.883 83.285 14.749L88.071 9.373C88.1373 9.28286 88.2208 9.20681 88.3168 9.1493C88.4128 9.09178 88.5192 9.05395 88.63 9.038C88.7349 9.03541 88.8379 9.06656 88.9237 9.12686C89.0096 9.18717 89.0738 9.27345 89.107 9.373V20.853C89.1102 21.0243 89.0792 21.1946 89.0159 21.3538C88.9525 21.513 88.8581 21.658 88.7381 21.7804C88.6181 21.9027 88.4749 21.9999 88.317 22.0663C88.159 22.1327 87.9894 22.1669 87.818 22.167C87.4733 22.162 87.1445 22.021 86.9033 21.7747C86.662 21.5284 86.5279 21.1968 86.53 20.852V15.056L83.532 18.303C83.3591 18.4958 83.1199 18.6165 82.862 18.641H82.865ZM107.08 15.198H106.799C105.176 15.28 104.869 16.206 104.869 17.26V20.842C104.869 21.1838 104.733 21.5115 104.491 21.7532C104.249 21.9948 103.922 22.1307 103.58 22.131C103.238 22.1305 102.911 21.9943 102.669 21.7525C102.428 21.5106 102.292 21.1828 102.292 20.841V13.938C102.293 13.6743 102.398 13.4215 102.584 13.235C102.771 13.0485 103.023 12.9435 103.287 12.943C103.551 12.9435 103.803 13.0486 103.99 13.2351C104.176 13.4216 104.281 13.6744 104.281 13.938C105.232 13.041 106.016 12.845 106.799 12.816H107.057C107.371 12.8243 107.669 12.9548 107.889 13.1796C108.108 13.4044 108.231 13.7059 108.232 14.02C108.232 14.327 108.112 14.6217 107.897 14.8416C107.683 15.0616 107.392 15.1894 107.085 15.198H107.08ZM117.018 20.236C117.136 20.421 117.204 20.633 117.214 20.852C117.2 21.1894 117.06 21.5092 116.821 21.7479C116.582 21.9867 116.262 22.127 115.925 22.141C115.479 22.141 115.085 21.803 114.778 21.411L111.812 17.963V20.823C111.812 21.1647 111.676 21.4925 111.435 21.7341C111.193 21.9757 110.865 22.1115 110.523 22.1115C110.182 22.1115 109.854 21.9757 109.612 21.7341C109.371 21.4925 109.235 21.1647 109.235 20.823V10.328C109.234 10.073 109.31 9.82352 109.451 9.61131C109.593 9.3991 109.794 9.23369 110.029 9.13608C110.265 9.03847 110.524 9.01306 110.774 9.06308C111.024 9.11309 111.254 9.23628 111.434 9.417C111.676 9.658 111.812 9.987 111.812 10.327V16.877L114.778 13.603C115.085 13.266 115.451 12.903 115.897 12.903C116.224 12.9174 116.533 13.0556 116.762 13.2896C116.991 13.5236 117.122 13.8358 117.129 14.163C117.13 14.3707 117.072 14.5743 116.961 14.75L114.611 17.327L117.018 20.24V20.236ZM132.584 22.28H131.883C129.924 22.28 128.775 21.411 128.775 18.36V15.198H128.105C127.789 15.198 127.486 15.0725 127.263 14.8492C127.039 14.6258 126.914 14.3229 126.914 14.007C126.914 13.6911 127.039 13.3882 127.263 13.1648C127.486 12.9415 127.789 12.816 128.105 12.816H128.765V10.381C128.759 10.1227 128.831 9.86859 128.972 9.65195C129.113 9.43532 129.315 9.26628 129.554 9.167C129.712 9.101 129.882 9.067 130.053 9.067C130.397 9.07278 130.726 9.21386 130.967 9.45974C131.208 9.70563 131.343 10.0366 131.342 10.381V12.809H132.404C132.715 12.8184 133.01 12.9499 133.225 13.175C133.44 13.4001 133.558 13.7008 133.553 14.012C133.543 14.3162 133.419 14.6055 133.206 14.8234C132.994 15.0413 132.708 15.172 132.404 15.19H131.342V17.85C131.342 19.613 131.424 19.976 132.208 19.976H132.574C132.878 19.9773 133.17 20.099 133.385 20.3145C133.6 20.5299 133.72 20.8217 133.721 21.126C133.714 21.428 133.591 21.7158 133.377 21.9294C133.164 22.1431 132.876 22.2661 132.574 22.273L132.584 22.28ZM145.04 10.018C145.225 10.1371 145.38 10.2979 145.492 10.4875C145.603 10.6772 145.669 10.8903 145.684 11.11C145.682 11.4314 145.556 11.7396 145.331 11.9695C145.106 12.1993 144.801 12.3329 144.48 12.342C144.328 12.3297 144.178 12.3012 144.032 12.257C143.249 11.6683 142.298 11.3452 141.318 11.335C138.937 11.335 137.313 13.265 137.313 15.672C137.313 18.079 138.965 19.984 141.318 19.984C142.448 19.9824 143.532 19.5404 144.341 18.752C144.546 18.608 144.79 18.53 145.04 18.528C145.191 18.5266 145.341 18.5552 145.481 18.6122C145.621 18.6692 145.749 18.7534 145.856 18.86C146.034 19.0377 146.148 19.2694 146.18 19.5189C146.212 19.7683 146.16 20.0213 146.032 20.238C145.934 20.4089 145.795 20.5525 145.627 20.656C144.808 21.3362 143.837 21.8093 142.797 22.0356C141.756 22.2619 140.677 22.2346 139.649 21.956C138.098 21.5366 136.751 20.569 135.859 19.2326C134.966 17.8962 134.589 16.2815 134.796 14.688C135.002 13.0942 135.78 11.6292 136.984 10.5647C138.188 9.50026 139.737 8.90844 141.344 8.899C142.663 8.87387 143.956 9.26545 145.04 10.018ZM98.99 12.902C98.8589 12.902 98.7291 12.9282 98.6083 12.9791C98.4875 13.03 98.3782 13.1046 98.2866 13.1984C98.1951 13.2923 98.1233 13.4035 98.0754 13.5255C98.0276 13.6476 98.0047 13.778 98.008 13.909L97.954 14.219C97.5847 13.7816 97.1264 13.428 96.6095 13.1817C96.0927 12.9355 95.5294 12.8023 94.957 12.791C92.439 12.791 90.62 14.917 90.62 17.491C90.62 20.066 92.41 22.28 94.818 22.28C95.826 22.28 97.421 21.831 97.926 20.852L97.983 21.159C97.9804 21.2908 98.0049 21.4217 98.0549 21.5437C98.1049 21.6657 98.1794 21.7761 98.2738 21.8681C98.3682 21.9602 98.4804 22.0319 98.6036 22.0788C98.7268 22.1257 98.8583 22.1469 98.99 22.141C99.1224 22.1413 99.2536 22.1154 99.3761 22.0648C99.4985 22.0142 99.6097 21.94 99.7034 21.8464C99.797 21.7527 99.8712 21.6415 99.9218 21.5191C99.9724 21.3966 99.9983 21.2654 99.998 21.133V13.917C99.9942 13.6502 99.887 13.3953 99.6989 13.206C99.5109 13.0166 99.2568 12.9077 98.99 12.902ZM95.238 19.984C94.091 19.984 93.194 18.894 93.194 17.548C93.194 16.203 94.117 15.228 95.238 15.228C96.358 15.228 97.367 16.151 97.367 17.548C97.367 18.945 96.386 19.984 95.238 19.984ZM126.425 17.324C126.368 14.44 124.492 12.816 122.002 12.816C118.91 12.816 117.605 15.056 117.605 17.633C117.605 20.909 119.763 22.308 122.366 22.308C123.345 22.308 124.381 22.167 125.164 21.579C125.327 21.4837 125.463 21.3495 125.561 21.1883C125.659 21.0272 125.715 20.8442 125.724 20.656C125.726 20.3789 125.619 20.1121 125.426 19.9131C125.233 19.7141 124.97 19.5988 124.693 19.592C124.456 19.594 124.224 19.662 124.023 19.788C123.492 20.0148 122.919 20.1289 122.342 20.123C121.698 20.123 120.214 19.865 120.214 18.332H125.414C125.68 18.3269 125.934 18.2192 126.122 18.0313C126.311 17.8434 126.419 17.59 126.425 17.324ZM120.208 16.674C120.208 15.584 121.358 15.221 122.056 15.221C122.755 15.221 123.904 15.584 123.932 16.674H120.208ZM155.31 12.902C155.179 12.9021 155.049 12.9283 154.929 12.9791C154.808 13.0299 154.699 13.1044 154.607 13.198C154.515 13.2918 154.444 13.4032 154.396 13.5253C154.349 13.6475 154.326 13.778 154.33 13.909L154.274 14.219C153.905 13.7815 153.447 13.4278 152.931 13.1816C152.414 12.9353 151.851 12.8022 151.279 12.791C148.759 12.791 146.939 14.917 146.939 17.491C146.939 20.066 148.743 22.28 151.137 22.28C152.145 22.28 153.743 21.831 154.245 20.852L154.302 21.159C154.3 21.2906 154.325 21.4212 154.375 21.5429C154.426 21.6646 154.5 21.7748 154.594 21.867C154.688 21.9592 154.8 22.031 154.924 22.0782C155.047 22.1253 155.178 22.1467 155.31 22.141C155.509 22.1409 155.704 22.0818 155.87 21.9711C156.036 21.8604 156.165 21.7031 156.242 21.519C156.292 21.397 156.318 21.266 156.318 21.133V13.917C156.314 13.6504 156.206 13.3957 156.018 13.2065C155.83 13.0173 155.577 12.9082 155.31 12.902ZM151.557 19.984C150.439 19.984 149.514 18.894 149.514 17.548C149.514 16.203 150.411 15.228 151.557 15.228C152.704 15.228 153.686 16.151 153.686 17.548C153.686 18.945 152.712 19.984 151.563 19.984H151.557ZM163.657 12.809C163.096 12.7988 162.539 12.9027 162.019 13.1145C161.499 13.3263 161.028 13.6415 160.634 14.041C160.634 13.399 160.214 12.922 159.655 12.922C159.522 12.9216 159.391 12.9474 159.268 12.9979C159.146 13.0484 159.034 13.1226 158.941 13.2162C158.847 13.3099 158.772 13.4212 158.722 13.5436C158.671 13.6661 158.645 13.7974 158.645 13.93V24.793C158.646 25.1344 158.782 25.4615 159.023 25.7029C159.264 25.9443 159.592 26.0802 159.933 26.081C160.275 26.0807 160.602 25.945 160.844 25.7035C161.085 25.4621 161.221 25.1346 161.222 24.793V21.525C161.92 22.055 163.041 22.28 163.799 22.298C166.235 22.298 168 20.087 168 17.51C168 14.932 166.15 12.809 163.657 12.809ZM163.348 19.976C162.201 19.976 161.222 18.946 161.222 17.541C161.222 16.136 162.201 15.221 163.348 15.221C164.495 15.221 165.392 16.144 165.392 17.541C165.392 18.893 164.498 19.984 163.348 19.984V19.976Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_45_180">
      <rect width="168" height="29" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
  </defs>
                </svg>
                </Link>
                <div className='flex items-center justify-center lg:hidden'>
                    <button className='buttonauditelt flex items-center mr-8 gap-3.5 cursor-pointer pl-[12px] sm:pl-[13px] md:pl-[14px] lg:pl-[15px] xl:pl-[16px] 2xl:pl-[18px] py-[4px]  group pr-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M4 5H16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4 12H20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4 19H12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <Image src={ellipse1} alt="icon sente" className='w-[20px] sm:w-[24px] md:w-[32px] lg:w-[36px] xl:w-[40px] 2xl:w-[48px] h-[20px] sm:h-[24px] md:h-[32px] lg:h-[36px] xl:h-[40px] 2xl:h-[48px]' />
                    </button>
                    <div className=' relative top-[-11px] -left-6'>
                    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-white text-[24px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-white text-[24px] absolute' />
                    </div>
                    
                </div>
                 </div>

                <nav ref={menuRef} className={`mr-auto navbar-items-main absolute  sm:left-0 lg:relative duration-1000 z-[99] lg:opacity-100 flex justif-start lg:justify-center items-start sm:items-center  lg:blur-none blur-[200] lg:bg-transparent bg-[#15161B] right-0 lg:flex-row flex-col p-[20px] lg:p-[0] lg:w-fit w-full  h-full pl-[24px] sm:pl-[32px] md:pl-[25px] lg:pl-[30px] xl:pl-[48px] 2xl:pl-[60px]
                    ${toggle ? 'top-[67px] h-screen' :'-top-[600%]' }
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
                    {navItems.map((item) => (
                        <a key={item.id} className={`cursor-pointer Link-manu-bar relative overflow-hidden flex justify-center text-[#fff] items-center gap-[6px] md:w-fit w-full lg:gap-[8px] ${isClicked === item.id ? 'bg-[#12131A] backgesoclor' : ' bg-transparent '}`} // Added padding and text color for better styling
                        href={`#${item.id}`}onClick={(e) => handleScroll(e, item.id)}>
                        {item.label}
                        <svg xmlns="http://www.w3.org/2000/svg" className={`absolute bottom-0 left-0 z-[0] transition-opacity duration-200 ${
      isClicked === item.id ? 'opacity-100' : 'opacity-0'
    }`} viewBox="0 0 165 56" fill="none">
                        <g filter="url(#filter0_f_45_184)">
                            <ellipse cx="82.5" cy="57.5" rx="28.5" ry="20.5" fill="#3861FB"/>
                        </g>
                        <defs>
                            <filter id="filter0_f_45_184" x="0" y="-17" width="165" height="149" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="27" result="effect1_foregroundBlur_45_184"/>
                            </filter>
                        </defs>
                        </svg>
                        </a>
                    ))}

                    <ul className='lg:hidden flex flex-col lg:w-fit w-full gap-[14px] mt-4 sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[30px]'>
                        <div className='inpuclieaserew flex w-full items-center gap-2 py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] px-[13px] sm:px-[14px] md:px-[15px] lg:px-[16px] xl:px-[20px] 2xl:px-[24px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M13.125 13.125L16.5 16.5" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15 8.25C15 4.52208 11.978 1.5 8.25 1.5C4.52208 1.5 1.5 4.52208 1.5 8.25C1.5 11.978 4.52208 15 8.25 15C11.978 15 15 11.978 15 8.25Z" stroke="white" stroke-width="1.2" stroke-linejoin="round"/>
                        </svg>
                        <input type='search' placeholder='Search' className='focus:outline-none w-full inpujsonsa text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] placeholder:text-white' />
                    </div>
                    <a className="cursor-pointer text-[#fff] Link-manu-bar bg-[#3861FB] hover:bg-[#384bfb] flex items-center justify-center gap-[6px] lg:gap-[8px]">
                    Log In
                    </a>
                    
                    </ul>
                </nav>
                
                <ul className='lg:flex hidden gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[28px] ml-atuo '>
                    <div className='inpuclieaserew flex items-center gap-2 py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] px-[13px] sm:px-[14px] md:px-[15px] lg:px-[16px] xl:px-[20px] 2xl:px-[24px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M13.125 13.125L16.5 16.5" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15 8.25C15 4.52208 11.978 1.5 8.25 1.5C4.52208 1.5 1.5 4.52208 1.5 8.25C1.5 11.978 4.52208 15 8.25 15C11.978 15 15 11.978 15 8.25Z" stroke="white" stroke-width="1.2" stroke-linejoin="round"/>
                        </svg>
                        <input type='search' placeholder='Search' className='focus:outline-none inpujsonsa text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] placeholder:text-white' />
                    </div>
                <a className="cursor-pointer text-[#fff] Link-manu-bar bg-[#3861FB] hover:bg-[#384bfb] flex items-center gap-[6px] lg:gap-[8px]">
                Log In
                </a>
                <button className='buttonauditelt flex items-center gap-3.5 cursor-pointer pl-[12px] sm:pl-[13px] md:pl-[14px] lg:pl-[15px] xl:pl-[16px] 2xl:pl-[18px] py-[4px]  group pr-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M4 5H16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 12H20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4 19H12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <Image src={ellipse1} alt="icon sente" className='w-[20px] sm:w-[24px] md:w-[32px] lg:w-[36px] xl:w-[40px] 2xl:w-[48px] h-[20px] sm:h-[24px] md:h-[32px] lg:h-[36px] xl:h-[40px] 2xl:h-[48px]' />
                </button>
                </ul>
                
                
            </header>
        </div>
    );
};

export default NavBar;