import type { Skill } from "../types";

export const fetchSkills = async (): Promise<Skill[]> => {
  const res = await fetch(
    'https://raw.githubusercontent.com/nunogois/nunogois/main/README.md'
  )

  const resText: string = await res.text()

  return resText
    .substring(resText.indexOf('![JavaScript]'))
    .split('###')[0]
    .trim()
    .split('\n')
    .map(skill => ({
      name: skill.match(/\[([^)]+)\]/)?.[1] || '',
      image: skill.match(/\(([^)]+)\)/)?.[1] || ''
    }))
};