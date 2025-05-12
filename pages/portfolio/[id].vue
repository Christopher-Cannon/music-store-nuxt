<script setup>
import { useRoute } from "vue-router";
import Wrapper from "../components/common/Wrapper.vue";
import projects from "@/data/projects.js";

const { id } = defineProps({ id: String });

const route = useRoute()
const project = projects.find(p => p.slug === route.params.slug)
</script>

<template>
  <Wrapper>
    <div v-if="project">
      <h2 class="text-2xl md:text-3xl lg:text-4xl text-center lg:text-left font-black my-10">{{ project.title }}
      </h2>

      <p class="text-center lg:text-left">{{ project.description }}</p>

      <hr class="my-12 h-0.5 border-0 bg-black max-w-100 m-auto" />

      <div v-for="b in project.body" :key="b.heading">
        <h3 class="font-black text-lg md:text-xl lg:text-2xl my-5">{{ b.heading }}</h3>

        <p v-for="para in b.content" :key="para" class="my-5">{{ para }}</p>
      </div>

      <ul class="flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-5 my-10">
        <li v-for="img in project.images" :key="img" class="md:w-[47.5%] lg:w-full">
          <a :href="'/' + project.imageDirectory + '/' + img">
            <img :src="'/' + project.imageDirectory + '/' + img" :alt="project.title"
              class="block rounded-md mx-auto object-cover w-full h-[400px] md:h-[300px] lg:h-[250px]" /></a>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Nothing here</p>
    </div>
  </Wrapper>
</template>
