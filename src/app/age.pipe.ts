import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'age',
  pure: false
})
export class AgePipe implements PipeTransform {

  transform(input: Member[], desiredAge) {
    var output: Member[]=[];
    if(desiredAge === "under12") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].age <= 12) {
          output.push(input[i]);
        }
      }
      return output;
    }else if (desiredAge === "13to20") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].age > 12 && input[i].age <= 20) {
          output.push(input[i]);
        }
      }
      return output;
  }else if (desiredAge === "over20") {
    for(var i = 0; i < input.length; i++) {
      if(input[i].age > 20) {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
    }
  }
}
