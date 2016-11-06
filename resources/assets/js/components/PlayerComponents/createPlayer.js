import template from './createPlayer.html';

export default {
  template,

  mounted() {
    this.getAllTeams();
  },

  data() {
    return {
      player: {
        name: null,
        age: null,
        nickname: null,
        teamId: null
      },
      teams: {},
      showTeams: false,
      activeColor: 'blue',
      errors: []
    }
  },

  methods: {
    savePlayer: function () {
      this.$http.post('api/player/store', this.player)
        .then((response) => {
          this.$swal({
            title: 'Gratulere!',
            text: 'Du har opprettet spilleren!',
            type: 'success',
            showCancelButton: false,
            confirmButtonText: 'Gå videre'
          });
        }, (response) => {
          this.errorMessage(response.data);

          this.$swal({
            title: 'OBS! Det oppstod en feil.',
            text: '<span>' + this.errors['name'] + '</span><span>' + this.errors ['age'] + '</span><span>' + this.errors ['nickname'] + '</span>',
            type: 'warning',
            showCancelButton: false,
            confirmButtonText: 'Sorry, fikser det nå!'
          });
        });
    },

    getAllTeams: function () {
      this.$http.get('api/team/overview').then((response) => {

        if (Object.keys(response.data).length == 0) {
          this.showTeams = false;
        } else {
          this.showTeams = true;
        }
        this.teams = response.data;

      }, (response) => {
        this.showTeams = false;
      });
    },

    getTeamId: function (id) {
      this.player.teamId = id;
      this.activeColor = 'red';
    },

    errorMessage: function (response) {
      this.errors = response;

      if (this.errors['name'] === undefined) {
        this.errors['name'] = '';
      }

      if (this.errors['age'] === undefined) {
        this.errors['age'] = '';
      }

      if (this.errors['nickname'] === undefined) {
        this.errors['nickname'] = '';
      }
    },

    goBack: function () {
      this.$router.back();
    }
  }
}