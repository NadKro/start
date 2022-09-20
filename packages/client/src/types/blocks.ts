export type SocialMediaLink = {
  title: string
  icon: string
  link: {
    url: string
  }
}

export type ImageAsset = {
  alt: string
  title: string
  filename: string
}

export type Header = {
  avatar: ImageAsset
  teaser: string
  social: SocialMediaLink[]
}

