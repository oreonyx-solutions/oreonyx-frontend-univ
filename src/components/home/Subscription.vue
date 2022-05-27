<template>
  <div class="w-4/5 2xl:w-10/12 px-6 py-6 h-full">
    <div class="h-full flex-grow inline-flex w-full">
      <div class="w-4/6 h-full mr-6">
         <div class="inline-flex">
           <img class="h-6 mr-2 mt-1" :src="'public/assets/icons/confetti-ball.png'" alt="" />
           <h1 class="text-2xl font-bold mb-2">Souscriptions</h1>
         </div>
        <div class="bg-white rounded-xl w-full">
          <v-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Reference
                  </th>
                  <th class="text-left">
                    Nom et prénoms
                  </th>
                  <th class="text-left">
                    Semestre
                  </th>
                  <th class="text-left">
                    Nombres d'UE
                  </th>
                  <th class="text-left">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#ddkl5dfikf52dfff</td>
                  <td>Bonsoa Ayén</td>
                  <td>1</td>
                  <td>06</td>
                  <td>5000 XOF</td>
                </tr>
              </tbody>
            </template>
          </v-table>
        </div>
      </div>
      <div class="w-2/6 h-full space-y-3">
        <div class="w-full bg-white p-4 rounded-md">
          <div class="relative">
            <h2 class="text-gray-700 font-bold text-base leading-tight">
              Détail de l'achats
            </h2>
              <hr class="my-2">
            <div>
              <div title="Edtudiant concerné" class="inline-flex w-full">
                <div class="text-md inline-flex">
                  <span target="_blank" 
                    class="font-bold hover:underline line-clamp-1 text-green-600">Bonsoa Ayén</span>
                </div>
              </div>
                <div title="Reference" class="inline-flex w-full">
                <div class="text-md inline-flex">
                  <span class="text-md font-base">Reference:</span>
                  <span target="_blank" 
                    class="ml-2 text-base line-clamp-1">#ddkl5dfikf52dfff</span>
                </div>
              </div>
              <div title="Addresse e-mail officiel, écrivez-nous!" class="nline-flex w-full">
                <div class="text-md inline-flex">
                  <span class="text-md font-base">Email:</span>
                  <a target="_blank" href="mailto:isica_ul@univ-lome.tg"
                    class="ml-2 text-base hover:underline line-clamp-1">bonsoa.yen@gmail.com</a>
                </div>
              </div>
              <div title="Addresse e-mail officiel, écrivez-nous!" class="text-gray-400 inline-flex w-full">
                <div class="text-md">
                  <span class="text-md font-base text-blue-600 font-semibold">UE Achetés (06 | 5000 XOF)</span>
                
                  <div class="w-full bg-blue-100 rounded-md p-3 mt-2">
                   <div class="space-y-5">
                      <code>
                      <div><span class="text-red-900">Mathematiques</span></div>
                      <div class="ml-4">
                        <div class="text-blue-900 inline-flex">
                          <span>Math 100</span>
                          <span class="ml-3">- 150 XOF</span>
                        </div>
                         <div class="text-blue-900 inline-flex">
                          <span>Math 200</span>
                          <span class="ml-3">- 150 XOF</span>
                        </div>
                         <div class="text-blue-900 inline-flex">
                          <span>Math 300</span>
                          <span class="ml-3">- 150 XOF</span>
                        </div>
                         <div class="text-blue-900 inline-flex">
                          <span>Math 400</span>
                          <span class="ml-3">- 150 XOF</span>
                        </div>
                      </div>
                    </code>
                     <code>
                      <div><span class="text-red-900">Droit</span></div>
                      <div class="ml-4">
                        <div class="text-blue-900 inline-flex">
                          <span>Droit du travail</span>
                          <span class="ml-3">- 250 XOF</span>
                        </div>
                        <div class="text-blue-900 inline-flex">
                          <span>Droit pénal</span>
                          <span class="ml-3">- 250 XOF</span>
                        </div>
                      </div>
                    </code>
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
  export default {
    name: "Subscription",

    setup() {

      return {

      };
    },
  };
</script>