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
                <h6 class="font-bold text-sm">Création du communiqué</h6>
              </div>
            </div>
            <div class="items-center inline-flex">
              <div class="space-x-2 inline-flex mr-12 ">
                <button title="Publier cet communiqué" @click="sendStatement()"
                  class="shadow-xl mt-0.5 bg-white px-3 py-2 rounded-md text-xs text-blue-600 font-medium flex justify-center items-center">
                  <h6 class="-mt-0.5">Publier</h6>
                </button>
                <div class="space-x-0.5 inline-flex">
                  <button title="Afficher un aperçu" @click="showCommunicationOverview = false"
                    class="mt-0.5 hover:bg-blue-500 px-2 py-1 rounded-full text-xs text-white font-medium flex justify-center items-center">
                    <span class="text-sm material-icons-outlined">visibility</span>
                  </button>
                  <button title="Options supplémentaires" @click="showCommunicationOverview = false"
                    class="mt-0.5 hover:bg-blue-500 px-2 py-1 rounded-full text-xs text-white font-medium flex justify-center items-center">
                    <span class="text-sm material-icons-outlined">more_vert</span>
                  </button>
                </div>
              </div>
              <button title="Retour" @click="showCommunicationForm = false"
                class="mt-0.5 hover:bg-blue-500 px-2 py-1 rounded-full text-xs text-white font-medium flex justify-center items-center">
                <span class="text-sm material-icons-outlined">close</span>
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
                  <div class="text-center">
                    <div class="">
                      <h6 v-if="!communications.ministerOfficeState"
                        class="w-2/3 uppercase text-sm leading-tight inline-flex">
                        {{ communications.communicationFormBody.senderInformations.ministerOffice }}
                      </h6>
                      <div class="w-full space-x-2 flex justify-center">
                        <div v-if="communications.ministerOfficeState" class="inline-flex w-2/3 space-x-1">
                          <div class="w-10/12">
                            <input v-model="communications.communicationFormBody.senderInformations.ministerOffice"
                              name="ministerOffice"
                              class="w-full block py-2 px-3 border border-gray-300 bg-white  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 " />
                          </div>
                          <button title="valider" @click="communications.ministerOfficeState = false"
                            class="text-white bg-teal-600 hover:bg-teal-700 h-10 w-10 flex justify-center items-center">
                            <span class="material-symbols-outlined">
                              check
                            </span>
                          </button>
                          <button title="Annuler" @click="communications.ministerOfficeState = false"
                            class="text-gray-400 bg-gray-200 hover:bg-gray-300  h-10 w-10 flex justify-center items-center">
                            <span class="material-symbols-outlined">
                              close
                            </span>
                          </button>
                        </div>
                      </div>
                      <div v-if="!communications.ministerOfficeState" class="flex justify-center">
                        <button @click="communications.ministerOfficeState = true"
                          class="w-6 h-6 text-gray-500 bg-gray-100 rounded-full text-xs font-medium flex justify-center items-center">
                          <span class="text-xs material-symbols-rounded">
                            edit
                          </span>
                        </button>
                      </div>
                      <div>
                        <span class="font-bold text-sm">---------</span>
                        <div class="">
                          <h6 v-if="!communications.communicationFormBody.senderInformations.department"
                            class="uppercase text-sm">
                            DEPARTEMENT ?
                          </h6>
                          <h6 v-if="!communications.departmentState"
                            class="text-center uppercase text-sm leading-tight inline-flex">
                            {{ communications.communicationFormBody.senderInformations.department }}
                          </h6>
                          <div class="w-full space-x-2 flex justify-center">
                            <div v-if="communications.departmentState" class="inline-flex w-2/3 space-x-1">
                              <div class="w-10/12">
                                <input v-model="communications.communicationFormBody.senderInformations.department"
                                  name="ministerOffice"
                                  class="w-full block py-2 px-3 border border-gray-300 bg-white  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 " />
                              </div>
                              <button title="valider" @click="communications.departmentState = false"
                                class="text-white bg-teal-600 hover:bg-teal-700 h-10 w-10 flex justify-center items-center">
                                <span class="material-symbols-outlined">
                                  check
                                </span>
                              </button>
                              <button title="Annuler" @click="communications.departmentState = false"
                                class="text-gray-400 bg-gray-200 hover:bg-gray-300  h-10 w-10 flex justify-center items-center">
                                <span class="material-symbols-outlined">
                                  close
                                </span>
                              </button>
                            </div>
                          </div>
                          <div v-if="!communications.departmentState" class="flex justify-center">
                            <button @click="communications.departmentState = true"
                              class="w-6 h-6 text-gray-500 bg-gray-100 rounded-full text-xs font-medium flex justify-center items-center">
                              <span class="text-xs material-symbols-rounded">
                                edit
                              </span>
                            </button>
                          </div>
                        </div>
                        <span class="font-bold text-sm">---------</span>
                        <div>
                          <h6 v-if="!communications.communicationFormBody.senderInformations.subdepartment"
                            class="text-bold uppercase text-sm">
                            SOUS-DEPARTEMENT ?
                          </h6>
                          <h6 v-if="!communications.subdepartmentState"
                            class="text-center uppercase text-sm leading-tight inline-flex font-bold">
                            {{ communications.communicationFormBody.senderInformations.subdepartment }}
                          </h6>
                          <div class="w-full space-x-2 flex justify-center">
                            <div v-if="communications.subdepartmentState" class="inline-flex w-2/3 space-x-1">
                              <div class="w-10/12">
                                <input v-model="communications.communicationFormBody.senderInformations.subdepartment"
                                  name="ministerOffice"
                                  class="w-full block py-2 px-3 border border-gray-300 bg-white  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 " />
                              </div>
                              <button title="valider" @click="communications.subdepartmentState = false"
                                class="text-white bg-teal-600 hover:bg-teal-700 h-10 w-10 flex justify-center items-center">
                                <span class="material-symbols-outlined">
                                  check
                                </span>
                              </button>
                              <button title="Annuler" @click="communications.subdepartmentState = false"
                                class="text-gray-400 bg-gray-200 hover:bg-gray-300  h-10 w-10 flex justify-center items-center">
                                <span class="material-symbols-outlined">
                                  close
                                </span>
                              </button>
                            </div>
                          </div>
                          <div v-if="!communications.subdepartmentState" class="flex justify-center">

                            <button @click="communications.subdepartmentState = true"
                              class="w-6 h-6 text-gray-500 bg-gray-100 rounded-full text-xs font-medium flex justify-center items-center">
                              <span class="text-xs material-symbols-rounded">
                                edit
                              </span>
                            </button>

                          </div>
                        </div>

                        <div>
                          <h6 v-if="!communications.referenceState" class="text-md">
                            N<sup>o</sup>
                            <span>{{ communications.communicationFormBody.senderInformations.reference }}</span>
                          </h6>
                          <div class="w-full space-x-2 flex justify-center">
                            <div v-if="communications.referenceState" class="inline-flex w-2/3 space-x-1">
                              <div class="w-10/12">
                                <input v-model="communications.communicationFormBody.senderInformations.reference"
                                  name="ministerOffice"
                                  class="w-full block py-2 px-3 border border-gray-300 bg-white  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 " />
                              </div>
                              <button title="valider" @click="communications.referenceState = false"
                                class="text-white bg-teal-600 hover:bg-teal-700 h-10 w-10 flex justify-center items-center">
                                <span class="material-symbols-outlined">
                                  check
                                </span>
                              </button>
                              <button title="Annuler" @click="communications.referenceState = false"
                                class="text-gray-400 bg-gray-200 hover:bg-gray-300  h-10 w-10 flex justify-center items-center">
                                <span class="material-symbols-outlined">
                                  close
                                </span>
                              </button>
                            </div>
                          </div>
                          <div v-if="!communications.referenceState" class="flex justify-center">
                            <button @click="communications.referenceState = true"
                              class="w-6 h-6 text-gray-500 bg-gray-100 rounded-full text-xs font-medium flex justify-center items-center">
                              <span class="text-xs material-symbols-rounded">
                                edit
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-1/2 relative">
                <div>
                  <div class="text-center ">
                    <!-- country -->
                    <div>
                      <h6 v-if="!communications.republicState" class="uppercase text-sm leading-tight inline-flex">
                        {{ communications.communicationFormBody.countryInformations.republic }}
                      </h6>
                      <div class="w-full space-x-2 flex justify-center">
                        <div v-if="communications.republicState" class="inline-flex w-2/3 space-x-1">
                          <div class="w-10/12">
                            <input v-model="communications.communicationFormBody.countryInformations.republic"
                              name="ministerOffice"
                              class="w-full block py-2 px-3 border border-gray-300 bg-white  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 " />
                          </div>
                          <button title="valider" @click="communications.republicState = false"
                            class="text-white bg-teal-600 hover:bg-teal-700 h-10 w-10 flex justify-center items-center">
                            <span class="material-symbols-outlined">
                              check
                            </span>
                          </button>
                          <button title="Annuler" @click="communications.republicState = false"
                            class="text-gray-400 bg-gray-200 hover:bg-gray-300  h-10 w-10 flex justify-center items-center">
                            <span class="material-symbols-outlined">
                              close
                            </span>
                          </button>
                        </div>
                      </div>
                      <div v-if="!communications.republicState" class="flex justify-center">
                        <button @click="communications.republicState = true"
                          class="w-6 h-6 text-gray-500 bg-gray-100 rounded-full text-xs font-medium flex justify-center items-center">
                          <span class="text-xs material-symbols-rounded">
                            edit
                          </span>
                        </button>
                      </div>
                    </div>

                    <div>
                      <h6 v-if="!communications.mottoState" class="uppercase text-sm leading-tight inline-flex">
                        {{ communications.communicationFormBody.countryInformations.motto }}
                      </h6>
                      <div class="w-full space-x-2 flex justify-center">
                        <div v-if="communications.mottoState" class="inline-flex w-2/3 space-x-1">
                          <div class="w-10/12">
                            <input v-model="communications.communicationFormBody.countryInformations.motto"
                              name="ministerOffice"
                              class="w-full block py-2 px-3 border border-gray-300 bg-white  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 " />
                          </div>
                          <button title="valider" @click="communications.mottoState = false"
                            class="text-white bg-teal-600 hover:bg-teal-700 h-10 w-10 flex justify-center items-center">
                            <span class="material-symbols-outlined">
                              check
                            </span>
                          </button>
                          <button title="Annuler" @click="communications.mottoState = false"
                            class="text-gray-400 bg-gray-200 hover:bg-gray-300  h-10 w-10 flex justify-center items-center">
                            <span class="material-symbols-outlined">
                              close
                            </span>
                          </button>
                        </div>
                      </div>
                      <div v-if="!communications.mottoState" class="flex justify-center">
                        <button @click="communications.mottoState = true"
                          class="w-6 h-6 text-gray-500 bg-gray-100 rounded-full text-xs font-medium flex justify-center items-center">
                          <span class="text-xs material-symbols-rounded">
                            edit
                          </span>
                        </button>
                      </div>
                    </div>

                    <span class="font-bold text-sm">---------</span>
                    <div>
                      <h6 v-if="!communications.cityState"
                        class="uppercase text-sm leading-tight inline-flex space-x-2">
                        <div class="mt-2">
                          {{ communications.communicationFormBody.countryInformations.city }}, le
                        </div>
                        <div class="flex justify-center">
                          <button @click="communications.cityState = true"
                            class="ml-1 w-6 h-6 text-gray-500 bg-gray-100 rounded-full text-xs font-medium flex justify-center items-center">
                            <span class="text-xs material-symbols-rounded">
                              edit
                            </span>
                          </button>
                        </div>
                        <code class=" text-red-600 text-xl uppercase">
                          {{ communications.communicationFormBody.countryInformations.date }}</code>
                        <div class="flex justify-center">
                          <button @click="communications.dateState = true"
                            class="w-6 h-6 text-gray-500 bg-gray-100 rounded-full text-xs font-medium flex justify-center items-center">
                            <span class="text-xs material-symbols-rounded">
                              edit
                            </span>
                          </button>
                        </div>
                      </h6>
                      <div class="w-full space-x-2 flex justify-center">
                        <div v-if="communications.cityState" class="inline-flex w-2/3 space-x-1">
                          <div class="w-10/12">
                            <input v-model="communications.communicationFormBody.countryInformations.city"
                              name="ministerOffice"
                              class="w-full block py-2 px-3 border border-gray-300 bg-white  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 " />
                          </div>
                          <button title="valider" @click="communications.cityState = false"
                            class="text-white bg-teal-600 hover:bg-teal-700 h-10 w-10 flex justify-center items-center">
                            <span class="material-symbols-outlined">
                              check
                            </span>
                          </button>
                          <button title="Annuler" @click="communications.cityState = false"
                            class="text-gray-400 bg-gray-200 hover:bg-gray-300  h-10 w-10 flex justify-center items-center">
                            <span class="material-symbols-outlined">
                              close
                            </span>
                          </button>
                        </div>
                      </div>
                      <div class="w-full space-x-2 flex justify-center">
                        <div v-if="communications.dateState" class="inline-flex w-2/3 space-x-1">
                          <div class="w-10/12">
                            <input v-model="communications.communicationFormBody.countryInformations.date"
                              name="ministerOffice"
                              class="w-full block py-2 px-3 border border-gray-300 bg-white  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 " />
                          </div>
                          <button title="valider" @click="communications.dateState = false"
                            class="text-white bg-teal-600 hover:bg-teal-700 h-10 w-10 flex justify-center items-center">
                            <span class="material-symbols-outlined">
                              check
                            </span>
                          </button>
                          <button title="Annuler" @click="communications.dateState = false"
                            class="text-gray-400 bg-gray-200 hover:bg-gray-300  h-10 w-10 flex justify-center items-center">
                            <span class="material-symbols-outlined">
                              close
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div class="pt-24 relative">
              <h6 class="text-center uppercase text-2xl font-bold">COMMUNIQUE</h6>
              <div class="mt-10 mx-24">
                <QuillEditor ref="quill" theme="snow" toolbar="#custom-toolbar">
                  <template #toolbar>
                    <div id="custom-toolbar">
                      <select class="ql-size">
                        <option value="small"></option>
                        <option selected></option>
                        <option value="large"></option>
                        <option value="huge"></option>
                      </select>
                      <select class="ql-header">
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                        <option value="4"></option>
                        <option value="5"></option>
                        <option value="6"></option>
                        <option selected></option>
                      </select>
                      <button class="ql-bold"></button>
                      <button class="ql-italic"></button>
                      <button class="ql-underline"></button>
                      <button class="ql-strike"></button>
                      <button class="ql-script" value="sub"></button>
                      <button class="ql-script" value="super"></button>
                      <select class="ql-align">
                        <option selected></option>
                        <option value="center"></option>
                        <option value="right"></option>
                        <option value="justify"></option>
                      </select>
                      <button class="ql-list" value="ordered"></button>
                      <button class="ql-list" value="bullet"></button>
                      <button class="ql-blockquote"></button>
                      <button class="ql-code-block"></button>
                      <button class="ql-link"></button>
                      <button class="ql-image"></button>
                    </div>
                  </template>
                </QuillEditor>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute z-30 h-full w-full bg-white">
      <!-- v-if="showCommunicationOverview"  write communication  v-if="showCommunicationForm" -->
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
                class="mt-0.5 hover:bg-blue-500 px-2 py-1 rounded-full text-xs text-white font-medium flex justify-center items-center">
                <span class="text-sm material-symbols-outlined">close</span>
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

    <div class="" v-if="!showCommunicationForm">
      <div class="inline-flex w-full">
        <search />
      </div>
      <div class="mt-3">
        <h6 class="text-sm text-blue-600 font-bold mb-1">Recherche par tags</h6>
        <div class="w-full inline-flex space-x-2">
          <button title="Cliquer pour rechercher" @click="query = 'tag1'"
            class="bg-gray-100 text-sm text-gray-400 rounded-full px-4 pb-0.5">tag 1</button>
          <button title="Cliquer pour rechercher" @click="query = 'tag2'"
            class="bg-gray-100 text-sm text-gray-400 rounded-full px-4 pb-0.5">tag 2</button>
          <button title="Cliquer pour rechercher" class="bg-gray-100 text-sm text-gray-400 rounded-full px-4 pb-0.5">tag
            3</button>
          <button title="Cliquer pour rechercher" class="bg-gray-100 text-sm text-gray-400 rounded-full px-4 pb-0.5">tag
            4</button>
          <button title="Cliquer pour rechercher" class="bg-gray-100 text-sm text-gray-400 rounded-full px-4 pb-0.5">tag
            5</button>
          <button title="Cliquer pour rechercher" class="bg-gray-100 text-sm text-gray-400 rounded-full px-4 pb-0.5">tag
            6</button>
          <button title="Cliquer pour rechercher" class="bg-gray-100 text-sm text-gray-400 rounded-full px-4 pb-0.5">tag
            7</button>
          <button title="Cliquer pour rechercher" class="bg-gray-100 text-sm text-gray-400 rounded-full px-4 pb-0.5">tag
            8</button>
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
                    class="flex justify-center items-center hover:bg-red-100 h-8 w-8 rounded-full absolute top-2 right-2 transition-all"
                    title="Epinglé par l'administrateur principal">
                    <span class="text-lg text-red-500 material-icons-outlined">
                      hotel_class
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
                <button title="Boîte de réception" @click="swithBetweenTabs('upcoming')"
                  :class="{' text-white bg-blue-600 hover:bg-blue-600' : currentTab == 'upcoming', 'text-gray-400 hover:bg-gray-200' : currentTab != 'upcoming'}"
                  class="text-sm rounded-full px-4 pb-0.5 inline-flex">
                  <span v-if="currentTab != 'upcoming'" class="mr-1 -mt-1 text-lg material-icons-outlined">
                    upcoming
                  </span>
                  <span v-if="currentTab == 'upcoming'" class="mr-1 -mt-1 text-lg material-icons-round">
                    upcoming
                  </span>
                  <h6 class="mt-0.5">Boîte de réception </h6>
                </button>
                <button title="Boîte de réception" @click="swithBetweenTabs('not_read')"
                  :class="{' text-white bg-blue-600 hover:bg-blue-600' : currentTab == 'not_read', 'text-gray-400 hover:bg-gray-200' : currentTab != 'not_read'}"
                  class="text-sm rounded-full px-4 pb-0.5 inline-flex">
                  <span v-if="currentTab != 'not_read'" class="mr-1 text-base material-icons-outlined">
                    mark_email_unread
                  </span>
                  <span v-if="currentTab == 'not_read'" class="mr-1 text-base material-icons-round">
                    mark_email_unread
                  </span>
                  <h6 class="mt-0.5">Non lus</h6>
                </button>
                <button title="Boîte de réception" @click="swithBetweenTabs('favorites')"
                  :class="{' text-white bg-blue-600 hover:bg-blue-600' : currentTab == 'favorites', 'text-gray-400 hover:bg-gray-200' : currentTab != 'favorites'}"
                  class="text-sm rounded-full px-4 pb-0.5 inline-flex">
                  <span v-if="currentTab != 'favorites'" class="mr-1 text-base material-icons-outlined">
                    favorite_border
                  </span>
                  <span v-if="currentTab == 'favorites'" class="mr-1 text-base material-icons-outlined">
                    favorite
                  </span>
                  <h6 class="mt-0.5">Favoris</h6>
                </button>
                <button title="Boîte de réception" @click="swithBetweenTabs('draft')"
                  :class="{' text-white bg-blue-600 hover:bg-blue-600' : currentTab == 'draft', 'text-gray-400 hover:bg-gray-200' : currentTab != 'draft'}"
                  class="text-sm rounded-full px-4 pb-0.5 inline-flex">
                  <span v-if="currentTab != 'draft'" class="mr-1 text-base material-icons-outlined">
                    draw
                  </span>
                  <span v-if="currentTab == 'draft'" class="mr-1 text-base material-icons-round">
                    draw
                  </span>
                  <h6 class="mt-0.5">Brouillons</h6>
                </button>
              </div>
              <div class="tabs">
                    <div v-if="tabs.upcoming" class="">
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
                            <h5 class="text-sm line-clamp-1 font-medium">Lorem ipsum dolor sit amet consectetur
                              adipisicing
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

                    </div>
                    <div v-if="tabs.not_read" class="pt-3 px-3 space-y-2">
                      contenu non lu
                    </div>
                    <div v-if="tabs.favorites" class="pt-3 px-3 space-y-2">
                      contenu en favoris
                    </div>
                    <div v-if="tabs.draft" class="pt-3 px-3 space-y-2">
                      contenu au brouillons
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
    ref,
    onMounted
  } from 'vue'

  //import search component
  import Search from '@/components/utils/Search.vue'

  import {
    QuillEditor
  } from '@vueup/vue-quill'
  import '@vueup/vue-quill/dist/vue-quill.snow.css'

  export default {
    name: "Agenda",
    components: {
      QuillEditor,
      Search
    },

    setup() {
      const showCommunicationForm = ref(false)
      const showCommunicationOverview = ref(false)
      const showSenderInformationsForm = ref(false)
      const showCountryInformationsForm = ref(false)
      const showCommunicationContentForm = ref(false)

      


      const tabs = ref({
        upcoming: true,
        not_read: false,
        favorites: false,
        draft: false,
      })

      let currentTab = ref(null)

      const swithTabFromTrueToFalse = (element) => {
        switch (element) {
          case 'upcoming':
            tabs.value.upcoming = true
            tabs.value.not_read = false
            tabs.value.favorites = false
            tabs.value.draft = false
            break;
          case 'not_read':
            tabs.value.upcoming = false
            tabs.value.not_read = true
            tabs.value.favorites = false
            tabs.value.draft = false
            break;
          case 'favorites':
            tabs.value.upcoming = false
            tabs.value.not_read = false
            tabs.value.favorites = true
            tabs.value.draft = false
            break;
          default:
            tabs.value.upcoming = false
            tabs.value.not_read = false
            tabs.value.favorites = false
            tabs.value.draft = true
            break;
        }
        currentTab.value = element
      }

      const swithBetweenTabs = (tabName) => {
        swithTabFromTrueToFalse(tabName)
      }

      const submitCommunicationForm = () => {
        showCommunicationForm.value = false
      }

      const goBackFromCommunicationOverview = () => {
        showCommunicationOverview.value = false
      }

      const proceedShowCommunicationOverview = () => {
        showCommunicationOverview.value = true
      }

      const communications = ref({
        ministerOfficeState: false,
        departmentState: false,
        subdepartmentState: false,
        referenceState: false,
        republicState: false,
        mottoState: false,
        dateState: false,
        contentState: false,
        headNameState: false,
        signatureState: false,
        padState: false,
        list: {},
        communicationFormBody: {
          senderInformations: {
            ministerOffice: "Ministère de l'Enseignement Supérieur et de la Recherche",
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
            content: "Contenu de votre communiqué ...",
            headName: "",
            signature: "",
            pad: "",
          },
        }
      })


      const sendStatement = () => {
        //communications.value.communicationFormBody
        console.log('statement content:', quill.getContents())
      }

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

      const submitStatement = () => {
        store.apiCallMethods.post('/link', data).then(
          (res) => {
            if (res) {
              console.log('response', res)
            }
          })
      }

      const deleteStatement = (statementId) => {
        store.apiCallMethods.delete('/link').then(
          (res) => {
            if (res) {
              console.log('response', res)
            }
          })
      }

      const makeStatementImportant = (statementId) => {
        store.apiCallMethods.post('/link', data).then(
          (res) => {
            if (res) {
              console.log('response', res)
            }
          })
      }

      const getStatement = () => {
        store.apiCallMethods.get('/link').then(
          (res) => {
            if (res) {
              console.log('response', res)
              // treatement
            }
          })
      }

      const getStatements = () => {
        store.apiCallMethods.get('/link').then(
          (res) => {
            if (res) {
              console.log('response', res)
              communications.list.value = res.data
              //all type of statements are in this data object (important, ...etc)
            }
          })
      }

      onMounted(() => {
        swithBetweenTabs('upcoming')
        //getStatements()

      })

      return {
        tabs,
        currentTab,
        swithBetweenTabs,
        swithTabFromTrueToFalse,
        getStatements,
        getStatement,
        makeStatementImportant,
        deleteStatement,
        showCommunicationForm,
        submitStatement,
        showCommunicationOverview,
        proceedShowCommunicationOverview,
        goBackFromCommunicationOverview,
        communications,
        sendStatement,
      };
    },
  };
</script>