<template>
  <div :class="{ 'px-6 py-6': !showCommunicationOverview && !showCommunicationForm }"
    class="w-4/5 2xl:w-10/12 h-full absolute right-0 top-0 ">
    <div v-if="showCommunicationForm" class="absolute z-10  h-full w-full">
      <!-- write communication  v-if="showCommunicationForm" -->
      <div class="relative h-full top-0 left-0 z-10 w-full">
        <div class="z-20 w-full absolute top-0 bg-blue-600 line-clamp text-white px-4 py-2">
          <div class="flex items-start justify-between">
            <div class="flex justify-start">
              <div class="inline-flex mt-1 ">
                <span style="font-size:20px;" class="mr-2 material-symbols-outlined text-white">cell_tower</span>
                <h6 class="font-bold text-sm">Créer un communiqué</h6>
              </div>
            </div>
            <div class="items-center inline-flex space-x-3">
              <button title="Publier cet communiqué" @click="showCommunicationOverview = false"
                class="mt-0.5 bg-white px-3 py-2 rounded-md text-xs text-blue-600 font-medium flex justify-center items-center">
                <h6 class="-mt-0.5">Publier</h6>
              </button>
              <button title="Retour" @click="showCommunicationForm = false"
                class="mt-0.5 hover:bg-blue-500 px-3  rounded-md text-xs text-white font-medium flex justify-center items-center">
                <span class="mr-1 text-base material-symbols-outlined">keyboard_backspace</span>
                <h6 class="-mt-0.5">Retour</h6>
              </button>
            </div>
          </div>
        </div>
        <div class="h-full w-full inline-flex px-8">
          <div style="font-family: 'times New Roman'"
            class="relative w-full px-4 py-24 h-full shadow overflow-hidden overflow-y-auto">
            <div class="w-full inline-flex">
              <div class="w-1/2 relative">
                <div>
                  <div title="Cliquer pour editer" @click="showSenderInformationsForm = true"
                      class="flex group absolute right-16 -top-5 h-6 w-6 shadow rounded-full flex justify-center items-center">
                      <button class="w-full h-full text-white bg-blue-600 rounded-full text-xs font-medium flex justify-center items-center">
                      <span :class="{ 'animate-ping': !showSenderInformationsForm, 'hidden': showSenderInformationsForm }" class="absolute inline-flex h-6 w-6 rounded-full bg-blue-400 opacity-75"></span>
                      <span class="text-xs material-symbols-rounded">
                          edit
                        </span>
                      </button>
                  </div>
                  <div v-if="showSenderInformationsForm" class="text-gray-400 left-0 top-40 bg-white shadow absolute rounded-md w-96 z-10">
                    <div class="px-3 pt-3">
                    <div class="inline-flex w-full">
                      <span class="mr-1 mt-2  material-symbols-outlined">domain</span>
                      <input v-model="communications.communicationFormBody.senderInformations.ministerOffice" name="ministerOffice"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                    </div>
                    <div class="inline-flex w-full">
                      <span class="mr-1 mt-2  material-symbols-outlined">contacts</span>
                      <input v-model="communications.communicationFormBody.senderInformations.department" name="department"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                    </div>
                    <div class="inline-flex w-full">
                      <span class="mr-1 mt-2  material-symbols-outlined">monitor_heart</span>
                      <input v-model="communications.communicationFormBody.senderInformations.subdepartment" name="subdepartment"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                    </div>
                    <div class="inline-flex w-full">
                      <span class="mr-1 mt-2  material-symbols-outlined">pin</span>
                      <input v-model="communications.communicationFormBody.senderInformations.reference" name="reference"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                    </div>
                    </div>
                    <div class="w-full px-3 py-2 border-t mt-2">
                      <div class="flex items-start justify-between">
                        <div class="flex justify-start"></div>
                        <div class="items-center inline-flex space-x-2">
                          <button @click="showSenderInformationsForm = false"
                            class="text-gray-500 hover:bg-gray-100 px-3 py-1 text-xs rounded-md">Annuler</button>
                          <button @click="submitSenderInformations"
                            class="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 text-xs rounded-md">Valider</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="text-center">
                    <div class="">
                     <div class="flex justify-center ">
                         <h6 class="w-2/3  uppercase text-sm leading-tight">
                          {{ communications.communicationFormBody.senderInformations.ministerOffice }} 
                        </h6>
                     </div>
                    <div>
                      <span class="font-bold text-sm">---------</span>
                      <h6 v-if="!communications.communicationFormBody.senderInformations.department" class="uppercase text-sm">
                        DEPARTEMENT ?
                      </h6>
                       <h6 v-if="communications.communicationFormBody.senderInformations.department" class="uppercase text-sm">
                        {{ communications.communicationFormBody.senderInformations.department }}
                      </h6>
                      <span class="font-bold text-sm">---------</span>
                      <h6 v-if="!communications.communicationFormBody.senderInformations.subdepartment" class="font-bold uppercase text-sm">
                        SOUS-DEPARTEMENT ?
                      </h6>
                      <h6 v-if="communications.communicationFormBody.senderInformations.subdepartment" class="font-bold uppercase text-sm">
                        {{ communications.communicationFormBody.senderInformations.subdepartment }}
                      </h6>
                      <h6 class="text-md">
                        N<sup>o</sup> <span>{{ communications.communicationFormBody.senderInformations.reference }}</span>
                      </h6>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-1/2 relative">
                <div>
                  <div title="Cliquer pour editer" @click="showCountryInformationsForm = true"
                      class="flex group absolute right-28 -top-5 h-6 w-6 shadow rounded-full flex justify-center items-center">
                      <button class="w-full h-full text-white bg-blue-600 rounded-full text-xs font-medium flex justify-center items-center">
                      <span :class="{ 'animate-ping': !showCountryInformationsForm, 'hidden': showCountryInformationsForm }" class="absolute inline-flex h-6 w-6 rounded-full bg-blue-400 opacity-75"></span>
                      <span class="text-xs material-symbols-rounded">
                          edit
                        </span>
                      </button>
                  </div>
                  <div v-if="showCountryInformationsForm" class="text-gray-400 left-32 top-28 bg-white shadow absolute rounded-md w-80 z-10">
                    <div class="px-3 pt-3">
                    <div class="inline-flex w-full">
                      <span class="mr-1 mt-2  material-symbols-outlined">flag</span>
                      <input v-model="communications.communicationFormBody.countryInformations.republic" name="republic"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                    </div>
                    <div class="inline-flex w-full">
                      <span class="mr-1 mt-2  material-symbols-outlined">handshake</span>
                      <input v-model="communications.communicationFormBody.countryInformations.motto" name="motto"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                    </div>
                    <div class="inline-flex w-full">
                      <span class="mr-1 mt-2  material-symbols-outlined">corporate_fare</span>
                      <input v-model="communications.communicationFormBody.countryInformations.city" name="city"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                    </div>
                    <div class="inline-flex w-full">
                      <span class="mr-1 mt-2  material-symbols-outlined">today</span>
                      <input v-model="communications.communicationFormBody.countryInformations.date" name="date"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                    </div>
                    </div>
                    <div class="w-full px-3 py-2 border-t mt-2">
                      <div class="flex items-start justify-between">
                        <div class="flex justify-start"></div>
                        <div class="items-center inline-flex space-x-2">
                          <button @click="showCountryInformationsForm = false"
                            class="text-gray-500 hover:bg-gray-100 px-3 py-1 text-xs rounded-md">Annuler</button>
                          <button @click="showCountryInformationsForm = false"
                            class="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 text-xs rounded-md">Valider</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="text-center ">
                    <h6 class="uppercase text-sm leading-tight">
                      {{ communications.communicationFormBody.countryInformations.republic }}
                    </h6>
                    <h6 class="text-sm">
                       {{ communications.communicationFormBody.countryInformations.motto }}
                    </h6>
                    <span class="font-bold text-sm">---------</span>
                    <h6 class="text-sm mt-3">
                       {{ communications.communicationFormBody.countryInformations.city }}, le <code class="m-3 text-red-600 text-xl uppercase"> {{ communications.communicationFormBody.countryInformations.date }}</code>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="pt-24 relative">
              <div>
                  <div title="Cliquer pour editer" @click="showCommunicationContentForm = true"
                      class="flex group absolute left-80 top-32 h-6 w-6 shadow rounded-full flex justify-center items-center">
                      <button class="w-full h-full text-white bg-blue-600 rounded-full text-xs font-medium flex justify-center items-center">
                      <span :class="{ 'animate-ping': !showCommunicationContentForm, 'hidden': showCommunicationContentForm }" class="absolute inline-flex h-6 w-6 rounded-full bg-blue-400 opacity-75"></span>
                      <span class="text-xs material-symbols-rounded">
                          edit
                        </span>
                      </button>
                  </div>
                  <div v-if="showCommunicationContentForm" class="text-gray-400 left-0 top-40 bg-white shadow absolute rounded-md w-full z-10">
                    <div class="px-3 pt-3">
                      <div class="inline-flex w-full">
                        <span class="mr-1 mt-2  material-symbols-outlined">title</span>
                        <input v-model="communications.communicationFormBody.communicationContent.title" name="title"
                          class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs" />
                      </div>
                       <div class="inline-flex w-full">
                        <span class="mr-1 mt-2  material-symbols-outlined">comment</span>
                         <div class="mt-1 w-full">
                          <textarea style="resize: none;" v-model="communications.communicationFormBody.communicationContent.content" id="about" name="about" rows="15" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="you@example.com"></textarea>
                        </div>
                      </div>
                    </div>
                    <div class="w-full px-3 py-2 border-t mt-2">
                      <div class="flex items-start justify-between">
                        <div class="flex justify-start"></div>
                        <div class="items-center inline-flex space-x-2">
                          <button @click="showCommunicationContentForm = false"
                            class="text-gray-500 hover:bg-gray-100 px-3 py-1 text-xs rounded-md">Annuler</button>
                          <button @click="showCommunicationContentForm"
                            class="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 text-xs rounded-md">Valider</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <h6 class="text-center uppercase text-2xl font-bold">{{ communications.communicationFormBody.communicationContent.title }}</h6>
              <div class="mt-10 mx-24 text-xl">
                {{ communications.communicationFormBody.communicationContent.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showCommunicationOverview" class="absolute z-10 h-full w-full bg-white">
      <!-- write communication  v-if="showCommunicationForm" -->
      <div class="relative h-full top-0 left-0 z-10 w-full">
        <div class="w-full absolute top-0 bg-blue-600 line-clamp text-white px-4 py-2">
          <div class="flex items-start justify-between">
            <div class="flex justify-start">
              <div class="inline-flex space-x-1">
                <button title="Ajouter en favoris"
                  class="h-7 w-7 hover:bg-blue-500 rounded-full flex justify-center items-center">
                  <span class="text-sm material-icons-outlined">star_outline</span>
                </button>
                <button title="Partager"
                  class="h-7 w-7 hover:bg-blue-500 rounded-full flex justify-center items-center">
                  <span class="text-sm material-icons-outlined">reply</span>
                </button>
                <button title="Paramètres"
                  class="h-7 w-7 hover:bg-blue-500 rounded-full flex justify-center items-center">
                  <span class="text-sm material-symbols-outlined">settings</span>
                </button>
                <button title="Options supplémentaires"
                  class="h-7 w-7 hover:bg-blue-500 rounded-full flex justify-center items-center">
                  <span class="text-sm material-symbols-outlined">more_horiz</span>
                </button>
              </div>

            </div>
            <div class="items-center inline-flex">
              <button title="Retour" @click="showCommunicationOverview = false"
                class="mt-0.5 hover:bg-blue-500 px-3  rounded-md text-xs text-white font-medium flex justify-center items-center">
                <span class="mr-1 text-base material-symbols-outlined">keyboard_backspace</span>
                <h6 class="-mt-0.5">Retour</h6>
              </button>
            </div>
          </div>
        </div>
        <div class="h-full w-full inline-flex px-8">
          <div style="font-family: 'times New Roman'"
            class="w-full px-4 py-24 h-full shadow overflow-hidden overflow-y-auto">
            <div class="w-full inline-flex">
              <div class="w-1/2 ">
                <div>
                  <div class="text-center ">
                    <h6 class="uppercase text-sm leading-tight">
                      Ministere de l'enseignement supérieur <br>
                      et de la recherche
                    </h6>
                    <span class="font-bold text-sm">---------</span>
                    <h6 class="uppercase text-sm">
                      Secretariat Géneral
                    </h6>
                    <span class="font-bold text-sm">---------</span>
                    <h6 class="font-bold uppercase text-sm">
                      Direction des bourses et stages
                    </h6>

                    <h6 class="text-md">
                      N<sup>o</sup> <i>254</i>/<span>/2022/MESR/SG/DBS</span>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="w-1/2">
                <div>
                  <div class="text-center ">
                    <h6 class="uppercase text-sm leading-tight">
                      Republique Togolaise
                    </h6>
                    <h6 class="text-sm">
                      Travail-Liberté-Patrie
                    </h6>
                    <span class="font-bold text-sm">---------</span>
                    <h6 class="text-sm mt-3">
                      Lomé, le <code class="m-3 text-red-600 text-xl uppercase">22 juin 2022</code>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="pt-24">
              <h6 class="text-center uppercase text-2xl font-bold">Communiqué</h6>
              <div class="mt-10 mx-24 text-xl">
                <p>Le ministre de l'enseignement supérieur et de la recherche communnique:</p>
                <p>La République de l'Inde annonce des places de bourses d'études ICCR pour les jeunes togolais dans le
                  cadre
                  du programme de bourses pour l'Afrique dans les universités/instuts indiens pour l'année académique
                  2022-2023.
                </p>
                <p>
                  Les candidatures des étudiants intéréssés sont soliicités via le portail A2A
                  A Scholarship de l'ICCR <a class="underline font-bold">http://a2asholarships.iccr.gov.in</a>
                  jusqu'au 19 mai 2022.
                </p>
              </div>
              <div class="mt-10 mx-24 text-xl">
                <p>Le ministre de l'enseignement supérieur et de la recherche communnique:</p>
                <p>La République de l'Inde annonce des places de bourses d'études ICCR pour les jeunes togolais dans le
                  cadre
                  du programme de bourses pour l'Afrique dans les universités/instuts indiens pour l'année académique
                  2022-2023.
                </p>
                <p>
                  Les candidatures des étudiants intéréssés sont soliicités via le portail A2A
                  A Scholarship de l'ICCR <a class="underline font-bold">http://a2asholarships.iccr.gov.in</a>
                  jusqu'au 19 mai 2022.
                </p>
              </div>
              <div class="mt-10 mx-24 text-xl">
                <p>Le ministre de l'enseignement supérieur et de la recherche communnique:</p>
                <p>La République de l'Inde annonce des places de bourses d'études ICCR pour les jeunes togolais dans le
                  cadre
                  du programme de bourses pour l'Afrique dans les universités/instuts indiens pour l'année académique
                  2022-2023.
                </p>
                <p>
                  Les candidatures des étudiants intéréssés sont soliicités via le portail A2A
                  A Scholarship de l'ICCR <a class="underline font-bold">http://a2asholarships.iccr.gov.in</a>
                  jusqu'au 19 mai 2022.
                </p>
              </div>
              <div class="mt-10 mx-24 text-xl">
                <p>Le ministre de l'enseignement supérieur et de la recherche communnique:</p>
                <p>La République de l'Inde annonce des places de bourses d'études ICCR pour les jeunes togolais dans le
                  cadre
                  du programme de bourses pour l'Afrique dans les universités/instuts indiens pour l'année académique
                  2022-2023.
                </p>
                <p>
                  Les candidatures des étudiants intéréssés sont soliicités via le portail A2A
                  A Scholarship de l'ICCR <a class="underline font-bold">http://a2asholarships.iccr.gov.in</a>
                  jusqu'au 19 mai 2022.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- read communication -->
    <div v-if="showCommunicationOverview" style="height:calc(100vh - 70px)"
      class="hidden bg-white space-y-3 pb-2 absolute h-full top-0 left-0 z-10 w-full">
      <div class="inline-flex">
        <div class="w-1/12">
          <button title="retour" @click="goBackFromCommunicationOverview"
            class="bg-gray-100 flex justify-center items-center rounded-full h-12 w-12">
            <span class="material-symbols-outlined">arrow_back</span>
          </button>
        </div>
        <div class="w-11/12">
          <div class="">
            <h4 title="Nouveau programe du semestre à l'attention des étudiants de l'ENSI"
              class="text-xl font-bold leading-tight">Nouveau programme du semestre à l'attention des
              étudiants de l'ENSI</h4>
            <div class="my-3 inline-flex w-full">
              <div class="mr-2 h-6 w-6 bg-gray-100 rounded-full">
                <img class="h-full w-full rounded-full object-cover"
                  :src="'https://images.pexels.com/photos/12082493/pexels-photo-12082493.jpeg?cs=srgb&dl=pexels-elena-rubtsova-12082493.jpg&fm=jpg'"
                  alt="Photo de profil" />
              </div>
              <h5 class="text-sm line-clamp-1 mt-0.5">Da'Silvera Jeremie</h5>
              <span class="text-sm text-blue-600 ml-1 mt-0.5 material-symbols-rounded">verified</span>
              <span class="text-sm ml-2 mt-0.5">- Il y'a 3h</span>
            </div>
            <h5 class="text-gray-500 text-base space-y-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate debitis voluptatem,
                eveniet
                saepe
                assumenda dicta corporis voluptatum a harum rem dolorem illo alias aperiam libero fugit,
                inventore
                odio
                distinctio error!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nam ex. Fuga voluptates, quia
                sequi
                beatae
                reprehenderit tempora modi soluta tempore assumenda, maxime distinctio. Unde perspiciatis
                deleniti
                doloremque ratione pariatur.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate debitis voluptatem,
                eveniet
                saepe
                assumenda dicta corporis voluptatum a harum rem dolorem illo alias aperiam libero fugit,
                inventore
                odio
                distinctio error!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nam ex. Fuga voluptates, quia
                sequi
                beatae
                reprehenderit tempora modi soluta tempore assumenda, maxime distinctio. Unde perspiciatis
                deleniti
                doloremque ratione pariatur.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate debitis voluptatem,
                eveniet
                saepe
                assumenda dicta corporis voluptatum a harum rem dolorem illo alias aperiam libero fugit,
                inventore
                odio
                distinctio error!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nam ex. Fuga voluptates, quia
                sequi
                beatae
                reprehenderit tempora modi soluta tempore assumenda, maxime distinctio. Unde perspiciatis
                deleniti
                doloremque ratione pariatur.
              </p>
            </h5>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!showCommunicationForm">
      <div class="inline-flex w-full">
        <div class="flex rounded-md shadow-sm w-full">
          <span
            class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-white text-gray-500 text-sm">
            <span class="material-symbols-outlined">search</span>
          </span>
          <input type="text" name="company-website" id="company-website"
            class="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
            placeholder="Rechercher des communiqués...">
        </div>
        <button type="submit"
          class="ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Rechercher</button>
      </div>
      <div class="mt-3">
        <h6 class="text-sm text-blue-600 font-bold mb-1">Termes les plus recherchés</h6>
        <div class="w-full inline-flex space-x-2">
          <button title="Cliquer pour rechercher"
            class="bg-gray-100 text-sm text-gray-400 rounded-full px-4 pb-0.5">Fireboy</button>
          <button title="Cliquer pour rechercher"
            class="bg-gray-100 text-sm text-gray-400 rounded-full px-4 pb-0.5">Rema</button>
          <button title="Cliquer pour rechercher"
            class="bg-gray-100 text-sm text-gray-400 rounded-full px-4 pb-0.5">Victony</button>
          <button title="Cliquer pour rechercher"
            class="bg-gray-100 text-sm text-gray-400 rounded-full px-4 pb-0.5">SpyceBoy</button>
          <button title="Cliquer pour rechercher"
            class="bg-gray-100 text-sm text-gray-400 rounded-full px-4 pb-0.5">Burna
            boy</button>
          <button title="Cliquer pour rechercher"
            class="bg-gray-100 text-sm text-gray-400 rounded-full px-4 pb-0.5">Lojay</button>
          <button title="Cliquer pour rechercher"
            class="bg-gray-100 text-sm text-gray-400 rounded-full px-4 pb-0.5">Wizkid</button>
          <button title="Cliquer pour rechercher"
            class="bg-gray-100 text-sm text-gray-400 rounded-full px-4 pb-0.5">Davido</button>
        </div>
      </div>
      <hr class="my-6">
      <div class="mb-5">
        <div class="h-full flex-grow inline-flex w-full">
          <div class="w-full h-full">
            <div class="flex items-start justify-between ">
              <div class="flex justify-start">
                <div class="mb-3">
                  <h1 class="text-base font-bold">Très important</h1>
                  <h6 class="text-gray-400">
                    Veuillez prendre connaissance de tous les communiqués ci-dessous épinglés
                  </h6>
                </div>
              </div>
              <div class="items-center inline-flex">
              </div>
            </div>
            <div class="">
              <div class="grid grid-cols-6 gap-4">
                <div class="cursor-pointer transform hover:-translate-y-1 relative">
                  <button
                    class="flex justify-center items-center hover:bg-teal-100 h-8 w-8 rounded-md absolute top-2 right-2 transition-all"
                    title="Epinglé par l'administrateur principal">
                    <span class="text-teal-600 material-symbols-rounded">
                      stars
                    </span>
                  </button>
                  <div class="bg-white rounded-lg h-52 w-full shadow">
                    <img class="object-cover h-full w-full rounded-lg" :src="'public/assets/816274862.jpg'"
                      alt="Image du communiqué">
                  </div>
                  <div class="mt-2">
                    <h6 class="line-clamp-1">Thinkers Notes</h6>
                    <h6 class="-mt-1 text-sm text-gray-400">Ouvert, Il y'a 15 min</h6>
                  </div>
                </div>
                <div class="transform hover:-translate-y-1">
                  <div class="bg-gray-50 rounded-lg h-52 w-full">
                  </div>
                  <div class="mt-2">
                    <div class="h-4 w-10/12 bg-gray-50 rounded-full mt-3"></div>
                    <div class="h-3 w-11/12 bg-gray-50 rounded-full mt-1"></div>
                  </div>
                </div>
                <div class="transform hover:-translate-y-1">
                  <div class="bg-gray-50 rounded-lg h-52 w-full">
                  </div>
                  <div class="mt-2">
                    <div class="h-4 w-10/12 bg-gray-50 rounded-full mt-3"></div>
                    <div class="h-3 w-11/12 bg-gray-50 rounded-full mt-1"></div>
                  </div>
                </div>
                <div class="transform hover:-translate-y-1">
                  <div class="bg-gray-50 rounded-lg h-52 w-full">
                  </div>
                  <div class="mt-2">
                    <div class="h-4 w-10/12 bg-gray-50 rounded-full mt-3"></div>
                    <div class="h-3 w-11/12 bg-gray-50 rounded-full mt-1"></div>
                  </div>
                </div>
                <div class="transform hover:-translate-y-1">
                  <div class="bg-gray-50 rounded-lg h-52 w-full">
                  </div>
                  <div class="mt-2">
                    <div class="h-4 w-10/12 bg-gray-50 rounded-full mt-3"></div>
                    <div class="h-3 w-11/12 bg-gray-50 rounded-full mt-1"></div>
                  </div>
                </div>
                <div class="transform hover:-translate-y-1">
                  <div class="bg-gray-50 rounded-lg h-52 w-full">
                  </div>
                  <div class="mt-2">
                    <div class="h-4 w-10/12 bg-gray-50 rounded-full mt-3"></div>
                    <div class="h-3 w-11/12 bg-gray-50 rounded-full mt-1"></div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="my-6">
            <div class="mt-6 mb-5">
              <div class="flex items-start justify-between ">
                <div class="flex justify-start">
                  <div class="mb-3">
                    <h1 class="text-base font-bold">Communiqués officiel</h1>
                    <h6 class="text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, suscipit eo !
                    </h6>
                  </div>
                </div>
                <div class="items-center inline-flex">
                  <div title="Créer un communiquer" @click="showCommunicationForm = true"
                    class="-mt-1 h-7 w-7 bg-white shadow rounded-full flex justify-center items-center">
                    <button class="rounded-full text-xs text-blue-600 font-medium flex justify-center items-center">
                      <span class="text-xl material-symbols-rounded">
                        add_circle
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="w-full inline-flex space-x-2 mb-3">
                <button title="Boîte de réception"
                  class="text-sm bg-blue-600 text-white rounded-full px-4 pb-0.5 inline-flex">
                  <span class="mr-1 -mt-1 text-lg material-symbols-outlined">
                    upcoming
                  </span>
                  <h6 class="mt-0.5">Boîte de réception </h6>
                </button>
                <button title="Non lus" class="text-sm bg-gray-100 text-gray-400 rounded-full px-4 pb-0.5 inline-flex">
                  <h6 class="mt-0.5">Non lus</h6>
                </button>
                <button title="Favoris" class="text-sm bg-gray-100 text-gray-400 rounded-full px-4 pb-0.5 inline-flex">
                  <h6 class="mt-0.5">Favoris</h6>
                </button>
                <button title="Brouillons" class="text-sm bg-gray-100 text-gray-400 rounded-full px-4 pb-0.5 inline-flex">
                  <h6 class="mt-0.5">Brouillons</h6>
                </button>
              </div>
              <div class="bg-white rounded-xl py-3">
                <div class="px-3 inline-flex py-2 hover:shadow">
                  <div @click="proceedShowCommunicationOverview" class="hidden cursor-pointer border-b">
                    <div class="inline-flex w-full relative">
                      <div class="h-2 w-2 absolute rounded-full bg-red-600 text-white text-xs right-0"></div>
                      <div class="mr-2 h-6 w-6 bg-gray-100 rounded-full">
                        <img class="h-full w-full rounded-full object-cover"
                          :src="'https://images.pexels.com/photos/12082493/pexels-photo-12082493.jpeg?cs=srgb&dl=pexels-elena-rubtsova-12082493.jpg&fm=jpg'"
                          alt="Photo de profil" />
                      </div>
                      <h5 class="text-sm line-clamp-1 mt-0.5">Da'Silvera Jeremie</h5>
                      <span class="text-sm text-blue-600 ml-1 mt-0.5 material-symbols-rounded">verified</span>
                      <span class="text-sm ml-2 mt-0.5">- Il y'a 3h</span>
                    </div>
                    <h5 class="text-gray-500 text-sm line-clamp-2 -mt-1 ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptates deleniti molestias
                      similique pariatur cumque corporis maxime error aperiam totam! Libero blanditiis dolorum
                      iste repudiandae accusantium totam ea aliquid obcaecati!.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio modi neque, iusto
                      libero quidem pariatur iure fugit nulla, nisi velit odit maxime veritatis rem, error saepe.
                      Aspernatur modi tenetur quia?
                    </h5>
                  </div>
                  <div class="inline-flex w-10/12 cursor-pointer space-x-4">
                    <div class="inline-flex h-5 mt-0.5">
                      <input id="comments" name="comments" type="checkbox"
                        class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded">
                    </div>
                    <div class="">
                      <h5 class="text-sm line-clamp-1 font-bold">John Doe</h5>
                    </div>
                    <div @click="proceedShowCommunicationOverview" class="inline-flex w-full relative">
                      <h5 class="text-sm line-clamp-1 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Quos vel aut, laboriosam dicta, repudiandae labore cumque nobis doloribus enim, et
                        molestias delectus vitae odit? Deleniti consequatur voluptatem unde beatae ullam.</h5>
                    </div>
                  </div>
                  <div class="inline-flex w-2/12 relative">
                    <div class="absolute inline-flex space-x-2 right-0 ">
                      <button
                        class="-mt-0.5 flex justify-center items-center hover:bg-gray-100 h-6 w-6 rounded-md transition-all"
                        title="Ajouter au favoris">
                        <span class="text-sm material-icons-outlined">
                          star_outline
                        </span>
                      </button>
                      <h5 class="text-sm line-clamp-1">15 Juin</h5>
                      <div class="h-2 w-2 rounded-full bg-red-600 text-white text-xs"></div>
                    </div>
                  </div>
                </div>
                <hr>
                <div class="px-3 inline-flex py-2 hover:shadow">
                  <div @click="proceedShowCommunicationOverview" class="hidden cursor-pointer border-b">
                    <div class="inline-flex w-full relative">
                      <div class="h-2 w-2 absolute rounded-full bg-red-600 text-white text-xs right-0"></div>
                      <div class="mr-2 h-6 w-6 bg-gray-100 rounded-full">
                        <img class="h-full w-full rounded-full object-cover"
                          :src="'https://images.pexels.com/photos/12082493/pexels-photo-12082493.jpeg?cs=srgb&dl=pexels-elena-rubtsova-12082493.jpg&fm=jpg'"
                          alt="Photo de profil" />
                      </div>
                      <h5 class="text-sm line-clamp-1 mt-0.5">Da'Silvera Jeremie</h5>
                      <span class="text-sm text-blue-600 ml-1 mt-0.5 material-symbols-rounded">verified</span>
                      <span class="text-sm ml-2 mt-0.5">- Il y'a 3h</span>
                    </div>
                    <h5 class="text-gray-500 text-sm line-clamp-2 -mt-1 ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptates deleniti molestias
                      similique pariatur cumque corporis maxime error aperiam totam! Libero blanditiis dolorum
                      iste repudiandae accusantium totam ea aliquid obcaecati!.
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio modi neque, iusto
                      libero quidem pariatur iure fugit nulla, nisi velit odit maxime veritatis rem, error saepe.
                      Aspernatur modi tenetur quia?
                    </h5>
                  </div>
                  <div class="inline-flex w-10/12 cursor-pointer space-x-4">
                    <div class="inline-flex h-5 mt-0.5">
                      <input id="comments" name="comments" type="checkbox"
                        class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded">
                    </div>
                    <div class="">
                      <h5 class="text-sm line-clamp-1 font-bold">John Doe</h5>
                    </div>
                    <div @click="proceedShowCommunicationOverview" class="inline-flex w-full relative">
                      <h5 class="text-sm line-clamp-1 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Quos vel aut, laboriosam dicta, repudiandae labore cumque nobis doloribus enim, et
                        molestias delectus vitae odit? Deleniti consequatur voluptatem unde beatae ullam.</h5>
                    </div>
                  </div>
                  <div class="inline-flex w-2/12 relative">
                    <div class="absolute inline-flex space-x-2 right-0 ">
                      <button
                        class="-mt-0.5 flex justify-center items-center hover:bg-gray-100 h-6 w-6 rounded-md transition-all"
                        title="Ajouter au favoris">
                        <span class="text-sm material-icons-outlined">
                          star_outline
                        </span>
                      </button>
                      <h5 class="text-sm line-clamp-1">15 Juin</h5>
                      <div class="h-2 w-2 rounded-full bg-red-600 text-white text-xs"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    ref
  } from 'vue'

  export default {
    name: "Agenda",

    setup() {
      const showCommunicationForm = ref(false)
      const showCommunicationOverview = ref(false)
      const showSenderInformationsForm = ref(false)
      const showCountryInformationsForm = ref(false)
      const showCommunicationContentForm = ref(false)

      const submitCommunicationForm = () => {
        showCommunicationForm.value = false
      }

      const goBackFromCommunicationOverview = () => {
        showCommunicationOverview.value = false
      }

      const proceedShowCommunicationOverview = () => {
        showCommunicationOverview.value = true
      }

      const communications = ref ({
          list: {},
          communicationFormBody: {
              senderInformations: {
                ministerOffice : "Ministère de l'Enseignement Supérieur et de la Recherche",
                department: "Secrétariat Général",
                subdepartment: "Direction des Bourses et Stages",
                reference: "254/2022/MESR/SG/DBS"
              },
              countryInformations: {
                republic: "Republique Togolaise",
                motto: "Travail-Liberté-Patrie",
                city: "Lomé",
                date: "24 Juin 2022"
              },
              communicationContent: {
                title: "Communiqué",
                content: "Contenu de votre communiqué ...",
                headName: "",
                signature: "",
                pad: "",
              },
          }
      })

      const submitSenderInformations = () => {
        store.apiCallMethods.post('/link', data).then(
          (res) => {
            if (res) {
              console.log('response', res)
              //communicationFormBody.senderInformations.value = res.data
            }
          })
      }

      const submitCountryInformations = () => {
        store.apiCallMethods.post('/link', data).then(
          (res) => {
            if (res) {
              console.log('response', res)
              //communicationFormBody.countryInformations.value = res.data
            }
          })
      }

      const submitCommunicationContent = () => {
        store.apiCallMethods.post('/link', data).then(
          (res) => {
            if (res) {
              console.log('response', res)
              //communicationFormBody.communicationContent.value = res.data
            }
          })
      }

      const getCommunications = () => {
        store.apiCallMethods.get('/link').then(
          (res) => {
            if (res) {
              console.log('response', res)
              //communicationFormBody.communicationContent.value = res.data
            }
          })
      }

      return {
        showCommunicationForm,
        submitCommunicationForm,
        showCommunicationOverview,
        proceedShowCommunicationOverview,
        goBackFromCommunicationOverview,
        showSenderInformationsForm,
        showCountryInformationsForm,
        showCommunicationContentForm,
        submitSenderInformations,
        submitCountryInformations,
        submitCommunicationContent,
        communications
      };
    },
  };
</script>