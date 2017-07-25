
        app.adsBlockerDetector(function() {
            ga('send', 'event', 'antyadblock', 'adblock_detected', 'interstitial', {'nonInteraction': 1});
            ga('set', 'dimension8', 'adblockdetected');
        });