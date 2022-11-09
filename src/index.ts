import ts from 'typescript'
export interface UserUpdateModel {
  params: {
    id: string
  }
  body: {
    name: string
  }
}

function getArrayFromType<T>(): string[] {
  

  ts.factory.createArrayLiteralExpression()


  class GhostClass implements <keyof T> {}

  const ghost = new GhostClass()

  const result = Object.keys(ghost)

  return result
}


console.log(getArrayFromType<UserUpdateModel>())


