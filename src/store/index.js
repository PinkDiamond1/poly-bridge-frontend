import Vue from 'vue';
import Vuex from 'vuex';
import site from './site';
import chains from './chains';
import wallets from './wallets';
import tokenBasics from './tokenBasics';
import tokens from './tokens';
import tokenMaps from './tokenMaps';
import transactions from './transactions';
import balances from './balances';
import allowances from './allowances';
import fees from './fees';
import expecttime from './expecttime';
import nftAssetsBasics from './nftAssetsBasics';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    site,
    chains,
    wallets,
    tokenBasics,
    tokens,
    tokenMaps,
    transactions,
    balances,
    allowances,
    fees,
    expecttime,
    nftAssetsBasics,
  },
});
