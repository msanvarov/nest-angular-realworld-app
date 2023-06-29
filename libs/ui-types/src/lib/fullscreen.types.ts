export interface FSDocument extends Document {
  mozFullScreenElement?: Element;
  mozCancelFullScreen?: () => void;
  msFullscreenElement?: Element;
  msExitFullscreen?: () => void;
  webkitFullscreenElement?: Element;
  webkitExitFullscreen?: () => void;
}

export interface FSDocumentElement extends HTMLElement {
  mozRequestFullScreen?: () => void;
  msRequestFullscreen?: () => void;
  webkitRequestFullscreen?: () => void;
}
