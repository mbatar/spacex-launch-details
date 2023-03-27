export interface ISearchData {startDate: string, endDate: string}
export interface ILaunchData {
    isLoading: boolean
    error: string
    searchData: ISearchData
    docs: ILaunch[]
    totalDocs: number
    offset: number
    limit: number
    totalPages: number
    page: number
    pagingCounter: number
    hasPrevPage: boolean
    hasNextPage: boolean
    prevPage: any
    nextPage: any
}

export interface ILaunch {
    fairings: Fairings
    links: Links
    static_fire_date_utc: any
    static_fire_date_unix: any
    net: boolean
    window: any
    rocket: string
    success: boolean
    failures: any[]
    details: any
    crew: any[]
    ships: string[]
    capsules: any[]
    payloads: string[]
    launchpad: string
    flight_number: number
    name: string
    date_utc: string
    date_unix: number
    date_local: string
    date_precision: string
    upcoming: boolean
    cores: Core[]
    auto_update: boolean
    tbd: boolean
    launch_library_id: string
    id: string
}

export interface Fairings {
    reused: any
    recovery_attempt: any
    recovered: any
    ships: any[]
}

export interface Links {
    patch: Patch
    reddit: Reddit
    flickr: Flickr
    presskit: any
    webcast: string
    youtube_id: string
    article?: string | null
    wikipedia: string
}

export interface Patch {
    small: string
    large: string
}

export interface Reddit {
    campaign?: string | null
    launch?: string | null
    media: any
    recovery?: string | null
}

export interface Flickr {
    small: any[]
    original: string[]
}

export interface Core {
    core: string
    flight: number
    gridfins: boolean
    legs: boolean
    reused: boolean
    landing_attempt: boolean
    landing_success: boolean
    landing_type: string
    landpad: string
}


