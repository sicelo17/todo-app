<template>
    <div>
        <footer class="footer">
        <div class="footer_container bd-container">
            <h1 class="footer_title">Sicelo Sitsha</h1>
            <p class="footer_description">I am Sicelo Sitsha and this is my todo app</p>

            <div class="footer_des">
                <p class="footer_copy">All Rights Reserved &copy; 2021</p>
                <p class="footer_copy">Sicelo Sitsha</p>
            </div>

        </div>
    </footer>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
.footer {
    background-color: rgba(5, 2, 46, 0.664);
    color: #fff;
    text-align: center;
}

.footer_container {
    padding: 3rem 0;
}

.footer_description {
    margin-bottom: 1.2rem;
}

</style>