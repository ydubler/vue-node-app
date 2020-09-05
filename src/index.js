var view = new Vue({
  el: "#vue-view",
  data: {
    appName: "Basic Vue Project",
    checkboxOne: false,
    checkboxTwo: false,
    list: [
      { name: "Can of Prickly Pear" },
      { name: "A Doubleshot Latte" },
      { name: "ArcUser Magazine" },
    ],
    itemName: "",
  },
  methods: {
    addToList: function () {
      this.list.push({ name: this.itemName });
    },
    removeFromList: function (index) {
      this.list.splice(index, 1);
    },
  },
});
