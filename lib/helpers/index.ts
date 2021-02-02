export const isEmptyObject = (obj: object) => obj && Object.keys(obj).length === 0
export const authorFullName = ({ name, surname }: CourseAuthor) => `${name} ${surname}`
