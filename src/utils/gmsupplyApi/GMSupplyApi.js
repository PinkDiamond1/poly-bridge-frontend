import axios from 'axios';

/*
export interface IGMSupplyApiOptions {
    baseUrl: string;
}

export interface IGetGMSupplyResult {
    avalanche_circulating_supply: number
    avalanche_total_supply: number
    bsc_circulating_supply: number 
    bsc_total_supply: number
    ethereum_circulating_supply: number
    ethereum_total_supply: number
    n3_circulating_supply: number
    n3_total_supply: number
    phantasma_circulating_supply: number
    phantasma_total_supply: number
    polygon_circulating_supply: number
    polygon_total_supply: number
    all_circulating_supply: number
    all_total_supply: number
} */

export class GMSupplyApi {
  constructor(options) {
    this.options = options;
  }

  async getGMSupply() {
    const url = `${this.options.baseUrl}/gmsupply`;
    const res = await axios.get(url, { params: {} });
    return res.data;
  }
}
