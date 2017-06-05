export class ExchangeRateService {

    private ExchangeRateProperties:{ [index:string] : number } = {
        'USD/GBP': 0.701
    };

    fetchExchangeRate(baseCurrency: string, targetCurrency:string) {
        let objKey:string = baseCurrency+'/'+targetCurrency;
        return this.ExchangeRateProperties[objKey];
    }
}