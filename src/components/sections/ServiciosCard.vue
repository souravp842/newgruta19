<template>
  <div class="flex items-start bg-black text-white p-4 rounded-md w-full">
    <img :src="icon" alt="icon" class="w-8 h-8 mr-4 mt-1" />
    <div>
      <h3 class="text-sm uppercase font-bold border-l-2 border-orange-500 pl-2 mb-1">
        {{ title }}
      </h3>
      <p class="text-sm text-gray-300">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    icon: String,
    title: String,
    description: String
  }
}
</script>


