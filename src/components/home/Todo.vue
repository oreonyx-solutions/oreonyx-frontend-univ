<template>
    <div class="w-full my-2 pr-2 overflow-y-auto pb-1">
        <div class="relative w-full inline-flex single-timeline ">
            <span class="text-gray-400 text-xs">08:00</span>
            <div class="w-full ml-2">
                <div class="w-full flex justify-center items-center">
                    <div class="border-t w-full my-4"></div>
                </div>
                <div class="todos space-y-2 ">
                    <div id="todo"
                        class="border-l-4 cursor-pointer border-blue-600 w-full bg-blue-50 hover:bg-blue-100 rounded-md p-2">
                        <div class="inline-flex">
                            <img class="h-6 mr-2" :src="'public/assets/icons/four-leaf-clover.png'" alt="" />
                            <h6 class="text-sm font-semibold text-blue-600">Create wireframes</h6>
                        </div>
                    </div>
                    <div id="todo"
                        class="border-l-4 cursor-pointer border-red-600 w-full bg-red-50 hover:bg-red-100 rounded-md p-2">
                        <div class="inline-flex">
                            <img class="h-6 mr-2" :src="'public/assets/icons/four-leaf-clover.png'" alt="" />
                            <h6 class="text-sm font-semibold text-red-600 line-clamp-1">Update research document</h6>
                        </div>
                        <div class="pl-8 -mt-1">
                            <h6 class="text-sm line-clamp-2 text-gray-400 leading-tight">Lorem ipsum dolor sit, amet
                                consectetur adipisicing elit. Libero ea laborum veritatis earum numquam fuga modi, dicta
                                laboriosam fugiat aliquid molestias natus soluta, consequuntur quibusdam minus hic
                                expedita
                                voluptate necessitatibus!</h6>
                            <h6 class="text-xs font-semibold text-red-600 line-clamp-2 text-gray-400 mt-1">08:30 AM -
                                09:00 AM</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative w-full inline-flex single-timeline ">
            <span class="text-gray-400 text-xs">09:00</span>
            <div class="w-full ml-2">
                <div class="w-full flex justify-center items-center">
                    <div class="border-t w-full my-4"></div>
                </div>
                <div class="todos space-y-2 ">
                    <div id="todo"
                        class="relative border-l-4 cursor-pointer border-indigo-600 w-full bg-indigo-50 hover:bg-indigo-100 rounded-md p-2">
                        <div class="absolute h-8 w-8 bg-indigo-100 text-indigo-600 rounded-full right-2 -top-2 flex justify-center items-center">
                            <span class="text-base material-symbols-rounded">movie_filter</span>
                        </div>
                        <div class="inline-flex">
                            <img class="h-6 mr-2" :src="'public/assets/icons/four-leaf-clover.png'" alt="" />
                            <div>
                                <h6 class="text-xs text-indigo-600 line-clamp-2 text-gray-400">08:30 AM - 09:00 AM</h6>
                                <h6 class="text-sm font-semibold text-indigo-600 line-clamp-1">Discussion avec les
                                    developpeurs
                                </h6>
                            </div>
                        </div>
                        <div class="pl-8">
                            <h6 class="text-sm line-clamp-2 text-gray-400 leading-tight">
                                Lorem ipsum dolor sit, amet
                                consectetur adipisicing elit. Libero ea laborum veritatis earum numquam fuga modi, dicta
                                laboriosam fugiat aliquid molestias natus soluta, consequuntur quibusdam minus hic
                                expedita
                                voluptate necessitatibus!
                            </h6>
                            <div class="flex items-start justify-between my-3 mt-2">
                                <div class="justify-start">
                                    <button class="px-4 py-1 rounded-md inline-flex text-white bg-indigo-600 text-sm">
                                        <span class="text-lg -mt-0.5 material-symbols-outlined mr-1">voice_chat</span>
                                        <span class="line-clamp-1 ">Oreonyx live</span>
                                    </button>
                                </div>
                                <div class="items-center inline-flex space-x-2 pt-1">
                                    <div class="flex -space-x-1 overflow-hidden">
                                        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt="">
                                        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt="">
                                        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                            alt="">
                                        <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt="">
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
        name: "Todo"
    }
</script>

<style>

</style>