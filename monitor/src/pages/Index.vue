<template>
  <q-page class="">

     <div class="row">
        <q-card class="my-card q-ma-lg q-pa-sm col">
          <q-card-section>
            {{ lorem }}
          </q-card-section>
        </q-card>

       <q-card class="q-ma-lg q-pa-sm col" color="amber-9">
        <q-card-title class="justify-center" >Preview</q-card-title>
        <q-card-separator />
        <q-card-main class="row q-pa-lg">
          <p class="largetext" >{{preview}}</p>
        </q-card-main>
      </q-card>
       <q-card class="q-ma-lg shadow-6 q-pa-sm col" color="red-6">
        <q-card-title class="justify-center" >Live</q-card-title>
        <q-card-separator />
        <q-card-main class="row q-pa-lg">
          <p class="largetext">{{live}}</p>
        </q-card-main>
      </q-card>
    </div>
    <div class="row q-ma-lg q-pa-sm">
      <!-- <q-btn @click="testOb" >TEST</q-btn>
      <q-btn @click="clearTable" >Remove</q-btn> -->
      <table border="1px black">
        <tr>
          <th>Name</th><th>Status</th><th>Cam</th><th></th>
        </tr>
        <tr v-for="(item, index) in tableData" v-bind:key="item.tallyId">
          <td>
            <q-input type="text" v-model="item.tallyName" label="Name"></q-input>
          </td>
          <td>Connected</td>
          <td>
            <q-input v-model="item.tallyCamNum" type="number"></q-input>
          </td>
          <td>
            <q-btn-group>
              <q-btn size="sm" color="primary" @click="changeTallyData(index)" >save</q-btn>
              <q-btn size="sm" color="negative" @click="forgetWifi(index)" >forget wifi</q-btn>
            </q-btn-group>
          </td>
        </tr>
      </table>
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
