<template>
  <h3 v-if="caseAbility">video ability : {{ caseAbility }}</h3>
  <h3 v-else> Passive ability </h3>
</template>

<script>
export default {
  props: ['name', 'caseAbility', 'isPassive']
}
</script>