<template>
  <q-page class="">
    <div class="q-pa-md">
      <div class="column">
        <div class="col-5">
          <h1>Hello</h1>
        </div>
        <div class="col-5">
          <h1>HI</h1>
        </div>
      </div>
      <div class="column">
        <h1>HI</h1>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',

  created () {
    this.$q.dark.set(true)
  }
}
</script>
