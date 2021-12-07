<template>
  <div class="footer">
    <div class="top">
      <CLink href="https://github.com/onblockio" target="_blank" class="footer-social-link">
        <img src="@/assets/svg/github.svg" />
      </CLink>
      <CLink href="https://discord.gg/THHTS4F" target="_blank" class="footer-social-link">
        <img src="@/assets/svg/discord.svg" />
      </CLink>
      <CLink href="https://t.me/ghostmarketio" target="_blank" class="footer-social-link">
        <img src="@/assets/svg/telegram.svg" />
      </CLink>
      <CLink href="mailto:hello@pghostmarket.io" target="_blank" class="footer-social-link">
        <img src="@/assets/svg/email.svg" />
      </CLink>
      <CLink href="https://twitter.com/ghostmarketio" target="_blank" class="footer-social-link">
        <img src="@/assets/svg/twitter.svg" />
      </CLink>
      <CLink href="https://medium.com/ghostmarket" target="_blank" class="footer-social-link">
        <img src="@/assets/svg/medium.svg" />
      </CLink>
    </div>
    <div class="bottom">
      <div class="copyright">
        {{ $t('common.footer.copyright') }}
      </div>
      <!-- <CButton class="change-locale" @click="changeLocale">
      <span v-if="$i18n.locale === 'en'">English</span>
      <span v-if="$i18n.locale === 'zh-cn'">中文</span>
      <img src="@/assets/svg/switch.svg" />
    </CButton> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    changeLocale() {
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'zh-cn' : 'en';
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 40px;
  @include child-margin-v(20px);
}
.top {
  display: flex;
  justify-content: center;
  align-items: center;
  @include child-margin-h(12px);
}
.bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  @include child-margin-h(30px);
}
.copyright {
  opacity: 0.4;
  font-size: 14px;
}
.change-locale {
  height: 30px;
  padding: 0 15px;
  border-radius: 15px;
  background: rgba(#ffffff, 0.2);
  font-size: 12px;
  @include child-margin-h(5px);
}
</style>
<style lang="scss" scoped>
.footer-social-link {
  padding: 0px 2px;
  border-radius: 4px;
  background-color: var(--color-primary);
  :hover {
    opacity: 0.5;
    transition: 0.3s ease;
  }
}
[theme='dark'] .footer-social-link {
  padding: 0px 2px;
  border-radius: 4px;
  background-color: #262626;
  :hover {
    opacity: 0.5;
    transition: 0.3s ease;
  }
}
@media screen and (max-width: 900px) {
  .footer {
    padding: 10px;
  }
  .bottom {
    margin-top: 10px !important;
  }
}
</style>
