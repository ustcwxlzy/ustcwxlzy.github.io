/* MapMyVisitors widget generated for https://ustcwxlzy.github.io/ (profile 1c927).
 * Never reuse another person's widget ID. Local previews do not record visits.
 */
(() => {
  const config = {
    scriptUrl: 'https://mapmyvisitors.com/map.js?cl=c2714f&w=a&t=tt&d=gmP6KhEU0iwJnDdCtSloB-HDFOPKJ_UAVZsQJenzXAk&cmo=ff5353&co=faf9f7&ct=3d3929',
    scriptId: 'mapmyvisitors',
    productionHostname: 'ustcwxlzy.github.io'
  };
  const container = document.getElementById('visitor-map');
  if (!container || !config.scriptUrl || location.hostname !== config.productionHostname) return;
  let url;
  try { url = new URL(config.scriptUrl); } catch (_) { return; }
  if (url.protocol !== 'https:' || !['mapmyvisitors.com', 'www.mapmyvisitors.com'].includes(url.hostname)) return;
  const script = document.createElement('script');
  script.id = config.scriptId;
  script.src = url.href;
  script.async = true;
  script.onerror = () => { container.hidden = true; };
  container.hidden = false;
  container.appendChild(script);
})();
