<template>
  <div class="flex flex-col items-center">
    <h1 class="text-lg font-medium">Editor</h1>
    <textarea class="border border-gray-600 p-2 outline-none" cols="80" rows="5" :value="input" @input="updateMarkdown($event.target.value)"></textarea>
    <div class="prose" v-html="compiledMarkdown"></div>
    <div class="mt-2 flex gap-2">
      <button 
        @click="saveThePost" 
        class="p-2 rounded-md bg-[#40d964] hover:bg-[#26bf4b] text-white font-medium"
        >
          Save
      </button>
      <button 
        @click="loadData" 
        class="p-2 rounded-md bg-[#36b9e2] hover:bg-[#1da0c9] text-white font-medium"
        >
          Load Data
      </button>
    </div>
  </div>
</template>

<script setup>
import { marked } from 'marked';
import { computed, ref } from 'vue';
import { callMockedApi } from '../../mocks/api-mock';

const compiledMarkdown = computed(() => marked(content.value, {sanitize: true}));

const input = ref('');

const content = ref('');

function updateMarkdown(event) {
  input.value = event;
}

function unConvertReqTextBase64(base64Content) {
  return atob(base64Content)
}

async function loadData() {
  const result = await callMockedApi();
  console.log('Result API: ', result);
  content.value = marked.parse(unConvertReqTextBase64(result.data));
}

async function saveThePost() {
  console.log("Tokenization Result: ", marked.parse(input.value))
  const base64Content = btoa(input.value)
  console.log("Base64 content", base64Content);
  console.log("Base64 decoded content", atob(base64Content));


}

</script>