import Head from 'next/head'

import config from '../utils/config'

export default function ({ title, description, url, image }: { title: string, description: string, url?: string, image?: string }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={description || 'Travis Ueki Website'}
      />
      <meta
        property="og:title"
        content={title || 'Travis Ueki Website'}
      />
      <meta
        property="og:url"
        content={url ? `${config.liveUrl}/${url}` : config.liveUrl}
      />
      <meta
        property="og:image"
        content={
          image
            ? `${config.liveUrl}/static/${image}`
            : `${config.liveUrl}/static/${config.images.default}`
        }
      />
    </Head>
  )
}
