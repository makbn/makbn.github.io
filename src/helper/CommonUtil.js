export class CommonUtil {

    static numberToText(n) {
        if (n < 0)
            return "";
    
        if (n === 0)
            return "ZERO";
    
        const first = [
            "",
            "ONE",
            "TWO",
            "THREE",
            "FOUR",
            "FIVE",
            "SIX",
            "SEVEN",
            "EIGHT",
            "NINE",
            "TEN",
            "ELEVEN",
            "TWELVE",
            "THIRTEEN",
            "FOURTEEN",
            "FIFTEEN",
            "SIXTEEN",
            "SEVENTEEN",
            "EIGHTEEN",
            "NINETEEN",
        ];
    
        const tens = [
            "",
            "",
            "TWENTY",
            "THIRTY",
            "FORTY",
            "FIFTY",
            "SIXTY",
            "SEVENTY",
            "EIGHTY",
            "NINETY",
        ];
    
        if (n < 20) {
            return first[n];
        }
    
        if (n < 100) {
            return (tens[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + first[n % 10] : "")).trim();
        }
    
        if (n < 1000) {
            return (first[Math.floor(n / 100)] + " HUNDRED" + (n % 100 !== 0 ? " " + CommonUtil.numberToText(n % 100) : "")).trim();
        }
        
        if (n < 100000) {
            return (CommonUtil.numberToText(Math.floor(n / 1000)) + " THOUSAND" + (n % 1000 !== 0 ? " " + CommonUtil.numberToText(n % 1000) : "")).trim();
        }
        
        return "";
    }
    
}