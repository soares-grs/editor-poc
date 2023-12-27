<template>
  <div class="flex flex-col items-center">
    <h1 class="text-lg font-medium">Editor</h1>
    <textarea class="border border-gray-600 p-2 outline-none" cols="80" rows="5" :value="input" @input="updateMarkdown($event.target.value)"></textarea>
    <div class="prose" v-html="compiledMarkdown"></div>
    <div class="mt-2">
      <button 
        @click="saveThePost" 
        class="p-2 rounded-md bg-[#40d964] text-white font-medium"
        >
          Salvar
      </button>
    </div>
  </div>
</template>

<script setup>
import { marked } from 'marked';
import { computed, ref } from 'vue';

const compiledMarkdown = computed(() => marked(input.value, {sanitize: true}));

const input = ref('');

function updateMarkdown(event) {
  input.value = event;
}

function saveThePost() {
  console.log("Tokenization Result: ", marked.parse(input.value))
  const base64Content = btoa(input.value)
  console.log("Base64 content", base64Content);
  console.log("Base64 decoded content", atob(base64Content));
}

</script>