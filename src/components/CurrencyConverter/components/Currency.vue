<template>
  <section class="bg-white-ady flex justify-between relative p-4 px-6 w-full">
    <TextInput
      :value="currencyAmount"
      :causedChange="currencyCausedChange"
      class="text-xl md:text-2xl"
      @text-input-updated="updateCurrencyAmount">
    </TextInput>
    <Dropdown
      class="ml-4"
      :options="currencies"
      :startingOption="currency"
      :optionImages="currencyImages"
      :optionDescriptions="currencyNames"
      @save-single-choice="updateCurrencyType">
    </Dropdown>
  </section>
</template>

<script>
import TextInput from '@/components/shared/TextInput.vue';
import Dropdown from '@/components/shared/Dropdown.vue';
import AUD from '../../../assets/flags/aud.svg';
import BGN from '../../../assets/flags/bgn.svg';
import BRL from '../../../assets/flags/brl.svg';
import CAD from '../../../assets/flags/cad.svg';
import CHF from '../../../assets/flags/chf.svg';
import CNY from '../../../assets/flags/cny.svg';
import CZK from '../../../assets/flags/czk.svg';
import DKK from '../../../assets/flags/dkk.svg';
import EUR from '../../../assets/flags/eur.svg';
import GBP from '../../../assets/flags/gbp.svg';
import HKD from '../../../assets/flags/hkd.svg';
import HRK from '../../../assets/flags/hrk.svg';
import HUF from '../../../assets/flags/huf.svg';
import IDR from '../../../assets/flags/idr.svg';
import ILS from '../../../assets/flags/ils.svg';
import ISK from '../../../assets/flags/isk.png';
import INR from '../../../assets/flags/inr.svg';
import JPY from '../../../assets/flags/jpy.svg';
import KRW from '../../../assets/flags/krw.svg';
import MXN from '../../../assets/flags/mxn.svg';
import MYR from '../../../assets/flags/myr.svg';
import NOK from '../../../assets/flags/nok.svg';
import NZD from '../../../assets/flags/nzd.svg';
import PHP from '../../../assets/flags/php.svg';
import PLN from '../../../assets/flags/pln.svg';
import RON from '../../../assets/flags/ron.svg';
import RUB from '../../../assets/flags/rub.svg';
import SEK from '../../../assets/flags/sek.svg';
import SGD from '../../../assets/flags/sgd.svg';
import THB from '../../../assets/flags/thb.svg';
import TRY from '../../../assets/flags/try.svg';
import USD from '../../../assets/flags/usd.svg';
import ZAR from '../../../assets/flags/zar.svg';

export default {
  name: 'Currency',
  components: {
    TextInput,
    Dropdown,
  },
  props: {
    currency: {
      type: String,
    },
    currencyAmount: {
      type: Number,
    },
    currencyCausedChange: {
      type: Boolean,
    },
  },
  data: () => ({
    currencies: [
      'AUD', 'BGN', 'BRL', 'CAD',
      'CHF', 'CNY', 'CZK', 'DKK',
      'EUR', 'GBP', 'HKD', 'HRK',
      'HUF', 'IDR', 'ILS', 'INR',
      'ISK', 'JPY', 'KRW', 'MXN',
      'MYR', 'NOK', 'NZD', 'PHP',
      'PLN', 'RON', 'RUB', 'SEK',
      'SGD', 'THB', 'TRY', 'USD',
      'ZAR',
    ],
    currencyImages: {
      AUD,
      BGN,
      BRL,
      CAD,
      CHF,
      CNY,
      CZK,
      DKK,
      EUR,
      GBP,
      HKD,
      HRK,
      HUF,
      IDR,
      ILS,
      INR,
      ISK,
      JPY,
      KRW,
      MXN,
      MYR,
      NOK,
      NZD,
      PHP,
      PLN,
      RON,
      RUB,
      SEK,
      SGD,
      THB,
      TRY,
      USD,
      ZAR,
    },
    currencyNames: {
      AUD: 'Australia Dollar',
      BGN: 'Bulgaria Lev',
      BRL: 'Brazil Real',
      CAD: 'Canada Dollar',
      CHF: 'Switzerland Franc',
      CNY: 'China Yuan',
      CZK: 'Czech Koruna',
      DKK: 'Denmark Krone',
      EUR: 'Euro',
      GBP: 'Great Britain Pound',
      HKD: 'Hong Kong Dollar',
      HRK: 'Croatia Kuna',
      HUF: 'Hungary Forint',
      IDR: 'Indonesia Rupiah',
      ILS: 'Israel New Shekel',
      INR: 'India Rupee',
      ISK: 'Iceland Krona',
      JPY: 'Japan Yen',
      KRW: 'South Korea Won',
      MXN: 'Mexico Peso',
      MYR: 'Malaysia Ringgit',
      NOK: 'Norway Kroner',
      NZD: 'New Zealand Dollar',
      PHP: 'Philippines Peso',
      PLN: 'Poland Zloty',
      RON: 'Romania New Lei',
      RUB: 'Russia Rouble',
      SEK: 'Sweden Krona',
      SGD: 'Singapore Dollar',
      THB: 'Thailand Baht',
      TRY: 'Turkish New Lira',
      USD: 'USA Dollar',
      ZAR: 'South Africa Rand',
    },
  }),
  methods: {
    updateCurrencyType(...args) {
      this.$emit('update-currency-type', args[0]);
    },
    updateCurrencyAmount(...args) {
      this.$emit('update-currency-amount', args[0]);
    },
  },
};
</script>
