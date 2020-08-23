function getOptionsPrice(symbol, option_code) {
  var api_key = '';
  var api_url = 'https://finnhub.io/api/v1/stock/option-chain';
  var stock_raw = UrlFetchApp.fetch(api_url + "?symbol=" + symbol + "&token=" + api_key).getContentText();
  var stock_json = JSON.parse(stock_raw);
  var call_options = stock_json.data;
  var j;
  var i;
  var k;
  for (i = 0; i < call_options.length; i ++){
    for (j = 0; j < call_options[i].options.CALL.length; j++){
      if (call_options[i].options.CALL[j].contractName == option_code){
       return call_options[i].options.CALL[j].lastPrice;
      }
    }
    for (k = 0; k < call_options[i].options.PUT.length; k++){
      if (call_options[i].options.PUT[k].contractName == option_code){
       return call_options[i].options.PUT[k].lastPrice;
      }
    }
  }
}

