# SUFGaze

Project page: [https://momo-re.github.io/sufgaze/](https://momo-re.github.io/sufgaze/)

SUFGaze explores camera-free gaze estimation using a commercial bone-conduction headphone and a single microphone near the glasses bridge. CorrFormer estimates yaw and pitch from cross-correlation representations of mixed ultrasonic responses.

## Demonstration video — Coming soon

The end-to-end demonstration video is in preparation. It will show live audio acquisition and returned gaze predictions. The project page is available now; a playable demonstration video has not yet been published.

The system illustration is conceptual, not a recording of live predictions or proof of an isolated surface-wave mechanism.

## Streaming evaluation

Inference uses one NVIDIA RTX 4090 GPU, batch size 1, FP16 and CUDA Graph replay. In a separate verified live-microphone run, 22,807 complete predictions were received over 599.958 seconds:

| Metric | Value |
| --- | --- |
| Median end-to-end latency | 37.47 ms |
| 95th-percentile latency | 69.61 ms |
| 99th-percentile latency | 103.69 ms |
| Received-prediction throughput | 38.01 results/s |

Timing starts at the client callback containing the last required audio sample and ends at complete-result receipt and decoding. It includes transmission, preprocessing, inference and return, but excludes pre-callback ADC/driver and display delay. The eight-frame input covers approximately 210 ms of history, reported separately from per-result latency. These measurements are not measurements of a forthcoming video.

## Website files

The site uses static HTML, CSS and JavaScript, without analytics, external fonts or third-party media embeds. GitHub Pages serves the repository root.

Once the actual demonstration is ready, add `assets/demo.mp4` and synchronized English captions at `assets/demo.en.vtt`. The page reveals the video player after a valid video loads; otherwise it retains the Coming soon message. The project URL remains unchanged.

No author names, affiliations, personal links, participant data or server credentials should be added during anonymous review. The page's `noindex` setting is a crawler request, not access control or an anonymity guarantee.
