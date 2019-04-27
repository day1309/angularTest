export class CountryModel {
    name: string;
    alpha2Code: string;
    numericCode: string;
    flag: string;
    cioc: string;
    capital: string;

    /**
     *
     */
    constructor(model: any) {
        this.name = model.name;
        this.alpha2Code = model.alpha2Code;
        this.numericCode = model.numericCode;
        this.flag = model.flag;
        this.cioc = model.cioc;
        this.capital = model.capital;
    }
}
