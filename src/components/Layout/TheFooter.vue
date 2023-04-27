<template>
  <div class="footer-container">
    <div class="footer-element">Contact</div>
    <div class="footer-element">Lorem</div>
    <div class="footer-element">Ipsum</div>
  </div>
</template>

<script>

</script>

<style>
  .footer-container {
    width: 100%;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .footer-element {
    color: white;
    margin: 0.5rem 0;
    cursor: pointer;
  }

  .footer-element:hover,
  .footer-element:active{
    color: white;
    text-decoration: underline;
    text-underline-offset: 8px;
  }
</style>