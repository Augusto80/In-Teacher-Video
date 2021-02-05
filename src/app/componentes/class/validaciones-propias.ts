import { FormControl, ValidationErrors } from '@angular/forms';

export class ValidacionesPropias {

    static mayor0(control: FormControl): ValidationErrors {
        let rut = parseInt(control.value);
        if (rut > 0)
            return null;
        else
            return { mayor0: true }
    }
}