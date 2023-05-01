<template>
  <div>
    <table>
      <thead>
      <tr class="headers">
        <th>Standing</th>
        <th>Summoner</th>
        <th>LP</th>
        <th>Win Rate</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(challenger, index) in filterDataList" :key="index">
        <th>{{ challenger.index }}</th>
        <th>{{ challenger.name }}</th>
        <th>{{ challenger.lp }}  lp</th>
        <th>
          <div>
            <span class="total-wins">{{ challenger.wins }} W</span>
            <span class="total-loses">{{ challenger.losses }} L</span>
            <span class="winrate">{{ challenger.winrate }}%</span>
          </div>
        </th>
      </tr>
      </tbody>
    </table>

    <div class="pagination-buttons">
      <button class="first-last-btn" @click="first">
        First page
      </button>
      <button class="next-previous-btn" @click="previous">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11.8 13H15q.425 0 .713-.288T16 12q0-.425-.288-.713T15 11h-3.2l.9-.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275l-2.6 2.6q-.3.3-.3.7t.3.7l2.6 2.6q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7l-.9-.9Zm.2 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
      </button>
      <button class="next-previous-btn" @click="next">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6L12 16Zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>
      </button>
      <button class="first-last-btn" @click="last">
        Last page
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data(){
    return {
      startIndex: 0,
      endIndex: 10,
    }
  },
  methods: {
    //todo this is horrible but it works
    //todo important need for refactoring these 4
    next(){
      if(this.filterDataList[this.filterDataList.length-1].index !== this.data.length){
        this.startIndex += 10
        this.endIndex += 10
      }
    },

    last(){
      if(this.data.length % 10 === 0) {
        this.startIndex = this.data.length - 10
        this.endIndex = this.data.length
      } else {
        this.startIndex = this.data.length - this.data.length % 10
        this.endIndex = this.data.length
      }
    },

    previous(){
      if(this.endIndex % 10 !==0){
        this.startIndex -=  10
        this.endIndex =  this.startIndex + 10
      } else if(this.startIndex !== 0){
        this.startIndex -= 10
        this.endIndex -= 10
      }
    },

    first(){
      this.startIndex = 0
      this.endIndex = 10
    }
  },
  computed: {
    filterDataList(){
      return this.data.slice(this.startIndex, this.endIndex)
    }
  },
}
</script>

<style>
  table {
    width: 100%;
    height: 50vh;
  }

  .headers th {
    color: cyan;
  }

  th {
    font-size: 1.5rem;
    margin: 2rem;
  }

  .total-wins {
    background-color: cornflowerblue;
    border-radius: 20px;
    padding: 0.3rem;
    margin: 1rem;
  }

  .total-loses {
    background-color: salmon;
    border-radius: 20px;
    padding: 0.3rem;
    margin: 1rem;
  }

  .winrate {
    color: chocolate;
    font-weight: lighter;
    margin: 1rem;
  }

  .pagination-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 2rem;
    gap: 1rem;
    background-color: gray;
    border-radius: 30px;
    padding: 0.3rem;
  }

  .first-last-btn {
    border: white solid 0.1rem;
    padding: 0.3rem;
    border-radius: 30px;
  }
  .first-last-btn:hover,
  .first-last-btn:focus {
    color: cyan;
    border-color: cyan;
  }
  .next-previous-btn {

  }
  .next-previous-btn:hover,
  .next-previous-btn:focus {
    color: cyan;
  }
</style>