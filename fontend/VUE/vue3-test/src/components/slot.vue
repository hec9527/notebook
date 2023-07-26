<template>
  <div class="slot-wrap">
    <header>
      <slot name="header">this is default header</slot>
    </header>

    <main>
      <slot name="main" count="1">this is default main</slot>
    </main>

    <footer>
      <slot name="footer">this is default footer</slot>
    </footer>

    <slot pname="saga" age="22">default</slot>
  </div>
</template>
