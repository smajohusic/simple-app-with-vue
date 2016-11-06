import template from './listAllTeams.html';

export default {
  template,

  mounted() {
    this.getAllTeams();
  },

  data() {
    return {
      teams: {},
    }
  },

  methods: {

    getAllTeams: function () {
      this.$http.get('api/team/overview').then((response) => {

        if (Object.keys(response.data).length == 0) {
          this.$swal({
            title: 'Fant ingen lag',
            text: 'Det er ikke blitt opprettet noen lag',
            type: 'error',
            showCancelButton: false,
            confirmButtonText: 'Lukk'
          });

          this.$router.push('/');
        }

        this.teams = response.data;

      }, (response) => {

        this.$swal({
          title: 'Obs!',
          text: 'Det skjedde en feil når vi prøvde å hente lagene. Prøv igjen.',
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