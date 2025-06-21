using System;
class FinancialForecastVariableRates
{
    public static double CalculateFutureValue(double principal, double[] rates, int year)
    {
        if (year == rates.Length)
            return principal;
        return CalculateFutureValue(principal * (1 + rates[year]), rates, year + 1);
    }
    static void Main()
    {
        double principal = 5000.0;
        double[] growthRates = { 0.04, 0.03, 0.05, 0.06, 0.02 };
        double futureValue = CalculateFutureValue(principal, growthRates, 0);
        Console.WriteLine($"Future value after {growthRates.Length} years: {futureValue:F2}");
    }
}

