<template>
  <div class="w-4/5 2xl:w-10/12 px-6 py-6 h-full absolute right-0 top-0 ">
    <div class="h-full flex-grow inline-flex w-full relative">
    <div v-if="showFacultiesDetails" class="absolute bg-white border rounded-md top-0 h-full w-full z-10 inline-flex p-3">
        <div class="w-4/12 border-r">
            <div class="w-full p-4 rounded-md">
            <div class="h-32 w-full relative mb-3">
              <img class="h-32 w-full object-cover rounded-xl"
                src="https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?cs=srgb&dl=pexels-ekaterina-12203460.jpg&fm=jpg"
                alt="Image de la fac">
            </div>
            <div class="relative mt-1">
              <h2 class="text-gray-700 font-bold text-base leading-tight">
                Faculté d'Informatique (FI)
              </h2>
            </div>
            <div class="mt-2">
              <h6 class="text-sm leading-tight text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Fugiat pariatur quis sequi eligendi quasi cum! Rem.</h6>
            </div>
            <hr class="my-3">
            <div>
              <div class="flex items-start justify-between ">
                <div class="flex justify-start">
                  <h6 class="font-bold text-blue-600">Spécialités</h6>
                </div>
                <div class="items-center inline-flex">
                   <button title="Ajouter une spécialité" @click="showEditor = true"
                    class="rounded-full text-xs text-blue-600 font-medium flex justify-center items-center">
                    <span class="material-symbols-rounded">
                      add_circle
                    </span>
                  </button>
                </div>
              </div>
              <ul class="space-y-1 mt-3">
                <li class="hover:text-gray-400 cursor-pointer">Spécialités 1</li>
                <li class="hover:text-gray-400 cursor-pointer">Spécialités 1</li>
                <li class="hover:text-gray-400 cursor-pointer">Spécialités 1</li>
              </ul>
              <div class="mt-6 hover:text-gray-400 cursor-pointer">
                  <h6 @click="handleFacultiesDetails">Retour</h6>
              </div>
            </div>
          </div>
        </div>
         <div class="ml-3 w-8/12">
           <div class="bg-white rounded-md p-4">
             <div class="flex items-start justify-between ">
                <div class="flex justify-start">
                  <h2 class="text-xl font-bold">Spécialité 1</h2>
                </div>
                <div class="items-center inline-flex">
                   <button title="Ajouter une unité d'enseignements" @click="showEditor = true"
                    class="rounded-full text-xs text-blue-600 font-medium flex justify-center items-center">
                    <span class="material-symbols-rounded">
                      add_circle
                    </span>
                  </button>
                </div>
              </div>
              
              <hr class="my-3">
               <span class="text-md font-base text-blue-600 font-semibold">Liste des Unités d'enseignements</span>
              <div class="grid grid-cols-3 gap-2 mt-2">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                    </div>
                    <div class="ml-3 text-sm">
                      <label class="font-medium text-gray-700">ALGO45</label>
                      <p class="text-xs leading-tight text-gray-400">Algorithmie pratique</p>
                       <p class="text-xs leading-tight text-gray-400">Credit: 4</p>
                    </div>
                  </div>
                   <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                    </div>
                    <div class="ml-3 text-sm">
                      <label class="font-medium text-gray-700">ALGO45</label>
                      <p class="text-xs leading-tight text-gray-400">Algorithmie pratique</p>
                       <p class="text-xs leading-tight text-gray-400">Credit: 4</p>
                    </div>
                  </div>
                   <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                    </div>
                    <div class="ml-3 text-sm">
                      <label class="font-medium text-gray-700">ALGO45</label>
                      <p class="text-xs leading-tight text-gray-400">Algorithmie pratique</p>
                       <p class="text-xs leading-tight text-gray-400">Credit: 4</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                    </div>
                    <div class="ml-3 text-sm">
                      <label class="font-medium text-gray-700">ALGO45</label>
                      <p class="text-xs leading-tight text-gray-400">Algorithmie pratique</p>
                       <p class="text-xs leading-tight text-gray-400">Credit: 4</p>
                    </div>
                  </div>
                   <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                    </div>
                    <div class="ml-3 text-sm">
                      <label class="font-medium text-gray-700">ALGO45</label>
                      <p class="text-xs leading-tight text-gray-400">Algorithmie pratique</p>
                       <p class="text-xs leading-tight text-gray-400">Credit: 4</p>
                    </div>
                  </div>
                   <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                    </div>
                    <div class="ml-3 text-sm">
                      <label class="font-medium text-gray-700">ALGO45</label>
                      <p class="text-xs leading-tight text-gray-400">Algorithmie pratique</p>
                       <p class="text-xs leading-tight text-gray-400">Credit: 4</p>
                    </div>
                  </div>
              </div>
           </div>
        </div>
    </div>
      <div class="w-full h-full mr-6">
        <div class="inline-flex">
           <img class="h-6 mr-2 mt-1" :src="'public/assets/icons/tent.png'" alt="" />
           <h1 class="text-2xl font-bold mb-2">Facultés</h1>
         </div>
        <div class="grid grid-cols-3 gap-2">
          <div class="w-full bg-white my-1 p-4 rounded-md">
            <div class="h-32 w-full relative mb-3">
              <img class="h-32 w-full object-cover rounded-xl"
                src="https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?cs=srgb&dl=pexels-ekaterina-12203460.jpg&fm=jpg"
                alt="Image de la fac">
            </div>
            <div class="relative mt-1">
              <h2 class="text-gray-700 font-bold text-base leading-tight">
                Faculté d'Informatique (FI)
              </h2>
            </div>
            <div class="mt-2">
              <h6 class="text-sm leading-tight text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Fugiat pariatur quis sequi eligendi quasi cum! Rem.</h6>
            </div>
            <div class="mt-3">
              <button @click="handleFacultiesDetails" class="bg-blue-600 text-white px-3 py-2 rounded-md text-sm">Détails supplementaires</button>
            </div>
          </div>
           <div class="w-full bg-white my-1 p-4 rounded-md">
            <div class="h-32 w-full relative mb-3">
              <img class="h-32 w-full object-cover rounded-xl"
                src="https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?cs=srgb&dl=pexels-ekaterina-12203460.jpg&fm=jpg"
                alt="Image de la fac">
            </div>
            <div class="relative mt-1">
              <h2 class="text-gray-700 font-bold text-base leading-tight">
                Faculté d'Informatique (FI)
              </h2>
            </div>
            <div class="mt-2">
              <h6 class="text-sm leading-tight text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Fugiat pariatur quis sequi eligendi quasi cum! Rem.</h6>
            </div>

            <div class="mt-3">
              <button class="bg-blue-600 text-white px-3 py-2 rounded-md text-sm">Détails supplementaires</button>
            </div>
          </div>
           <div class="w-full bg-white my-1 p-4 rounded-md">
            <div class="h-32 w-full relative mb-3">
              <img class="h-32 w-full object-cover rounded-xl"
                src="https://images.pexels.com/photos/12203460/pexels-photo-12203460.jpeg?cs=srgb&dl=pexels-ekaterina-12203460.jpg&fm=jpg"
                alt="Image de la fac">
            </div>
            <div class="relative mt-1">
              <h2 class="text-gray-700 font-bold text-base leading-tight">
                Faculté d'Informatique (FI)
              </h2>
            </div>
            <div class="mt-2">
              <h6 class="text-sm leading-tight text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Fugiat pariatur quis sequi eligendi quasi cum! Rem.</h6>
            </div>

            <div class="mt-3">
              <button class="bg-blue-600 text-white px-3 py-2 rounded-md text-sm">Détails supplementaires</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    name: "Faculties",

    setup() {

      const showFacultiesDetails = ref(false)

      const handleFacultiesDetails = () => {
        showFacultiesDetails.value = !showFacultiesDetails.value
      }

      return {
        showFacultiesDetails,
        handleFacultiesDetails
      };
    },
  };
</script>