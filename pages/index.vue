<template>
    <!--==============================
            BANNER PART START       
    ===============================-->
    <section class="mb-12 md:mb-18 pt-28 md:pt-36 pb-12 md:pb-24 bg-[url(/images/bg/banner.jpg)] bg-no-repeat bg-cover">
        <div class="container">
            <div class="grid grid-cols-2 gap-2 items-center justify-content-between">
                <div class="col-span-2 md:col-span-1">
                    <div class="flex items-center gap-2 py-2 px-3 mb-6 w-fit rounded-full text-white bg-white/10">
                        <i class="lab-line-qrcode-2 text-lg leading-none"></i>
                        <span class="text-sm md:text-base font-semibold whitespace-nowrap">QR Code Table Ordering</span>
                    </div>
                    <h1 class="text-3xl md:text-[40px] leading-14 font-extrabold mb-6 text-white">
                        Smooth Dine-in Experience
                         with Contactless QR Code 
                        Table Menu Ordering
                    </h1>
                    <p class="text-base md:text-lg max-w-[460px] mb-8 text-white">
                        With FoodScan QR Code Table Order, your customers 
                        can easily scan a QR code to browse the menu, order, &
                        pay – all from their mobile devices.
                    </p>
                    <nav class="flex max-sm:flex-wrap items-start gap-4 sm:gap-6">
                        <button type="button" class="h-11 sm:h-[50px] px-5 rounded-lg text-base sm:text-lg font-bold whitespace-nowrap bg-gradient-to-r from-[#1C75FF] to-[#72A9FF] text-white">Start Free Trial</button>
                        <button type="button" class="h-11 sm:h-[50px] px-5 rounded-lg text-base sm:text-lg font-bold whitespace-nowrap border border-white bg-white/25 text-white">Book a Demo</button>
                    </nav>
                </div>
                <div class="col-span-2 md:col-span-1">
                    <nuxt-img 
                        src="/images/banner.png"
                        alt="banner-image"
                        class="w-full max-w-md max-md:mx-auto md:ml-auto"
                    />
                </div>
            </div>
        </div>
    </section>
    <!--==============================
            BANNER PART END       
    ===============================-->

    <!--==============================
            BRAND PART START       
    ===============================-->
    <section class="mb-16 md:mb-34">
        <div class="container">
            <h2 class="text-xl md:text-[22px] font-medium text-center mb-8">
                Trusted by 100+ Restaurants & Cafes
            </h2>
            <client-only>
                <swiper-container :space-between="50" slides-per-view="auto" :loop="true" :autoplay="{delay: 1500}" :speed="500">
                    <swiper-slide class="w-fit"><nuxt-link to="#"><nuxt-img src="/images/brands/01.png" alt="brand-logo" class="h-6 sm:h-9 w-auto"></nuxt-img></nuxt-link></swiper-slide>
                    <swiper-slide class="w-fit"><nuxt-link to="#"><nuxt-img src="/images/brands/02.png" alt="brand-logo" class="h-6 sm:h-9 w-auto"></nuxt-img></nuxt-link></swiper-slide>
                    <swiper-slide class="w-fit"><nuxt-link to="#"><nuxt-img src="/images/brands/03.png" alt="brand-logo" class="h-6 sm:h-9 w-auto"></nuxt-img></nuxt-link></swiper-slide>
                    <swiper-slide class="w-fit"><nuxt-link to="#"><nuxt-img src="/images/brands/04.png" alt="brand-logo" class="h-6 sm:h-9 w-auto"></nuxt-img></nuxt-link></swiper-slide>
                    <swiper-slide class="w-fit"><nuxt-link to="#"><nuxt-img src="/images/brands/05.png" alt="brand-logo" class="h-6 sm:h-9 w-auto"></nuxt-img></nuxt-link></swiper-slide>
                    <swiper-slide class="w-fit"><nuxt-link to="#"><nuxt-img src="/images/brands/06.png" alt="brand-logo" class="h-6 sm:h-9 w-auto"></nuxt-img></nuxt-link></swiper-slide>
                    <swiper-slide class="w-fit"><nuxt-link to="#"><nuxt-img src="/images/brands/07.png" alt="brand-logo" class="h-6 sm:h-9 w-auto"></nuxt-img></nuxt-link></swiper-slide>
                    <swiper-slide class="w-fit"><nuxt-link to="#"><nuxt-img src="/images/brands/05.png" alt="brand-logo" class="h-6 sm:h-9 w-auto"></nuxt-img></nuxt-link></swiper-slide>
                    <swiper-slide class="w-fit"><nuxt-link to="#"><nuxt-img src="/images/brands/08.png" alt="brand-logo" class="h-6 sm:h-9 w-auto"></nuxt-img></nuxt-link></swiper-slide>
                </swiper-container>
            </client-only>
        </div>
    </section>
    <!--==============================
            BRAND PART END       
    ===============================-->

    <!--==============================
            FEATURE PART START       
    ===============================-->
    <section class="mb-16 md:mb-34">
        <div class="container">
            <div class="mb-10 md:mb-16">
                <span class="block w-fit mx-auto mb-3 text-sm md:text-base font-semibold py-2 px-3 rounded-full shadow-title">
                    Feature of QR Digital Menu
                </span>
                <h2 class="mb-3 text-3xl md:text-[40px] leading-tight font-extrabold text-center">
                    <span class="inline text-secondary">FoodScan QR</span>
                    <span class="inline text-primary"> Digital Menu</span>
                </h2>
                <p class="text-base md:text-lg font-medium text-center">
                    The future of dine-in is here
                </p>
            </div>
            <div class="flex flex-col gap-8 md:gap-16">
                <div v-for="feature in features" class="flex flex-col odd:md:flex-row even:md:flex-row-reverse items-center justify-between gap-y-8 gap-x-24">
                    <nuxt-img 
                        :src="feature.image" 
                        alt="feature-image" 
                        class="w-full max-w-md" 
                    />
                    <div class="w-full max-w-lg">
                        <h3 class="text-xl md:text-2xl font-semibold max-w-md mb-5 md:mb-8">
                            {{ feature.title }}
                        </h3>
                        <ul class="list-disc pl-4 marker:text-primary">
                            <li v-for="item in feature.items" class="text-base md:text-lg py-1">
                                {{ item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--==============================
            FEATURE PART END       
    ===============================-->

    <!--==============================
            ADVANCE PART START       
    ===============================-->
    <section class="mb-16 md:mb-34">
        <div class="container">
            <div class="mb-8 md:mb-12 text-center max-w-2xl mx-auto">
                <span class="block w-fit mx-auto mb-3 text-sm md:text-base font-semibold py-2 px-3 rounded-full shadow-title">
                    More Advanced Features
                </span>
                <h2 class="text-3xl md:text-[40px] leading-tight font-extrabold">
                    <span class="inline text-secondary">Powerful</span>
                    <span class="inline text-primary"> Features Built to Elevate </span>
                    <span class="inline text-secondary">Your Restaurant Operations</span>
                </h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="advance in advances" class="pt-6 md:pt-8 px-4 md:px-6 pb-4 md:pb-6 rounded-2xl shadow-card bg-white">
                    <nuxt-img src="/images/edit.png" class="w-7 md:w-8 mb-4 md:mb-6"></nuxt-img>
                    <h3 class="text-lg md:text-xl font-semibold mb-2 md:mb-4">{{ advance.title }}</h3>
                    <p class="text-sm md:text-base">{{ advance.description }}</p>
                </div>
            </div>
        </div>
    </section>
    <!--==============================
            ADVANCE PART END       
    ===============================-->

    <!--==============================
            WORKS PART START       
    ===============================-->
    <section class="mb-16 md:mb-36 py-12 md:py-18 bg-[url(/images/bg/works.jpg)] bg-no-repeat bg-cover">
        <div class="container">
            <div class="mb-8 md:mb-16 text-center max-w-[700px] mx-auto">
                <span class="block w-fit mx-auto mb-3 text-sm md:text-base font-semibold py-2 px-3 rounded-full text-white bg-white/10">
                    How QR Table Order Works
                </span>
                <h2 class="text-3xl md:text-[40px] leading-tight font-extrabold text-white">
                    Streamlined ordering that'ssimple and delightful for your guests
                </h2>
            </div>
            <div class="flex flex-col-reverse lg:flex-row items-center justify-between gap-6">
               <div class="max-w-lg">
                    <div class="mb-12 last:mb-0 w-full">
                        <h3 class="text-xl md:text-2xl font-semibold mb-4 text-white">1. Scan & access the menu</h3>
                        <p class="text-base text-white">Each table has a unique QR code that diners can scan to quickly and easily access your menu on their phone, without the need for any app downloads.</p>
                    </div>
                    <div class="mb-12 last:mb-0 w-full">
                        <h3 class="text-xl md:text-2xl font-semibold mb-4 text-white">2. View and order</h3>
                        <p class="text-base text-white">
                            The digital menu is visually appealing, user-friendly, and displays full item information, making it easy for diners to browse and select their preferred dishes and drinks.
                            <span class="mt-4">Orders are automatically sent to your order panel, printer, or POS system, streamlining the entire ordering process.</span>
                        </p>
                    </div>
                    <div class="mb-12 last:mb-0 w-full">
                        <h3 class="text-xl md:text-2xl font-semibold mb-4 text-white">3. Pay and enjoy</h3>
                        <p class="text-base text-white">
                            Various payment methods are available, including popular online payment integrations, 
                            so diners can quickly and securely pay for their orders and enjoy a seamless dining experience from start to finish.
                        </p>
                    </div>
               </div>
               <nuxt-img 
                    src="/images/works.png"
                    alt="work-image"
                    class="w-full max-w-lg"
               />
            </div>
        </div>
    </section>
    <!--==============================
            WORKS PART END       
    ===============================-->

    <!--==============================
            POS PART START       
    ===============================-->
    <section class="mb-16 md:mb-34">
        <div class="container">
            <div class="mb-8 md:mb-16 text-center">
                <span class="block w-fit mx-auto mb-3 text-sm md:text-base font-semibold py-2 px-3 rounded-full shadow-title bg-white">
                    Point of Sale System
                </span>
                <h2 class="text-3xl md:text-[40px] leading-tight font-extrabold">
                    <span class="inline text-secondary">Built-in FoodScan</span>
                    <span class="inline text-primary"> Restaurant POS </span>
                    <span class="inline text-secondary">System</span>
                </h2>
            </div>
            <div class="flex flex-col-reverse lg:flex-row items-center justify-between gap-6">
                <nuxt-img 
                    src="/images/pos.png"
                    alt="pos-image"
                    class="w-full max-w-lg"
               />
               <div class="max-w-lg">
                    <div class="mb-12 last:mb-0 w-full">
                        <h3 class="text-xl md:text-2xl font-semibold mb-4">Modern POS for all order types</h3>
                        <p class="text-base">Manage in-store orders for dine-in and pickup in one place. Built to be quick and simple, so your team can spend less time on troubleshooting and more on customer experience.</p>
                    </div>
                    <div class="mb-12 last:mb-0 w-full">
                        <h3 class="text-xl md:text-2xl font-semibold mb-4">Seamlessly integrated</h3>
                        <p class="text-base">
                            Your menu and any type of printers are fully synced with your POS and Admin Portal.
                            <span class="mt-4">The software for POS restaurants allows you to customize settings to meet your restaurant's needs. This includes menu item configuration, pricing, and tax settings.</span>
                        </p>
                    </div>
                    <div class="mb-12 last:mb-0 w-full">
                        <h3 class="text-xl md:text-2xl font-semibold mb-4">Stock & Inventory Management</h3>
                        <p class="text-base">FoodScan stock control system makes inventory management easy, ensuring that you can easily count and keep track of your stock at all times, minimizing variances and wastage.
                        </p>
                    </div>
                    <div class="mb-12 last:mb-0 w-full">
                        <h3 class="text-xl md:text-2xl font-semibold mb-4">Analysis and Reporting</h3>
                        <p class="text-base">The software provides detailed reports and analytics on sales, inventory, and customer behavior. Hence, allowing you for data-driven insights and informed business decisions.
                        </p>
                    </div>
               </div>
            </div>
        </div>
    </section>
    <!--==============================
            POS PART END       
    ===============================-->

    <!--==============================
         EXPERT FIELD PART START       
    ===============================-->
    <section class="mb-16 md:mb-34">
        <div class="container">
            <div class="mb-8 md:mb-16 text-center max-w-[863px] w-full mx-auto">
                <span class="block w-fit mx-auto mb-3 text-sm md:text-base font-semibold py-2 px-3 rounded-full shadow-title bg-white">
                    Experts in the field
                </span>
                <h2 class="mb-3 text-3xl md:text-[40px] leading-tight font-extrabold">
                    <span class="inline text-secondary">FoodScan is a</span>
                    <span class="inline text-primary"> Perfect Fit </span>
                    <span class="inline text-secondary">for Your Restaurant</span>
                </h2>
                <p class="text-base md:text-lg font-medium text-center">
                    Ask your customers to share their reviews and feedback on the restaurant’s website and mobile application. It will drastically improve your business and allow you to make several new customers.
                </p>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-6">
                <div class="shadow-card bg-white rounded-3xl max-w-86.5 w-full flex-shrink-0">
                    <nuxt-img src="/images/expert/cover1.jpg" class="w-full h-40 object-cover rounded-t-3xl" alt="coverimg"/>
                    <div class="p-6">
                        <h3 class="mb-4 text-[22px] font-bold text-primary">Increase Revenue</h3>
                        <ul class="flex flex-col gap-4 text-base font-medium leading-4">
                            <li><i class="lab-fill-check mr-2"></i> Quicker table turnover</li>
                            <li><i class="lab-fill-check mr-2"></i> Order sale with Contactless menu</li>
                            <li><i class="lab-fill-check mr-2"></i> Smart pre ordering</li>
                        </ul>
                    </div>
                </div>
                <div class="shadow-card bg-white rounded-3xl max-w-86.5 w-full flex-shrink-0">
                    <nuxt-img src="/images/expert/cover2.jpg" class="w-full h-40 object-cover rounded-t-3xl" alt="coverimg"/>
                    <div class="p-6">
                        <h3 class="mb-4 text-[22px] font-bold text-primary">Control Expenditure</h3>
                        <ul class="flex flex-col gap-4 text-base font-medium leading-4">
                            <li><i class="lab-fill-check mr-2"></i> Minimize manual staff</li>
                            <li><i class="lab-fill-check mr-2"></i> Automate route & dispatch</li>
                            <li><i class="lab-fill-check mr-2"></i> Low maintenance</li>
                        </ul>
                    </div>
                </div>
                <div class="shadow-card bg-white rounded-3xl max-w-86.5 w-full flex-shrink-0">
                    <nuxt-img src="/images/expert/cover3.jpg" class="w-full h-40 object-cover rounded-t-3xl" alt="coverimg"/>
                    <div class="p-6">
                        <h3 class="mb-4 text-[22px] font-bold text-primary">Grow Your Business</h3>
                        <ul class="flex flex-col gap-4 text-base font-medium leading-4">
                            <li><i class="lab-fill-check mr-2"></i> Consolidate reporting</li>
                            <li><i class="lab-fill-check mr-2"></i> Manage with one click</li>
                            <li><i class="lab-fill-check mr-2"></i> Security protection</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--==============================
         EXPERT FIELD PART END     
    ===============================-->

    <!--==============================
         PRICING PART START       
    ===============================-->
    <PriceComponent :title="'How much does it cost?'" />
    <div class="flex justify-center mt-12">
        <NuxtLink to="/pricing-details" class="text-primary flex items-center text-[22px] font-bold">See Details Pricing <i class="ms-3 text-2xl lab-line-arrow-right-2"></i></NuxtLink>
    </div>
    <!--==============================
         PRICING PART END     
    ===============================-->

    <!--==============================
         CLIENT REVIEW PART START       
    ===============================-->
    <ReviewComponent/>
    <!--==============================
         CLIENT Review PART END     
    ===============================-->

    <!--==============================
             FAQ PART START       
    ===============================-->
        <FaqComponent/>
    <!--==============================
              FAQ PART END     
    ===============================-->

    <!--==============================
         SUPPORT PART START       
    ===============================-->
    <section class="mb-16 md:mb-34">
        <div class="container flex md:flex-row flex-col items-center gap-6">
            <div class="w-full md:w-1/2 flex-shrink-1 ">
                <div class="max-w-109 mx-auto">
                    <nuxt-img class="w-full" src="/images/support.png"></nuxt-img>
                </div> 
            </div>
            <div class="w-full sm:w-1/2 md:text-left text-center">
                <span class="block w-fit mx-auto md:mx-0 mb-3 text-sm md:text-base font-semibold py-2 px-3 rounded-full shadow-title bg-white">
                    Support
                </span>
                <h2 class="mb-3 text-3xl md:text-[40px] leading-tight font-extrabold">
                    <span class="inline text-secondary">24/7 Real Time</span>
                    <span class="inline text-primary"> Support</span>
                </h2>
                <ul class="flex flex-col gap-4 text-base lg:text-lg font-medium text-start">
                        <li class="flex items-center gap-3 leading-6 text-lg"><i
                                class="text-primary lab-line-circle-check flex-shrink-0"></i><span>
                                Email Support</span></li>
                        <li class="flex items-center gap-3 leading-6 text-lg"><i
                                class="text-primary lab-line-circle-check flex-shrink-0"></i><span>
                                Live Chat for Unlimited Plan</span></li>
                        <li class="flex items-center gap-3 leading-6 text-lg"><i
                                class="text-primary lab-line-circle-check flex-shrink-0"></i><span>
                                Frequent Webinars</span></li>
                        <li class="flex items-center gap-3 leading-6 text-lg"><i
                                class="text-primary lab-line-circle-check flex-shrink-0"></i><span>
                                All-time support for any problem with the website</span></li>
                </ul>
                <div class="mt-8 flex gap-3.5 p-6 shadow-card rounded-xl w-fit justify-start items-start">
                    <div>
                        <img src="/images/helpline.png" alt="callsupport">
                    </div>
                    <div class="flex-row justify-start">
                        <p class="text-sm font-normal font-client">Need customer care help?</p>
                        <p class="text-primary lg:text-[32px] text-xl font-bold mt-2">0965-788-6958</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--==============================
         SUPPORT PART END     
    ===============================-->
</template>

<script setup>
import features from "@/assets/json/features.json"
import advances from "@/assets/json/advances.json"
</script>
