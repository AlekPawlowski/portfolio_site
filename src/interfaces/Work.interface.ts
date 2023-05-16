export default interface WorkElementInterface {
    id: number,
    name: string,
    occupaction: string,
    from: string,
    to: string,
    responsibilities: string[],
    techStack?: string[],
}