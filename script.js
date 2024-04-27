function translate() {
  var hindiText = $('#hindiText').val();
  $.ajax({
      url: 'https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
          q: hindiText,
          source: 'hi',
          target: 'en'
      }),
      success: function (response) {
          $('#translationResult').text(response.data.translations[0].translatedText);
      }
  });
}