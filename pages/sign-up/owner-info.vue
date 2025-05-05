<template >
    <div class="lg:pt-13 mt-18">
        <div class="max-w-4xl w-full mx-auto rounded-2xl bg-cardBg shadow-card -z-50">
        <div class="flex p-3 items-stretch">       
            <div class="hidden md:block md:w-1/2 !py-0">
                <div class="min-w-[370px] w-full h-full rounded-2xl relative">
                    <nuxt-img src="/images/authentication.png" alt="coverimg" class="w-full h-full object-cover rounded-2xl" />
                    <div class="absolute bottom-0 p-6 text-white">
                        <h5 class="text-[22px] font-bold mb-3">The smart way to manage your restaurant’s operations.</h5>
                        <p class="text-sm font-normal">Offer contactless ordering and payment options for a safer & more convenient dining experience.</p>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-full !py-0 h-full">
                <form class="h-full">
                    <div class="py-3 px-4 sm:px-10 lg:px-15 h-full">
                        <h3 class="text-lg sm:text-[22px] font-bold mb-6 leading-none">Owner Information</h3>
                        <div class="mb-4">
                            <label class="block tracking-wide text-black text-sm font-medium mb-1 required leading-tight" for="name">Your Name</label>  
                            <input class="appearance-none w-full focus-within:border-primary border border-[#D9DBE9] rounded-lg h-12 px-4 leading-tight" id="name" type="text">
                        </div>
                        <div class="mb-4">
                            <label class="block tracking-wide text-black text-sm font-medium mb-1 required leading-tight" for="email">Your Email</label>
                            <input class="appearance-none block w-full focus-within:border-primary border border-[#D9DBE9] rounded-lg h-12 px-4 leading-tight" id="email" type="email">
                        </div>                    
                        <div class="mb-4">
                            <label class="block tracking-wide text-black text-sm font-medium mb-1 required leading-tight" for="phone">Your Phone</label>
                            <input class="appearance-none block w-full focus-within:border-primary border border-[#D9DBE9] rounded-lg h-12 px-4 leading-tight" id="phone" type="text">
                        </div>                    
                        <div class="mb-6">
                            <label class="block tracking-wide text-black text-sm font-medium mb-1 required leading-tight" for="password">Password</label>
                            <input class="appearance-none block w-full focus-within:border-primary border border-[#D9DBE9] rounded-lg h-12 px-4 leading-tight" id="password" type="password">
                        </div>                                      
                        <NuxtLink to="/sign-up/restaurant-info" class="text-base font-bold leading-snug text-white rounded-lg mb-4 flex items-center justify-center h-12 w-full bg-linear-to-br from-primary to-[#72A9FF]">Next</NuxtLink>
                        <div class="flex items-center justify-center gap-1">
                            <span class="text-base text-[#6E7191]">Already registered?</span>
                            <NuxtLink to="/login" class="text-base font-bold text-primary">Login</NuxtLink>
                        </div>
                    </div>
                </form>
            </div> 
        </div>         
         </div>
    </div>
</template>
<script setup>
import { NuxtLink } from '#components';

definePageMeta({
    layout:"auth-layout"
})
</script>