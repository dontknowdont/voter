const app = Vue.createApp({
  //Optionen
  data: function () {
    return {
      submissions: submissions, // aus seed.js
      // totalVotes: 0,
    };
  },
  computed: {
    totalVotes() {
      // console.log('Computed Property ausgeführt');
      return this.submissions.reduce((totalVotes, submission) => {
        return totalVotes + submission.votes;
      }, 0);
    },
    sortedSubmissions() {
      return this.submissions.sort((a, b) => {
        return b.votes - a.votes;
      });
    },
    cardHeaderBackgroundColor() {
      // return {
      //   "bg-primary": this.totalVotes >= 50,
      //   "text-white": this.totalVotes >= 50,
      //   Alternative
      //   "bg-primary text-white": this.totalVotes >= 50;
      // };
      if (this.totalVotes >= 50) {
        return ["bg-primary", "text-white"];
      }
    },
    cardTitleFontSize() {
      return { fontSize: this.totalVotes + "px" };
    },
  },
  methods: {
    // upvote: function(){}
    upvote(submissionId) {
      const submission = this.submissions.find(
        (submission) => submission.id === submissionId
      );
      submission.votes++;

      // console.log(this.submissions[0].votes);
      // this.submissions[0].votes++;
      // console.log(infoText)
      // console.log(event);
    },

    // logConsole(text) {
    //   console.log(text);
    // },

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
    // submissions: {
    //   handler(newValue, oldValue) {
    //     // console.log('newValue', newValue);
    //     // console.log('oldValue', oldValue);
    //     this.totalVotes = this.submissions.reduce((totalVotes, submission) => {
    //       return totalVotes + submission.votes;
    //     }, 0);
    //   },
    //   deep: true,
    //   immediate: true,
    // },
    // totalVotes(newValue, oldValue) {
    //   console.log("newValue", newValue);
    //   console.log("oldValue", oldValue);
    // },
  },
});

// Globale Component
app.component("submission-list-item", {
  props: ["submission"],
  methods: {
    upvote() {
      this.submission.votes++;
    },
  },
  template: `
  <div class="d-flex">
    <div class="d-shrink-0">
      <img v-bind:src="submission.img" />
    </div>
    <div class="flex-grow-1 ms-3">
      <h5>
        {{ submission.title }}
        <span class="float-end text-primary" style="cursor: pointer" v-on:click="upvote">
          <i class="fa fa-chevron-up"></i>
          <strong>{{ submission.votes }}</strong>
        </span>
      </h5>
      <div v-html="submission.desc"></div>
      <small class="text-muted">Eingereicht von: {{ submission.author }}</small>
    </div>
  </div>
`,
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
