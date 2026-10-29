# SUFGaze project page

Static, dependency-free draft. No author details, tracking, remote fonts, paper upload, or fabricated demonstration video. `noindex` is a crawler request, NOT access control or an anonymity guarantee.

## Design

- Palette: mist `#f6fafc`, marine `#234f64`, teal `#007c83`, acoustic coral `#dd674b`, grid `#cbdde4`.
- Type: Palatino headings and Trebuchet body, with local fallbacks; no font-service requests.
- Layout: two-column introduction with a conceptual glasses/headphone signal drawing, then a large video area, a three-step pipeline, and scoped streaming results.
- The distinctive element is the system drawing, not decorative metric cards. The diagram is explicitly conceptual and never presented as experimental evidence.

## Local preview

From this directory, run a local HTTP server (rather than opening `index.html` as a file). The preview server must bind to `127.0.0.1`, not all network interfaces.

## Add the real video

1. Follow `../demo/recording_plan_zh.md`; record a genuine live run, not an animation or replay presented as live.
2. Export H.264/AAC MP4 with browser-compatible pixel format and fast-start metadata. Keep below GitHub's per-file limit; a 90-second 1080p file at 3--5 Mbps is sufficient.
3. Place it at `assets/demo.mp4`; put synchronized English WebVTT captions at `assets/demo.en.vtt`.
4. Watch the complete exported file and check anonymity, labels, readability, playback, and correspondence to the actual system.
5. Replace the pending video copy only after verification. `site.js` automatically reveals a decodable video when the media file exists; an absent or invalid video stays explicitly pending.
6. Verify the hosted URL while logged out before claiming a demonstration is provided in the response letter.

## GitHub Pages publication

Publish ONLY this directory's allowlisted web assets in a separate repository. Do not publish the response workspace, raw participant data, experiment traces, server settings, or credentials. Do not publish this operational README or the internal recording plan.

Typical project URL format: `https://<owner>.github.io/<repository>/`. This is a format example, not a deployed link.

For an approved public repository, put `index.html`, `style.css`, `site.js`, `.nojekyll`, and reviewed `assets/` at the repository root. In Settings > Pages, select deployment from the main branch, root folder. The source files and commit metadata become public; use the approved reviewer-safe identity and neutral commit metadata.

### Current release gates

- The manuscript is anonymous. Publishing under a personal GitHub account reveals ownership even if this HTML has no author names. Confirm the publication identity before repository creation.
- No recorded demo was found in the searched revision workspace. Do not describe the pending video slot as a supplied video.
- No repository or Pages site has been created by this task. No unverified public link has been inserted into the response letter.
