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
    submissions: {
      handler(newValue, oldValue){
        // console.log('newValue', newValue);
        // console.log('oldValue', oldValue);
      this.totalVotes = this.submissions.reduce((totalVotes, submission) => {
        return totalVotes + submission.votes
      },0)
      },
      deep: true,
      immediate: true
    },
    totalVotes(newValue, oldValue){
      console.log('newValue', newValue);
      console.log('oldValue', oldValue);
    }
  }
});

// # Repreäsentiert eine ID
// Liefert eine Instanz zur Root-Component zurück
const vm = app.mount("#app");


// Computed
// Wenn abhängige Daten geändert werden
// Daten, welche von anderen Daten abhängig sind

// Mehtods
// Wenn "sichtbare" Daten geändert werden, 
// d.h. das, dass Template neu gerendert werden muss
// Event-Listener ("clicks") oder für Daten die sich permanent ändern

// Watcher
// Wenn die beobachteten Daten sich ändern
// Sollte Code ausführen welcher sich nicht direkt auf das Template auswirkt,
// z.B. HTTP-Anfragen, den localStorage nutzen usw.