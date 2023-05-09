<template>
  <div class="footer-container">
    <div class="footer-element">Contact</div>
    <div class="footer-element" @click="routeToOfficialLol">Official Website</div>
    <div class="footer-element">FAQ</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  methods: {
    routeToOfficialLol(){
      window.location.href ='https://leagueoflegends.com/'
    }
  }
}
</script>

<style>
  .footer-container {
    width: 100%;
    background-color: #121112;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 5rem;
    align-items: center;
  }

  .footer-element {
    color: white;
    margin: 0.5rem 0;
    cursor: pointer;
    font-size: 1.5rem;
  }

  .footer-element:hover,
  .footer-element:active{
    color: cyan;
    text-decoration: underline;
    text-underline-offset: 8px;
  }
</style>