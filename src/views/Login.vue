<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-4-tablet is-4-desktop is-3-widescreen">
            <div class="field">
              <form action="" class="box">
                <div class="select block">
                  <select v-model="localLogin" @change="onChange">
                    <option value style="display: none" disabled selected>
                      -- Local --
                    </option>
                    <option value="urquiza">Urquiza</option>
                    <option value="sanmiguel-2">Sanmiguel-2</option>
                  </select>
                  <p v-if="localLogin == ''" class="has-text-danger is-size-7">
                    Selecciona tu local
                  </p>
                </div>
                <div class="field">
                  <div class="control pt-2 has-text-left">
                    <input
                      @keyup="credentialCheck"
                      v-model="usernameLogin"
                      class="input pl-7"
                      type="text"
                      autocomplete="username"
                      placeholder=""
                    />
                    <label class="is-tag-loggin"
                      ><svg
                        class="inputIcons"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path></svg
                    ></label>
                  </div>
                  <p v-if="errusernameLogin" class="help is-danger">
                    Ingresa tu usuario
                  </p>
                </div>
                <div class="field block">
                  <div class="control has-text-left">
                    <input
                      @keyup="credentialCheck"
                      v-model="passwordLogin"
                      @keyup.enter="sendLogin"
                      class="input pl-7"
                      type="password"
                      autocomplete="current-password"
                      placeholder=""
                    />
                    <label class="is-tag-loggin"
                      ><svg
                        class="inputIcons"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                        ></path></svg
                    ></label>
                  </div>
                  <p v-if="errpasswordLogin" class="help is-danger">
                    Ingresa tu contraseña
                  </p>
                </div>
                <div class="field is-grouped block">
                  <button
                    :disabled="
                      errpasswordLogin || errusernameLogin || errlocalLogin
                    "
                    type="button"
                    @click="sendLogin"
                    class="button is-link"
                  >
                    Ingresar...
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      usernameLogin: "",
      passwordLogin: "",
      localLogin: "",
      errusernameLogin: true,
      errpasswordLogin: true,
      errlocalLogin: true,
    };
  },
  mounted() {
    if (this.$cookie.getCookie("loggedin")) {
      this.$router.push("/Asignaciones");
    }
  },
  methods: {
    sendLogin() {
      var username = this.usernameLogin;
      var password = this.passwordLogin;
      var local = this.localLogin;
      // this.$cookie.setCookie("userAccount", this.usernameLogin);
      this.$cookie.setCookie("loggedin", 1);
    },
    credentialCheck() {
      if (this.usernameLogin != "") {
        this.errusernameLogin = false;
      } else {
        this.errusernameLogin = true;
      }

      if (this.passwordLogin != "") {
        this.errpasswordLogin = false;
      } else {
        this.errpasswordLogin = true;
      }

      if (this.localLogin != "") {
        this.errlocalLogin = false;
      } else {
        this.errlocalLogin = true;
      }
    },
    onChange(event) {
      console.log(event.target.value);
      this.credentialCheck();
    },
  },
};
</script>

<style>
.is-tag-loggin {
  position: absolute;
  bottom: 1px;
  left: 4px;
}
.pl-7 {
  padding-left: 1.8rem !important;
}
.inputIcons {
  width: 23px;
  height: 23px;
}
</style>