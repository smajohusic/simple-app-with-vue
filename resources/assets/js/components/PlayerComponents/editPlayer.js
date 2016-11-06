import template from './editPlayer.html';

export default {
  template,

  mounted() {
    this.playerId = this.$route.params.playerId;
    this.getPlayer();
  },

  data() {
    return {
      playerId: null,
      player: {},
      teamMember: false,
      errors: []
    }
  },

  methods: {

    getPlayer: function () {
      this.$http.get('api/player/' + this.playerId).then((response) => {
        this.player = response.data;
        this.hasTeam(this.player);
      }, (response) => {
        this.errors = response.data;
      });
    },

    updatePlayer: function () {
      this.$http.patch('api/player/update/' + this.playerId, this.player)
        .then((response) => {

          this.goBack();

          this.$swal('Spilleren ble oppdatert');
        }, (response) => {
          this.$swal('Det skjedde en feil under lagringen');
        });
    },

    hasTeam: function (player) {
      if (player.team !== null) {
        this.teamMember = true;
      }
    },

    goBack: function () {
      this.$router.back();
    }

  }
}