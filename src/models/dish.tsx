
type TypeDish = string
export interface Dish {
              id: number,
              name: string,
              des: string,
              mealTime: number,
              price: string,
              src: string,
              like: boolean,
              check: boolean,
              time: string,
              star: string,
              allergenic: string,
              group: TypeDish[],
}
