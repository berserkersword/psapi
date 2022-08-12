export interface Responce {
    count: Number,
    next: string | null,
    previous: string | null,
    results: {
        name: string,
        age: Number,
        date_of_birth: string,
        eyes: string,
        hair: string,
        pornpics_link: string,
        freeones_link: string,
        images: {
            image_link: string,
            image: string,
            is_profile_pic: boolean,
        }[]
    }[]

}