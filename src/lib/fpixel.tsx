export const FB_PIXEL_ID = 560653645927255
// export const FB_PIXEL_ID = 1245627119505595

declare global {
  interface Window {
    fbq:any;   
  }
}

export const pageview = () => {
  window.fbq('track', 'PageView1')
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name:any, options = {}) => {
  window.fbq('track', name, options)
}

