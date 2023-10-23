const app = Vue.createApp({
  //Optionen
  data: function () {
    return {
      submissions: submissions, // aus seed.js
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
});

// # Repreäsentiert eine ID
// Liefert eine Instanz zur Root-Component zurück
const vm = app.mount("#app");
