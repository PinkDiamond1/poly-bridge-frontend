<template>
  <div class="supplyComponent">
    <!-- supply list wrapper -->
    <div class="supplyListWrapper">
      <!-- supply list -->
      <div class="supplyList">
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
          id: 1,
          imgsrc: 'binance.svg',
          title: 'ERC-20',
          availableAmount: '123123',
          percentage: '123123 %',
        },
        {
          id: 1,
          imgsrc: 'binance.svg',
          title: 'ERC-20',
          availableAmount: '123123',
          percentage: '123123 %',
        },
        {
          id: 1,
          imgsrc: 'binance.svg',
          title: 'ERC-20',
          availableAmount: '123123',
          percentage: '123123 %',
        },
        {
          id: 1,
          imgsrc: 'binance.svg',
          title: 'ERC-20',
          availableAmount: '123123',
          percentage: '123123 %',
        },
        {
          id: 1,
          imgsrc: 'binance.svg',
          title: 'ERC-20',
          availableAmount: '123123',
          percentage: '123123 %',
        },
        {
          id: 1,
          imgsrc: 'binance.svg',
          title: 'ERC-20',
          availableAmount: '123123',
          percentage: '123123 %',
        },
        {
          id: 1,
          imgsrc: 'binance.svg',
          title: 'ERC-20',
          availableAmount: '123123',
          percentage: '123123 %',
        },
        {
          id: 1,
          imgsrc: 'binance.svg',
          title: 'ERC-20',
          availableAmount: '123123',
          percentage: '123123 %',
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
}
.supplyItem {
  height: 55px;
  border-bottom: 2px solid #f8f8f8;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  &__token {
    display: flex;
    align-items: center;
    width: 40%;
    &__image {
      width: 30px;
    }
    &__title {
      font-size: 12px;
    }
  }
  &__amount {
    font-size: 14px;
  }
  &__percentage {
    font-size: 14px;
  }
}
</style>
