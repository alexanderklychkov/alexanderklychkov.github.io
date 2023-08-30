(async () => {
  try {
    const result = await import('https://cdn.jsdelivr.net/npm/saby-customizer@0.0.0/lib/saby-lib/edo.js');
    console.log(result);
  } catch(e) {
    console.error(e);
  }
})().catch(e => console.error(e))
