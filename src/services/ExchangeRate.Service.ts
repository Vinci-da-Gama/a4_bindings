export class ExchangeRateService {

    allSupportedCurrency: string[] = ['EUR', 'USD', 'GBP'];

    private ExchangeRateProperties:{ [index:string] : number } = {
        'USD/GBP': 0.701,
        'USD/USD': 1.00,
        'USD/ERU': 0.96,
        'GBP/USD': 1.05,
        'GBP/EUR': 1.02,
        'GBP/GBP': 1.00,
        'EUR/GBP': 0.801,
        'EUR/USD': 1.001,
        'EUR/EUR': 1.00
    };

    fetchExchangeRate(baseCurrency: string, targetCurrency:string) {
        let objKey:string = baseCurrency+'/'+targetCurrency;
        return this.ExchangeRateProperties[objKey];
    }
}