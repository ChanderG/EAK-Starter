export default Ember.ArrayController.extend({
  genderOptions: [
    { id  : 'M',
      name: 'Male'
    },
    { id  : 'F',
      name: 'Female'
    }
  ],
  actions: {
    submit: function() {
      alert("Submitted");
    }
  }
});
