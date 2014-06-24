var User = DS.Model.extend({
  name: DS.attr('string'),
  password: DS.attr('string'),
  comment: DS.attr('string'),
  active: DS.attr('boolean'),
  gender: DS.attr('string'),
  nameHasValue: (function() {
    var _ref;
    return !((_ref = this.get('name')) !== null ? _ref.length : void 0);
  }).property('name')
});

User.reopen({
  validations: {
    name: {
      presence: true,
      length: {
        minimum: 5
      }
    },
    password: {
      presence: true,
      length: {
        minimum: 6
      }
    },
    comment: {
      presence: true
    },
    gender: {
      presence: true
    }
  }
});

export default User;
