<template>
  <div class="w-full h-screen bg-gray-100 flex overflow-hidden">
    <div class="w-60 bg-white shadow-lg h-full">
      <div class="h-40">
        <div class="bg-blue-500 text-white">
          <h1 class="text-lg text-center">Profs</h1>
        </div>
        <div></div>
      </div>
      <div>
        <div class="bg-blue-500 text-white">
          <h1 class="text-lg text-center">Students</h1>
        </div>
        <div></div>
      </div>
    </div>
    <div class="h-full w-full">
      <div class="h-16 grid grid-cols-3">
        <div class="w-full flex items-center justify-center">
          <select name="" id="">
            <option value="">Session {{ store.state.workspace.session.toLocaleString() }}</option>
          </select>
          <!-- <button class="bg-red-500 p-1">Start</button> -->
        </div>
        <div class="w-full h-full flex justify-center items-center"><h2 class="text-center">{{  store.state.workspace.group }}</h2></div>
        <div class="w-full flex justify-center items-center">
            {{ state.watch }}
        </div>
      </div>
      <div class="w-full h-[calc(100%_-_4rem)] flex">
        <div class="w-full flex flex-col justify-between">
          <div class="w-full h-full bg-red-300 relative">
              <div class="flex items-center gap-1 absolute top-2 right-2 rounded-l-full rounded-r-full bg-gray-900 opacity-70 text-white py-1 px-2 shadow-md" >
                  <div class="w-2 h-2 rounded-full bg-green-700" ></div>
                  <h1 class="text-sm">AMADOU Arouna</h1>
                  <!-- <div>
                      mic
                  </div> -->
              </div>
            <video class="w-full h-full" src=""></video>
            <!-- <canvas></canvas> -->
          </div>
          <div
            class="
              w-full
              h-12
              bg-gray-100
              flex
              gap-8
              justify-center
              items-center
            "
          >
            <div class="grid grid-cols-3 gap-4">
              <button>1</button>
              <button>2</button>
              <button>3</button>
            </div>
            <div>
              <button>Start</button>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <button>1</button>
              <button>2</button>
              <button>3</button>
            </div>
          </div>
        </div>
        <div class="bg-blue-300 w-96 flex flex-col justify-between">
          <div class="w-full h-8 grid grid-cols-3">
            <div @click="state.tabIndex=0" class="bg-yellow-200 border border-black">Disc</div>
            <div @click="state.tabIndex=1" class="bg-yellow-200 border border-black">Files</div>
            <div @click="state.tabIndex=2" class="bg-yellow-200 border border-black">Infos</div>
          </div>
          <div class="h-full">
            <div v-if="state.tabIndex == 1">Files</div>
            <div v-else-if="state.tabIndex == 2">Infos</div>
            <div v-else>Discussions</div>
          </div>
          <div class="w-full flex bg-black">
            <textarea rows="1" name="" class="h-full w-full"></textarea>
            <button class="bg-teal-600 text-white">Send</button>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import Todo from "@/components/home/Todo.vue";
import store from "../../store";

import { ref, onMounted } from "vue";

export default {
  name: "Work",
  components: {
    Todo,
  },
  setup() {


    const state = ref({
      workSpaces: [],
      currentWorkSpace: [],
      currentTeachingUnit: {},
    //   
      watch: new Date().toLocaleTimeString(),
      tabIndex: 0,
      message: ''
    });



    const leaveWorkSpace = () => {
      store.state.workspace.display = false;
    };

    setInterval(() => state.value.watch = new Date().toLocaleString(),1000)

    const startSession = () => {
        const participant = {
            id: store.state.user.id,
            name: store.state.user.firstName + ' ' + store.state.user.lastName,
            avatar: store.state.user.avatar,
            role: store.state.user.role
        }
        
    }

    // send text message
    const sendMessage = () => {
        // store.
    }

    // Share file
    const uploadFile = () => {

    }





    return {
      leaveWorkSpace,
      state,
      store
    };
  },
};
</script>

<style>
</style>
