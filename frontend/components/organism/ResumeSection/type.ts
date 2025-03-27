export type ResumeDataItem = {
  year: string
  title: string
  subTitle: string
  text: string
}

export type ResumeData = {
  education: ResumeDataItem[]
  experience: ResumeDataItem[]
  certificates: ResumeDataItem[]
  projects: ResumeDataItem[]
}
