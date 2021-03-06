const ulke = {
  adalet: () => undefined,

  ekonomi: () => undefined,

  insanHaklari: () => undefined,

  basinOzgurlugu: () => undefined,

  kadinCinayetleri: () => BigInt(Number.MAX_VALUE),

  sanat: () => undefined,

  bilim: () => undefined,

  komsularlaSorunSayisi: () => BigInt(Number.MAX_VALUE),

  dolardanEndiselenenVarsa: () =>
    'Birincisi şunu soriyim size. Dolarla mı maaş alıyorsunuz. Dolar borcunuz mu var? Dolarla bir işiniz mi var?',

  cinsiyetAyrimi: () => true,

  tuikRakamlari: () => 'Harikayız harika!',

  run() {
    return {
      adalet: this.adalet(),
      ekonomi: this.ekonomi(),
      insanHaklari: this.insanHaklari(),
      basinOzgurlugu: this.basinOzgurlugu(),
      kadinCinayetleri: this.kadinCinayetleri(),
      sanat: this.sanat(),
      bilim: this.bilim(),
      komsularlaSorunSayisi: this.komsularlaSorunSayisi(),
      dolardanEndiselenenVarsa: this.dolardanEndiselenenVarsa(),
      cinsiyetAyrimi: this.cinsiyetAyrimi(),
      tuikRakamlari: this.tuikRakamlari(),
    };
  },
};
