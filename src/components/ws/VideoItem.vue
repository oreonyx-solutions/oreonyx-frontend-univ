<template>
    <video class="h-full w-full" controls autoplay playsinline :srcObject.prop="media.srcObject" :muted="media.muted" :id="media.id"></video>
</template>

<script>
export default {
    name: "VideoItem",
    props: ['media'],
    setup() {
        
    },
}
</script>