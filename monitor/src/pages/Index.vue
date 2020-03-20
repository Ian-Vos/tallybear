<template>
  <div class="q-pa-lg row items-start q-gutter-lg">

    <div class="col-4 row">
      <q-card class="my-card q-pb-lg col-12 q-mb-lg">
        <q-card-section>
          <div class="text-h6">Controlls</div>
          These are the most important tally system Controlls
        </q-card-section>
      </q-card>
      <q-card class="my-card q-pb-lg col-12">
        <q-card-section>
          <div class="text-h6">Less used</div>
          These are the standard not much used tally system Controlls
        </q-card-section>
      </q-card>
    </div>

    <div class="row col">
      <q-card class="my-card q-pb-lg col-12">
        <q-card-section>
          <div class="text-h6">Tallies</div>
          This is a table with connected tallies
        </q-card-section>
      </q-card>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PageIndex',

  created () {
    this.$q.dark.set(true)
  }
}
</script>
