const app = Vue.createApp({
  //Optionen
  data: function () {
    return {
      submissions: submissions, // aus seed.js
      totalVotes: 0,
    };
  },
  computed: {
    totalVotes() {
    console.log('Computed Property ausgeführt');
      return this.submissions.reduce((totalVotes, submission) => {
        return totalVotes + submission.votes;
      }, 0);
    },
  },
  methods: {
    // upvote: function(){}
    upvote(infoText) {
      console.log(this.submissions[0].votes);
      this.submissions[0].votes++;
      // console.log(infoText)
      // console.log(event);
    },
    logConsole(text) {
      console.log(text);
    },
    // totalVotes(){
    //  return this.submissions.reduce((totalVotes, submission) => {
    //     return totalVotes + submission.votes
    //   }, 0)
    // }
  },
  watch: {
    // submissions(newValue, oldValue){
    //   console.log('newValue');
    //   console.log('oldValue');
    // }
    totalVotes(newValue, oldValue){
      console.log('newValue', newValue);
      console.log('oldValue', oldValue);
    }
  }
});

// # Repreäsentiert eine ID
// Liefert eine Instanz zur Root-Component zurück
const vm = app.mount("#app");
