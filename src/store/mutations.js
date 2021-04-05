const mutations = {
  addColour: (state, colour) => {
    state.perler[colour.code] = colour;
  }
};

export default mutations;
