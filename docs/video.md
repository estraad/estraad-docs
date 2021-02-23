---
id: video
title: Video Formats and Specifications
---

This page describes formats and specifications for using Videos in the Estraad platform.

## Inside Rooms
#### Video
- MP4 File format
- Combined size of videos must not exceed 40mb. The end user devices will determine the maximum size, for example if end users are expected to use 4G and mobile devices.
- We support both flat and 360 Equirectangular video.
  - For flat video, 16:9 Aspect Ratio prefered
- We can adapt the audio volume as positional or stereo, as well as customize distance models for audio rolloff.

#### HLS Live Streaming
- We provide RTMP endpoints and an M3U8 playlist.
- Input for RTMP stream should be 1080p in as high quality as possible.
  - Using 4K will output to x265 using MediaLive, which is not yet supported in our HLS player implementation. The quality gains from using 4K is not that great as resolution in 360 space is perceived differently.
  - Using as high quality as possible allows us to enable Adaptive Bitrate Streaming, that adapts the video quality to the end users network performance.


## Outside rooms
For example on websites, landing pages etc.

#### Video On Demand
We use Vimeo as a video delivery partner, that supports just about any video format.

Please see the Vimeo documentation here:
https://vimeo.zendesk.com/hc/en-us/articles/229838988-Preparing-to-upload#h_01EDWFFX7XE84PSAJE5JW87B7R


#### HLS Live Streaming
We have a very reliable and performant implementation for live streaming. We can support any quality coming in from an RTMP stream with our VideoJs / HLSJs implementation.

