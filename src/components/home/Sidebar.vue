<template>

  <div class="top-0 fixed sidebar h-full bg-indigo-50 flex flex-col md:h-full border-r">
    <img  class="w-full absolute bottom-0 "
  src="../../../public/assets/illustrations/background.6c3571e0.jpg" alt="Photo de profil">
    <div class="px-6 my-3 inline-flex">
      <img class="h-8" :src="'public/assets/logo.png'" alt="" />
      <div class="pt-1 inline-flex">
        <span class="ml-3 text-gray-400">|</span>
        <h6 class="text-center text-xs ml-3 text-gray-400 mt-1.5">{{ store.state.establishment.acronym }}</h6>
      </div>
    </div>
    <div class="px-6 flex-grow relative">
      <ul class="list-none mt-2">
         <li title="Tableau de bord">
          <router-link :to="{ name: 'schoolyear' }">
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
              <h5 class="text-base">Config/SchoolYear (test link)</h5>
            </div>
          </router-link>
        </li>
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
              <span style="font-size:23px;" class="mr-2 material-icons-outlined text-cyan-600">speed</span>
              <h5 class="text-base">Tableau de bord</h5>
            </div>
          </router-link>
        </li>
        <li title="Communiqués">
          <router-link :to="{ name: 'communications' }">
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
              <span style="font-size:23px;" class="mr-2 material-icons-outlined text-cyan-600">cell_tower</span>
              <h5 class="text-base">Communiqués</h5>
            </div>
          </router-link>
        </li>

        <li title="Agenda">
          <router-link :to="{ name: 'agenda' }">
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
              <span style="font-size:23px;" class="mr-2 material-icons-outlined text-cyan-600">today</span>
              <h5 class="text-base">Agenda</h5>
            </div>
          </router-link>
        </li>
        <li class="hidden" title="Blog">
          <router-link :to="{ name: 'blog' }">
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
              <span style="font-size:23px;" class="mr-2 material-icons-outlined text-cyan-600">style</span>
              <h5 class="text-base">Blog</h5>
            </div>
          </router-link>
        </li>
      </ul>

      <div class="bg-white rounded-2xl p-3 my-4">
        <div>
          <div title="Quelques chiffres" class="cursor-pointer inline-flex text-neutral-500  font-medium">
            <span class="mr-2 material-icons-outlined">
              expand_more
            </span>
            <h6>Chiffres</h6>
          </div>
          <ul class="list-none mt-1">
            <router-link :to="{ name: 'faculties' }">
              <li title="Facultés">
                <div class="
                      hover:text-neutral-400
                      py-1.5
                      rounded-md
                      text-sm
                      font-medium
                      inline-flex
                      w-full
                    ">
                  <img class="h-6 mr-2 -mt-1" :src="'public/assets/icons/tent.png'" alt="" />
                  <h5 class="text-base -mt-0.5">Facultés</h5>
                </div>
              </li>
            </router-link>
            <router-link :to="{ name: 'faculties' }">
              <li title="Spécialités">
                <div class="
                      hover:text-neutral-400
                      py-1.5
                      rounded-md
                      text-sm
                      font-medium
                      inline-flex
                      w-full
                    ">
                  <img class="h-6 mr-2 -mt-1" :src="'public/assets/icons/four-leaf-clover.png'" alt="" />
                  <h5 class="text-base -mt-0.5">Spécialités</h5>
                </div>
              </li>
            </router-link>
            <router-link :to="{ name: 'faculties' }">
              <li title="Unités d'Enseignements">
                <div class="
                      hover:text-neutral-400
                      py-1.5
                      rounded-md
                      text-sm
                      font-medium
                      inline-flex
                      w-full
                    ">
                  <img class="h-6 mr-2 -mt-1" :src="'public/assets/icons/sparkles_2728.png'" alt="" />
                  <h5 class="text-base -mt-0.5 line-clamp-1">U.E</h5>
                </div>
              </li>
            </router-link>
            <li title="Membres">
              <router-link :to="{ name: 'members' }">
                <div class="
                hover:text-neutral-400
                py-1.5
                rounded-md
                text-sm
                font-medium
                inline-flex
                w-full
              ">
                  <img class="h-6 mr-2 -mt-1" :src="'public/assets/icons/members.png'" alt="" />
                  <h5 class="text-base -mt-0.5">Membres</h5>
                </div>
              </router-link>
            </li>
            <li title="Souscriptions">
              <router-link :to="{ name: 'subscription' }">
                <div class="
                        hover:text-neutral-400
                        py-1.5
                        rounded-md
                        text-sm
                        font-medium
                        inline-flex
                        w-full
                      ">
                  <img class="h-6 mr-2 -mt-1" :src="'public/assets/icons/confetti-ball.png'" alt="" />
                  <h5 class="text-base -mt-0.5">Souscriptions</h5>
                </div>
              </router-link>
            </li>
            <li title="Statistiques">
              <router-link :to="{ name: 'statistics' }">
                <div class="
                      hover:text-neutral-400
                      py-1.5
                      rounded-md
                      text-sm
                      font-medium
                      inline-flex
                      w-full
                    ">
                  <img class="h-6 mr-2 -mt-1" :src="'public/assets/icons/fire.png'" alt="" />
                  <h5 class="text-base -mt-0.5">Statistiques</h5>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="bg-white rounded-2xl p-3 my-4">
        <div>
          <div title="Espaces de travail" class="cursor-pointer flex items-start justify-between ">
            <div class="flex justify-start text-neutral-500  font-medium">
              <span class="mr-2 material-icons-outlined">
                expand_more
              </span>
              <h6>Workspaces</h6>
               <div class="text-white px-1.5 bg-gray-600 ml-2 rounded-full flex justify-center items-center">
              <h6 style="font-size:12px">10</h6>
            </div>
            </div>
            <div class="items-center inline-flex relative"></div>
          </div>

          <ul class="list-none mt-1 ">
            <li title="Groupe">
              <div class="
                      py-1.5
                      rounded-md
                      text-sm
                      font-medium
                      inline-flex
                      w-full
                    ">
                <div class="p-0.5 rounded-md">
                  <div class="w-full rounded-xl relative">
                    <div
                      class="text-white absolute -top-2 -left-2 px-1.5 bg-red-600 rounded-full flex justify-center items-center">
                      <h6 style="font-size:12px">10+</h6>
                    </div>
                    <button @click="getWorkSpace()" class="h-8 w-8">
                      <img class="h-8 w-8 object-cover rounded-full ring ring-blue-500 ring-offset-2"
                        src="https://images.pexels.com/photos/11438396/pexels-photo-11438396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="">
                    </button>
                  </div>
                </div>
                <div class="ml-2">
                  <h5 class="text-base">Mathématiques</h5>
                  <h6 class="font-base text-xs -mt-0.5 text-gray-700 line-clamp-1">Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit.</h6>
                </div>

              </div>
            </li>
            <li title="Groupe">
              <div class="
                      py-1.5
                      rounded-md
                      text-sm
                      font-medium
                      inline-flex
                      w-full
                    ">
                <div class="p-0.5 rounded-md">
                  <div class="w-full rounded-xl relative">
                    <div
                      class="text-white absolute -top-2 -left-2 px-1.5 bg-red-600 rounded-full flex justify-center items-center">
                      <h6 style="font-size:12px">10+</h6>
                    </div>
                    <button @click="getWorkSpace()" class="h-8 w-8">
                      <img class="h-8 w-8 object-cover rounded-full ring ring-blue-500 ring-offset-2"
                        src="https://images.pexels.com/photos/11438396/pexels-photo-11438396.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="">
                    </button>
                  </div>
                </div>
                <div class="ml-2">
                  <h5 class="text-base">Anglais</h5>
                  <h6 class="font-base text-xs -mt-0.5 text-gray-700 line-clamp-1">Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit.</h6>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="z-10">
      <!-- <router-link :to="{ name: 'profile' }"> -->
      <div class="inline-flex hidden">
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
      <div class="px-6 pb-3">
        <div title="Aide">
          <router-link :to="{ name: 'blog' }">
            <div class="
                  hover:text-blue-700
                  text-blue-600
                  py-1.5
                  rounded-md
                  text-sm
                  font-medium
                  inline-flex
                  w-full
                ">
              <span class="text-base -mt-0.5 mr-2 material-icons-outlined">face_retouching_natural</span>
              <h5 class="text-sm">Support (Telegram)</h5>
            </div>
          </router-link>
        </div>
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

      <!-- </router-link> -->
      <hr>
      <div class="w-full px-6 py-3 bg-white">
        <div class="inline-flex">
          <router-link :to="{ name: 'statistics' }">
            <div class="mr-2 h-12 w-12 rounded-full border border-gray-300 p-1 relative">
              <div class="absolute bg-white h-5 w-5 right-0 bottom-0 rounded-full flex justify-center items-center">
                <span class="material-icons-outlined text-sm text-gray-600">settings</span>
              </div>
              <img class="h-full w-full rounded-full object-cover"
                :src="'../../../public/assets/default_establishment_pp.png'" alt="Photo de profil" />
            </div>
         </router-link>
          <div>
            <h2 class="text-gray-700 font-bold text-base leading-tight mt-1">
              University One
            </h2>
            <h6 class="text-sm leading-tight text-gray-400">test1@oreonyx.com</h6>
          </div>
        </div>
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

      const getWorkSpace = (workSpaceId) => {
        // request to get it
        //then if res.data show it
        if (store.state.toggleWorkSpace == false) {
          store.state.toggleWorkSpace = true
        }
      }

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
        getWorkSpace,
        logout,
        store,
      };
    },
  };
</script>