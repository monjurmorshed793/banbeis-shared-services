import { Pipe, PipeTransform } from '@angular/core';

const engToBanglaNumberMap: any = {
  1:"১",
  2:"২",
  3:"৩",
  4:"৪",
  5:"৫",
  6:"৬",
  7:"৭",
  8:"৮",
  9:"৯",
  0:"০"
}

@Pipe({
  name: 'banglaNumberTranslate'
})
export class BanglaNumberTranslatePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const numberStr = value.toString();
    const numberArray = Array.from(numberStr);
    let bengaliConverted: string[] = [];
    let banglaNameConvertedStr = '';
    for(let i=0; i<numberArray.length; i++){
      bengaliConverted[i] = engToBanglaNumberMap[numberArray[i]];
      banglaNameConvertedStr+=engToBanglaNumberMap[numberArray[i]];
    }
    return banglaNameConvertedStr;
  }

}
