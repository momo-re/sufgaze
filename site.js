// Keep an absent video explicit rather than displaying a broken player.
(async () => {
  const video = document.getElementById('demo-video');
  const pending = document.getElementById('video-pending');
  const stage = document.getElementById('video-stage');
  try {
    const response = await fetch('assets/demo.mp4', { method: 'HEAD' });
    if (!response.ok || !response.headers.get('content-type')?.startsWith('video/')) return;
    video.src = 'assets/demo.mp4';
    video.addEventListener('loadedmetadata', () => {
      pending.hidden = true;
      video.hidden = false;
      stage.classList.add('has-video');
    }, { once: true });
    video.addEventListener('error', () => {
      pending.hidden = false;
      video.hidden = true;
      stage.classList.remove('has-video');
    });
    video.load();
  } catch {
    // The page remains usable if media has not been uploaded or cannot load.
  }
})();
