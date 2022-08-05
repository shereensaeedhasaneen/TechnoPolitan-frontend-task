export interface CategoryModel {
  statusCode: number
  message: string
  data: Data
}


export interface Data {
  categories: Category[]
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
