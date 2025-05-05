<template>
    <section class="mt-16 md:mt-34 mb-4 md:mb-22">
        <div class="container">
            <div class="text-center max-w-[600px] w-full mx-auto">
                <span class="block w-fit mx-auto mb-3 text-sm md:text-base font-semibold py-2 px-3 rounded-full shadow-title bg-white">
                    Client’s Feedback
                </span>
                <h2 class="mb-3 text-3xl md:text-[40px] leading-tight font-extrabold">
                    <span class="inline text-secondary">What Our Clients are Saying</span>
                </h2>
                <p class="text-base md:text-lg font-medium text-center">
                    So we’re saving you the hassle of hundreds of thousands of dollars and doing it all fast. But don’t worry, we’re not overcharging you.
                </p>
            </div>
        </div>
        <ClientOnly>
            <swiper-container class="grid" :space-between="24" slides-per-view="auto" :loop="true" :autoplay="{delay:0, disableOnInteraction: false, pauseOnMouseEnter: true}" :speed="5000" :freeMode="true" :easing="'linear'">
                <swiper-slide v-for="review in reviews" class="max-w-[346px] w-full py-12">
                        <div class="p-6 pt-8 shadow-review rounded-2xl">
                            <div  class="[&_i]:text-2xl mb-6 flex items-center gap-0.5">
                                <i v-for="n in 5" :class="{'text-warning': n<= review.rating , 'text-neutral-400': n> review.rating}" class="lab-fill-star"></i>
                            </div>
                            <p class="text-base font-normal mb-6">{{ review.comment }}</p>
                            <div class="flex gap-4 items-start">
                                <div class="w-13 h-13 rounded-full">
                                    <nuxt-img :src="review.profile" alt="user-image" class="w-full"/>
                                </div>
                                <div>
                                    <h6 class="text-lg font-bold mb-2 leading-tight">{{ review.name }}</h6>
                                    <p class="text-sm font-normal leading-tight">{{ review.menu }}</p>
                                </div>
                            </div>    
                        </div>  
                </swiper-slide>
            </swiper-container>
        </ClientOnly>
    </section>
</template>

<script setup>
import reviews from "@/assets/json/review.json"
</script>