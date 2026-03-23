// See https://typicode.github.io/husky/how-to.html (CI server and Docker).
if (process.env.NODE_ENV === 'production' || process.env.CI === 'true') {
  process.exit(0)
}
try {
  const husky = (await import('husky')).default
  console.log(husky())
} catch {
  // e.g. pnpm install --prod without NODE_ENV=production
  process.exit(0)
}
