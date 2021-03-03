<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="primary">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">SeaUrMusic</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/some/route/foo" exact exact-active-class="active"
            >Home</b-nav-item
          >
          <b-nav-item to="/some/route/bar" exact exact-active-class="active"
            >FAQ</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script scoped>
export default {

}
</script>

<style></style>
