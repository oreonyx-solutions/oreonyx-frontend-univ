<template>
  <div class="my-4">
    <div class="chat-message" v-if="received">
      <div class="flex gap-2 text-sm b-2">
        <div class="w-8 h-8 rounded-full">
          <img
            :src="
              participant?.avatar ||
              '../../../public/assets/default_establishment_pp.png'
            "
            alt=""
          />
        </div>
        <div>
          <h2 class="">{{ participant?.name }}</h2>
          <h5 class="text-[0.6em]  text-left text-gray-500">
            {{ createdAt }}
          </h5>
        </div>
      </div>
      <div class="flex items-end">
        <div
          class="
            flex flex-col
            space-y-2
            text-xs
            max-w-[200px]
            mx-2
            order-2
            items-start
          "
        >
          <span
            class="
              px-4
              py-2
              rounded-2xl
              inline-block
              rounded-bl-none
              bg-gray-300
              text-gray-600
            "
          >
            {{ message?.text }}
          </span>
        </div>
      </div>
    </div>
    <div class="chat-message" v-else>
      <div class="flex items-end justify-end">
        <div
          class="flex flex-col space-y-2 text-xs max-w-[200px] mx-2 items-end"
        >
          <div>
            <span
              class="
                px-4
                py-2
                rounded-2xl
                inline-block
                rounded-br-none
                bg-blue-600
                text-white
              "
            >
              {{ message?.text }}
              <div class="flex gap-2 justify-end">
                <h5 class="text-[0.8em] text-gray-300 text-right">
                  {{ createdAt }}
                </h5>
              </div>
            </span>
          </div>
        </div>
        <!-- <div class="w-6 h-6 rounded-full">
          <img
            :src="
              participant?.avatar ||
              '../../../public/assets/default_establishment_pp.png'
            "
            alt=""
          />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineProps } from "vue";
import store from "@/store";

export default {
  name: "Message",
  props: ["message", "participant"],
  setup({ message, participant }) {
    const received = computed(() => store.state.user.id != message.userId);
    const createdAt = computed(() =>
      new Date(message.createdAt).toLocaleTimeString()
    );
    return {
      message,
      participant,
      received,
      createdAt,
    };
  },
};
</script>
