<template>
  <div class="w-4/5 2xl:w-10/12 px-6 py-6 h-full absolute right-0 top-0 ">
    <div class="h-full flex-grow inline-flex w-full relative">
    <div class="absolute bg-red-600 top-0 h-full w-full z-10 inline-flex p-3">
        <div class="w-4/12">
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
         <div class="ml-3 w-8/12">
          
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
  export default {
    name: "Faculties",

    setup() {

      return {

      };
    },
  };
</script>