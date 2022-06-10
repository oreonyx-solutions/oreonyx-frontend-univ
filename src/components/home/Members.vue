<template>
    <div class="w-4/5 2xl:w-10/12 px-6 py-6 h-full absolute right-0 top-0 bg-gray-50">
        <div class="h-full flex-grow inline-flex w-full">
          <div class="w-4/6 h-full mr-6">
             <div class="inline-flex">
           <img class="h-6 mr-2 mt-1" :src="'public/assets/icons/members.png'" alt="" />
           <h1 class="text-2xl font-bold mb-2">Membres</h1>
         </div>
            <div class="bg-white px-3 py-2 mb-3 rounded-xl inline-flex w-full">
                <span class="material-symbols-outlined mt-1">person_search</span>
                <input type="search" placeholder="Rechercher un membre" class="border-transparent focus:border-transparent focus:ring-0 w-full border-0 text-sm">
            </div>
            <div class="bg-white rounded-xl w-full">
              <v-table>
                      <template v-slot:default>
                          <thead>
                              <tr>
                                  <th class="text-left">
                                      Nom et prénoms
                                  </th>
                                  <th class="text-left">
                                      Email
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td itle="Cliquez pour modifier" class="cursor-pointer leading-tight">Bonsoa Ayén</td>
                                  <td>bonsoa.yen@gmail.com</td>
                              </tr>
                              <tr>
                                  <td itle="Cliquez pour modifier" class="cursor-pointer leading-tight">Amadou Arouna</td>
                                  <td>amadouAro@gmail.com</td>
                              </tr>
                          </tbody>
                      </template>
              </v-table>
            </div>
          </div>
          <div class="w-2/6 h-full space-y-3">
            <div class="w-full bg-white p-4 rounded-md">
              <div class="bg-gray-50 shadow-xl rounded-xl h-32 w-1/2 relative">
                <img class="h-full w-full rounded-xl object-cover" src="https://images.pexels.com/photos/12172012/pexels-photo-12172012.jpeg?cs=srgb&dl=pexels-%D1%82%D0%B0%D0%BD%D1%8F-%D0%BF%D0%BE%D1%82%D0%B0%D1%88%D0%B5%D0%B2%D0%B0-12172012.jpg&fm=jpg"
                  alt="Photo de profil">
              </div>
             
              <div class="relative mt-3">
                <h2 class="text-gray-700 font-bold text-base leading-tight">
                  Bonsoa Ayén
                </h2>
              <div class="my-2">
                <div title="Addresse e-mail officiel, écrivez-nous!" class="text-gray-400 inline-flex w-full">
                  <div class="text-md inline-flex">
                    <span class="text-md font-base">Email:</span>
                    <a target="_blank" href="mailto:isica_ul@univ-lome.tg"
                      class="ml-2 text-base text-gray-400 hover:underline line-clamp-1">bonsoa.yen@gmail.com</a>
                  </div>
                </div>
                <div title="Addresse e-mail officiel, écrivez-nous!" class="text-gray-400 inline-flex w-full">
                  <div class="text-md inline-flex">
                    <span class="text-md font-base">Tel:</span>
                    <a target="_blank" href="mailto:isica_ul@univ-lome.tg"
                      class="ml-2 text-base text-gray-400 hover:underline line-clamp-1">228 90 31 88 30</a>
                  </div>
                </div>
                <div title="Addresse e-mail officiel, écrivez-nous!" class="text-gray-400 inline-flex w-full">
                  <div class="text-md inline-flex">
                    <span class="text-md font-base">Parcours:</span>
                    <span 
                      class="ml-2 text-base text-gray-400 line-clamp-1">Génie Civil</span>
                  </div>
                </div>
                <div title="Addresse e-mail officiel, écrivez-nous!" class="text-gray-400 inline-flex w-full">
                  <div class="text-md inline-flex">
                    <span class="text-md font-base">Année:</span>
                    <span
                      class="ml-2 text-base text-gray-400">2<sup>ème</sup></span>
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

  export default {
    name: "Members",
    setup() {

      return {

      };
    },
  };
</script>