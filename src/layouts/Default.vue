<template>
  <div class="container mx-auto pb-10 px-4 md:px-0">
    <header class="flex justify-between py-2 print:hidden">
      <strong>
        <g-link class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded" to="/">All Character Sheets</g-link>
      </strong>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}
</style>
