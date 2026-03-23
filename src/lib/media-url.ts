/**
 * Browsers block mixed content (HTTP subresources on HTTPS pages). APIs may still return http:// asset URLs.
 * Localhost is left unchanged so local HTTP backends keep working in dev.
 */
export function upgradeHttpAssetUrl(url: string): string {
  if (!url || !url.startsWith('http://')) {
    return url;
  }
  try {
    const parsed = new URL(url);
    if (parsed.hostname === 'localhost' || parsed.hostname === '127.0.0.1') {
      return url;
    }
    parsed.protocol = 'https:';
    return parsed.toString();
  } catch {
    return url;
  }
}
