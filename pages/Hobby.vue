<template>

</template>
<script>
    export default() {
        name: 'Hobby',
        props: {
            HobbyName: {
                type: String,
                required: false,
                default: 'Hiking'
            },
            Number-users: {
                type: Integer,
                required: false,
                default: 0
            },
            Number-groups: {
                type: Integer,
                required: false,
                default: 0
            },
            img-url: {
                type: String,
                required: false,
                default: '~/static/images/logo.png'
            }
        }
    }
</script>
<style>
</style>