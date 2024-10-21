
<template>
    <div id="app">
        <AppNavbar/>

        <br/>

        <div class="conteiner-login">
            <div class="login">
                <form class="formulario" @submit.prevent="validarLogin()">
                    <br/>
                    <div class="login-titulo">
                        <h1>CADASTRO</h1>
                    </div>
                    <br/><div></div>
                    <div class="info-login">
                        <div>
                            <label for="login-nome">Nome</label>
                        </div>
                        <div>
                            <input id="login-nome" type="text" required/>
                        </div>
                        <br/>
                        <div>
                            <label for="login-email">E-mail</label>
                        </div>
                        <div>
                            <input id="login-email" type="email" required/>
                        </div>
                        <br/>
                        <div>
                            <label for="login-senha">Senha</label>
                        </div>
                        <div>
                            <input type="password" id="login-senha" required/>
                        </div>
                        <div class="login-space"></div>
                        <div class="login-button">
                            <button class="btn-login">
                                LOGIN
                            </button>
                        </div>
                        <br/>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>


<script>
import AppNavbar from '@/components/AppNavbar.vue';


export default {
    components: {
        AppNavbar
    },
    methods: {
        validarLogin() {
            this.$router.push('/home');
        }
    }
}

</script>

<style>

.conteiner-login{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.login{
    grid-column: 2;
    text-align: center;
    border-radius: 25px;
    background-color: lightblue;
}

.formulario{
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
}

.login-titulo{
    grid-column: 1 / 4;
}

.info-login{
    grid-column: 2 / 2;
    text-align: left;
}

#login-email, #login-senha, #login-nome{
    width: fill;
}

.login-button{
    text-align: center;
}

.btn-login{
    width: 75%;
    background-color: #42b983;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 15px;
    cursor: pointer;
}

.login-space{
    padding: 25px;
}

</style>