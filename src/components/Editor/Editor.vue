<template>
    <h1>Editor</h1>
    <textarea :value="input" @input="updateMarkdown($event.target.value)"></textarea>
    <div class="prose lg:prose-xl" v-html="compiledMarkdown"></div>
</template>

<script setup>
import { marked } from 'marked';
import { computed, ref } from 'vue';

const compiledMarkdown = computed(() => marked(input.value, {sanitize: true}));
const input = ref('');

const content = ref('');

function updateMarkdown(event) {
  input.value = event;
}

</script>