import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter',
  pure: false
})
export class CarFilterPipe implements PipeTransform {

//  transform(carList, searchStr: string): any {
    transform(carList, searchStr: string): any {
    if(carList.length === 0 || searchStr === ''  ){
      return carList;
    }
    
   // return carList.filter((car) => car.name === searchStr);//виводить на повне співпадіння
   //return carList.filter((car) => car.name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);//виводить посимвольне співпадіння
   return carList.filter((car) => car.name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1 ||  car.descr.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);//виводить посимвольне співпадіння в декількох полях одночасно
  }

}
