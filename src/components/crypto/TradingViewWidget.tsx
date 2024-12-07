import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget({ market }: { market: string }) {
  const container = useRef() as React.MutableRefObject<HTMLDivElement>;
  const scriptAdded = useRef(false); // Pour suivre si le script a déjà été ajouté

  useEffect(() => {
    if (!scriptAdded.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BINANCE:${market}",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "3",
          "locale": "fr",
          "allow_symbol_change": true,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
      scriptAdded.current = true; // Marque le script comme ajouté
    }
  }, []);

  return (
    <div
      className="tradingview-widget-container h-full"
      ref={container}
 
    >
      <div
        className="tradingview-widget-container__widget"
      ></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://fr.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">
            Suivre tous les marchés sur TradingView
          </span>
        </a>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
