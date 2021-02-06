<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-4-tablet is-4-desktop is-3-widescreen">
            <div class="field">
              <form action="" class="box">
                <label class="label">Usuario</label>
                <div class="select">
                  <select>
                    <option style="display:none" disabled selected value> -- Local -- </option>
                    <option>Urquiza</option>
                    <option>Sanmiguel-2</option>
                  </select>
                </div>
                <label class="label">Usuario</label>
                <div class="control block">
                  <input
                    class="input"
                    type="text"
                    autocomplete="username"
                    placeholder=""
                  />
                </div>
                <label class="label">Contraseña</label>
                <div class="control block">
                  <input
                    class="input"
                    type="password"
                    autocomplete="current-password"
                    placeholder=""
                  />
                </div>
                <div class="field is-grouped block">
                  <button class="button is-link">Ingresar...</button>
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
export default {};
</script>

<style>
</style>