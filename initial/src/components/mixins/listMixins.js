export default {
  data() {
    return {
      searchGame: "",
      games: ["Prototape", "GTA", "Game", "zero", "crisis remastered"], // фильтрацмя списков
    };
  },
  methods: {},
  computed: {
    fiiteredGames() {
      return this.games.filter((game) => {
        return game.toLowerCase().indexOf(this.searchGame.toLowerCase()) !== -1;
      });
    },
  },
};
