import { IResponse } from '../interfaces/response'

export const ok = (body?: any): IResponse => {
  return {
    status: 200,
    body
  }
}

export const created = (body?: any): IResponse => {
  return {
    status: 201,
    body
  }
}

export const serverError = (): IResponse => {
  return {
    status: 500,
    body: { message: 'Server Error' }
  }
}

export const badRequest = (message?: string): IResponse => {
  return {
    status: 400,
    body: { message }
  }
}

export const notFound = (message?: string): IResponse => {
  return {
    status: 404,
    body: { message }
  }
}

export const conflict = (message?: string): IResponse => {
  return {
    status: 409,
    body: { message }
  }
}
