(async () => {
  try {
    await import('https://cdn.jsdelivr.net/npm/saby-customizer@0.0.0/lib/saby-lib/edo.js');
    const popupContainer = document.getElementById('popup');
    let observer;

    if (!observer) {
      observer = new MutationObserver(() => {
        if (!timeout) {
          timeout = setTimeout(() => {
            console.log('test');
            timeout = null
          }, 1000)
        }
      });
    }

    if (popupContainer) {
      observer.observe(popupContainer, { childList: true, subtree: true })
    }
    
  } catch(e) {
    console.error(e);
  }
})().catch(e => console.error(e))
