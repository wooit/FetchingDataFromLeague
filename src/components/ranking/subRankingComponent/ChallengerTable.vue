<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>Standing</th>
        <th>Summoner</th>
        <th>LP</th>
        <th>Win Rate</th>
      </tr>
      </thead>

      <tbody >
      <tr v-for="(challenger, index) in data" :key="index">
        <th>{{ index +1 }}</th>
        <th>{{ challenger.name }}</th>
        <th>{{ challenger.lp }} lp</th>
        <th>{{ challenger.wins }} W / {{ challenger.losses }} L - {{ challenger.winrate }}%</th>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>