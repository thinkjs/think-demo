module.exports = {
  id: 'en',
  localeId: 'en',
  numeralFormat: {
    delimiters: {
      thousands: ',',
      decimal: '.'
    },
    abbreviations: {
      thousand: 'k',
      million: 'm',
      billion: 'b',
      trillion: 't'
    },
    ordinal: function(number) {
      var b = number % 10;
      return (~~(number % 100 / 10) === 1) ? 'th' :
          (b === 1) ? 'st' :
          (b === 2) ? 'nd' :
          (b === 3) ? 'rd' : 'th';
    },
    currency: {
      symbol: '$'
    },
    formats: [ // 定义缩写
      {name: 'currency', format: '$ 0,0[.]00'}
    ]
  },
  translation: {
    language: 'en',
    "plural_forms" : "nplurals=2; plural=(n != 1);",
    data: {
      "some key" : [ "some key"]
    }
  }
}