import template from './listAllPlayers.html';

export default {
  template,

  mounted() {
    this.getAllPlayers();
  },

  data() {
    return {
      players: {},
    }
  },

  methods: {

    getAllPlayers: function () {
      this.$http.get('api/player/overview').then((response) => {

        if (Object.keys(response.data).length == 0) {
          this.$swal({
            title: 'Fant ingen spillere',
            text: 'Det er ikke blitt opprettet noen spillere',
            type: 'error',
            showCancelButton: false,
            confirmButtonText: 'Lukk'
          });

          this.$router.push('/');
        }

        this.players = response.data;

      }, (response) => {

        this.$swal({
          title: 'Obs!',
          text: 'Det skjedde en feil når vi prøvde å hente spillerene. Prøv igjen.',
          type: 'error',
          showCancelButton: false,
          confirmButtonText: 'Lukk'
        });

        this.$router.push('/');
      });
    },

    goBack: function () {
      this.$router.back();
    }

  }
}