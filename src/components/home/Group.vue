<template>
    <div class="w-4/5 2xl:w-10/12 px-6 pt-3 first-letter:pb-6 h-full absolute right-0 top-0">
        <div class="h-full flex-grow inline-flex w-full overflow-hidden">
            <div class="w-full h-full">
                <div class="inline-flex w-full">
                    <div class="flex items-start justify-between w-full">
                        <div class="flex justify-start">
                            <h1 class="text-xl font-bold">{{ state.group.name }}</h1>
                        </div>
                        <div class="items-center inline-flex">
                            
                        </div>
                      </div>
                </div>
                <hr class="my-3"/>
                <div class="flex-grow overflow-hidden overflow-y-auto relative">
                    <div class="w-full flex">
                        <div class="w-full flex flex-col">   
                            <div class="align-middle inline-block min-w-full">
                                <div class="overflow-hidden">
                                    <div
                                        class="mt-2 grid grid-cols-6 2xl:grid-cols-6 gap-3 rounded-xl w-full h-full overflow-hidden overflow-y-auto">
                                        <div v-for="member in state.group.users" :key="member.user.id">
                                            <div
                                                class="bg-gray-50 h-20 rounded-md flex justify-center items-center relative overflow-hidden">
                                                <div v-if="member.user.avatar != null"
                                                    class="hidden h-40 w-40 rounded-full bg-gray-50 relative">
                                                    <img class="rounded-full h-full w-fullh-full w-full object-top object-cover"
                                                        src="" alt="">
                                                </div>
                                                <div v-if="member.user.avatar == null"
                                                    class="h-16 w-16 text-white rounded-full hover:bg-indigo-300 bg-gradient-to-b from-indigo-300 to-indigo-600 absolute flex justify-center items-center">
                                                    <h5 class="text-2xl">
                                                        {{ getInitials(member.user.firstName, member.user.lastName) }}</h5>
                                                </div>
                                            </div>
                                            <div class="mt-2">
                                                <h5 title="" class="line-clamp-1 font-bold ">{{ member.user.firstName }}
                                                    {{ member.user.lastName }}</h5>
                                                <h6 style="font-family: 'JetBrains Mono', monospace"
                                                    class="text-gray-400 text-sm leading-tight line-clamp-2">
                                                    @{{ member.user.firstName }}{{ member.user.lastName }}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <button @click="showAssignTeacherForm()">
                                        Cliquer pour assigner un prof
                                    </button>
                                    <form v-if="showAssignTeacher" @submit.prevent="submitAssignTeacherToGroupForm('assign', state.group.id)" action="#" method="POST">
                                       <select v-model="teacherFormData.id" title="Liste des professeurs">
                                            <option v-for="teacher in state.teachers" :key="teacher.id" :value="teacher.id">{{ teacher.firstName }} {{ teacher.lastName }}</option>
                                       </select>
                                       <button type="submit" >Assigner un prof</button> 
                                    </form>

                                    <hr class="my-6"/>
                                    <button @click="addAnotherDayForm">
                                        Cliquer pour ajouter un autre jour
                                    </button> <br />
                                    <form  @submit.prevent="submitProgramForm()" action="#" method="POST">
                                        <input hidden type="text" v-model="programFormData.groupId">
                                        <textarea placeholder="Ajouter une description"  v-model="programFormData.description" id="" cols="30" rows="10"></textarea>
                                        
                                        <!-- 
                                             dayIndex: null,
                        startTime: null,
                        endTime: null,
                        roomAcronym: "S21"
                                        -->
                                    
                                            <div v-for="day in programFormData.days" :key="day">
                                                <select title="Liste des jours" v-model="day.dayIndex">
                                                    <option v-for="d in days" :key="d.index" :value="d.index">{{ d.title }}</option>
                                                </select> 
                                                <input type="time" v-model="day.startTime">
                                                <input type="time" v-model="day.endTime">
                                            </div>
                                   
                                           
                                        <button type="submit" >Soumettre le form du program</button> 
                                     </form>
                                     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    /* we will explain what these classes do next! */
    .v-enter-active,
    .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
        opacity: 0;
    }
</style>
<script>
    import {
        ref,
        reactive,
        computed,
        onBeforeMount,
        onMounted,

    } from 'vue'
    import store from '../../store'
    import Search from '@/components/utils/Search.vue'

    import {
        useRoute
    } from 'vue-router';

    export default {
        name: 'Group',
        components: {
            Search
        },
        setup() {
            const showGroup = ref(false)
            const showAssignTeacher = ref(false)
            const showProgramModal = ref(false)
            const showSetProgramForm = ref(false)

            const showAssignTeacherForm = () =>{
                showAssignTeacher.value = true
            }

            const state = reactive({
                groupId: null,
                group: {},
                teachers: []
            })

            const teacherFormData = reactive({
                id: 2,
                roleName: "teacher",
                add: [],
                remove: []
            })

            const days = [
                { index: 0, title: 'Dimanche' },
                { index: 1, title: 'Lundi' },
                { index: 2, title: 'Mardi' },
                { index: 3, title: 'Mercredi' },
                { index: 4, title: 'Jeudi' },
                { index: 5, title: 'Vendredi' },
                { index: 6, title: 'Samedi' },
            ]

            const dayForm = reactive({
                dayIndex: 1,
                startTime: '06:00',
                endTime: '07:00',
                roomAcronym: "S21"
            })

            const addAnotherDayForm = () => {
                programFormData.days.push(dayForm)
                console.log('programFormData new:', programFormData )
            }

            const programFormData = reactive({
                groupId: computed(() => state.groupId ),
                schoolYearId: 1,
                periodId: 1,
                link: "",
                description: null,
                days: [
                    {
                        dayIndex: 1,
                        startTime: '06:00',
                        endTime: '07:00',
                        roomAcronym: "S21"
                    }
                ]
            })


            const getGroup = (id) => {
                store.apiCallMethods.get('group/' + id + '').then(
                    (res) => {
                        if (res) {
                            state.group = res.data
                            console.log(res.data)
                            showGroup.value = true
                            console.log('updax group', state.group)
                        }
                    })
            }

            const getTeachers = () => {
                store.apiCallMethods.get('user/').then(
                    (res) => {
                        if (res) {
                            state.teachers = res.data.filter(el => el.roleName === "teacher")
                            console.log('teachers', state.teachers)
                        }
                    })
            }

            const getInitials = (firstName, lastName) => {
                return firstName.charAt(0) + lastName.charAt(0)
            }

            const submitAssignTeacherToGroupForm = (action, groupId) => {
                action == "assign" ?  teacherFormData.add.push(groupId) : teacherFormData.remove.push(groupId)
                store.apiCallMethods.patch('set-group/', teacherFormData).then( 
                    (res) => {
                        if (res) {
                            getGroup(state.groupId)
                        }
                    })
            }

            const submitProgramForm = () => {
                store.apiCallMethods.post('program/', programFormData).then( 
                    (res) => {
                        if (res) {
                            getGroup(state.groupId)
                        }
                    })
            }

            onBeforeMount(() => {
                //get group id
                state.groupId = useRoute().params.id
            })

            onMounted(() => {
                getTeachers()
                getGroup(state.groupId)
            })

            return {
                state,
                days,
                showGroup,
                showProgramModal,
                showSetProgramForm,
                programFormData,
                showAssignTeacher,
                teacherFormData,
                getInitials,
                showAssignTeacherForm, 
                submitAssignTeacherToGroupForm,
                submitProgramForm,
                addAnotherDayForm
            };
        },
    };
</script>