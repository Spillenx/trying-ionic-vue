import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: 'm1',
          image:
            'https://cdn.pixabay.com/photo/2022/09/13/13/03/monkey-7451874_1280.jpg',
          title: 'Someone eating bananas',
          description: 'Bananas are for monkeys'
        },
        {
          id: 'm2',
          image:
            'https://cdn.pixabay.com/photo/2012/03/01/01/30/monkey-20182_1280.jpg',
          title: 'Throwing stuff at people',
          description: 'People are stupid'
        },
        {
          id: 'm3',
          image:
            'https://cdn.pixabay.com/photo/2019/09/09/03/04/comic-4462469_1280.jpg',
          title: 'Jumping on trashbins',
          description: 'Because fun'
        }
      ]
    }
  },
  mutations: {
    addMemory(state, memoryData) {
      const newMemory = {
        id: new Date().toString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description
      }

      state.memories.unshift(newMemory)
    }
  },
  actions: {
    addMemory(context, memoryData) {
      context.commit('addMemory', memoryData)
    }
  },
  getters: {
    memories(state) {
      return state.memories
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId)
      }
    }
  }
})

export default store
