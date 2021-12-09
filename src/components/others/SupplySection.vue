<template>
  <div class="supplyComponent">
    <!-- supply heading wrapper -->
    <div class="supplyHeadingWrapper">
      <!-- supply heading -->
      <div class="supplyHeading">
        <div class="supplyHeading__title">
          Token Distribution
        </div>
        <div class="supplyHeading__description">
          Live statistics on GM supply on each blockchain
        </div>
        <div class="supplyHeading__total">GM Total Supply: {{ totalSupplyCount }}</div>
      </div>
      <!-- eof supply heading -->
    </div>
    <!-- eof supply heading wrapper -->
    <!-- supply list wrapper -->
    <div class="supplyListWrapper">
      <!-- supply list -->
      <div class="supplyList">
        <div class="supplyList__header">
          <div class="supplyList__header__item supplyList__header__item__first">
            Blockchain
          </div>
          <div class="supplyList__header__item supplyList__header__item__second">
            Supply
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
      totalSupplyCount: '100,000,000',
      supplyTokens: [
        {
          id: 1,
          imgsrc: 'bsc.svg',
          title: 'BSC ERC20',
          availableAmount: '30,000,000',
          percentage: '33%',
        },
        {
          id: 2,
          imgsrc: 'eth.svg',
          title: 'Ethereum ERC20',
          availableAmount: '0',
          percentage: '0%',
        },
        {
          id: 3,
          imgsrc: 'avalanche.svg',
          title: 'Avalanche ERC20',
          availableAmount: '0',
          percentage: '0%',
        },
        {
          id: 4,
          imgsrc: 'polygon.svg',
          title: 'Polygon ERC20',
          availableAmount: '0',
          percentage: '0%',
        },
        {
          id: 5,
          imgsrc: 'neo.svg',
          title: 'Neo N3 NEP17',
          availableAmount: '12,123,123',
          percentage: '12.12%',
        },
        {
          id: 6,
          imgsrc: 'phantasma.svg',
          title: 'Phantasma PEPE12',
          availableAmount: '0',
          percentage: '0%',
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
  padding: 4rem 0;
  background-color: #f8f8fa;
}
.supplyHeadingWrapper {
  margin: 0px 10px;
}
.supplyHeading {
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  &__title {
    letter-spacing: 1.2px;
    font-size: 30px;
    text-align: center;
    font-weight: 700;
  }
  &__description {
    filter: invert(0.3);
    line-height: 28px;
    margin-top: 15px;
    text-align: center;
  }
  &__total {
    margin-top: 20px;
    text-align: center;
  }
}

[theme='dark'] .supplyComponent {
  background-color: #1a1a1a;
}
.supplyListWrapper {
  margin: 30px 10px 0px 10px;
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
      font-size: 16px;
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
      font-size: 16px;
      margin-left: 7px;
    }
  }
  &__amount {
    width: 25%;
    font-size: 16px;
    display: flex;
    justify-content: center;
  }
  &__percentage {
    width: 25%;
    font-size: 16px;
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
