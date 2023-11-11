const MODES = {
    PROD: 'prod',
    DEV: 'dev',
    LOCAL: 'local',
};

export const useMode = () => {
    const currentMode = localStorage.getItem('mode') || MODES.PROD;

    for (const mode of Object.values(MODES)) {
        if (mode !== currentMode) {
            document.querySelectorAll(`script[data-mode="${mode}"], style[data-mode="${mode}"]`).forEach((element) => element.remove());
        }
    }
};
