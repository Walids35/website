import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}
 
const withMDX = createMDX({
  options: { providerImportSource: "private-next-root-dir/src/mdx-components" },
})

export default withMDX(nextConfig)