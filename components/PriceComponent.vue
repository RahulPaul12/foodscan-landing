<template>
    <section :class="props.class">
        <div class="container">
            <div class="mb-8 text-center max-w-[600px] w-full mx-auto">
                <span class="block w-fit mx-auto mb-3 text-sm md:text-base font-semibold py-2 px-3 rounded-full shadow-title bg-white">
                    {{ props.title }}
                </span>
                <h2 class="mb-3 text-3xl md:text-[40px] leading-tight font-extrabold">
                    <span class="inline text-secondary">Pick a Plan That’s</span>
                    <span class="inline text-primary"> Right for You</span>
                </h2>
                <p class="text-base md:text-lg font-medium text-center">
                    So we’re saving you the hassle of hundreds of thousands of dollars and doing it all fast. But don’t worry, we’re not overcharging you.
                </p>
            </div>
            <div class="flex justify-center items-center flex-wrap gap-4 mb-8">
                <h3 :class="[!istoggle? 'text-primary' : 'text-black' ]" class="text-[22px] font-client font-semibold" id="monthly">Monthly</h3>
                <label for="toggle" class="flex items-center cursor-pointer select-none text-dark dark:text-white">
                    <div class="relative">
                        <input v-model="istoggle" type="checkbox" id="toggle" class="peer sr-only hidden" />
                        <div
                            class="block h-8 rounded-full bg-primary w-[60px]">
                        </div>
                        <div
                            class="absolute flex items-center justify-center w-6 h-6 transition bg-white rounded-full left-1 top-1 peer-checked:left-2 peer-checked:translate-x-full ">
                        </div>
                    </div>
                </label>
                <h3 :class="[istoggle? 'text-primary' : 'text-black' ]" class="text-[22px] font-client font-semibold" id="yearly">Yearly</h3>
                <p class="text-sm leading-4.5 font-client font-semibold outline-1 outline-primary rounded-2xl px-2 py-1 text-primary">20% off</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="p-6 border border-[#EFF0F6] rounded-3xl !w-full month group hover:border-primary hover:bg-linear-to-b from-[#EBF4FF] to-white transition-all duration-300">
                        <div class="flex flex-col">
                            <div class="">
                                <h2 class="text-[22px] font-bold text-primary mb-2 ">Basic</h2>
                                <p class="mb-6 text-sm font-medium line-clamp-2">Great For Small
                                    Restaurants, Food Vendors, Bar & Lounges</p>
                            </div>
                            <hr class="w-full h-[1px] px-0 border border-dashed border-[#A0A3BD]"/>
                            <div class="my-6">
                                <div v-if="!istoggle" class="text-4xl font-semibold"><sup>$</sup>19<small class="text-2xl">/month</small></div>
                                <div v-else class="text-4xl font-semibold"><sup>$</sup>199<small class="text-2xl">/year</small></div>
                            </div>
                            <div>
                                <button type="button"
                                    class="py-[10px] w-full rounded-lg cursor-pointer bg-linear-to-br from-primary to-[#72A9FF] group-hover:shadow-priceBtn transition-all duration-300">
                                    <span class="text-lg font-bold text-white text-nowrap leading-6">Choose Plan</span>
                                </button>
                            </div>
                            <ul class="flex flex-col gap-4 mt-8 text-base font-medium sm:whitespace-nowrap">
                                <li class="flex items-center gap-2 leading-5"><i class="lab-fill-check"></i><span>QR Code for Digital Menu</span></li>
                                <li class="flex items-center gap-2 leading-5"><i class="lab-fill-check"></i><span class="line-clamp-1">Chat Support</span></li>
                                <li class="flex items-center gap-2 leading-5"><i class="lab-fill-check"></i><span class="line-clamp-1">50 Menu Items</span></li>
                                <li class="flex items-center gap-2 leading-5"><i class="lab-fill-check"></i><span>Unlimited Scans</span></li>
                                <li class="flex items-center gap-2 leading-5"><i class="lab-fill-check"></i><span class="line-clamp-1">Full access to QR Creation Tool</span></li>
                                <li class="flex items-center gap-2 leading-5"><i class="lab-fill-check"></i><span class="line-clamp-1">Real-time Menu Update</span></li>
                            </ul>
                        </div>
                </div>
                <div class="p-6 border border-[#EFF0F6] rounded-3xl !w-full month group hover:border-primary hover:bg-linear-to-b from-[#EBF4FF] to-white transition-all duration-300">
                        <div class="flex flex-col">
                            <div class="">
                                <h2 class="text-[22px] font-bold text-primary mb-2 ">Regular</h2>
                                <p class="mb-6 text-sm font-medium line-clamp-2">Great For Small
                                    Restaurants, Food Vendors, Bar & Lounges</p>
                            </div>
                            <hr class="w-full h-[1px] px-0 border border-dashed border-[#A0A3BD]"/>
                            <div class="my-6">
                                <div v-if="!istoggle" class="text-4xl font-semibold"><sup>$</sup>35<small class="text-2xl">/month</small></div>
                                <div v-else class="text-4xl font-semibold"><sup>$</sup>299<small class="text-2xl">/year</small></div>
                            </div>
                            <div>
                                <button type="button"
                                    class="py-[10px] w-full rounded-lg cursor-pointer bg-linear-to-br from-primary to-[#72A9FF] group-hover:shadow-priceBtn transition-all duration-300">
                                    <span class="text-lg font-bold text-white text-nowrap leading-6">Choose Plan</span>
                                </button>
                            </div>
                            <ul class="flex flex-col gap-4 mt-8 text-base font-medium sm:whitespace-nowrap">
                                <li class="flex items-center gap-2 leading-5"><i class="lab-fill-check"></i><span>Everything on Basic Plan</span></li>
                                <li class="flex items-center gap-2 leading-5"><i class="lab-fill-check"></i><span class="line-clamp-1">Dedicated Support</span></li>
                                <li class="flex items-center gap-2 leading-5"><i class="lab-fill-check"></i><span class="line-clamp-1">100 Menu Items</span></li>
                                <li class="flex items-center gap-2 leading-5"><i class="lab-fill-check"></i><span>Integrate with POS</span></li>
                                <li class="flex items-center gap-2 leading-5"><i class="lab-fill-check"></i><span class="line-clamp-1">PWA Compatible</span></li>
                                <li class="flex items-center gap-2 leading-5"><i class="lab-fill-check"></i><span class="line-clamp-1">Sales Reports</span></li>
                            </ul>
                        </div>
                </div>
                <div class="p-6 border border-[#EFF0F6] rounded-3xl !w-full month group hover:border-primary hover:bg-linear-to-b from-[#EBF4FF] to-white transition-all duration-300">
                        <div class="flex flex-col">
                            <div class="">
                                <h2 class="text-[22px] font-bold text-primary mb-2 ">Premium</h2>
                                <p class="mb-6 text-sm font-medium line-clamp-2">Great For Small
                                    Restaurants, Food Vendors, Bar & Lounges</p>
                            </div>
                            <hr class="w-full h-[1px] px-0 border border-dashed border-[#A0A3BD]"/>
                            <div class="my-6">
                                <div v-if="!istoggle" class="text-4xl font-semibold"><sup>$</sup>49<small class="text-2xl">/month</small></div>
                                <div v-else class="text-4xl font-semibold"><sup>$</sup>449<small class="text-2xl">/year</small></div>
                            </div>
                            <div>
                                <button type="button"
                                    class="py-[10px] w-full rounded-lg cursor-pointer bg-linear-to-br from-primary to-[#72A9FF] group-hover:shadow-priceBtn transition-all duration-300">
                                    <span class="text-lg font-bold text-white text-nowrap leading-6">Choose Plan</span>
                                </button>
                            </div>
                            <ul class="flex flex-col gap-4 mt-8 text-base font-medium sm:whitespace-nowrap">
                                <li class="flex items-center gap-2 leading-5"><i class="lab-fill-check"></i><span>Everything on Regular Plan</span></li>
                                <li class="flex items-center gap-2 leading-5"><i class="lab-fill-check"></i><span class="line-clamp-1">Dedicated Support</span></li>
                                <li class="flex items-center gap-2 leading-5"><i class="lab-fill-check"></i><span class="line-clamp-1">Unlimited Menu Items</span></li>
                                <li class="flex items-center gap-2 leading-5"><i class="lab-fill-check"></i><span>Staff Management</span></li>
                                <li class="flex items-center gap-2 leading-5"><i class="lab-fill-check"></i><span class="line-clamp-1">Accept Payments Online</span></li>
                                <li class="flex items-center gap-2 leading-5"><i class="lab-fill-check"></i><span class="line-clamp-1">Customer & Menu Reports</span></li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
const istoggle = ref(false)
const props = defineProps({title: String, class: String})
</script>