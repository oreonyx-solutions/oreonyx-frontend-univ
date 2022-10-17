<template>
  <div class="z-50 w-full h-full flex items-center justify-center gap-16">
    <div class="grid grid-cols-3 gap-10">
      <button class="text-center" @click="$emit('setVolume')">
        <div>
          <span v-if="!volume" class="material-symbols-outlined text-red-500">
            volume_off
          </span>
          <div class="relative" v-else>
            <span class="absolute top-0 right-0 text-xs">{{ volume }}</span>
            <span class="material-symbols-outlined"> volume_up </span>
          </div>
        </div>
        <!-- <span>Volume</span> -->
      </button>
      <button class="text-center" @click="$emit('toggleMic')">
        <span class="text-red-500 material-symbols-outlined" v-if="isMicOff"
          >mic_off</span
        >
        <span class="text-gray-500 material-symbols-outlined" v-else>mic</span>
      </button>
      <button class="text-center" @click="$emit('toggleCam')">
        <span class="text-red-500 material-symbols-outlined" v-if="isCamOff"
          >videocam_off</span
        >
        <span class="text-gray-500 material-symbols-outlined" v-else
          >videocam</span
        >
      </button>
    </div>
    <div>
      <button
        @click="$emit('toggleStream')"
        :class="{
          'rounded-full w-12 h-12 flex justify-center items-center text-white': true,
          'bg-red-500': isStreaming,
          'bg-green-500': !isStreaming,
        }"
      >
        <span v-if="isStreaming" class="material-symbols-outlined">stop</span>
        <span v-else class="material-symbols-outlined">play_arrow</span>
      </button>
    </div>
    <div class="grid grid-cols-3 gap-10">
      <button
        @click="$emit('switchMedia', 0)"
        :class="{ 'text-lg': true, 'text-blue-500': mediaType == 'video' }"
      >
        <span class="material-symbols-outlined"> cinematic_blur </span>
      </button>
      <button
        @click="$emit('switchMedia', 1)"
        :class="{ 'text-lg': true, 'text-blue-500': mediaType == 'screen' }"
      >
        <span class="material-symbols-outlined"> screen_share </span>
      </button>
      <button
        @click="$emit('switchMedia', 2)"
        :class="{ 'text-lg': true, 'text-blue-500': mediaType == 'board' }"
      >
        <span class="material-symbols-outlined"> note_alt </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["mediaType", "isStreaming", "isMicOff", "isCamOff", "volume"],
  setup() {},
};
</script>