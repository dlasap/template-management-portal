export interface User {
    profileName: string,
    job: string,
    userId: string,
    category: string,
    companyId: string,
    branchLocation?: string | undefined,
    thumbnail: string,
}
export interface NewsFeed {
    author: string,
    audience: string,
    date: string,
    description: string,
    thumbnails: string,
    type: TVariant
}


export type TVariant = 'jkgj' | 'sdkgjakfgj'