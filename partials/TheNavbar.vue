<script setup>
const route = useRoute();
const isScrolled = useState("isScrolled");

watch(isScrolled, (newValue) => {
  console.log("Nuevo valor de isScrolled:", newValue);
});
</script>

<template>
  <div class="aspect-[12/1] transition-all duration-500"></div>

  <nav
    :class="[
      'w-full fixed top-0 aspect-[12/1] flex justify-between items-center bg-primaryColor transition-opacity duration-500 will-change-scroll',
      !isScrolled ? 'animate-slideDown' : 'animate-slideUp',
    ]"
  >
    <NuxtLink to="/" class="ml-20 text-4xl font-semibold">Yummy Blog</NuxtLink>
    <ul class="flex gap-6 text-lg font-light">
      <li
      :class="`relative no-underline after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-center after:transition-transform after:duration-300 ${
          route.path === '/'
            ? 'after:scale-x-100'
            : 'hover:after:scale-x-100'
        }`"
      >
        <NuxtLink to="/">Blog</NuxtLink>
      </li>
      <li
        :class="`relative no-underline after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-center after:transition-transform after:duration-300 ${
          route.path === '/about'
            ? 'after:scale-x-100'
            : 'hover:after:scale-x-100'
        }`"
      >
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li
      :class="`relative no-underline after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-center after:transition-transform after:duration-300 ${
          route.path === '/contact'
            ? 'after:scale-x-100'
            : 'hover:after:scale-x-100'
        }`"
      >
        <NuxtLink to="/contact">Contact</NuxtLink>
      </li>
    </ul>
    <ul class="mr-20 flex gap-6 text-xl">
      <li><Icon name="uil:facebook" /></li>
      <li><Icon name="uil:youtube" /></li>
      <li><Icon name="uil:twitter" /></li>
    </ul>
  </nav>
</template>
