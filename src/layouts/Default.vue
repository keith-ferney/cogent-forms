<template>
  <div class="flex flex-col">
    <div class="pt-5 px-4 md:px-0 border-b w-full mb-5 flex felx-col w-full">
      <header class="container mx-auto flex justify-between py-2 print:hidden items-end mb-3">
        <strong>
          <g-link class="hover:bg-gray-200 text-gray-900 px-4 py-2 rounded border-b" to="/">
            All Character Sheets
          </g-link>
        </strong>
        <strong>
          <g-link class="hover:bg-gray-200 text-gray-900 px-4 py-2 rounded border-b" to="/power-generator">
            Power Generator
          </g-link>
        </strong>
      </header>
    </div>
    <div class="container mx-auto pb-10 px-4 md:px-0">
      <slot/>
    </div>
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
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
</style>
