import template from './editTeam.html';

export default {
  template,

  mounted() {
    this.teamId = this.$route.params.teamId;
    this.getTeam();
  },

  data() {
    return {
      teamId: null,
      team: {},
      errors: []
    }
  },

  methods: {

    getTeam: function () {
      this.$http.get('api/team/' + this.teamId).then((response) => {
        this.team = response.data;
      })
    },

    getInputData: function () {

    },

    updateTeam: function () {
      this.$http.patch('api/team/update/' + this.teamId, this.team)
        .then((response) => {

          this.$router.back();

          this.$swal('Laget ble oppdatert');
        }, (response) => {
          this.$swal('Det skjedde en feil under lagringen');
        });
    },

    goBack: function () {
      this.$router.back();
    }

  }
}