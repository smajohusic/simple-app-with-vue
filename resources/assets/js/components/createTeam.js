'use strict';

import template from './createTeam.html';

export default {
  template,

  data() {
    return {
      team: {
        name: null,
        description: null,
        nickname: null
      },
      errors: [],
    }
  },

  methods: {
    saveTeam: function () {
      this.$http.post('api/team/store', this.team)
        .then((response) => {
          this.$swal({
            title: 'Gratulere!',
            text: 'Du har opprettet laget!',
            type: 'success',
            showCancelButton: false,
            confirmButtonText: 'Gå videre'
          });

          this.redirectUser('/');
        }, (response) => {
          this.errorMessage(response.data);

          this.$swal({
            title: 'OBS! Det oppstod en feil.',
            text: '<span>' + this.errors['name'] + '</span><span>' + this.errors ['description'] + '</span><span>' + this.errors ['nickname'] + '</span>',
            type: 'warning',
            showCancelButton: false,
            confirmButtonText: 'Sorry, fikser det nå!'
          });
        });
    },

    redirectUser: function (path) {
      // Redirect user with at success message
      this.$router.push(path);
    },

    errorMessage: function (response) {
      this.errors = response;

      if (this.errors['name'] === undefined) {
        this.errors['name'] = '';
      }

      if (this.errors['description'] === undefined) {
        this.errors['description'] = '';
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