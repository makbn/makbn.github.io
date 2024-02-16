
export class CommonUtil {

    static numberToText(number) {
        const digits = ['', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE'];
        const tens = ['', 'TEN', 'TWENTY', 'THIRTY', 'FORTY', 'FIFTY', 'SIXTY', 'SEVENTY', 'EIGHTY', 'NINETY'];
        const specialNumbers = ['', 'TEN', 'ELEVEN', 'TWELVE', 'THIRTEEN', 'FOURTEEN', 'FIFTEEN', 'SIXTEEN', 'SEVENTEEN', 'EIGHTEEN', 'NINETEEN'];
    
        if (number === 0) {
            return 'ZERO';
        }
    
        if (number < 10) {
            return digits[number];
        }
    
        if (number >= 10 && number < 20) {
            return specialNumbers[number];
        }
    
        if (number >= 20 && number < 100) {
            const ten = Math.floor(number / 10);
            const digit = number % 10;
            return tens[ten] + ' ' + digits[digit];
        }
    
        let text = '';
        let num = number;
    
        while (num > 0) {
            const hundred = Math.floor(num / 100);
            if (hundred > 0) {
                text = digits[hundred] + ' HUNDRED ' + text;
            }
    
            const ten = Math.floor((num % 100) / 10);
            if (ten > 1) {
                text += tens[ten] + ' ';
            }
    
            const digit = num % 10;
            if (num >= 20 || num % 100 < 10) {
                text += digits[digit];
            }
    
            num = Math.floor(num / 10);
        }
    
        return text.trim();
    }
    
}