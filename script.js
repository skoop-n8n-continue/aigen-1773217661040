/**
 * Signage Lifecycle Manager
 * Handles auto-refresh and ambient logic for digital signage running continuously.
 */
(() => {
    class SignageApp {
        constructor() {
            this.refreshInterval = 3600000; // 1 hour
            this.init();
        }

        init() {
            console.log('[SignageApp] Initialized with robust lifecycle management');
            this.scheduleRefresh();
            this.addErrorHandlers();
        }

        scheduleRefresh() {
            console.log(`[SignageApp] Next refresh scheduled in ${this.refreshInterval / 60000} minutes`);
            setTimeout(() => {
                console.log('[SignageApp] Executing scheduled refresh to maintain memory health');
                window.location.reload();
            }, this.refreshInterval);
        }

        addErrorHandlers() {
            window.addEventListener('error', (event) => {
                console.error('[SignageApp] Unhandled error detected:', event.error);
                // On massive failure, could trigger a forced reload here, but logging for now
            });
        }
    }

    // Boot app when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => new SignageApp());
    } else {
        new SignageApp();
    }
})();