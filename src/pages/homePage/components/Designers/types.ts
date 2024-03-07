export interface TopDesigner {
    uuid: string,
    firstName: string,
    lastName: string,
    projects: number,
    expertise: string,
    image: Image
}

export interface Image {
    src: string,
    alt: string

}