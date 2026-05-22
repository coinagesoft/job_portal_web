/*!
 * jquery.counterup.js (compat replacement)
 *
 * Original plugin API:
 * $(".count").counterUp({ delay: 10, time: 2000 });
 */
(function ($) {
  "use strict";

  if (!$ || !$.fn) {
    return;
  }

  var DEFAULTS = {
    delay: 10,
    time: 1000,
  };

  function parseNumeric(value) {
    var raw = String(value || "").trim();
    if (!raw) {
      return { number: 0, decimals: 0, finalText: "0" };
    }

    var cleaned = raw.replace(/,/g, "");
    var decimalPart = cleaned.split(".")[1] || "";
    var parsed = parseFloat(cleaned);

    if (!isFinite(parsed)) {
      return { number: 0, decimals: 0, finalText: raw };
    }

    return {
      number: parsed,
      decimals: decimalPart.length,
      finalText: raw,
    };
  }

  function formatValue(value, decimals, hasComma) {
    var text = value.toFixed(decimals);
    if (!hasComma) {
      return text;
    }

    var parts = text.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  $.fn.counterUp = function (options) {
    var settings = $.extend({}, DEFAULTS, options);
    var safeDelay = Math.max(1, parseInt(settings.delay, 10) || DEFAULTS.delay);
    var safeTime = Math.max(safeDelay, parseInt(settings.time, 10) || DEFAULTS.time);

    return this.each(function () {
      var $el = $(this);
      var originalText = $el.text();
      var parsed = parseNumeric(originalText);
      var target = parsed.number;
      var decimals = parsed.decimals;
      var shouldUseComma = originalText.indexOf(",") !== -1;

      if (!isFinite(target)) {
        return;
      }

      var steps = Math.max(1, Math.ceil(safeTime / safeDelay));
      var currentStep = 0;

      function tick() {
        currentStep += 1;
        var progress = currentStep / steps;
        var currentValue = target * progress;

        if (currentStep >= steps) {
          $el.text(parsed.finalText);
          return;
        }

        $el.text(formatValue(currentValue, decimals, shouldUseComma));
        window.setTimeout(tick, safeDelay);
      }

      $el.text(formatValue(0, decimals, shouldUseComma));
      window.setTimeout(tick, safeDelay);
    });
  };
})(window.jQuery);
