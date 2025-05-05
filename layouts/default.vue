<script setup>
import { useSticky } from '~/composables/sticky';
const route = useRoute()

const isOpen = ref(false);
const { isSticky } = useSticky();

</script>

<template>
    <div :class="isOpen ? 'active': ''" class="backdrop lg:hidden"></div>
    <!--==============================
            HEADER PART START       
    ===============================-->
    <header :class="(route.name === 'index' && !isSticky) ? 'backdrop-blur bg-black/10' : (isSticky ? 'backdrop-blur bg-white/80' : 'bg-white/80')" class="fixed shadow-header top-0 z-[40] left-0 w-full py-3">
        <div class="container">
            <div class="flex lg:hidden items-start justify-between gap-2 py-1">
                <nuxt-link to="/">
                    <nuxt-img 
                        :src="(route.name==='index' && isSticky) ? '/images/logo/dark.png' : (route.name !=='index' ? '/images/logo/dark.png': '/images/logo/light.png')" 
                        alt="logo" 
                        class="w-36 lg:w-52" 
                    />
                </nuxt-link>
                <button @click="isOpen = true" type="button" :class="(route.name === 'index' && isSticky) ? 'text-heading' : (route.name !== 'index' ? 'text-black' : 'text-white')" class="leading-none">
                    <i class="lab-line-humburger text-xl leading-none"></i>
                </button>
            </div>
            <div class="hidden lg:flex justify-between items-center">
                <nuxt-link to="#">
                    <nuxt-img 
                        src="/images/logo/dark.png" 
                        alt="logo" 
                        class="w-36 lg:w-52" 
                    />
                </nuxt-link>
                <nav :class="(route.name === 'index' && isSticky) ? 'text-heading' : (route.name !== 'index' ? 'text-black' : 'lg:text-white')" class="flex max-lg:flex-col lg:items-center justify-center gap-6">
                    <nuxt-link to="/" class="text-lg font-medium capitalize">Home</nuxt-link>
                    <nuxt-link to="/pricing-details" class="text-lg font-medium capitalize">Pricing</nuxt-link>
                    <nuxt-link to="/blogs" class="text-lg font-medium capitalize">Blogs</nuxt-link>
                    <nuxt-link to="/about-us" class="text-lg font-medium capitalize">About</nuxt-link>
                    <nuxt-link to="/contact-us" class="text-lg font-medium capitalize">Contact Us</nuxt-link>
                </nav>
                <button type="button" class="flex-shrink-0 h-10 lg:h-12 max-lg:w-fit px-4 rounded-lg whitespace-nowrap text-base lg:text-lg font-medium bg-linear-to-br from-primary to-[#72A9FF] shadow-headerBtn text-white">
                    Start Free Trial
                </button>
            </div>
        </div>
    </header>
    <!--==============================
            HEADER PART START       
    ============== =================-->

    <!--==============================
         SIDEBAR PARTSTART       
    ===============================-->
    <aside :class="isOpen ? 'max-lg:translate-x-0' : 'max-lg:-translate-x-full'" class="relative lg:hidden transition-all duration-300 
                     max-lg:fixed max-lg:top-0 max-lg:left-0 z-[50] max-lg:p-5 
                    max-lg:w-full max-lg:max-w-xs max-lg:h-dvh max-lg:shadow-sidebar max-lg:overflow-y-auto max-lg:bg-white">
         <div class="flex lg:hidden items-start justify-between gap-2 mb-4 pb-4 border-b border-[#dbd9eb]">
                    <nuxt-link to="#">
                        <nuxt-img 
                            src="/images/logo/dark.png" 
                            alt="logo" 
                            class="w-36 lg:w-52" 
                        />
                    </nuxt-link>
                    <button @click="isOpen = false" type="button" class="leading-none block lg:hidden">
                        <i class="lab-line-circle-cross leading-none text-danger"></i>
                    </button>
         </div>
         <nav :class="isSticky ? 'text-heading' : 'lg:text-white'" class="flex flex-col justify-center gap-6">
                    <nuxt-link to="/" class="text-lg font-medium capitalize">Home</nuxt-link>
                    <nuxt-link to="/pricing-details" class="text-lg font-medium capitalize">Pricing</nuxt-link>
                    <nuxt-link to="/blogs" class="text-lg font-medium capitalize">Blogs</nuxt-link>
                    <nuxt-link to="/about-us" class="text-lg font-medium capitalize">About</nuxt-link>
                    <nuxt-link to="/contact-us" class="text-lg font-medium capitalize">Contact Us</nuxt-link>
            </nav>
            <button type="button" class="absolute bottom-2 max-w-[87%] w-full mx-auto flex-shrink h-10 lg:h-12 rounded-lg whitespace-nowrap text-base lg:text-lg font-medium bg-linear-to-br from-primary to-[#72A9FF] shadow-headerBtn text-white">
        Start Free Trial
    </button>
    </aside>
    <!--==============================
         SIDEBAR PART END       
    ===============================-->

    <NuxtPage />

    <!--==============================
            FOOTER PART START       
    ===============================-->
    <footer class="py-12 sm:py-18 bg-[url(/images/bg/footer.jpg)] bg-no-repeat bg-cover">
        <div class="container">
            <div class="flex flex-col sm:flex-row items-center justify-between gap-2 border-b pb-10 sm:pb-12 mb-10 sm:mb-18 border-[#527C9D]">
                <h3 class="text-3xl sm:text-[40px] leading-tight font-bold capitalize max-sm:mb-5 max-sm:text-center text-white">Interested To Gain More?</h3>
                <nav class="flex max-sm:flex-wrap max-sm:justify-center items-start gap-4 sm:gap-6">
                    <button type="button" class="h-11 sm:h-[50px] px-5 rounded-lg text-base sm:text-lg font-bold whitespace-nowrap bg-gradient-to-r from-[#1C75FF] to-[#72A9FF] text-white">Start Free Trial</button>
                    <button type="button" class="h-11 sm:h-[50px] px-5 rounded-lg text-base sm:text-lg font-bold whitespace-nowrap border border-white bg-white/25 text-white">Book a Demo</button>
                </nav>
            </div>
            <div class="flex flex-col lg:flex-row items-start justify-between gap-6">
                <div class="max-lg:mb-8">
                    <nuxt-link to="/" class="mb-5">
                        <img src="/images/logo/light.png" alt="logo" class="w-52"/>
                    </nuxt-link>
                    <p class="mb-5 sm:mb-12 text-sm text-white">© Copyright 2025 FoodScan</p>
                    <h5 class="mb-3 text-sm font-medium text-white">Follow us on</h5>
                    <nav class="flex items-start gap-3">
                        <nuxt-link class="lab-fill-x text-sm w-8 h-8 !leading-8 text-center rounded-full text-white bg-black/30"></nuxt-link>
                        <nuxt-link class="lab-fill-instagram-icon text-sm w-8 h-8 !leading-8 text-center rounded-full text-white bg-black/30"></nuxt-link>
                        <nuxt-link class="lab-fill-youtube text-sm w-8 h-8 !leading-8 text-center rounded-full text-white bg-black/30"></nuxt-link>
                    </nav>
                </div>
                <div class="flex flex-col gap-5">  
                    <nuxt-link class="w-fit font-semibold text-white">Features</nuxt-link>
                    <nuxt-link class="w-fit font-semibold text-white">How it works</nuxt-link>
                    <nuxt-link class="w-fit font-semibold text-white">Point of sale</nuxt-link>
                    <nuxt-link class="w-fit font-semibold text-white">Pricing</nuxt-link>
                    <nuxt-link class="w-fit font-semibold text-white">Blogs</nuxt-link>
                </div>
                <div class="flex flex-col gap-5">
                    <nuxt-link class="w-fit font-semibold text-white">About us</nuxt-link>
                    <nuxt-link class="w-fit font-semibold text-white">Contact us</nuxt-link>
                    <nuxt-link class="w-fit font-semibold text-white">Terms & condition</nuxt-link>
                    <nuxt-link class="w-fit font-semibold text-white">Privacy policy</nuxt-link>
                </div>   
                <div class="flex flex-col gap-5 max-lg:mt-8">
                    <div class="flex items-start gap-3">
                        <i class="lab-fill-location mt-1 text-white"></i>
                        <span class="w-3xs font-semibold text-white">Avenue-1, Road:1, House:18 Mirpur-2, Dhaka</span>
                    </div>
                    <div class="flex items-start gap-3">
                        <i class="lab-fill-calling mt-1 text-white"></i>
                        <span class="font-semibold text-white">01365489654</span>
                    </div>
                    <div class="flex items-start gap-3">
                        <i class="lab-fill-mail mt-1 text-white"></i>
                        <span class="font-semibold text-white">support@foodscan.com</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!--==============================
            FOOTER PART END       
    ===============================-->
</template>