// { [key: string]: { [key: string]: { type: string, modifiers ?: string, required ?: boolean } } }

export interface EnumTypes {
  [key: string]: string[]
}

export interface FieldTypes {
  type: string
  modifiers?: string
  required?: boolean
}

export interface ModelFields {
  [key: string]: FieldTypes
}

export interface Models {
  [key: string]: ModelFields
}
