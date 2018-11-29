<template>
  <header class="site-header" id="site-header">
    inner
  </header>
</template>

<script>
export default {
  name: 'AppHeaderx',
};
</script>

<style lang="scss">
  #site-header {
    background-color: white;
  }
  .logo-link {
    img {
      max-width: 200px;
    }
  }
  .navbar {
    background-color: transparent !important;
    @include breakpoint($mobile) {
      display: none;
    }
  }
  .navbar-nav {
    .nav-item{
      .nav-link {
        color: #fff;
        padding: 1rem !important;
      }
      &:last-child {
        .nav-link {
          padding: 1rem 1.5rem !important;
          font-weight: 700;
          letter-spacing: .4px;
          text-transform: uppercase;
        }
      }
    }
  }
  .container {
    margin: 0 auto;
  }
</style>
