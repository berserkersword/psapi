export interface Responce {
    count: Number,
    next: string | null,
    previous: string | null,
    results: {
        name: string,
        age: Number,
        date_of_birth: string,
        nationality:string,
        ethnicity:string,
        eyes: string,
        hair: string,
        height:string,
        height_ft:number,
        height_in:number,
        weight:string,
        boobs:string,
        ass:string,
        shoe_size:string,
        tats:string,
        piercings:string,
        cup_size:string,
        raw_measurement:string,
        bust:Number,
        waist:Number,
        hip:Number,
        
        
        pornpics_link: string,
        freeones_link: string,
        images: {
            image_link: string,
            image: string,
            is_profile_pic: boolean,
        }[]
    }[]

}
