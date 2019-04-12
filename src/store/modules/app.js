const state = {
    sidebar: {
      opened: false,
      withoutAnimation: false,
    },
    config: {
      googleMaps: {
        apiKey: 'AIzaSyBNAqPrTQoz9P4NBlDDyfxrnKiafkaL8iQ',
      },
      windowMatchSizeLg: '(min-width: 992px)',
      palette: {
        primary: '#151ea3',
        danger: '#e34a4a',
        info: '#4ab2e3',
        success: '#95c41f ',
        warning: '#f7cc36',
        white: '#fff',
        black: '#000',
        fontColor: '#34495e',
        transparent: 'transparent',
        lighterGray: '#ddd',
      },
    },
    isLoading: false,
  }
  
  const mutations = {
    setLoading (state, isLoading) {
      state.isLoading = isLoading
    },
    'TOGGLE_WITHOUT_ANIMATION' (state, value) {
      state.sidebar.withoutAnimation = value
    },
  }
  
  const actions = {
    isToggleWithoutAnimation ({ commit }, value) {
      commit('TOGGLE_WITHOUT_ANIMATION', value)
    },
  }
  
  export default {
    state,
    mutations,
    actions,
  }
  