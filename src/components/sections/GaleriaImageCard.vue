<script setup>
defineProps({ 
    image: {
    type: String,
    required: true
  }
});
</script>

   <template>
    <div class="p-6 bg-gray-900 min-h-screen">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          class="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
        >
          <img :src="image" alt="Office area" class="w-full h-48 object-cover" />
          <div class="p-4 text-white text-center font-semibold">
           dynamic data
          </div>
        </div>
      </div>
    </div>
  </template>
