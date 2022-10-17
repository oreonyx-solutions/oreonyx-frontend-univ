<template>
  <div
    v-if="store.state.workspace.session"
    class="w-full h-screen p-5 bg-white overflow-hidden"
  >
    <div class="h-16 flex justify-between">
      <div class="flex gap-5">
        <button class="text-lg" @click="onExit">&lt</button>
        <div>
          <h2 class="text-center font-semibold">
            {{ store.state.workspace.group.name }}
          </h2>
          <select name="" id="" class="border-none text-gray-500 text-xs">
            <option class="text-xs" value="">
              Cours du {{ store.state.workspace.date.toDateString() }} à
              {{ store.state.workspace.date.toLocaleTimeString() }}
            </option>
          </select>
        </div>

        <!-- <button class="bg-red-500 p-1">Start</button> -->
      </div>

      <div class="">
        <div class="text-xs text-gray-500">
          Aujourd'hui {{ state.watch?.toDateString() }}
        </div>
        <div class="text-xl text-center">
          {{ state.watch?.toLocaleTimeString() }}
        </div>
      </div>
    </div>

    <div class="flex h-[calc(100%_-_10rem)] gap-5">
      <div class="w-full h-full">
        <div class="h-40 py-5 w-full flex justify-center">
          <div
            class="
              bg-blue-200
              flex
              gap-5
              border border-blue-500
              h-full
              aspect-video
              items-center
              rounded-2xl
              relative
            "
            v-for="(participant, i) in participants?.teachers"
            :key="i"
          >
            <div
              class="
                flex
                items-center
                gap-1
                absolute
                bottom-2
                right-2
                rounded-l-full rounded-r-full
                bg-gray-900
                opacity-50
                text-white
                py-1
                px-2
                shadow-md
              "
            >
              <div
                :class="{
                  ' w-2 h-2 rounded-full bg-green-700': true,
                  'bg-red-700': participant?.livedAt,
                }"
              ></div>
              white
              <h1 class="text-xs">
                {{ participant?.name }}
              </h1>
              <!-- <div>
                      mic
                  </div> -->
            </div>
            <!-- <div class="w-8 h-8 rounded-full">
              <img
                :src="
                  participant.avatar ||
                  '../../../public/assets/default_establishment_pp.png'
                "
                class="w-full h-full rounded-full"
                alt=""
              />
            </div>
            <div>
              <h2 class="text-sm">{{ participant.name }}</h2>
              <p class="text-xs capitalize text-gray-400">
                {{ participant.role }}
              </p>
            </div> -->
          </div>
        </div>
        <div
          class="w-full h-[calc(100%_-_10rem)] bg-black rounded-3xl relative"
        >
          <div
            class="
              flex
              items-center
              gap-1
              absolute
              top-2
              right-2
              rounded-l-full rounded-r-full
              bg-gray-900
              opacity-70
              text-white
              py-1
              px-2
              shadow-md
            "
          >
            <div
              :class="{
                ' w-2 h-2 rounded-full bg-green-700': true,
                'bg-red-700': state.participant?.livedAt,
              }"
            ></div>
            <h1 class="text-sm">
              {{ state.participant?.name }}
            </h1>
            <!-- <div>
                      mic
                  </div> -->
          </div>
          <VideoItem
            v-if="state.medias[0] && state.mediaType == mediaTypes[0]"
            :media="state.medias[0]"
          />
          <VideoItem
            v-else-if="state.medias[1] && state.mediaType == mediaTypes[1]"
            :media="state.medias[1]"
          />
          <canvas
            v-else-if="state.medias[2] && state.mediaType == mediaTypes[2]"
          ></canvas>
          <div
            v-else
            class="w-full h-full flex justify-center items-center text-white"
          >
            En attente...
          </div>
        </div>
      </div>
      <!-- Side panel -->
      <div
        class="
          bg-gray-200
          w-[30rem]
          h-full
          flex flex-col
          justify-between
          px-2
          pt-8
          rounded-xl
        "
      >
        <div class="w-full h-8 grid grid-cols-3 bg-gray-200">
          <button
            @click="state.tabIndex = 0"
            :class="{
              'bg-gray-200 text-gray-800 rounded-xl flex justify-center gap-1 text-sm py-1': true,
              'bg-blue-700 text-white': !state.tabIndex,
            }"
          >
            Disc
            <span class="material-symbols-outlined text-sm"> forum </span>
          </button>
          <button
            @click="state.tabIndex = 1"
            :class="{
              'bg-gray-200 text-gray-800 rounded-xl flex justify-center gap-1 text-sm py-1': true,
              'bg-blue-700 text-white': state.tabIndex == 1,
            }"
          >
            Fichiers
            <span class="material-symbols-outlined text-sm"> file_copy </span>
          </button>
          <button
            @click="state.tabIndex = 2"
            :class="{
              'bg-gray-200 text-gray-800 rounded-xl flex justify-center gap-1 text-sm py-1': true,
              'bg-blue-700 text-white': state.tabIndex == 2,
            }"
          >
            Etudiants
            <span class="material-symbols-outlined text-sm"> group </span>
          </button>
        </div>
        <div class="h-full overflow-y-auto">
          <div v-if="state.tabIndex == 1">Fichiers</div>
          <div v-else-if="state.tabIndex == 2">
            <!-- <h1>{{ store.state.workspace }}</h1> -->
            <div>
              <div
                class="flex gap-2 border-b border-gray-200 pb-1 items-center"
                v-for="(participant, i) in participants?.students"
                :key="i"
              >
                <div class="w-8 h-8 rounded-full">
                  <img
                    :src="
                      participant.avatar ||
                      '../../../public/assets/default_establishment_pp.png'
                    "
                    class="w-full h-full rounded-full"
                    alt=""
                  />
                </div>
                <div>
                  <h2 class="text-sm">{{ participant.name }}</h2>
                  <p class="text-xs capitalize text-gray-400">
                    {{ participant.role }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="p-2" v-else>
            <div v-if="store.state.workspace.session?.messages">
              <Message
                v-for="(message, i) in store.state.workspace.session?.messages"
                :key="i"
                :message="message"
                :participant="state.session?.participants[message.userId]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-24 flex bg-white text-gray-500 items-center">
      <StreamControls
        @toggleStream="toggleStream"
        @switchMedia="switchMedia"
        @setVolume="setVolume"
        @toggleMic="toggleMic"
        @toggleCam="toggleCam"
        :isStreaming="state.participant?.isStreaming"
        :mediaType="state.mediaType"
        :isMicOff="state.isMicOff"
        :isCamOff="state.isCamOff"
        :volume="state.volume"
      />
      <div class="w-[30rem] h-fit flex gap-2">
        <textarea
          rows="1"
          name=""
          class="w-full border-none bg-gray-200 rounded-lg"
          v-model="state.message"
          placeholder="Taper le message..."
        ></textarea>
        <button
          :disabled="!state.message"
          @click="sendMessage"
          class="bg-teal-600 text-white p-1 rounded-md"
        >
          Envoyer
        </button>
      </div>
    </div>
  </div>
  <div v-else class="bg-black h-screen w-full flex items-center justify-center">
    <div>
      <p class="text-center text-white">
        Cette session n'a pas encore demare'.
        <a class="underline text-blue-600" @click="startSession">Demarer</a>
        cette session ou Retournera la
        <a class="underline text-blue-600" href="/">derniere session</a>
      </p>
    </div>
  </div>
</template>

<script>
import Todo from "@/components/home/Todo.vue";
import Message from "@/components/ws/Message.vue";
import VideoItem from "@/components/ws/VideoItem.vue";
import StreamControls from "@/components/ws/StreamControls.vue";
import store from "../../store";

import { ref, onMounted, onUnmounted, computed } from "vue";

import io from "socket.io-client";
window.io = io;

export default {
  name: "Work",
  components: {
    Todo,
    Message,
    VideoItem,
    StreamControls,
  },
  setup() {
    const courseTypes = ["magistral", "interactif"];
    const mediaTypes = ["video", "screen", "board"];
    const state = ref({
      workSpaces: [],
      currentWorkSpace: [],
      currentTeachingUnit: {},
      //
      watch: new Date(),
      tabIndex: 0,
      message: "",
      session: null,
      participant: null,
      joingned: false,
      connection: null,
      courseType: courseTypes[0],
      mediaType: mediaTypes[0],
      medias: [null, null, null],
      volume: 1,
      isMicOff: false,
      isCamOff: false,
    });
    // const date = new Date()
    // console.log('format ======> ', date.toLocaleTimeString())
    const onExit = () => {
      store.state.workspace.display = false;
    }
    const findSession = async () => {
      try {
        const session = await store.sessionMethods.findSession();
        // console.log(session);
        state.value.session = session;
        if (!session) {
          listenSession();
        } else {
          state.value.participant =
            state.value.session.participants[store.state.user.id];

          if (session.status == 2) {
            // console.log("session encours");
            await store.sessionMethods.joinSession();
            state.value.participant =
              state.value.session.participants[store.state.user.id];
            state.value.joingned = true;
            listenSession();
          }
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    const listenSession = () => {
      store.sessionMethods.listenSession((session) => {
        console.log(session);
        if (session) {
          state.value.session = session;
          state.value.participant = state.value.session.participants[store.state.user.id];
          if (!state.value.joingned) findSession();
        }
      });
    };

    onMounted(() => {
      // findSession
      findSession();
    });

    onUnmounted(async () => {
      if (state.value.joingned) {
        await store.sessionMethods.leaveSession();
        console.log("Your left session");
      }
      if (
        state.value.participant.role === "teacher" &&
        state.value.participant.isStreaming
      ) {
        state.value.connection.closeEntireSession();
        store.sessionMethods.endSessionStream();
      }

      // if (teacher ask to assign session to another teacher or end session)
    });

    const participants = computed(() => {
      if (!state.value.session) return null;
      const teachers = [],
        students = [];
      Object.keys(state.value.session?.participants).forEach((key) => {
        const participantData = state.value.session.participants[key];
        if (participantData.role == "teacher")
          teachers.push({ id: key, ...participantData });
        else if (participantData.role == "student")
          students.push({ id: key, ...participantData });
      });
      return { students, teachers };
    });

    const leaveWorkSpace = () => {
      store.state.workspace.display = false;
    };

    setInterval(() => (state.value.watch = new Date()), 1000);

    const startSession = async () => {
      const data = await store.sessionMethods.addSession();
      console.log(data);
    };

    // send text message
    const sendMessage = () => {
      store.sessionMethods.addMessage(state.value.message);
      state.value.message = "";
    };

    // const getParticipant = (id) => {
    //   return state.session.participants.find(
    //     (participant) => participant.id == id
    //   );
    // };

    // Share file
    const uploadFile = () => {};

    // webrtc

    // statCourse  joinCourse

    const toggleStream = () => {
      console.log("toggle stream");

      if (!state.value.participant.isStreaming) {
        state.value.connection = store.webrtcMethods.connect(
          state.value.courseType
        );
        state.value.connection.userid = store.state.user.id;

        // listeners
        state.value.connection.onstream = onStreamStart;

        state.value.connection.onstreamended = onStreamEnded;

        state.value.connection.onMediaError = onMediaError;

        state.value.connection.onClose = onClose;

        state.value.connection.onEntireSessionClosed = onEntireSessionClosed;

        const sessionId = store.state.workspace.date.getTime();
        if (state.value.participant.role === "teacher") {
          state.value.connection.openOrJoin(sessionId, () => {
            console.log("stream started");
            if (!state.value.participant.isStreaming)
              store.sessionMethods.startSessionStream();
          });
        } else {
          state.value.connection.join(sessionId, () => {
            console.log("stream started");
          });
        }
      } else {
        if (state.value.participant.role === "teacher") {
          // state.value.medias[0].srcObject.getTracks().forEach(track => track.stop());
          stopStream();
          state.value.connection.closeEntireSession();
        } else {
          state.value.connection.close();
        }
      }
    };

    const onStreamStart = (event) => {
      console.log(event);
      // if(state.value.courseType)
      // fix echo
      // if (event.mediaElement) {
      //   event.mediaElement.muted = true;
      //   delete event.mediaElement;
      // }

      state.value.medias[0] = {
        id: event.streamid,
        srcObject: event.stream,
        muted: event.type === "local",
      };
    };

    const onMediaError = (error) => {
      console.log(error.message);
    };

    const onStreamEnded = (event) => {
      console.log("stream ended", event);
      state.value.medias = [null, null, null];
    };

    const onClose = (event) => {
      console.log(event);
      state.value.medias = [null, null, null];
      // if (state.value.participant.isStreaming)
      //   store.sessionMethods.endSessionStream();
    };

    const onEntireSessionClosed = (event) => {
      console.info("Entire session is closed: ", event.sessionid, event.extra);
      state.value.medias = [null, null, null];
      if (state.value.participant.isStreaming)
        store.sessionMethods.endSessionStream();
    };

    //

    const switchMedia = (type) => {
      // console.log('switch to', type)
      state.value.mediaType = mediaTypes[type];
    };

    const toggleCam = (val) => {
      // console.log('toggle cam', state.value.isCamOff)
      const localStream = state.value.connection.attachStreams[0];
      if (state.value.isCamOff) {
        localStream.unmute("video");
        state.value.isCamOff = false;
      } else {
        localStream.mute("video");
        state.value.isCamOff = true;
      }
    };

    const toggleMic = (val) => {
      // console.log('toggle cam', state.value.isMicOff)
      const localStream = state.value.connection.attachStreams[0];
      if (state.value.isMicOff) {
        localStream.unmute("audio");
        state.value.isMicOff = false;
      } else {
        localStream.mute("audio");
        state.value.isMicOff = true;
      }
    };

    const toggleParticipantMedia = (userId, type) => {
      const streamByUserId = connection.streamEvents.selectFirst({
        userid: userId,
      }).stream;
      streamByUserId.mute();
    };

    const setVolume = (val) => {
      state.value.medias[0].srcObject.volume(val);
    };

    const stopStream = () =>
      state.value.connection.attachStreams.forEach((stream) => stream.stop());

    return {
      leaveWorkSpace,
      state,
      store,
      startSession,
      sendMessage,
      // getParticipant,
      uploadFile,
      participants,
      toggleStream,
      switchMedia,
      toggleCam,
      toggleMic,
      setVolume,
      toggleParticipantMedia,
      mediaTypes,
      courseTypes,
      onExit
    };
  },
};
</script>

<style>
</style>
