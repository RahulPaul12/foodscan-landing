<template>
    <!--==============================
         PRICING PART START       
    ===============================-->
    <PriceComponent :title="'Price Plans'":class="'pt-10 md:pt-19 mt-12 md:mt-18 pb-16 md:pb-34'" />
    <!--==============================
         PRICING PART END     
    ===============================-->

    <!--==============================
        COMPARISON PART START       
    ===============================-->
    <section class="container mb-16 md:mb-34">
        <h2 class="max-w-[600px] w-full mx-auto mb-12 text-3xl md:text-[40px] leading-tight font-extrabold text-center">
            <span class="inline text-primary">Feature Comparison</span>
            <span class="inline text-secondary"> of Pricing Packages</span>
        </h2>
        <div class="db-table-responsive">
            <table class="db-table">
                <thead class="db-table-head">
                    <tr class="db-table-head-tr">
                        <th class="db-table-head-th">Feature List</th>
                        <th class="db-table-head-th">
                            <h2 class="text-[22px] font-bold text-primary mb-4">Basic</h2>
                            <div class="mb-4">
                                <div class="text-[22px] font-bold">$19<small class="text-base font-normal">/month</small></div>
                            </div>
                            <button type="button"
                                    class="h-11 lg:px-0 px-4 flex items-center justify-center w-full rounded-lg cursor-pointer bg-linear-to-br from-primary to-[#72A9FF] group-hover:shadow-priceBtn transition-all duration-300">
                                    <span class="text-lg font-bold text-white text-nowrap leading-5">Choose Plan</span>
                            </button>
                        </th>
                        <th class="db-table-head-th">
                            <h2 class="text-[22px] font-bold text-primary mb-4">Regular</h2>
                            <div class="mb-4">
                                <div class="text-[22px] font-bold">$35<small class="text-base font-normal">/month</small></div>
                            </div>
                            <button type="button"
                                    class="h-11 lg:px-0 px-4 flex items-center justify-center w-full rounded-lg cursor-pointer bg-linear-to-br from-primary to-[#72A9FF] group-hover:shadow-priceBtn transition-all duration-300">
                                    <span class="text-lg font-bold text-white text-nowrap leading-5">Choose Plan</span>
                            </button>
                        </th>
                        <th class="db-table-head-th">
                            <h2 class="text-[22px] font-bold text-primary mb-4">Premium</h2>
                            <div class="mb-4">
                                <div class="text-[22px] font-bold">$49<small class="text-base font-normal">/month</small></div>
                            </div>
                            <button type="button"
                                    class="h-11 lg:px-0 px-4 flex items-center justify-center w-full rounded-lg cursor-pointer bg-linear-to-br from-primary to-[#72A9FF] group-hover:shadow-priceBtn transition-all duration-300">
                                    <span class="text-lg font-bold text-white text-nowrap leading-5">Choose Plan</span>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody class="db-table-body">
                    <tr v-for="feature in features" class="db-table-body-tr">
                        <td class="db-table-body-td font-medium">{{ feature.name }}</td>
                        <td class="db-table-body-td">
                            <i :class="[feature.basic ? 'lab-line-circle-check text-success': 'lab-fill-circle-minus text-[#D9DBE9]' ]"></i>
                        </td>
                        <td class="db-table-body-td">
                            <i :class="[feature.regular ? 'lab-line-circle-check text-success': 'lab-fill-circle-minus text-[#D9DBE9]' ]"></i>
                        </td>
                        <td class="db-table-body-td">
                            <i :class="[feature.premium ? 'lab-line-circle-check text-success': 'lab-fill-circle-minus text-[#D9DBE9]' ]"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
    <!--==============================
        COMPARISON PART END     
    ===============================-->
</template>
<script setup>
import features from '@/assets/json/comparison_features.json'
</script>