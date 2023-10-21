const app = Vue.createApp({
  //Optionen
  data: function () {
    return {
      submissions: submissions, // aus seed.js
    };
  },
  methods: {
    // upvote: function(){}
    upvote(infoText) {
        console.log(this.submissions[0].votes)
        this.submissions[0].votes++
        // console.log(infoText)
        // console.log(event);
    },
    logConsole(text){
        console.log(text);
    }
  }
});


// # Repreäsentiert eine ID
// Liefert eine Instanz zur Root-Component zurück
const vm = app.mount("#app");
