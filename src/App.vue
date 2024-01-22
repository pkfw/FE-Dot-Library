<template>
  <component :is="layout" />
</template>

<script setup>
import { defineAsyncComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";
import "@/assets/css/scrollBar.css";

const loadLayoutComponent = (layoutName) => {
  return layoutName
    ? defineAsyncComponent(() => import(`@/layouts/${layoutName}.vue`))
    : DefaultLayout;
};

const DefaultLayout = defineAsyncComponent(() => import("@/layouts/DefaultLayout.vue"));

const route = useRoute();
const layout = ref(loadLayoutComponent(route.meta.layout));

watch(
  () => route.meta,
  (newMeta) => {
    layout.value = loadLayoutComponent(newMeta.layout);
    document.title = newMeta.title;
  },
  { immediate: true }
);
</script>
