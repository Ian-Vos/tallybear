<template>
  <div class="q-pa-lg row items-start q-gutter-lg">

    <!-- Left side of screen -->
    <div class="col-4 row">
      <q-card class="my-card q-pb-lg col-12 q-mb-lg">
        <q-card-section>
          <div class="text-h6">Control pannel</div>
          This section should display the most important information like: <br>
          speed of the network (if possible maybe try to calculate the differnce between the send and receive time) <br>
          Status of the controller node <br>
          Current live camera <br>
        </q-card-section>
      </q-card>
      <q-card class="my-card q-pb-lg col-12">
        <q-card-section>
          <div class="text-h6">Tally assistent</div>
          Assistive features to help setup a tally like: <br>
          Connecting tally to a wifi network <br>
          Changing LED brightes of all the LED's <br>

        </q-card-section>
      </q-card>
    </div>

    <!-- Right of screen -->
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
