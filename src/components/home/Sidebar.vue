<template>
  <div class="sidebar p-6 h-full bg-white flex flex-col md:h-full">
    <div class="mb-5 inline-flex">
      <img class="h-8" :src="'public/assets/logo.png'" alt="" />
      <div class="pt-1 inline-flex">
        <span class="ml-3 text-gray-400">|</span>
        <h6 class="text-center text-xs ml-3 text-gray-400 mt-1.5">{{ store.state.establishment.acronym }}</h6>
      </div>
    </div>
    <hr class="mb-3" />
    <div class="flex-grow relative">
      <!-- <ul class="list-none mt-2">
        <li title="Tableau de bord">
          <router-link :to="{ name: 'home' }">
            <div class="
                hover:text-neutral-400
                text-neutral-500
                py-1.5
                rounded-md
                text-sm
                font-medium
                inline-flex
                w-full
              ">
              <span style="font-size:20px;" class="mr-1 material-symbols-outlined">speed</span>
              <span class="">Tableau de bord</span>
            </div>
          </router-link>
        </li>
        <li title="Notifications">
          <router-link :to="{ name: 'notifications' }">
            <div class="
                hover:text-neutral-400
                text-neutral-500
                py-1.5
                rounded-md
                text-sm
                font-medium
                inline-flex
                w-full
              ">
              <span style="font-size:20px;" class="mr-1 material-symbols-outlined">alarm_on</span>
              <span class="">Notifications</span>
            </div>
          </router-link>
        </li>
        <li title="Historique des activités (Logs)">
          <router-link :to="{ name: 'logs' }">
            <div class="
                hover:text-neutral-400
                text-neutral-500
                py-1.5
                rounded-md
                text-sm
                font-medium
                inline-flex
                w-full
              ">
              <span style="font-size:20px;" class="mr-1 material-symbols-outlined">blur_circular</span>
              <span class="">Logs</span>
            </div>
          </router-link>
        </li>
      </ul>
      <ul class="mt-3 list-none">
        <span class="uppercase text-xs font-bold py-2 text-gray-400 mb-6">Menu</span>
        <li title="Liste des etablissemnents">
          <router-link :to="{ name: 'establishments' }">
            <div class="
                hover:text-neutral-400
                text-neutral-500
                py-1.5
                rounded-md
                text-sm
                font-medium
                inline-flex
                w-full
              ">
              <span style="font-size:20px;" class="mr-1 material-symbols-outlined">home_work</span>
              <span class="">Etablissements</span>
            </div>
          </router-link>
        </li>
        <li title="Notre équipe">
          <router-link :to="{ name: 'team' }">
            <div class="
                hover:text-neutral-400
                text-neutral-500
                py-1.5
                rounded-md
                text-sm
                font-medium
                inline-flex
                w-full
              ">
               <span style="font-size:20px;" class="mr-1 material-symbols-outlined">people</span>
              <span class="">Team</span>
            </div>
          </router-link>
        </li>
        <li title="Détails de tous les paiements reçu">
          <router-link :to="{ name: 'payement' }">
            <div class="
                hover:text-neutral-400
                text-neutral-500
                py-1.5
                rounded-md
                text-sm
                font-medium
                inline-flex
                w-full
              ">
              <span style="font-size:20px;" class="mr-1 material-symbols-outlined">credit_score</span>
              <span class="">Paiements</span>
            </div>
          </router-link>
        </li>
        <li title="Backends de chaque établissements">
          <router-link :to="{ name: 'backends' }">
            <div class="
                hover:text-neutral-400
                text-neutral-500
                py-1.5
                rounded-md
                text-sm
                font-medium
                inline-flex
                w-full
              ">
              <span style="font-size:20px;" class="mr-1 material-symbols-outlined">stateful</span>
              <span class="">Backends (API)</span>
            </div>
          </router-link>
        </li>
        <li title="Paramètres générales">
          <button @click="toggleSettings" class="
              hover:text-neutral-400
              text-neutral-500
              py-1.5
              rounded-md
              text-sm
              font-medium
              inline-flex
              w-full
            ">
            <span style="font-size:20px;" class="mr-1 material-symbols-outlined">settings</span>
            <span class="">Paramètres</span>
            <span :class="{ openDropdown: open }" style="font-size: 20px" class="ml-3 material-symbols-outlined">
              expand_more</span>
          </button>
        </li>
        <ul class="list-none pl-6" v-if="open">
          <li title="Les divers plans d'abonnements">
            <router-link :to="{ name: 'categories' }">
              <div class="
                  hover:text-neutral-400
                  text-neutral-500
                  py-1.5
                  rounded-md
                  text-sm
                  font-medium
                  inline-flex
                  w-full
                ">
                <span style="font-size:20px;" class="mr-1 material-symbols-outlined">settings_input_component</span>
                <span class="">Categories / Modules</span>
              </div>
            </router-link>
          </li>
          <li title="Ajouter les pricings">
            <router-link :to="{ name: 'pricing' }">
              <div class="
                  hover:text-neutral-400
                  text-neutral-500
                  py-1
                  rounded-md
                  text-sm
                  font-medium
                  inline-flex
                  w-full
                ">
               <span style="font-size:20px;" class="mr-1 material-symbols-outlined">currency_bitcoin</span>
                <span class="">Pricing</span>
              </div>
            </router-link>
          </li>
          <li title="Ajouter un devise ou un pays">
            <router-link :to="{ name: 'geography' }">
              <div class="
                  hover:text-neutral-400
                  text-neutral-500
                  py-1
                  rounded-md
                  text-sm
                  font-medium
                  inline-flex
                  w-full
                ">
                <span style="font-size:20px;" class="mr-1 material-symbols-outlined">explore</span>
                <span class="">Géographies</span>
              </div>
            </router-link>
          </li>
          <li title="Gérer les frontends">
            <router-link :to="{ name: 'frontend' }">
              <div class="
                  hover:text-neutral-400
                  text-neutral-500
                  py-1
                  rounded-md
                  text-sm
                  font-medium
                  inline-flex
                  w-full
                ">
                <span style="font-size:20px;" class="mr-1 material-symbols-outlined">filter_vintage</span>
                <span class="">Frontends</span>
              </div>
            </router-link>
          </li>
          <li title="Gérer les base de données">
            <router-link :to="{ name: 'database' }">
              <div class="
                  hover:text-neutral-400
                  text-neutral-500
                  py-1
                  rounded-md
                  text-sm
                  font-medium
                  inline-flex
                  w-full
                ">
                <span style="font-size:20px;" class="mr-1 material-symbols-outlined">dns</span>
                <span class="">Base de données</span>
              </div>
            </router-link>
          </li>
        </ul>
      </ul> -->
      <button title="Envoyer un message" @click="openMessageForm = true" class="
          mt-3
          bg-blue-500
          hover:bg-blue-600
          text-white
          h-8
          px-3
          rounded-md
          text-xs
          flex
          justify-center
          items-center
        ">
        <span>Envoyer un message</span>
      </button>
      <div v-if="openMessageForm" class="bg-gray-50 absolute bottom-15 h-auto w-full mt-5 top-80">
        <form @submit.prevent="submitMessageForm" action="#" method="POST">
          <div class="space-y-2 px-3 py-3">
            <div>
              <h5 class="text-sm font-bold">Envoyer un message</h5>
              <hr class="mt-2 mb-3" />
            </div>
            <div>
              <input placeholder="Titre" v-model="messageFormData.title" name="title" type="text" class="
                  text-xs
                  appearance-none
                  rounded-md
                  relative
                  block
                  w-full
                  px-3
                  py-1
                  border border-gray-200
                  placeholder-gray-500
                  text-gray-900
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  focus:z-10
                " />
            </div>
            <div>
              <textarea style="resize: none" placeholder="Votre message" v-model="messageFormData.message"
                name="message" id="" cols="20" rows="5" class="
                  text-xs
                  appearance-none
                  rounded-md
                  relative
                  block
                  w-full
                  px-3
                  py-1
                  border border-gray-200
                  placeholder-gray-500
                  text-gray-900
                  focus:outline-none
                  focus:ring-indigo-500
                  focus:border-indigo-500
                  focus:z-10
                "></textarea>
            </div>
          </div>
          <div class="bg-gray-200 px-4 py-2 sm:px-2 sm:flex sm:flex-row-reverse">
            <button type="submit" title="Envoyer un message à tous" class="
                bg-indigo-500
                text-white
                h-8
                px-3
                rounded-r-md
                text-xs
                flex
                justify-center
                items-center
              ">
              <span>Envoyer</span>
            </button>
            <button ref="cancelButtonRef" @click="openMessageForm = false" type="button" title="Annuler" class="
                bg-gray-100
                h-8
                px-3
                rounded-l-md
                text-xs
                flex
                justify-center
                items-center
              ">
              <span>Annuler</span>
            </button>
          </div>
        </form>
      </div>

    </div>
    <div>
      <div class="">
        <!-- <router-link :to="{ name: 'profile' }"> -->
          <div class="inline-flex">
            <div class="h-8 w-8
                  mt-2
                  bg-gray-800
                  flex
                  text-sm
                  rounded-full
                " aria-expanded="false" aria-haspopup="true">
              <img class="h-full w-full rounded-full object-cover"
                :src=" store.state.uploadUrl + store.state.user.avatar || '../../assets/default-pp.jpg'"
                alt="Photo de profil" />
            </div>
            <div class="pl-2 mt-2">
              <h6 class="text-xs font-medium mt-0.5 text-gray-500">
                {{ store.state.user.lastName }} {{ store.state.user.firstName }}
              </h6>
              <h6 class="text-xs font-base text-gray-400 -mt-1">
                {{ store.state.user.email }}
              </h6>
            </div>
          </div>
        <!-- </router-link> -->
        <hr class="mt-1 mb-3" />
        
        <div class="mt-3">
          <button title="Déconnexion" @click="logout" class="
              border border-red-600
              text-red-500
              hover:text-white hover:bg-red-500
              bg-transparent
              py-1
              px-3
              rounded-md
              text-sm
              font-medium
              inline-flex
            ">
            Déconnexion
          </button>
        </div>
        <h6 class="text-xs mt-2 text-gray-400"> Besoin d'aide ? <a class="hover:underline text-neutral-600 font-medium"
            target="_blank" href="https://t.me/blacksamouraii">Chater maintenant</a> ou appellez le <a
            class="hover:underline text-neutral-600 font-medium" href="tel:22890318830">22890318830</a>.</h6>
        <h6 class="text-xs text-gray-400"> Copyright © 2022 Oreonyx Technologies</h6>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .openDropdown {
    transform: rotate(180deg);
    transition: transform 0.1s;
  }

  .selectedTab {
    color: #4f46e7;
  }
</style>

<script>
  import {
    ref,
    reactive
  } from "vue";

  import router from "../../router";
  import store from "../../store";
  export default {
    name: "Sidebar",

    setup() {
      const open = ref(false);
      const openMessageForm = ref(false);

      const toggleSettings = () => {
        open.value = !open.value;
      };

      let messageFormData = reactive({
        title: null,
        message: null,
      });

      const submitMessageForm = () => {
        store.apiCallMethods.post("publication", messageFormData).then((res) => {
          if (res) {
            alert("message envoyé");
            openMessageForm.value = false;
            messageFormData = reactive({
              title: null,
              message: null,
            });
          }
        });
      };

      const logout = () => {
        store.apiCallMethods.post("auth/logout").then((res) => {
          if (res) {
            store.authMethods.removeSessionCredentials();
            store.methods.storeUser(null);
            store.state.isAuth = false;

            // set request header token temporally
            store.authMethods.setRequestHeaders(null);
            console.log("logout", res.message);
            router.push({
              name: "login",
            });
          }
        });
      };

      return {
        open,
        openMessageForm,
        toggleSettings,
        logout,
        store,
        messageFormData,
        submitMessageForm,
      };
    },
  };
</script>