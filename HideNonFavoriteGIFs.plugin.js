/**
 * @name HideNonFavoriteGIFs
 * @author ChatGPT
 * @version 2.0.0
 * @description Hides all Discord GIF sections except Favorites using exact class logic confirmed via DOM inspection.
 * @website https://openai.com
 * @source https://openai.com
 */

module.exports = class HideNonFavoriteGIFs {
    start() {
        this.observer = new MutationObserver(() => this.hideNonFavorites());
        this.observer.observe(document.body, { childList: true, subtree: true });

        this.interval = setInterval(() => this.hideNonFavorites(), 1500);
    }

    hideNonFavorites() {
        const results = document.querySelectorAll("div.result__2dc39");
        results.forEach(result => {
            const label = result.querySelector("span.categoryName_d02962");
            if (!label) return;
            if (label.innerText.trim().toLowerCase() !== "favorites") {
                result.style.display = "none";
            } else {
                result.style.display = "block";
            }
        });
    }

    stop() {
        if (this.observer) this.observer.disconnect();
        if (this.interval) clearInterval(this.interval);
    }
};
