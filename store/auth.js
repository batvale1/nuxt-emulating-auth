import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'

export const state = () => ({
  isLoggedIn: false,
  name: '',
  email: '',
  avatar: ''
});

// getters
export const getters = {
  getUserLogStatus: state => {
    return state.isLoggedIn;
  },
  getName: state => {
    return state.name;
  },
  getEmail: state => {
    return state.email;
  },
  getAvatar: state => {
    return state.avatar;
  }
};

//mutations
export const mutations = {
  setData: (state, data) => {
    state.name = data.name;
    state.email = data.email;
    state.avatar = data.avatar;
    state.isLoggedIn = true;
  },
  logoutUser: state => {
    state.name = '';
    state.email = '';
    state.avatar = '';
    state.isLoggedIn = false;
  }
};

//actions
export const actions = {
  loginUser: ({ commit }, {name, password}) => {
    const mock = new MockAdapter(axios);
    mock.onPost("/login").reply(200, {
      user: {
        name,
        password,
        email: 'test@test.com',
        avatar: 'https://russianemirates.com/upload/innerimages/5c7f8ca06eaa4.jpg'
      },
    });
    return axios.post("/login")
      .then(function (response) {
        commit('setData', response.data.user);
      })
      .catch(e => console.log(e));
  },
  logoutUser: ({ commit }, payload) => {
    return commit('logoutUser');
  }
};
