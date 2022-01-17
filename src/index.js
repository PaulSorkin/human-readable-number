module.exports = function toReadable(number) {
    let result = '';

    let ones = '';
    let tens = '';
    let teens = '';
    let hundreds = '';

    if (number === 0) {
        result = 'zero';
    } else {
        if (number > 0 && number < 10) {
            switch (number) {
                case 1:
                    ones = 'one';
                    break;
                case 2:
                    ones = 'two';
                    break;
                case 3:
                    ones = 'three';
                    break;
                case 4:
                    ones = 'four';
                    break;
                case 5:
                    ones = 'five';
                    break;
                case 6:
                    ones = 'six';
                    break;
                case 7:
                    ones = 'seven';
                    break;
                case 8:
                    ones = 'eight';
                    break;
                case 9:
                    ones = 'nine';
                    break;
            }
            result = ones;
        } else {
            if (number >= 10 && number < 20) {
                switch (number) {
                    case 10:
                        teens = 'ten';
                        break;
                    case 11:
                        teens = 'eleven';
                        break;
                    case 12:
                        teens = 'twelve';
                        break;
                    case 13:
                        teens = 'thirteen';
                        break;
                    case 14:
                        teens = 'fourteen';
                        break;
                    case 15:
                        teens = 'fifteen';
                        break;
                    case 16:
                        teens = 'sixteen';
                        break;
                    case 17:
                        teens = 'seventeen';
                        break;
                    case 18:
                        teens = 'eighteen';
                        break;
                    case 19:
                        teens = 'nineteen';
                        break;
                }
                result = teens;
            } else {
                if (number >= 20 && number < 100) {
                    let numstring = number.toString();
                    switch (numstring[0]) {
                        case '2':
                            tens = 'twenty';
                            break;
                        case '3':
                            tens = 'thirty';
                            break;
                        case '4':
                            tens = 'forty';
                            break;
                        case '5':
                            tens = 'fifty';
                            break;
                        case '6':
                            tens = 'sixty';
                            break;
                        case '7':
                            tens = 'seventy';
                            break;
                        case '8':
                            tens = 'eighty';
                            break;
                        case '9':
                            tens = 'ninety';
                            break;
                    }
                    switch (numstring[1]) {
                        case '0':
                            ones = '';
                            break;
                        case '1':
                            ones = ' one';
                            break;
                        case '2':
                            ones = ' two';
                            break;
                        case '3':
                            ones = ' three';
                            break;
                        case '4':
                            ones = ' four';
                            break;
                        case '5':
                            ones = ' five';
                            break;
                        case '6':
                            ones = ' six';
                            break;
                        case '7':
                            ones = ' seven';
                            break;
                        case '8':
                            ones = ' eight';
                            break;
                        case '9':
                            ones = ' nine';
                            break;
                    }
                    result = `${tens}${ones}`;
                } else {
                    let numstring = number.toString();
                    if (numstring[1] === '1') {
                        switch (numstring[2]) {
                            case '0':
                                teens = 'ten';
                                break;
                            case '1':
                                teens = 'eleven';
                                break;
                            case '2':
                                teens = 'twelve';
                                break;
                            case '3':
                                teens = 'thirteen';
                                break;
                            case '4':
                                teens = 'fourteen';
                                break;
                            case '5':
                                teens = 'fifteen';
                                break;
                            case '6':
                                teens = 'sixteen';
                                break;
                            case '7':
                                teens = 'seventeen';
                                break;
                            case '8':
                                teens = 'eighteen';
                                break;
                            case '9':
                                teens = 'nineteen';
                                break;
                        }
                        switch (numstring[0]) {
                            case '1':
                                hundreds = 'one hundred';
                                break;
                            case '2':
                                hundreds = 'two hundred';
                                break;
                            case '3':
                                hundreds = 'three hundred';
                                break;
                            case '4':
                                hundreds = 'four hundred';
                                break;
                            case '5':
                                hundreds = 'five hundred';
                                break;
                            case '6':
                                hundreds = 'six hundred';
                                break;
                            case '7':
                                hundreds = 'seven hundred';
                                break;
                            case '8':
                                hundreds = 'eight hundred';
                                break;
                            case '9':
                                hundreds = 'nine hundred';
                                break;
                        }
                        result = `${hundreds} ${teens}`;
                    } else {
                        switch (numstring[2]) {
                            case '1':
                                ones = ' one';
                                break;
                            case '2':
                                ones = ' two';
                                break;
                            case '3':
                                ones = ' three';
                                break;
                            case '4':
                                ones = ' four';
                                break;
                            case '5':
                                ones = ' five';
                                break;
                            case '6':
                                ones = ' six';
                                break;
                            case '7':
                                ones = ' seven';
                                break;
                            case '8':
                                ones = ' eight';
                                break;
                            case '9':
                                ones = ' nine';
                                break;
                        }
                        switch (numstring[1]) {
                            case '2':
                                tens = ' twenty';
                                break;
                            case '3':
                                tens = ' thirty';
                                break;
                            case '4':
                                tens = ' forty';
                                break;
                            case '5':
                                tens = ' fifty';
                                break;
                            case '6':
                                tens = ' sixty';
                                break;
                            case '7':
                                tens = ' seventy';
                                break;
                            case '8':
                                tens = ' eighty';
                                break;
                            case '9':
                                tens = ' ninety';
                                break;
                        }
                        switch (numstring[0]) {
                            case '1':
                                hundreds = 'one hundred';
                                break;
                            case '2':
                                hundreds = 'two hundred';
                                break;
                            case '3':
                                hundreds = 'three hundred';
                                break;
                            case '4':
                                hundreds = 'four hundred';
                                break;
                            case '5':
                                hundreds = 'five hundred';
                                break;
                            case '6':
                                hundreds = 'six hundred';
                                break;
                            case '7':
                                hundreds = 'seven hundred';
                                break;
                            case '8':
                                hundreds = 'eight hundred';
                                break;
                            case '9':
                                hundreds = 'nine hundred';
                                break;
                        }
                        result = `${hundreds}${tens}${ones}`;
                    }
                }
            }
        }
    }
    
    return(result);
}


