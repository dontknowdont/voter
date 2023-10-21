const app = Vue.createApp({
  //Optionen
  data: function () {
    return {
      submissions: submissions, // aus seed.js
    };
  },
  methods: {
    // upvote: function(){}
    upvote() {
        console.log(this.submissions[0].votes)
        this.submissions[0].votes++
    },
  }
});

// # Repreäsentiert eine ID
// Liefert eine Instanz zur Root-Component zurück
const vm = app.mount("#app");
