<template>
  <div>
  <b-navbar toggleable="md" type="dark" variant="primary">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">SeaUrMusic</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
           <b-nav-item to="/some/route/foo" exact exact-active-class="active">Home</b-nav-item>
          <b-nav-item to="/some/route/bar" exact exact-active-class="active">FAQ</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>        
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script scoped>
export default {

}
</script>

<style>



</style>
