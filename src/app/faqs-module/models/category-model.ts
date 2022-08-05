export interface CategoryModel {
  statusCode: number
  message: string
  data: Data
}


export interface Data {
  categories: Category[],
  nonCategorizedFaqs: NonCategorizedFaq[]
}

export interface Category {
  id: number
  name: string
  displayOrder: number
  faqs: Faq[]
}

export interface Faq {
  id: number
  question: string
  answer: string
  displayOrder: number
}

export interface NonCategorizedFaq {
  id: number
  question: string
  answer: string
  displayOrder: number
}
