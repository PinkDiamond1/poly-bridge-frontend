<template>
  <div class="supplyComponent">
    <!-- supply list wrapper -->
    <div class="supplyListWrapper">
      <!-- supply list -->
      <div class="supplyList">
        <div class="supplyList__header">
          <div class="supplyList__header__item supplyList__header__item__first">
            Token
          </div>
          <div class="supplyList__header__item supplyList__header__item__second">
            Available Amount
          </div>
          <div class="supplyList__header__item supplyList__header__item__third">
            Percentage
          </div>
        </div>
        <!-- supply item -->
        <div v-for="token in supplyTokens" :key="token.id" class="supplyItem">
          <div class="supplyItem__token">
            <img :src="require(`@/assets/svg/${token.imgsrc}`)" class="supplyItem__token__image" />
            <div class="supplyItem__token__title">
              {{ token.title }}
            </div>
          </div>
          <div class="supplyItem__amount">
            {{ token.availableAmount }}
          </div>
          <div class="supplyItem__percentage">
            {{ token.percentage }}
          </div>
        </div>
        <!-- eof supply item -->
      </div>
      <!-- eof supply list -->
    </div>
    <!-- eof supply list wrapper -->
  </div>
</template>

<script>
// :src="getImageSrc(token.imgsrc)"
export default {
  name: 'SupplySection',
  data() {
    return {
      supplyTokens: [
        {
          id: 1,
          imgsrc: 'binance.svg',
          title: 'ERC-20',
          availableAmount: '123123',
          percentage: '123123 %',
        },
        {
          id: 2,
          imgsrc: 'eth-token.svg',
          title: 'ERC-20',
          availableAmount: '123123',
          percentage: '123123 %',
        },
        {
          id: 3,
          imgsrc: 'avalanche.svg',
          title: 'ERC-20',
          availableAmount: '123123',
          percentage: '234234 %',
        },
        {
          id: 4,
          imgsrc: 'polygon.svg',
          title: 'ERC-20',
          availableAmount: '123123',
          percentage: '234234 %',
        },
        {
          id: 5,
          imgsrc: 'neo.svg',
          title: 'NEP-17',
          availableAmount: '123123',
          percentage: '234234 %',
        },
        {
          id: 6,
          imgsrc: 'phantasma.svg',
          title: 'PEPE-12',
          availableAmount: '123123',
          percentage: '234234 %',
        },
      ],
    };
  },
  methods: {
    getImageSrc(imgName) {
      return `${process.env.BASE_URL}assets/svg/${imgName}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.supplyComponent {
  margin: 10px 0px;
  padding: 20px 0px;
  background-color: #f8f8fa;
}
[theme='dark'] .supplyComponent {
  background-color: #1a1a1a;
}
.supplyListWrapper {
  margin: 0px 10px;
}
.supplyList {
  background-color: white;
  display: block;
  max-width: 900px;
  margin: auto;
  border-radius: 12px;
  box-shadow: 0px 0px 17px -7px rgba(34, 60, 80, 0.2);
  overflow: hidden;
  &__header {
    background: var(--color-primary);
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: center;
    &__item {
      color: white;
      font-size: 13px;
      display: flex;
      justify-content: center;
      &__first {
        width: 45%;
      }
      &__second {
        width: 25%;
      }
      &__third {
        width: 25%;
      }
    }
  }
}
[theme='dark'] .supplyList {
  background-color: #242323;
}
.supplyItem {
  height: 55px;
  border-bottom: 2px solid #f8f8f8;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &__token {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45%;
    &__image {
      width: 20px;
      height: 20px;
    }
    &__title {
      font-size: 12px;
      margin-left: 7px;
    }
  }
  &__amount {
    width: 25%;
    font-size: 14px;
    display: flex;
    justify-content: center;
  }
  &__percentage {
    width: 25%;
    font-size: 14px;
    display: flex;
    justify-content: center;
  }
}
[theme='dark'] .supplyItem {
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 640px) {
  .supplyList {
    &__header {
      &__item {
        font-size: 10px;
      }
    }
  }
  .supplyItem {
    &__token {
      &__title {
        font-size: 10px;
      }
    }
    &__amount {
      font-size: 12px;
    }
    &__percentage {
      font-size: 11px;
    }
  }
}
</style>
