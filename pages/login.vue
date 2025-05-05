<template >
    <div class="lg:pt-13 mt-18">
        <div class="max-w-4xl w-full mx-auto rounded-2xl bg-cardBg shadow-card -z-50">
        <div class="flex p-3 items-center">       
            <div class="hidden md:block md:w-1/2 !py-0">
                <div class="min-w-[370px] w-full h-full rounded-2xl relative">
                    <nuxt-img src="/images/authentication.png" alt="banner" class="w-full h-full object-cover rounded-2xl" />
                    <div class="absolute bottom-0 p-6 text-white">
                        <h5 class="text-[22px] font-bold mb-3">The smart way to manage your restaurant’s operations.</h5>
                        <p class="text-sm font-normal">Offer contactless ordering and payment options for a safer & more convenient dining experience.</p>
                    </div>
                </div>
            </div>
            <div class="w-full md:w-full !py-0 h-full">
                <form class="h-full">
                    <div class="py-3 px-4 sm:px-10 lg:px-15 h-full">
                        <h3 class="text-lg sm:text-[22px] font-bold mb-6 leading-none">Login to Your Account</h3>
                        <div class="mb-4">
                            <label class="block tracking-wide text-black text-sm font-medium mb-1 required leading-tight" for="email">Your Email</label>
                            <input class="appearance-none block w-full border border-[#D9DBE9] rounded-lg h-12 px-4 leading-tight" id="email" type="email">
                        </div>                                      
                        <div class="mb-4">
                            <label class="block tracking-wide text-black text-sm font-medium mb-1 required leading-tight" for="password">Password</label>
                            <input class="appearance-none block w-full border border-[#D9DBE9] rounded-lg h-12 px-4 leading-tight" id="password" type="password">
                        </div>   
                        <div class="flex items-center justify-between mb-4">
                            <div class="db-field-checkbox p-0">
                                <div class="custom-checkbox w-3 h-3">
                                    <input type="checkbox" id="checkbox2" class="custom-checkbox-field">
                                    <i class="lab-fill-check custom-checkbox-icon leading-3 text-[9px] rounded-[3px] border-[#6E7191]"></i>
                                </div>
                                <label for="checkbox2" class="db-field-label text-xs font-normal">remember me</label>
                            </div>
                            <NuxtLink to="/forgot-password" class="capitalize text-xs font-medium transition text-primary hover:underline">Forgot Password</NuxtLink>
                        </div>                                   
                        <button class="text-lg font-bold leading-snug text-white rounded-lg mb-4 px-6 h-12 w-full bg-linear-to-br from-primary to-[#72A9FF]">Login</button>
                        <div class="flex items-center justify-center gap-1">
                            <span class="text-base text-[#6E7191]">Are you new here?</span>
                            <NuxtLink to="/sign-up/owner-info" class="text-base font-bold text-primary">Register</NuxtLink>
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