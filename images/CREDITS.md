# Image and video credits

Stock photographs and video used until The Smashery has its own food photography and
footage. Every photo here is **CC0 1.0** (public domain dedication). The hero video is
under the **Pexels License**: free for commercial use, editing allowed, no attribution
required. Sources are listed anyway so each file can be traced and replaced.

`og-share-1200x630.jpg` (the link preview for WhatsApp and social shares) is the hero
video's first frame under the same scrim, with the wordmark set in Archivo.

These are not photographs or footage of The Smashery's food. The site says "Video for
illustration" and "Pictures are for illustration" wherever they appear.

| File | Original | Author | Source | Licence | Changes |
|---|---|---|---|---|---|
| `video/hero-smash-*` (portrait 600, 1280, 1920; AV1, HEVC, H.264) and `images/hero-smash-poster-*` (2000, 1200, portrait 900 and 600; WebP and AVIF) | "Close-up of burgers cooking on a griddle" | Mihman Duğanlı | [Pexels](https://www.pexels.com/video/close-up-of-burgers-cooking-on-a-griddle-37296040/) | [Pexels License](https://www.pexels.com/license/) | First second cross-faded into the last for a seamless 7.9s loop, light denoise, resized, portrait crop with a slow pan for phones, re-encoded, audio and all metadata removed. Posters are the loop's first frame. Built by `tools/video.mjs` |
| `burger-double-*` (900, 660, 480; WebP and AVIF) | Untitled double cheeseburger on white | rawpixel public domain collection | [rawpixel](https://www.rawpixel.com/image/5963498/free-public-domain-cc0-photo) | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) | Background removed, cropped, resized |
| `burger-cheese-*` (900, 660, 480; WebP and AVIF) | "Beef Burger Isolated On White Background" | personalgraphic.official | [Flickr](https://www.flickr.com/photos/198895458@N04/53097399019) | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) | Background removed, cropped, resized |
| `burger-classic-*` (900, 660, 480; WebP and AVIF) | Untitled burger with lettuce, tomato and onion on white | rawpixel public domain collection | [rawpixel](https://www.rawpixel.com/image/5963807/free-public-domain-cc0-photo) | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) | Background removed, cropped, resized |

The photos were found through [Openverse](https://openverse.org) with the licence filter
set to CC0. Photos of branded chain-restaurant food were skipped even when CC0, so no other
restaurant's product stands in for The Smashery's.

The video was chosen from Pexels, Pixabay, Mixkit and Coverr. None of them had a clip of a
ball of meat being pressed flat; this one, a spatula pressing and flipping thin smashed
patties on a street-food flat-top, was the closest real footage. The best replacement is
the restaurant's own: 8–10 seconds of a patty being smashed on the Indirapuram griddle,
shot steady and close. Run `npm run video -- path/to/clip.mp4` in `tools/` to rebuild
every encode and poster from it; first set the phone crop's pan (`PAN` in `video.mjs`) to
where the action is in the new clip, and copy the profile and level it prints into the
codecs strings in `index.html` (`CLIPS`).

The page's smooth wheel scrolling uses [Lenis](https://github.com/darkroomengineering/lenis)
1.3.26 (MIT), vendored as `js/lenis.min.js`: the published build with a licence header
added and its source-map comment removed.
