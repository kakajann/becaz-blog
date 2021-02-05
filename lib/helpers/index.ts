import { lang } from 'moment'

export const isEmptyObject = (obj: object) => obj && Object.keys(obj).length === 0

export const authorFullName = ({ name, surname }: CourseAuthor) => `${name} ${surname}`

export const saveLang = () => {
  const allowed = ['en', 'tr']
  const language = new URLSearchParams(window.location.search).get('lang') || ''
  if (allowed.includes(language))
    localStorage.setItem('language', language)
}

export const getLang = () => localStorage.getItem('language') ?? 'en'
