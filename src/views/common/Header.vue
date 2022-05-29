<template>
  <div class="header__wrapper">
    <div class="header">
      <CLink class="brand" :to="{ name: 'home' }">
        <img
          v-if="darkMode"
          class="brand-logo"
          src="https://cdn.ghostmarket.io/brands/gm-dark-logo-oneline.svg"
        />
        <img v-else class="brand-logo" src="https://cdn.ghostmarket.io/brands/gm-light-logo-oneline.svg" />
        <!--<span class="brand-name">
          {{ $t('common.header.brandName') }}
        </span>-->
      </CLink>
      <CFlexSpan />

      <Menu class="menu" />

      <!-- mobile header -->
      <div class="header-mobile" style="display:none">
        <Wallets />
        <ToggleTheme />
      </div>
      <!-- eof mobile header -->
    </div>
  </div>
</template>

<script>
import { TARGET_MAINNET } from '@/utils/env';

import ToggleTheme from '@/components/others/ToggleTheme';

import Wallets from './Wallets';
import Networks from './Networks';
import Menu from './Menu';

export default {
  name: 'Header',
  components: {
    Wallets,
    Networks,
    Menu,
    ToggleTheme,
  },
  data() {
    return {
      mainnet: TARGET_MAINNET,
    };
  },
  computed: {
    darkMode() {
      return this.$store.getters.getDarkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
.header__wrapper {
  padding: 3px 10px;
  background-color: var(--header-bg-color);
}
.header {
  width: 100%;
  margin: auto;
  max-width: 1280px;
  display: flex;
  align-items: center;
  height: 60px;
  // padding: 0 50px;
  // @include child-margin-h(20px);
}

.brand {
  display: flex;
  align-items: center;
  // @include child-margin-h(12px);
  img {
    width: 250px;
    @media screen and (max-width: 900px) {
      width: 200px;
    }
  }
}
.brand-logo {
  width: 35px;
}

.brand-name {
  color: var(--color-text-primary);
  margin-left: 10px;
  font-size: 20px;
}
</style>

<style lang="scss" scoped>
@media screen and (max-width: 900px) {
  .brand-logo {
    // margin-top: 110px;
    width: 30px;
    height: 48px;
  }
  .brand-name {
    //  margin-top: 110px;
    margin-left: 6px;
    font-size: 1.4em;
  }
  .menu,
  .wallet,
  .network {
    display: none;
  }
  .header-mobile {
    display: flex !important;
    //  margin-top: 110px;
  }
  .header-mobile-close {
    filter: invert(1) !important;
  }
}
</style>
